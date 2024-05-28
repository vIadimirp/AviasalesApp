import "./list.css"

import Card from "./card/card";
import { useState } from "react";
import { useEffect } from "react";
import { ticketsURL } from "../../../../services/ticketsApi";
import { useSelector } from "react-redux";
import { setTickets } from "../../../../redux/slices/tickets/ticketsSlice";
import { useDispatch } from "react-redux";


export default function List() {

    let ticketsState = useSelector(state => state.tickets.tickets);
    const dispatch = useDispatch();

    let [renderCount, setRenderCount] = useState(5);

    let searchIdState = useSelector(state => state.searchId.searchId);
    let filtersState = useSelector(state => state.filters);
    let checkboxesState = useSelector(state => state.checkboxes);

    useEffect(() => {
        if (searchIdState) {
            // console.log(searchIdState);
            fetch(ticketsURL(searchIdState)).then(response => response.json()).then(data => {
                dispatch(setTickets(data.tickets));
                // console.log(data);
            });
        }
    }, [searchIdState]);


    let filteredItems = [...ticketsState];
    if (filtersState.current == "cheapest") {
        // console.log(filteredItems);
        filteredItems.sort((a, b) => a.price - b.price);
    } else if (filtersState.current == "fastest") {
        filteredItems.sort((a, b) => {
            // let n1 = a.segments.reduce((acc, item) => acc + item.duration, 0);
            // let n2 = b.segments.reduce((acc, item) => acc + item.duration, 0);

            // console.log(n1, n2);
            // return n1 - n2;

            // Faster:
            return a.segments[0].duration + a.segments[1].duration - b.segments[0].duration - b.segments[1].duration;
        });
    } else if (filtersState.current == "optimal") {
        filteredItems.sort((a, b) => {
            let k1 = a.price / a.segments.reduce((acc, item) => acc + item.duration, 0);
            let k2 = b.price / b.segments.reduce((acc, item) => acc + item.duration, 0);

            // Faster:
            // let k1 = a.price / (a.segments[0].duration + a.segments[1].duration);
            // let k2 = a.price / (b.segments[0].duration + b.segments[1].duration);

            return k1 - k2;
        });
    }


    let doFilter = checkboxesState.noTransfers || checkboxesState.oneTransfer || checkboxesState.twoTransfers || checkboxesState.threeTransfers;

    if (doFilter) {
        let filter = [];
        if (checkboxesState.noTransfers) filter.push(0);
        if (checkboxesState.oneTransfer) filter.push(1);
        if (checkboxesState.twoTransfers) filter.push(2);
        if (checkboxesState.threeTransfers) filter.push(3);

        filteredItems = filteredItems.filter(item => filter.includes(item.segments[0].stops.length) || filter.includes(item.segments[1].stops.length));
    }


    console.log(filteredItems);


    // if (!searchIdState) return "Загрузка";
    return (
        <>
            <div className="list">
                {filteredItems.map((item, index) => <Card key={index} obj={item} />).slice(0, renderCount)}
            </div>
            {(renderCount <= ticketsState.length) ? <button className="moreButton" onClick={() => setRenderCount(c => c + 5)}>Показать ещё 5 билетов!</button> : null}
        </>
    );

}

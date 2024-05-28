import "./filters.css"

import { useDispatch, useSelector } from "react-redux";
import { setCheapest, setFastest, setOptimal } from "../../../../redux/slices/filters/filtersSlice";


export default function Filters() {

    let filtersState = useSelector(state => state.filters);
    // console.log(filtersState);
    const dispatch = useDispatch();


    return (
        <div className="filters">
            <button onClick={() => dispatch(setCheapest())} className={`filter${filtersState.current == "cheapest" ? " active" : ""}`}>Самый дешёвый</button>
            <button onClick={() => dispatch(setFastest())} className={`filter${filtersState.current == "fastest" ? " active" : ""}`}>Самый быстрый</button>
            <button onClick={() => dispatch(setOptimal())} className={`filter${filtersState.current == "optimal" ? " active" : ""}`}>Оптимальный</button>
        </div>
    );

}

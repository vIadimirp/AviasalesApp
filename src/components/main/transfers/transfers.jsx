import "./transfers.css"

import Item from "./item/item";
import { useDispatch, useSelector } from "react-redux";
import { updateAll, updateNoTransfers, updateOneTransfer, updateTwoTransfers, updateThreeTransfers } from "../../../redux/slices/checkboxes/checkboxesSlice";


export default function Transfers() {

    let checkboxesState = useSelector(state => state.checkboxes);

    const dispatch = useDispatch();


    return (
        <div className="transfers">
            <div className="header">Количество пересадок</div>
            <div className="list">
                <Item value={checkboxesState.all} handler={() => dispatch(updateAll())} name="Все" />
                <Item value={checkboxesState.noTransfers} handler={() => dispatch(updateNoTransfers())} name="Без пересадок" />
                <Item value={checkboxesState.oneTransfer} handler={() => dispatch(updateOneTransfer())} name="1 пересадка" />
                <Item value={checkboxesState.twoTransfers} handler={() => dispatch(updateTwoTransfers())} name="2 пересадки" />
                <Item value={checkboxesState.threeTransfers} handler={() => dispatch(updateThreeTransfers())} name="3 пересадки" />
            </div>
        </div>
    );

}

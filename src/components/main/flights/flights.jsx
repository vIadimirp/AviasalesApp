import "./flights.css"

import Filters from "./filters/filters";
import List from "./list/list";


export default function Flights() {

    return (
        <div className="flights">
            <Filters />
            <List />
        </div>
    );

}

import "./main.css"

import Transfers from "./transfers/transfers";
import Flights from "./flights/flights";


export default function Main() {

    return (
        <div className="main">
            <Transfers />
            <Flights />
        </div>
    );

}

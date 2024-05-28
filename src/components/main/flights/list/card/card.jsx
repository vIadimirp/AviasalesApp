import "./card.css"

import s7_logo from "../../../../../assets/s7_logo.svg";


export default function Card({obj}) {

    // console.log(obj);

    let getPriceFormatted = price => {
        price = String(price);

        let priceStart = (price.length % 3 == 0) ? "" : price.slice(0, price.length % 3);
        let priceEnd = price.slice(price.length % 3).match(/.{1,3}/g).join(" ");

        return priceStart + " " + priceEnd;
    }


    // MOW - HKT 10h
    // HKT - MOW 12h

    // MOW - HKT 20h
    // HKT - MOW 17h

    // MOW - HKT 9h
    // HKT - MOW 5h


    if (!obj) return "Загрузка";
    return (
        <div className="card">
            <div className="header">
                <div className="price">{getPriceFormatted(obj.price)} Р</div>
                <div className="logo">
                    <img src={s7_logo} alt="" />
                </div>
            </div>
            <div className="info">
                {obj.segments.map((segment, index) => (
                    <div className="row" key={index}>
                        <div className="item">
                            <div className="title">{segment.origin} - {segment.destination}</div>
                            <div className="content">{`${new Date(segment.date).getHours()}:${new Date(segment.date).getMinutes()} - 
                                                       ${new Date(Math.floor(Number(new Date(segment.date)) / 60) + segment.duration).getHours()}:${new Date(Math.floor(Number(new Date(segment.date)) / 60) + segment.duration).getMinutes()}`}</div>
                        </div>
                        <div className="item">
                            <div className="title">В пути</div>
                            <div className="content">{Math.floor(segment.duration / 60)}ч {Math.floor(segment.duration % 60)}м</div>
                        </div>
                        <div className="item">
                            <div className="title">{(segment.stops.length > 0) ? `${segment.stops.length} 
                                ${(segment.stops.length == 1) ? "пересадка" : (segment.stops.length < 5) ? 
                                "пересадки" : "пересадок"}` : "Без пересадок"}</div>
                            <div className="content">{segment.stops.join(", ")}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}

// a = {
//     "price": 64580,
//     "carrier": "FV",
//     "segments": [
//         {
//             "origin": "MOW",
//             "destination": "HKT",
//             "date": "2024-02-12T19:52:35.150Z",
//             "duration": 994,
//             "stops": [
//                 "HKG"
//             ]
//         },
//         {
//             "origin": "HKT",
//             "destination": "MOW",
//             "date": "2024-02-13T03:32:21.229Z",
//             "duration": 906,
//             "stops": [
//                 "DOH",
//                 "HKG"
//             ]
//         }
//     ]
// }

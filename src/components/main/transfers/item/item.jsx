import style from "./item.module.css";


export default function Item({value, handler, name}) {

    return (
        <label className={style.item}>
            <input type="checkbox" checked={value} onChange={handler} />
            <span className={style.checkbox}></span>
            <span className={style.name}>{name}</span>
        </label>
    );

}

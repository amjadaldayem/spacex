import styles from './list.module.css';
import {useAppSelector} from "../../hooks/redux";
import Item from "../item/item";

export default function List(){
    const dragons = useAppSelector(({dragonSlice}) => dragonSlice.dragons);
    return (
        <>
            <div className={styles.container}>
                {dragons.map((dragon,key) => (
                    <Item key={key} dragon={dragon}/>
                ))}
            </div>
        </>
    )
}
import styles from './header.module.css'
import {FaWikipediaW} from "react-icons/fa";
import {useAppSelector} from "../../hooks/redux";

export default function Header(){
    const name = useAppSelector(state => state.dragon.name);
    const wikiLink = useAppSelector(state => state.dragon.wikipedia)
    return (
        <>
            <div className={styles.container}>
                <h3>SpaceX {name}</h3>
                <a
                    href={wikiLink}
                    children={<FaWikipediaW/>}
                    className={styles.wiki}
                />
            </div>
        </>
    )
}
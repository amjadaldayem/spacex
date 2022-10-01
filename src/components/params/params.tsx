import styles from './params.module.css';
import {BsFillCalendarFill} from "react-icons/bs";
import {useAppSelector} from "../../hooks/redux";
import {SiZeromq} from "react-icons/si";
import {FaWeightHanging} from "react-icons/fa";

export default function Params(){
    const params = useAppSelector(state => {
        return [
            {...state.dragon.first_flight,
                icon: <BsFillCalendarFill style={{minWidth:'40px', minHeight:'40px', fill: 'white'}}/>
            },
            {...state.dragon.diameter,
                icon:<SiZeromq style={{minWidth:'40px', minHeight:'40px', fill: 'white'}}/>
            },
            {...state.dragon.dry_mass,
                icon: <FaWeightHanging style={{minWidth:'40px', minHeight:'40px', fill: 'white'}}/>
            }
        ];
    })
    return (
        <>
            <div className={styles.container}>
                {params.map((param,key) => (
                    <div
                        className={styles.item}
                        key={key}
                    >
                        {param.icon}
                        <h4
                            className={styles.title}
                            children={param.title}
                        />
                        <p
                            className={styles.content}
                            children={param.content}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}
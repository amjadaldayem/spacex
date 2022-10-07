import styles from './user-header.module.css'
import {useAppSelector} from "../../hooks/redux";
import {BiUserCircle} from "react-icons/bi";
import {useDispatch} from "react-redux";
import {authSlice} from "../../store/reducers/authSlice";
import {Outlet, useNavigate} from "react-router-dom";
import React from "react";

export default function UserHeader(){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const entered = useAppSelector(({authSlice}) => authSlice.entered);
    const email = useAppSelector(({authSlice}) => authSlice.email);
    return (
        <>
            {entered && (
                <div className={styles.container}>
                    <div className={styles.user}>
                        <BiUserCircle
                            style={{
                                fill:'white',
                                minWidth: '20px',
                                minHeight: '20px',
                            }}
                        />
                        {email}
                    </div>
                    <button
                        className={styles.exit}
                        children={'Exit'}
                        onClick={() => {
                            dispatch(authSlice.actions.logOut());
                            navigate('auth');
                        }}
                    />
                </div>
            )}
            <Outlet/>
        </>
    )
}
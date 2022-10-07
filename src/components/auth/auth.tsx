import styles from './auth.module.css';
import Status from "../status/status";
import React, {useState} from "react";
import {useAppSelector} from "../../hooks/redux";
import {useDispatch} from "react-redux";
import {authSlice} from "../../store/reducers/authSlice";
import {AiOutlineForm} from "react-icons/ai";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {dragonSlice} from "../../store/reducers/dragonSlice";
import {useNavigate} from "react-router-dom";

export default function Auth(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = getAuth();

    const [state,setState] = useState<{email:string,password:string}>({email:'',password:''})

    const showApp = useAppSelector(({dragonSlice}) => !dragonSlice.isLoading && !dragonSlice.error);
    const status = useAppSelector(({authSlice}) => authSlice.status);

    function showNoValidError(message:string) {
        dispatch(dragonSlice.actions.failed(message));
        dispatch(dragonSlice.actions.stopLoading());
        setTimeout(() => dispatch(dragonSlice.actions.failed(null)),1500)
    }

    function onCreateUser(){
        createUserWithEmailAndPassword(auth, state.email, state.password)
            .then(({user}) => {
                dispatch(authSlice.actions.authUserSuccess(user.email));
                dispatch(dragonSlice.actions.stopLoading());
                navigate('/home');
                dispatch(authSlice.actions.toggleFormStatus())
            })
            .catch(({message}) => showNoValidError(message));
    }

    function onLogInUser(){
        signInWithEmailAndPassword(auth, state.email, state.password)
            .then(({user}) => {
                dispatch(authSlice.actions.authUserSuccess(user.email));
                dispatch(dragonSlice.actions.stopLoading());
                navigate('/home');
            })
            .catch(({message}) => showNoValidError(message));
    }

    function onSubmit(){
        dispatch(dragonSlice.actions.startLoading());
        status.login ? onLogInUser() : onCreateUser();
    }

    return (
        <>
            <div className={styles.container}>
                <Status/>
                {showApp && (<form
                    onSubmit={event => event.preventDefault()}
                    className={styles.form}
                >
                    <AiOutlineForm
                        style={{
                            fill: 'white',
                            minHeight: '40px',
                            minWidth: '40px',
                        }}
                    />
                    <input
                        type="text"
                        placeholder={'email'}
                        value={state.email}
                        onChange={({target}) => setState({...state, email: target.value})}
                        className={styles.input}
                    />
                    <input
                        type="password"
                        placeholder={'password'}
                        onChange={({target}) => setState({...state, password: target.value})}
                        value={state.password}
                        className={styles.input}
                    />
                    <button
                        children={status.login ? 'Log in' : 'Sign up'}
                        className={styles.submit}
                        onClick={() => {
                            const valid = !!state.email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
                            !valid ? showNoValidError('Your email is not valid') : onSubmit();
                        }}
                    />
                    <div className={styles.footer}>
                        <span
                            className={status.login ? `${styles.message} ${styles.hidden}` : styles.message}
                            children={'Already have an account?'}
                        />
                        <button
                            onClick={() => dispatch(authSlice.actions.toggleFormStatus())}
                            className={styles.toggle}
                            children={status.login ? 'Sign up' : 'Log in'}
                        />
                    </div>
                </form>)}
            </div>
        </>
    )
}
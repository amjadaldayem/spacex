import React, {useEffect} from 'react';
import './App.css';
import Dragon from "./components/dragon/dragon";
import styles from './App.module.css'
import {useDispatch} from "react-redux";
import {useAppSelector} from "./hooks/redux";
import API from "./utils/API";
import {dragonSlice} from "./store/reducers/dragonSlice";
import ErrorMessage from "./components/error-message/error-message";

function App() {
    const dispatch = useDispatch();

    const isLoading = useAppSelector(state => state.isLoading);
    const error = useAppSelector(state => state.error);

    useEffect(() => {
        API.get('')
            .then(response => dispatch(dragonSlice.actions.getSuccess({
                images: response.data.flickr_images,
            })))
            .catch(error => dispatch(dragonSlice.actions.failed(error.message)))
    },[])

    return (
      <>
          <div className={styles.container}>
              {isLoading && <span children={'is loading'} style={{color: 'white'}}/>}
              {error && <ErrorMessage/>}
              {!isLoading && <Dragon/>}
          </div>
      </>
    );
}

export default App;

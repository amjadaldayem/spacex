import React, {useEffect, useState} from 'react';
import './App.css';
import Dragon from "./components/dragon/dragon";
import styles from './App.module.css'
import {useDispatch} from "react-redux";
import {useAppSelector} from "./hooks/redux";
import API from "./utils/API";
import {dragonSlice} from "./store/reducers/dragonSlice";
import ErrorMessage from "./components/error-message/error-message";
import LoaderSpinner from "./components/loader-spinner/loader-spinner";

function App() {
    const dispatch = useDispatch();

    const savedInStorage = useAppSelector(state => state.savedInStorage);
    const dragon = useAppSelector(state => state.dragon);
    const isLoading = useAppSelector(state => state.isLoading);
    const error = useAppSelector(state => state.error);

    useEffect(() => {
        !savedInStorage && dispatch(dragonSlice.actions.startLoading());
        savedInStorage && dispatch(dragonSlice.actions.setDataFromLocalStorage());
        API.get('')
            .then(({data}) => {
                dispatch(dragonSlice.actions.getSuccess({
                    ...dragon,
                    name: data.name,
                    images: data.flickr_images,
                    description: data.description,
                    wikipedia: data.wikipedia,
                    first_flight: {
                        title: 'First flight',
                        content: data.first_flight.replaceAll('-', '.')
                    },
                    diameter: {
                        title: 'Diameter',
                        content: data.diameter.meters + ' m',
                    },
                    dry_mass: {
                        title: 'Dry mass',
                        content: data.dry_mass_kg + ' kg',
                    }
                }));
                dispatch(dragonSlice.actions.stopLoading());
            })
            .catch(({message}) => !savedInStorage && dispatch(dragonSlice.actions.failed(message)))
    },[])

    return (
      <>
          <div className={styles.container}>
              {isLoading && <LoaderSpinner/>}
              {error && <ErrorMessage/>}
              {!error && !isLoading && <Dragon/>}
          </div>
      </>
    );
}

export default App;

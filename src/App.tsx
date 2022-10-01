import React, {useEffect} from 'react';
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

    const dragon = useAppSelector(state => state.dragon);
    const isLoading = useAppSelector(state => state.isLoading);
    const error = useAppSelector(state => state.error);

    useEffect(() => {
        API.get('').then(r => console.log(r.data))
        API.get('')
            .then(response => dispatch(dragonSlice.actions.getSuccess({
                ...dragon,
                name: response.data.name,
                images: response.data.flickr_images,
                description: response.data.description,
                wikipedia: response.data.wikipedia,
                first_flight: {
                    title: 'First flight',
                    content: response.data.first_flight.replaceAll('-','.')
                },
                diameter: {
                    title: 'Diameter',
                    content: response.data.diameter.meters + ' m',
                },
                dry_mass:{
                    title: 'Dry mass',
                    content: response.data.dry_mass_kg + ' kg',
                }
            })))
            .catch(error => dispatch(dragonSlice.actions.failed(error.message)))
    },[])

    return (
      <>
          <div className={styles.container}>
              {isLoading && <LoaderSpinner/>}
              {error && <ErrorMessage/>}
              {!isLoading && <Dragon/>}
          </div>
      </>
    );
}

export default App;

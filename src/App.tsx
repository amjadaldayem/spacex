import React, {useEffect} from 'react';
import './App.css';
import styles from './App.module.css'
import {useDispatch} from "react-redux";
import {useAppSelector} from "./hooks/redux";
import {Route, Routes, useNavigate} from "react-router-dom";
import Auth from "./components/auth/auth";
import Homepage from "./components/homepage/homepage";
import {authSlice} from "./store/reducers/authSlice";
import ItemFull from "./components/item-full/item-full";
import UserHeader from "./components/user-header/user-header";
import {dragonSlice} from "./store/reducers/dragonSlice";
import API from "./utils/API";

function App() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userEntered = useAppSelector(({authSlice}) => authSlice.entered);
    const savedInStorage = useAppSelector(({dragonSlice}) => dragonSlice.savedInStorage);

    useEffect(() => {
        dispatch(authSlice.actions.logInValidate());
    },[])

    useEffect(() => {
        if (userEntered !== null){
            userEntered ? navigate('home') : navigate('auth');
            !savedInStorage && dispatch(dragonSlice.actions.startLoading());
            savedInStorage && dispatch(dragonSlice.actions.setDataFromLocalStorage());
            API.get('')
                .then(({data}) => {
                    dispatch(dragonSlice.actions.getSuccess(data.map((dragon:any) => {
                        return {
                            id: dragon.id,
                            name: dragon.name,
                            images: dragon.flickr_images,
                            description: dragon.description,
                            wikipedia: dragon.wikipedia,
                            first_flight: {
                                title: 'First flight',
                                content: dragon.first_flight.replaceAll('-', '.')
                            },
                            diameter: {
                                title: 'Diameter',
                                content: dragon.diameter.meters + ' m',
                            },
                            dry_mass: {
                                title: 'Dry mass',
                                content: dragon.dry_mass_kg + ' kg',
                            }
                        }
                    })));
                    dispatch(dragonSlice.actions.stopLoading());
                })
                .catch(({message}) => !savedInStorage && dispatch(dragonSlice.actions.failed(message)))
        }
    },[userEntered])

    return (
      <>
          <div className={styles.container}>
              <Routes>
                  <Route path={'/'} element={<UserHeader/>}>
                      <Route path={'auth'} element={<Auth/>}/>
                      <Route path={'home'} element={<Homepage/>}/>
                      <Route path={':id'} element={<ItemFull/>}/>
                  </Route>
              </Routes>
          </div>
      </>
    );
}

export default App;

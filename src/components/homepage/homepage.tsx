import {useAppSelector} from "../../hooks/redux";
import UserHeader from "../user-header/user-header";
import {useEffect} from "react";
import {dragonSlice} from "../../store/reducers/dragonSlice";
import API from "../../utils/API";
import {useDispatch} from "react-redux";
import List from "../list/list";

export default function Homepage(){
    const dispatch = useDispatch();

    const showApp = useAppSelector(({dragonSlice}) => !dragonSlice.isLoading && !dragonSlice.error);
    // const savedInStorage = useAppSelector(({dragonSlice}) => dragonSlice.savedInStorage);
    //
    // useEffect(() => {
    //     !savedInStorage && dispatch(dragonSlice.actions.startLoading());
    //     savedInStorage && dispatch(dragonSlice.actions.setDataFromLocalStorage());
    //     API.get('')
    //         .then(({data}) => {
    //             dispatch(dragonSlice.actions.getSuccess(data.map((dragon:any) => {
    //                 return {
    //                     id: dragon.id,
    //                     name: dragon.name,
    //                     images: dragon.flickr_images,
    //                     description: dragon.description,
    //                     wikipedia: dragon.wikipedia,
    //                     first_flight: {
    //                         title: 'First flight',
    //                         content: dragon.first_flight.replaceAll('-', '.')
    //                     },
    //                     diameter: {
    //                         title: 'Diameter',
    //                         content: dragon.diameter.meters + ' m',
    //                     },
    //                     dry_mass: {
    //                         title: 'Dry mass',
    //                         content: dragon.dry_mass_kg + ' kg',
    //                     }
    //                 }
    //             })));
    //             dispatch(dragonSlice.actions.stopLoading());
    //         })
    //         .catch(({message}) => !savedInStorage && dispatch(dragonSlice.actions.failed(message)))
    // },[])

    return (
        <>
            {showApp && (
                <>
                    <List/>
                </>
            )}
        </>
    )
}
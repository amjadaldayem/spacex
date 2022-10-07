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
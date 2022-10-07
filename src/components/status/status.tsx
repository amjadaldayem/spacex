import {useAppSelector} from "../../hooks/redux";
import LoaderSpinner from "../loader-spinner/loader-spinner";
import ErrorMessage from "../error-message/error-message";

export default function Status(){
    const isLoading = useAppSelector(({dragonSlice}) => dragonSlice.isLoading);
    const error = useAppSelector(({dragonSlice}) => dragonSlice.error);
    return (
        <>
            {isLoading && <LoaderSpinner/>}
            {error && <ErrorMessage/>}
        </>
    )
}
import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import picture from './bll/Spinner-1s-200px.svg'
import {loadingAC} from "./bll/loadingReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";

function HW10() {

    const dispatch = useDispatch()
    const isLoading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        },2000)
        setTimeout(() => console.log('loading...'), 2000)
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {isLoading
                ? (
                    <div><img src={picture} alt="alt"/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10

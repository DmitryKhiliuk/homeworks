import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, initStateType} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some'];


function HW12() {
    const theme = useSelector<AppStoreType, initStateType>(state => state.theme); // useSelector

    // useDispatch, onChangeCallback

    const dispatch = useDispatch()

    const onChangeCallback = (value:string) => {

        dispatch(changeThemeC(value))
    }

    return (
        <div className={s[theme.value]}>
            <hr/>
            <span className={s[theme.value + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <SuperRadio name={'radio-3'}
                        options={themes}
                        value={theme.value}
                        onChangeOption={onChangeCallback}/>

            <hr/>
        </div>
    );
}

export default HW12;

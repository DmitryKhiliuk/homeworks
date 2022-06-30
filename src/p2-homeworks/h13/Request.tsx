import React, {ChangeEvent, useState} from 'react';
import {requestsAPI} from "./RequestsAPI";




export const Request = () => {

    const [success, setSuccess] = useState(false)
    const [res, setRes] = useState({})


    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setSuccess(e.currentTarget.checked)
    }



    const onClickHandler = () => {
        requestsAPI.postRequest(success)
            .then((res) => {
                console.log(res)
                setRes(res)
            })
            .catch ((error) => {
                console.log({...error});
                console.log(error.response ? error.response.data.errorText : error.message);
                setRes(error.response.data.errorText)
            })

    }


    return (
        <div>
            <button onClick={onClickHandler}>Button</button>
            <input type="checkbox" checked={success} onChange={onChangeHandler}/>
            <div>
                {res && JSON.stringify(res, null, 2)}
            </div>

        </div>
    );
};




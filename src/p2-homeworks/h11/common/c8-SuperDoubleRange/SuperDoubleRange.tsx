import React from 'react'
import {Slider} from "@mui/material";

type SuperDoubleRangeType = {
    callBack: (value:number[]) => void
    value: number[]


}

const SuperDoubleRange = (props:SuperDoubleRangeType) => {


    const handleChange = (event: Event, newValue: number | number[]) => {
        props.callBack(newValue as number[])
    }

    return <>
        <Slider
            getAriaLabel={() => 'range'}
            value={props.value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            style={{width: '200px'}}
        />

    </>
}

export default SuperDoubleRange

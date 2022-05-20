import React, {ChangeEvent} from 'react'
import {Slider} from "@mui/material";

type SuperDoubleRangeType = {
    callBack: (value:[number,number]) => void
    value: number[]


}



const SuperDoubleRange = (props:SuperDoubleRangeType) => {

    const [value, setValue] = React.useState<number[]>([20, 37]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[])
    }

    return <>
        <Slider
            getAriaLabel={() => 'range'}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            style={{width: '200px'}}
            //getAriaValueText={}
        />

    </>
}

export default SuperDoubleRange

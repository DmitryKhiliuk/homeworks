import React from 'react'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        //min, max, step, disable, ...restProps
    }
) => {



    return (
        <>

        </>
    )
}

export default SuperDoubleRange

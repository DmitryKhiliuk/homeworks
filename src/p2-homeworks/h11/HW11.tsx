import React from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    //const [value2, setValue2] = useState(100)
    const [value, setValue] = React.useState<number[]>([0, 100]);
    //const [value1, setValue1] = useState(0)



   /* const onChangeHandler = (value1: number) => {
        setValue1(value1)

    }*/

    const doubleHandler = (value:number[]) => {
        setValue(value)




        }
    
    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value[0]}</span>
                <SuperRange
                    onChangeRange={doubleHandler}
                    value={value[0]}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span>{value[0]}</span>
                <SuperDoubleRange callBack={doubleHandler}
                                  value={value}


                    // сделать так чтоб value1 и value2 изменялось

                />
                <span>{value[1]}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11

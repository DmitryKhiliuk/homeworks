import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (name: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const ButtonAll = (name: FilterType) => {
        props.setFilter(name)
    };
    const ButtonHigh = (name: FilterType) => {
        props.setFilter(name)
    };
    const ButtonMiddle = (name: FilterType) => {
        props.setFilter(name)
    };
    const ButtonLow = (name: FilterType) => {
        props.setFilter(name)
    };


    const setAll = () => {
        ButtonAll('all')
    }
    const setHigh = () => {
        ButtonHigh('high')
    }
    const setMiddle = () => {
        ButtonMiddle('middle')
    }
    const setLow = () => {
        ButtonLow('low')
    }

    return (
        <div>

            {mappedAffairs}

            <button onClick={setAll}>All</button>
            <button onClick={setHigh}>High</button>
            <button onClick={setMiddle}>Middle</button>
            <button onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs

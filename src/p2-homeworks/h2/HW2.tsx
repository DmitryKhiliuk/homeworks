import React, {useState} from 'react'
import Affairs from './Affairs'

export type AffairPriorityType = 'middle' | 'high' | 'low'
export type AffairType = {
    _id: number
    name: string
    priority: string
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]


export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): AffairType[] => {
    if (filter === 'all') return affairs
   /* if (filter === 'high') {
        return affairs.filter((elem: AffairType) => elem.priority === 'high')
    }
    if (filter === 'middle') {
        return affairs.filter((elem: AffairType) => elem.priority === 'middle')
    }
    if (filter === 'low') {
        return affairs.filter((elem: AffairType) => elem.priority === 'low')
    } else {
        return [] // должен быть
    }*/
    else return affairs.filter(elem => elem.priority === filter)
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): AffairType[] => {
    return affairs.filter((elem) => elem._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2

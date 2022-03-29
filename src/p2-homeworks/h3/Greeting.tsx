import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void
    addUser:() => void // need to fix any
    error: string | null // need to fix any
    totalUsers: number // need to fix any

}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, onKeyPress, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : '' // need to fix with (?:)

    return (
        <div>
            <input value={name} onChange={setNameCallback} onKeyPress={onKeyPress} className={inputClass}/>
            {/*<span>{error}</span>*/}
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            {error && <div className={s.errorMessages}>{error}</div>}
        </div>
    )
}

export default Greeting

import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: {type:string, payload: string | number}): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {

            state = state.map(el => ({...el}))
            if (action.payload === 'up') {
                return state.sort((a,b) => a.name > b.name ? 1 : -1)
            } else {
                return state.sort((a:any,b:any) => a.name < b.name ? 1 : -1)
            }
        }
        case 'check': {
            return state.filter(el => el.age > action.payload)
        }
        default: return state
    }
}


const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: LoadingACType): any => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default: return state
    }
}

export type LoadingACType = ReturnType<typeof loadingAC>
export const loadingAC = (isLoading:boolean): any => {
    return {
        type: 'LOADING',
        isLoading
    } as const
} // fix any
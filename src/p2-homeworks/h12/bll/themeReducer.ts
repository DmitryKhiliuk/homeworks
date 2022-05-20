const initState = {
    value: 'some'
};


export type initStateType = typeof initState;

export const themeReducer = (state:initStateType = initState, action: changeThemeCType): initStateType => { // fix any
    switch (action.type) {
        case 'CHANGE-THEME': {
            return {...state, value: action.value};
        }
        default: return state;
    }
};

type changeThemeCType = ReturnType<typeof changeThemeC>
export const changeThemeC = (value:string): any => {
    return {
        type: 'CHANGE-THEME',
        value
    } as const

}; // fix any
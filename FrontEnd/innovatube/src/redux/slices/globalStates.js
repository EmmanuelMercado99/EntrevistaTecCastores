import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    login: false 
}

const loginSession = createSlice({
    name: 'loginSession',
    initialState,
    reducers:{
        login: (state) => {state.login = true},
        logout: (state) => {state.login = false}

    }
})


export const { login,logout } = loginSession.actions;
export default loginSession.reducer;
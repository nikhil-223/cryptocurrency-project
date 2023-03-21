import { createSlice } from "@reduxjs/toolkit";

const ThemeSlice = createSlice({
	name: "theme",
	initialState:'dark',
    reducers:{
            setThemeDark(state,action){
                return action.payload
            },
            setThemeLight(state,action){
                return action.payload
            }

    }
});

export const  {setThemeLight, setThemeDark} = ThemeSlice.actions;
export default ThemeSlice.reducer;

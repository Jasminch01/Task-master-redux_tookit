import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    userName : 'jesmin chakma',
    email : 'jasminchakma895@gmail.com'
}

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        
    }
})

export default userSlice.reducer;
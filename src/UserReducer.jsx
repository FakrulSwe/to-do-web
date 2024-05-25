import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";


const userSlice = createSlice({
    name: "users",
    initialState: userList,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        updateUser: (state, action) =>{
            const {id, title, description} = action.payload;
            const data = state.find(user => user.id == id);
            if(data){
                data.title = title;
                data.description = description;
            }
        },
        deleteUser: (state, action) =>{
            const {id} = action.payload;
            const data = state.find(user => user.id == id);

            if(data){   
                return state.filter(find => find.id !== id);
            }
        }
    }
})

export const {addUser, updateUser, deleteUser} = userSlice.actions;
export default userSlice.reducer
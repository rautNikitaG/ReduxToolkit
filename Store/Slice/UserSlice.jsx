import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../../components/Data";

const userSlice = createSlice({
  name: 'user',
  initialState: userList,
  reducers: {
    setSelfValue: (state, action) => {
      console.log(state)
      state.push(action.payload)
      console.log(action)
      console.log(action.payload)

    },
    addFamily: (state, action) => {
    //   state.familyMembers.push(action.payload);
    },
    deleteUser: (state, action) => {
      // state.familyMembers = state.familyMembers.filter((member) => member.id !== action.payload);

      const{id} = action.payload;
      const uu = state.find(ele => ele.id == id)
      if(uu)
      {
        return state.filter((f)=> f.id !== id)
      }
    },
  },
});

export const {  setSelfValue, addFamily, deleteUser } = userSlice.actions;

export default userSlice.reducer;

import Cookies from "universal-cookie";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Define a type for the token payload
interface UserInterface {
  relationId: string;
  universityId: string;
}

const cookies = new Cookies();

// Get the JWT token from cookies
const relationId = cookies.get('relation_id');
const universityId = cookies.get('university_id');

const initialState: UserInterface = {
  relationId: relationId ? relationId : '',
  universityId : universityId ? universityId : ''
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setRelationId: (state, action: PayloadAction<string>) => {
      state.relationId = action.payload;
    },
    setUniversityId: (state, action: PayloadAction<string>) => {
      state.universityId = action.payload;
    },
  },
});

export const { setRelationId, setUniversityId } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;


export default userSlice.reducer;

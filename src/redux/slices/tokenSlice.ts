import { jwtDecode } from "jwt-decode";
import Cookies from "universal-cookie";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Define a type for the token payload
interface TokenPayload {
  aud?: string;
  email?: string;
  exp?: number;
  iss?: string;
  permissions?: string[];
  sub?: string;
  roles?: string;
  sid?: string;
}

// Define a type for the slice state
interface Token extends TokenPayload {}

const cookies = new Cookies();

// Get the JWT token from cookies
const jwtToken = cookies.get('jwt_token');

// Decode the JWT token and extract necessary fields
const decodedToken = jwtToken ? jwtDecode<TokenPayload>(jwtToken) : {};

// Initialize the initialState object using the decoded values
const initialState: Token = {
  aud: decodedToken.aud || '',
  email: decodedToken.email || '',
  exp: decodedToken.exp || 0,
  iss: decodedToken.iss || '',
  permissions: decodedToken.permissions || [],
  sub: decodedToken.sub || '',
  roles: decodedToken.roles || '',
  sid: decodedToken.sid || ''
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Partial<Token>>) => {
      state.aud = action.payload.aud ?? state.aud;
      state.email = action.payload.email ?? state.email;
      state.exp = action.payload.exp ?? state.exp;
      state.iss = action.payload.iss ?? state.iss;
      state.permissions = action.payload.permissions ?? state.permissions;
      state.sub = action.payload.sub ?? state.sub;
      state.roles = action.payload.roles ?? state.roles;
      state.sid = action.payload.sid ?? state.sid;
    },
    resetUser: () => initialState,
  },
});

export const { setUser, resetUser } = tokenSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectedItems = (state: RootState) => state.token;

export default tokenSlice.reducer;

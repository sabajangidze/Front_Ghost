import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Define a type for the slice state
interface SelectedItems {
  items: string[];
}

// Define the initial state using that type
const initialState: SelectedItems = {
  items: [],
};

export const dashboardItemsSlice = createSlice({
  name: "selectedDashboardItems",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    add: (state, action: PayloadAction<string>) => {
      state.items.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(e => e !== action.payload);
    },
    reset: () => initialState
  },
});

export const { add, remove, reset } = dashboardItemsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectedItems = (state: RootState) => state.dashboardItems;

export default dashboardItemsSlice.reducer;

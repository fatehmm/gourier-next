import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Person } from "@/types/person";

export interface PersonState {
  loggedInUser: Person;
}

const initialState: PersonState = {
  loggedInUser: null,
};

const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    setPersonState: (state, action: PayloadAction<Person>) => {
      state.loggedInUser = action.payload;
    },
  },
});

export const { setPersonState } = personSlice.actions;
export default personSlice.reducer;

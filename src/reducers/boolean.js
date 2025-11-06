import { createSlice } from '@reduxjs/toolkit';

const booleanSlice = createSlice({
  name: 'boolean',
  initialState: { bool: false },  // false = FR, true = EN
  reducers: {
    boolRecup: (state) => {
      state.bool = !state.bool;  // Toggle
    }
  }
});

export const { boolRecup } = booleanSlice.actions;
export default booleanSlice.reducer;

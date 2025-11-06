import { configureStore } from '@reduxjs/toolkit';
import booleanReducer from '../reducers/boolean';  // Adjust if reducer path differs

const store = configureStore({
  reducer: {
    boolean: booleanReducer  // Your boolean state for EN/FR toggle
  }
});

export default store;

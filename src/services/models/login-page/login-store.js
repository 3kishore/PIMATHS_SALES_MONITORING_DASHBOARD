import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';

// Combine reducers
const reducers = combineReducers({
  form: formReducer,
  // Add other reducers here if you have any
});

// Create the Redux store using configureStore
const loginStore = configureStore({
  reducer: reducers,
  // Optional: you can add middleware, devTools, and other options here
});

// Export the Redux store to use it in the application
export default loginStore;
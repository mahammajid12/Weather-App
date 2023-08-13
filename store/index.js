// store/index.js
import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'; // Import redux-thunk
import weatherReducer from './WeatherReducer';

export const store = configureStore({
    reducer: {
      weather: weatherReducer,
    },
  },applyMiddleware(thunkMiddleware));

export default function ReduxProvider({ children }) {
    return <Provider store={store}>{children}</Provider>;
}


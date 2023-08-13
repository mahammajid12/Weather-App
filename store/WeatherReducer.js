const initialState = {
    weatherData: {},
    loading: false,
    error: '',
  };

  const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_WEATHER':
        return { ...state, weatherData: action.payload, error: '' };
        case 'SET_ERROR':
        return { ...state, error: action.payload,  weatherData: {}};
      default:
        return state;
    }
  };
  
  export default weatherReducer;
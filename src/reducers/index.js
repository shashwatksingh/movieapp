import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITE } from '../actions';

const initialMoviesState = {
  list: [],
  favourites: []
}

export default function movies(state = initialMoviesState, action) {
  //intent to change the action
  switch (action.type) {
    case ADD_MOVIES: return {...state, list: action.movies};
    case ADD_FAVOURITE: return {...state, favourites: [action.movie, ...state.favourites]};
    case REMOVE_FAVOURITE: return {...state, favourites: state.favourites.filter((item) => item !== action.movie)}
    default: return state;
  }
}
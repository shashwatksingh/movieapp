import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITE, SET_SHOW_FAVOURITES } from '../actions';

const initialMoviesState = {
  list: [],
  favourites: [],
  showFavourites: false
}

export default function movies(state = initialMoviesState, action) {
  //intent to change the action
  switch (action.type) {
    case ADD_MOVIES: return {...state, list: action.movies};
    case ADD_FAVOURITE: return {...state, favourites: [action.movie, ...state.favourites]};
    case REMOVE_FAVOURITE: return {...state, favourites: state.favourites.filter((item) => item !== action.movie)}
    case SET_SHOW_FAVOURITES: return {...state, showFavourites: action.val }
    default: return state;
  }
}
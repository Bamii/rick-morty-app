import { combineReducers } from 'redux';
import getCharacters from './reducer_get_characters';
import getEpisodes from './reducer_get_episodes';
import getLocations from './reducer_get_locations';
import search from './reducer_search';

const rootReducer = combineReducers({
  characters: getCharacters,
  episodes: getEpisodes,
  locations: getLocations,
  searchResults: search,
});

export default rootReducer;

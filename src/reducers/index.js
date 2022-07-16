import { combineReducers } from "redux";
import gamesReducer from './gamesReducer';
import gameDetailsReducer from './gameDetailsReducer';

const rootReducer = combineReducers({
    games: gamesReducer,
    gameDetails: gameDetailsReducer
});

export default rootReducer;
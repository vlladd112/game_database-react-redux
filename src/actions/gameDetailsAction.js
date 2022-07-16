import axios from "axios";
import { gameDetailsUrl, gameScreenshotsUrl } from '../api';

export const loadGameDetails = (id) => async (dispatch) => {
    // Dispatch to check when API call is done and doing so
    // we can display a 'loading spinner' or something...
    dispatch({
        type: "IS_LOADING"
    })

    //Fetch axios
    const gameDetailsData = await axios.get(gameDetailsUrl(id));
    const gameScreenshotsData = await axios.get(gameScreenshotsUrl(id));

    dispatch({
        type: 'GET_GAME_DETAILS',
        payload: {
            game: gameDetailsData.data,
            screenshots: gameScreenshotsData.data
        }
    })
}
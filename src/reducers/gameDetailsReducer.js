const initialState = {
    game: {},
    screenshots: {},
    isLoading: true
}

const gameDetailsReducer = (state=initialState, action) => {
    switch(action.type){
        case 'GET_GAME_DETAILS':
            return {...state,
                game: action.payload.game,
                screenshots: action.payload.screenshots,
                isLoading: false
            }
        case 'IS_LOADING': 
            return {...state,
                isLoading: true
            }
        default:
            return {...state}
    }
}

export default gameDetailsReducer;
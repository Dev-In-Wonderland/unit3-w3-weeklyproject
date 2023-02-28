const initialState = {
    music:{
        track: []
    }
}

const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_TRACK_MAIN":
            return{
                ...state,
                music: {
                    ...state.music,
                    track:[...state.music.track, action.payload]
                }
            }
            default:
                return state;
}
}
export default mainReducer
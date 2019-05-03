import { combineReducers } from 'redux';
 
import { SET_PROFILE, LOGOUT_PROFILE } from "../actions/" //Import the actions types constant we defined in our actions


let profileState = {profile: {}};
const profileReducer = (state = profileState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            state = {...profileState, profile: action.profile};
            return state;
        case LOGOUT_PROFILE:
            state = {...profileState.profile};
        default:
            return state;
    }
}

// Combine all the reducers
const rootReducer = combineReducers({
    profileReducer
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})
 
export default rootReducer;
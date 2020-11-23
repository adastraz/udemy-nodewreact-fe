import { FETCHING_USER } from '../actions'

const initialState = {
    isLoading: false,
    error: null,
    user: {}
}

export const authReducer = (state = initialState, action) => {
    console.log(action)
    switch(action.type) {
        case FETCHING_USER:  
            return {
                ...state,
                user: action.payload || false
            }
        default:
            return state
    }
}
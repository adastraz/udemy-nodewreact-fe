import axios from 'axios'
export const FETCHING_USER = 'FETCHING_USER'

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')
    dispatch({ type: 'FETCHING_USER', payload: res.data })
}

// export const fetchUser = () => {
//     return function(dispatch) {
//         axios.get('/api/current_user')
//             .then(res => dispatch({ type: 'FETCHING_START', payload: res }))
//     }
// }
import {
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    DANGKYDETAI_SUCCESS,
    DONGDANGKYDETAI_SUCCESS,

} from './constants';

const initState = {
    isLogin: false,
    user: [],
    roleId: '',
    dangKyDeTai: false,
    tendetai: 'abc',
}

function reducer(state, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLogin: true,
                user: action.payload,
                roleId: action.payload.roleId
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isLogin: false,
                user: null
            }
        case DANGKYDETAI_SUCCESS:
            return {
                ...state,
                dangKyDeTai: true,
            }
        case DONGDANGKYDETAI_SUCCESS:
            return {
                ...state,
                dangKyDeTai: false,
            }
        default:
            throw new Error('invalid action');

    }
}
export { initState };
export default reducer;
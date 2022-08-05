import {
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    DANGKYDETAI_SUCCESS,
    DONGDANGKYDETAI_SUCCESS,
} from './constants';

export const LoginSucces = payload => ({
    type: LOGIN_SUCCESS,
    payload
});
export const LogOut = payload => ({
    type: LOGOUT_SUCCESS,
    payload
});
export const DangKyDeTai = payload => ({
    type: DANGKYDETAI_SUCCESS,
    payload
});
export const DongDangKyDeTai = payload => ({
    type: DONGDANGKYDETAI_SUCCESS,
    payload
});
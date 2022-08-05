import React, { useEffect, useState } from "react";
import axios from 'axios';
import './login.scss';
import { useStore, actions } from "../../store";
// import { LoginContext } from "../../store/LoginContext";
import { Navigate, useNavigate } from 'react-router-dom';
// import { Form, FormGroup, FormLabel, FormControl, FormCheck, Button } from 'react-bootstrap';
function Login() {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const [state, dispatch] = useStore();
    const { isLogin, user, roleId } = state;
    // console.log('isLogin: ', isLogin);
    // console.log('user: ', user);
    // console.log('roleId: ', roleId);

    let handleSubmit = async () => {
        let res = await axios.post('http://localhost:8080/login', {
            account: account,
            password: password
        })
        let userInfo = res.data.user;
        if (!userInfo) {
            setMessage(res.data.message);
        }
        if (userInfo.roleId === 'R1') {
            dispatch(actions.LoginSucces(userInfo));
            navigate('/admin', { replace: true })
        }
        if (userInfo.roleId === 'R2') {
            dispatch(actions.LoginSucces(userInfo));
            navigate('/cvht', { replace: true })
        }
        if (userInfo.roleId === 'R5') {
            dispatch(actions.LoginSucces(userInfo));
            navigate('/chunhiem', { replace: true })
        }
        if (userInfo.roleId === 'R4') {
            dispatch(actions.LoginSucces(userInfo));
            navigate('/hoidong', { replace: true })
        }
        if (userInfo.roleId === 'R3') {
            dispatch(actions.LoginSucces(userInfo));
            navigate('/svclc:id', { replace: true })
        }

    }


    return (
        <>
            <div className="login-container">
                <div className='text-center login-text p1'>
                    <h1>Đăng Nhập</h1>

                </div>

                <div className="form-group login-input">
                    <label>Tài Khoản</label>
                    <input
                        type='text'
                        name="account"
                        id="account"
                        value={account}
                        className="form-control"
                        placeholder="Nhập tài khoản"
                        onChange={(e) => setAccount(e.target.value)}


                    />
                </div>
                <div className="form-group login-input">
                    <label>Mật khẩu</label>
                    <input
                        type='password'
                        name="password"
                        id="password"
                        value={password}
                        className="form-control"
                        placeholder="Nhập mật khẩu"
                        onChange={(e) => setPassword(e.target.value)}


                    />
                </div>
                <br />
                <div className="form-group text-center ">
                    <button
                        className="btn btn-login"
                        onClick={() => handleSubmit()}
                    >
                        Đăng nhập</button>
                </div>
                <br />
                {<p className="p1">{message}</p>}

            </div>
        </>
    )
}
export default Login;
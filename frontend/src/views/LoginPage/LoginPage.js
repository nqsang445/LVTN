import React, { useEffect, useState } from "react";
import "./LoginPage.scss";
import { Button } from 'reactstrap';
import { FaBeer } from 'react-icons/fa';
import axios from "axios";
import { useNavigate } from "react-router-dom";
function LoginPage() {
    const [account, setAccount] = useState();
    const [password, setPassword] = useState();
    const [isLogin, setIslogin] = useState(false);
    const Navigate = useNavigate();
    const [message, setMessage] = useState()
    // useEffect(() => {
    //     console.log('re-render')

    // })
    // const handleSubmitLogin = () => {
    //     console.log({ account, password })
    // }
    let login = async () => {
        let response = await axios.post('http://localhost:8080/login', {
            account: account,
            password: password
        })
        if (response && response.data.errCode !== 0) {
            setMessage(response.data.message)
        }

        // if (!response.data.user.account) {
        //     setMessage(response.data.message)
        // } else {
        //     if (response.data.user.roleId === 'R1') {
        //         localStorage.setItem('login', response.data.user.account)
        //         Navigate('/admin', { replace: true })
        //     } else {
        //         if (response.data.user.roleId === 'R2') {
        //             Navigate('/teacher', { replace: true })
        //         } else {
        //             if (response.data.user.roleId === 'R3') {
        //                 Navigate('/student', { replace: true })
        //             } else {
        //                 if (response.data.user.roleId === 'R4') {
        //                     Navigate('/studenthighquality', { replace: true })
        //                 }
        //             }
        //         }
        //     }
        // }
    }
    return (
        <div className="login-background">
            <div className="text-login">
                <span className="text-login-span">TRƯỜNG ĐẠI HỌC CẦN THƠ</span>
                <p className="text-login-p1">NGHIÊN CỨU</p>
                <p className="text-login-p2">KHOA HỌC</p>
            </div>
            <div className="login-container">
                <div className='text-center login-text'>
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
                {message &&
                    <p className="color red">{message} </p>
                }
                <br />
                <div className="form-group text-center ">
                    <button
                        className="btn-login"
                        onClick={() => login()}
                    >
                        Đăng nhập</button>
                </div>
            </div>
        </div>
    )
}
export default LoginPage;
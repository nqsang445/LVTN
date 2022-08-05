import React from "react";
import { useEffect, useState } from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import './ChangePassword.scss';
import { useParams } from "react-router-dom";

function ChangePassword() {
    const [passwordOld, setPasswordOld] = useState('');
    const [passwordNew, setPasswordNew] = useState('');
    const [passwordNewAgain, setPasswordNewAgain] = useState('');
    const [message, setMessage] = useState('');
    const userId = useParams();

    let handleChangePassword = async () => {
        if (passwordOld === '' || passwordNew === '' || passwordNewAgain === '') {
            setMessage('Vui lòng nhập đầy đủ thông tin!.');
        } else {
            if (passwordNew !== passwordNewAgain) {
                setMessage('Mật khẩu mới không chính xác!.');

            } else {
                let changePassword = await axios.put(`http://localhost:8080/api/change-password-user-id`,
                    { id: userId, passwordOld: passwordOld, passwordNew: passwordNew })
                if (changePassword.data.errCode === 0) {
                    setMessage(changePassword.data.message);
                } else {
                    setMessage(changePassword.data.message);

                }

            }
        }




        // toast.error(message);

        // console.log(passwordOld, passwordNew, passwordNewAgain)
        // toast.success('Đổi mật khẩu thành công!')
    }
    return (
        <div className="change-password">
            <h2>Đổi mật khẩu</h2>
            <br />
            <div className="form-group">
                <label name='file'>Mật khẩu cũ</label>
                <input
                    type='password'
                    className="form-control"
                    onChange={(e) => setPasswordOld(e.target.value)}
                    value={passwordOld}
                />
            </div>
            <br />
            <div className="form-group">
                <label name='file'>Mật khẩu mới</label>
                <input
                    type='password'
                    className="form-control"
                    onChange={(e) => setPasswordNew(e.target.value)}
                    value={passwordNew}
                />
            </div>
            <br />
            <div className="form-group">
                <label name='password'>Nhập lại mật khẩu mới</label>
                <input
                    type='password'
                    className="form-control"
                    onChange={(e) => setPasswordNewAgain(e.target.value)}
                    value={passwordNewAgain}
                />
            </div>
            <br />
            {message && <p style={{ color: 'red' }}>{message}</p>}
            <br />
            <div className="form-group">
                <button
                    className="btn btn-success"
                    onClick={handleChangePassword}
                >Đổi mật khẩu</button>
            </div>

        </div>

    );
}
export default ChangePassword;
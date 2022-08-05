import React, { useEffect, useState } from "react";
import axios from 'axios';
import './dangkytaikhoan.scss';
import { useForm } from 'react-hook-form';
function DangKyTaiKhoan() {
    const { register, handleSubmit } = useForm();
    const [message, setMessage] = useState();
    const onSubmit = async (data) => {
        let createNewUser = await axios.post(`http://localhost:8080/api/create-user`, data)
        setMessage(createNewUser.data.errMessage);
        // console.log(createNewUser.data.errMessage);
    }
    return (
        <>
            <div className="signin-content">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Tạo tài khoản</h1>
                    <label htmlFor="account">Tài khoản:</label>
                    <input
                        type='text'
                        className="form-control mt-2 mb-2"
                        name="account"
                        id="account"
                        placeholder="Tài khoản"
                        {...register("account", { required: true })}
                    />
                    <label htmlFor="password">Mật khẩu:</label>
                    <input
                        type='password'
                        className="form-control mt-2 mb-2"
                        name="password"
                        id="password"
                        placeholder="Mật khẩu"
                        {...register("password", { required: true })}
                    />
                    <label htmlFor="email">Email:</label>
                    <input
                        type='email'
                        className="form-control mt-2 mb-2"
                        name="email"
                        id="email"
                        placeholder="Email"
                        {...register("email", { required: true })}
                    />
                    <label htmlFor="firstName">Họ:</label>
                    <input
                        type='text'
                        className="form-control mt-2 mb-2"
                        name="firstName"
                        id="firstName"
                        placeholder="Họ"
                        {...register("firstName", { required: true })}
                    />
                    <label htmlFor="lastName">Tên:</label>
                    <input
                        type='text'
                        className="form-control mt-2 mb-2"
                        name="lastName"
                        id="lastName"
                        placeholder="Tên"
                        {...register("lastName", { required: true })}
                    />
                    <label htmlFor="address">Địa chỉ:</label>
                    <input
                        type='text'
                        className="form-control mt-2 mb-2"
                        name="address"
                        id="address"
                        placeholder="Địa chỉ"
                        {...register("address", { required: true })}
                    />
                    <label htmlFor="phonenumber">Số điện thoại:</label>
                    <input
                        type='text'
                        className="form-control mt-2 mb-2"
                        name="phonenumber"
                        id="phonenumber"
                        placeholder="Số điện thoại"
                        {...register("phonenumber", { required: true })}
                    />
                    <label class="my-1 mr-2" htmlFor="gender">Giới tính:</label>
                    <select
                        className="custom-select my-1 mr-sm-2"
                        id="gender"
                        name="gender"
                        {...register("gender", { required: true })}
                    >
                        <option selected>Chọn...</option>
                        <option value="Nam">Nam</option>
                        <option value="Nữ">Nữ</option>
                    </select>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <label class="my-1 mr-2" htmlFor="roleId">Vai trò:</label>
                    <select
                        className="custom-select my-1 mr-sm-2"
                        id="roleId"
                        name="roleId"
                        {...register("roleId", { required: true })}
                    >
                        <option selected>Chọn...</option>
                        {/* <option value="R1">admin</option> */}
                        <option value="R2">Cố vấn học tập</option>
                        <option value="R3">Giáo viên hướng dẫn</option>
                        <option value="R4">Hội đồng</option>
                    </select>
                    <br />
                    {message && <p style={{ color: 'red' }}>{message}</p>}
                    <br />
                    <button type="submit" className="btn btn-primary mt-3" >Đăng ký</button>
                </form>
            </div>
        </>
    )
}
export default DangKyTaiKhoan;
import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import axios from "axios";

import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody
} from "reactstrap";
import { toast } from "react-toastify";
function ModalEditUserCVHT({ openModalEditUserCVHT, setOpenModalEditUserCVHT, userEditCVHT, doEditUserIdCVHT }) {
    //toggle chi danh cho toggle modal
    const toggle = () => setOpenModalEditUserCVHT(!openModalEditUserCVHT);
    // console.log(userEditCVHT);
    const { register, handleSubmit } = useForm({
        defaultValues: userEditCVHT
    });
    const onSubmit = async (data) => {
        try {
            await doEditUserIdCVHT(data);
            setOpenModalEditUserCVHT(!openModalEditUserCVHT);
        } catch (e) {
            console.log(e)
        }
    }
    return (<>
        <Modal isOpen={openModalEditUserCVHT} toggle={toggle}>
            <ModalHeader
                onClick={toggle} >Chỉnh sửa thông tin Cố vấn học tập</ModalHeader>
            <ModalBody>
                <div className="modal-edit-content">
                    <p>Tài khoản: {userEditCVHT.account}</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-sm-12">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type='email'
                                    className="form-control mt-2 mb-2"
                                    name="email"
                                    id="email"
                                    {...register("email", { required: true })}
                                // value={userEditCVHT.email}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <label htmlFor="firstName">Họ:</label>
                                <input
                                    type='text'
                                    className="form-control mt-2 mb-2"
                                    name="firstName"
                                    id="firstName"
                                    {...register("firstName", { required: true })}
                                // value={userEditCVHT.firstName}

                                />
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="lastName">Tên:</label>
                                <input
                                    type='text'
                                    className="form-control mt-2 mb-2"
                                    name="lastName"
                                    id="lastName"
                                    {...register("lastName", { required: true })}
                                // value={userEditCVHT.lastName}

                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <label htmlFor="address">Địa chỉ:</label>
                                <input
                                    type='text'
                                    className="form-control mt-2 mb-2"
                                    name="address"
                                    id="address"
                                    {...register("address", { required: true })}
                                // value={userEditCVHT.address}

                                />
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="phonenumber">Số điện thoại:</label>
                                <input
                                    type='text'
                                    className="form-control mt-2 mb-2"
                                    name="phonenumber"
                                    id="phonenumber"
                                    {...register("phonenumber", { required: true })}
                                // value={userEditCVHT.phonenumber}

                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-3">
                                <label htmlFor="gender">Giới tính:</label>
                                <select
                                    className="custom-select my-1 mr-sm-2"
                                    id="gender"
                                    name="gender"
                                    placeholder={userEditCVHT.gender}

                                    {...register("gender", { required: true })}
                                >
                                    <option value="Nam">Nam</option>
                                    <option value="Nữ">Nữ</option>
                                </select>
                            </div>
                        </div>

                        <br />
                        <button type="submit" className="btn btn-success mt-3" >Lưu lại</button>
                    </form>
                </div>

            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={toggle} >Cancel</Button>
            </ModalFooter>
        </Modal>

    </>
    );
}
export default ModalEditUserCVHT;
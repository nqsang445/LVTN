import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import axios from "axios";

import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody
} from "reactstrap";
import { toast } from "react-toastify";
function ModalEditUserHoiDong({ openModalEditUserHD, setOpenModalEditUserHD, userEditHD, doEditUserIdHD }) {
    //toggle chi danh cho toggle modal
    const toggle = () => setOpenModalEditUserHD(!openModalEditUserHD);
    // console.log(userEditHD);
    const { register, handleSubmit } = useForm({
        defaultValues: userEditHD
    });
    const onSubmit = async (data) => {
        try {
            await doEditUserIdHD(data);
            setOpenModalEditUserHD(!openModalEditUserHD);
        } catch (e) {
            console.log(e)
        }
    }
    return (<>
        <Modal isOpen={openModalEditUserHD} toggle={toggle}>
            <ModalHeader
                onClick={toggle} >Chỉnh sửa thông tin Hội đồng</ModalHeader>
            <ModalBody>
                <div className="modal-edit-content">
                    <p>Tài khoản: {userEditHD.account}</p>
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
                                // value={userEditSVCLC.lastName}

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
                                // value={userEditSVCLC.address}

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
                                // value={userEditSVCLC.phonenumber}

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
                                    placeholder={userEditHD.gender}

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
export default ModalEditUserHoiDong;
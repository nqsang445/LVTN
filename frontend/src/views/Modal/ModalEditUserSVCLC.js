import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import axios from "axios";

import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody
} from "reactstrap";
import { toast } from "react-toastify";
function ModalEditUserSVCLC({ openModalEditUserSVCLC, setOpenModalEditUserSVCLC, userEditSVCLC, doEditUserIdSVCLC }) {
    //toggle chi danh cho toggle modal
    const toggle = () => setOpenModalEditUserSVCLC(!openModalEditUserSVCLC);
    // console.log(userEditSVCLC);
    const { register, handleSubmit } = useForm({
        defaultValues: userEditSVCLC
    });
    const onSubmit = async (data) => {
        try {
            await doEditUserIdSVCLC(data);
            setOpenModalEditUserSVCLC(!openModalEditUserSVCLC);
        } catch (e) {
            console.log(e)
        }
    }
    return (<>
        <Modal isOpen={openModalEditUserSVCLC} toggle={toggle}>
            <ModalHeader
                onClick={toggle} >Chỉnh sửa thông tin sinh viên chất lượng cao</ModalHeader>
            <ModalBody>
                <div className="modal-edit-content">
                    <p>Tài khoản: {userEditSVCLC.account}</p>
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
                                // value={userEditSVCLC.email}
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
                                // value={userEditSVCLC.firstName}

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
                                <label htmlFor="address" hidden>Địa chỉ:</label>
                                <input
                                    type='text'
                                    className="form-control mt-2 mb-2"
                                    name="address"
                                    id="address"
                                    {...register("address")}
                                    // value={userEditSVCLC.address}
                                    hidden
                                />
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="phonenumber" hidden>Số điện thoại:</label>
                                <input
                                    type='text'
                                    className="form-control mt-2 mb-2"
                                    name="phonenumber"
                                    id="phonenumber"
                                    {...register("phonenumber")}
                                    // value={userEditSVCLC.phonenumber}
                                    hidden
                                />
                            </div>
                        </div>

                        <div className="row">


                            <div className="col-sm-3">
                                <label htmlFor="gender">Giới tính:</label>
                                <select
                                    class="custom-select my-1 mr-sm-2"
                                    id="gender"
                                    name="gender"
                                    placeholder={userEditSVCLC.gender}

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
export default ModalEditUserSVCLC;
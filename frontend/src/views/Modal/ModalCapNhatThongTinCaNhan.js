import React from "react";
import axios from "axios";
import './ModalChiTietDeTai.scss'
import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody, CardBody
} from "reactstrap";

import { useForm } from 'react-hook-form';
import { toast } from "react-toastify";

import moment from 'moment';
import { FaRegStickyNote, FaTrash, FaDownload } from 'react-icons/fa';
import fileDownload from 'js-file-download';
function ModalCapNhatThongTinCaNhan({ setOpenModalCapNhatThongTinCaNhan, openModalCapNhatThongTinCaNhan, userInfo, getUserInFo }) {
    //toggle chi danh cho toggle modal
    const toggle = () => setOpenModalCapNhatThongTinCaNhan(!openModalCapNhatThongTinCaNhan);
    console.log(userInfo);
    const { register, handleSubmit } = useForm({
        defaultValues: userInfo[0]
    });
    const onSubmit = async (data) => {
        // console.log(data)
        const editTTCN = await axios.put(`http://localhost:8080/api/edit-Thong-tin-ca-nhan`, data)
        getUserInFo();
        setOpenModalCapNhatThongTinCaNhan(!openModalCapNhatThongTinCaNhan);
        // goilai();
        // setOpenModalEditDeTaiDangThucHienChuNhiem(!openModalEditDeTaiDangThucHienChuNhiem);
        toast.success('Cập nhật thông tin cá nhân thành công!.')
    }
    return (
        <Modal isOpen={openModalCapNhatThongTinCaNhan} toggle={toggle} className='modalchitiet'>
            <ModalHeader
                onClick={toggle} >Cập nhật thông tin cá nhân</ModalHeader>
            <ModalBody >
                <div>
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
                            <div className="col-sm-3">
                                <label htmlFor="gender">Giới tính:</label>
                                <select
                                    className="custom-select my-1 mr-sm-2"
                                    id="gender"
                                    name="gender"
                                    placeholder={userInfo.gender}

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
    );
}
export default ModalCapNhatThongTinCaNhan;
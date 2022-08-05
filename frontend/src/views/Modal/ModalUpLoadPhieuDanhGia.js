import React from "react";
import axios from "axios";
import { useEffect, useState } from 'react';

import './ModalChiTietDeTai.scss'
import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody, CardBody
} from "reactstrap";
import { useForm } from 'react-hook-form';
import { FaFilePdf } from 'react-icons/fa';

import { toast } from "react-toastify";
function ModalUpLoadPhieuDanhGia({ setOpenModalUpLoadPhieuDanhGia, openModalUpLoadPhieuDanhGia, idDeTai, goilai }) {
    //toggle chi danh cho toggle modal
    const toggle = () => setOpenModalUpLoadPhieuDanhGia(!openModalUpLoadPhieuDanhGia);
    const { register, handleSubmit } = useForm({});

    const onSubmit = async (data) => {
        // alert(JSON.stringify(data));
        const formData = new FormData();
        formData.append("picture", data.picture[0]);
        formData.append("idDeTai", idDeTai.id);

        // // console.log(formData)
        // // // let createNewUser = await axios.post(`http://localhost:8080/api/create-user`, data)
        const res = await axios.post(`http://localhost:8080/api/upload-phieu-danh-gia`, formData);
        const res2 = await axios.post(`http://localhost:8080/api/upload-phieu-danh-gia`, idDeTai);
        goilai();
        setOpenModalUpLoadPhieuDanhGia(!openModalUpLoadPhieuDanhGia);
        toast.success('UpLoad thành công');
        // // toast.success('Đăng ký đề tài thành công!.');
        // // const res = await axios.post(`http://localhost:8080/api/post-formdata`, formData)
        // // alert(JSON.stringify(res))
        // // let createNewUser = await axios.post(`http://localhost:8080/api/create-user`, data)
        // // setMessage(createNewUser.data.errMessage);
        // // // console.log(createNewUser.data.errMessage);
    }
    return (
        <Modal isOpen={openModalUpLoadPhieuDanhGia} toggle={toggle} className='modalchitiet'>
            <ModalHeader
                onClick={toggle} >UpLoad Phiếu Đánh Giá</ModalHeader>
            <ModalBody >
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-sm-12">
                            <label >Phiếu đánh giá:</label>
                            <input
                                ref={register}
                                type='file'
                                className="form-control mt-1 mb-2 form-control"
                                name="picture"
                                id="picture"
                                {...register("picture", { required: true })}
                            // onChange={handleChangeFile}
                            // value={formData}
                            />
                        </div>
                        <br />
                        <p>tên file: 'Mã số đề tài'_phieudanhgia.pdf</p>
                        <br />
                        <div className="row">
                            <div className="col-sm-4">
                                <button className="btn btn-success mt-3 ">UpLoad</button>
                            </div>
                        </div>
                    </form>
                </div>

            </ModalBody>
            <ModalFooter>

                <Button color="primary" onClick={toggle} >Cancel</Button>
            </ModalFooter>
        </Modal>
    );
}
export default ModalUpLoadPhieuDanhGia;
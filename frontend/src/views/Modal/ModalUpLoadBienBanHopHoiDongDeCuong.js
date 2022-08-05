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
function ModalUpLoadBienBanHopHoiDongDeCuong({ setOpenModalUpLoadBienBanHopHoiDongDeCuong, openModalUpLoadBienBanHopHoiDongDeCuong, idDeTai, goilai, openGIAODETAI, setOpenGIAODETAI }) {
    //toggle chi danh cho toggle modal
    const toggle = () => setOpenModalUpLoadBienBanHopHoiDongDeCuong(!openModalUpLoadBienBanHopHoiDongDeCuong);
    const { register, handleSubmit } = useForm({});

    const onSubmit = async (data) => {
        // alert(JSON.stringify(data));
        const formData = new FormData();
        formData.append("picture", data.picture[0]);
        formData.append("idDeTai", idDeTai.id);

        // // console.log(formData)
        // // // let createNewUser = await axios.post(`http://localhost:8080/api/create-user`, data)
        const res = await axios.post(`http://localhost:8080/api/upload-bien-ban-hop-hoi-dong-de-cuong`, formData);
        const res2 = await axios.post(`http://localhost:8080/api/upload-bien-ban-hop-hoi-dong-de-cuong`, idDeTai);
        goilai();
        setOpenGIAODETAI(!openGIAODETAI)
        setOpenModalUpLoadBienBanHopHoiDongDeCuong(!openModalUpLoadBienBanHopHoiDongDeCuong);
        toast.success('UpLoad thành công');
        // // toast.success('Đăng ký đề tài thành công!.');
        // // const res = await axios.post(`http://localhost:8080/api/post-formdata`, formData)
        // // alert(JSON.stringify(res))
        // // let createNewUser = await axios.post(`http://localhost:8080/api/create-user`, data)
        // // setMessage(createNewUser.data.errMessage);
        // // // console.log(createNewUser.data.errMessage);
    }
    return (
        <Modal isOpen={openModalUpLoadBienBanHopHoiDongDeCuong} toggle={toggle} className='modalchitiet'>
            <ModalHeader
                onClick={toggle} >UpLoad Biên Bản Họp Hội Đồng Đề Cương</ModalHeader>
            <ModalBody >
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-sm-12">
                            <label >Biên Bản Họp Hội Đồng Đề Cương:</label>
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
                        <p>tên file: 'Mã số đề tài'_BienBanHopHoiDongDeCuong.pdf</p>
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
export default ModalUpLoadBienBanHopHoiDongDeCuong;
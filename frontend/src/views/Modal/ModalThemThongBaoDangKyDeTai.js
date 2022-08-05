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
function ModalThemThongBaoDangKyDeTai({ setOpenModalThemThongBaoDangKyDeTai, openModalThemThongBaoDangKyDeTai, goilai }) {
    //toggle chi danh cho toggle modal
    const toggle = () => setOpenModalThemThongBaoDangKyDeTai(!openModalThemThongBaoDangKyDeTai);
    const { register, handleSubmit } = useForm({});
    // const [tenthongbao,setTenThongBao]=useState()
    const onSubmit = async (data) => {

        // // alert(JSON.stringify(data));
        const formData = new FormData();
        formData.append("picture", data.picture[0]);
        formData.append("tenthongbao", data.tenthongbao);
        // alert(JSON.stringify(data.tenthongbao), JSON.stringify(formData))
        // alert(JSON.stringify(data))
        const res = await axios.post(`http://localhost:8080/api/upload-thong-bao-dang-ky-de-tai`, formData);
        const res2 = await axios.post(`http://localhost:8080/api/upload-thong-bao-dang-ky-de-tai`, data);
        goilai();
        setOpenModalThemThongBaoDangKyDeTai(!openModalThemThongBaoDangKyDeTai);
        toast.success('UpLoad thành công');

    }
    return (
        <Modal isOpen={openModalThemThongBaoDangKyDeTai} toggle={toggle} className='modalchitiet'>
            <ModalHeader
                onClick={toggle} >Thêm thông báo đăng ký đề tài</ModalHeader>
            <ModalBody >
                <div className="row">

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-sm-12">
                            <label >Tên thông báo:</label>
                            <input
                                ref={register}
                                type='text'
                                className="form-control mt-1 mb-2 form-control"
                                name="tenthongbao"
                                id="tenthongbao"
                                placeholder="Tên thông báo"
                                {...register("tenthongbao", { required: true })}
                            // onChange={handleChangeFile}
                            // value={formData}
                            />
                        </div>
                        <div className="col-sm-12">
                            <label > Thêm thông báo đăng ký đề tài:</label>
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
                        <p>tên file: 'Tên Thông báo'.pdf</p>
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
export default ModalThemThongBaoDangKyDeTai;
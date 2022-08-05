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


function ModalThemThoiGianVaDiaDiem({ setOpenModalThemThoiGianVaDiaDiem, openModalThemThoiGianVaDiaDiem, idDeTai, goilai }) {
    //toggle chi danh cho toggle modal
    const toggle = () => setOpenModalThemThoiGianVaDiaDiem(!openModalThemThoiGianVaDiaDiem);
    const { register, handleSubmit } = useForm({
        // defaultValues: userEditCVHT
    });
    const onSubmit = async (data) => {
        // console.log(data);
        const res = await axios.post(`http://localhost:8080/api/upload-thoi-gian-va-dia-diem-bao-ve-de-cuong`, { data, idDeTai });
        goilai();
        setOpenModalThemThoiGianVaDiaDiem(!openModalThemThoiGianVaDiaDiem);
        toast.success('Thêm thời gian và địa điểm bảo vệ đề cương thành công!. ');
        // const formData = new FormData();
        // formData.append("picture", data.picture[0]);
        // formData.append("idDeTai", idDeTai.id);

        // const res = await axios.post(`http://localhost:8080/api/upload-thoi-gian-va-dia-diem-bao-ve-de-cuong`, formData);
        // const res2 = await axios.post(`http://localhost:8080/api/upload-thoi-gian-va-dia-diem-bao-ve-de-cuong`, idDeTai);
        // goilai();
        // setOpenModalThemThoiGianVaDiaDiem(!openModalThemThoiGianVaDiaDiem);
        // toast.success('UpLoad thành công');

    }
    return (
        <Modal isOpen={openModalThemThoiGianVaDiaDiem} toggle={toggle} className='modalchitiet'>
            <ModalHeader
                onClick={toggle} >Thêm thời gian và địa điểm cho đề tài: {idDeTai.tendetai} </ModalHeader>
            <ModalBody >
                {/* <div className="row">

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-sm-12">
                            <label htmlFor="thoigianvadiadiem">Thời gian và địa điểm bảo vệ đề cương</label>
                            <input
                                type='text'
                                className="form-control mt-2 mb-2"
                                name="thoigianvadiadiem"
                                id="thoigianvadiadiem"
                                placeholder="Thời gian và địa điểm bảo vệ đề cương"
                                {...register("thoigianvadiadiem", { required: true })}
                            />
                        </div>
                        <div >
                            <button type="submit" className="btn btn-primary"

                            >Thêm</button>
                        </div>
                    </form>
                </div> */}
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* <div className="col-sm-12">
                            <label >Thời gian và địa điểm bảo vệ đề cương:</label>
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
                        </div> */}
                        <div className="col-sm-12">
                            <label >Giờ:</label>
                            <input
                                ref={register}
                                type='text'
                                className="form-control mt-1 mb-2 form-control"
                                name="gio"
                                id="gio"
                                {...register("gio", { required: true })}
                            // onChange={handleChangeFile}
                            // value={formData}
                            />
                        </div>
                        <div className="col-sm-12">
                            <label >Ngày:</label>
                            <input
                                ref={register}
                                type='date'
                                className="form-control mt-1 mb-2 form-control"
                                name="ngay"
                                id="ngay"
                                {...register("ngay", { required: true })}
                            // onChange={handleChangeFile}
                            // value={formData}
                            />
                        </div>
                        <div className="col-sm-12">
                            <label >Địa Điểm:</label>
                            <input
                                ref={register}
                                type='text'
                                className="form-control mt-1 mb-2 form-control"
                                name="diadiem"
                                id="diadiem"
                                {...register("diadiem", { required: true })}
                            // onChange={handleChangeFile}
                            // value={formData}
                            />
                        </div>
                        {/* <p>tên file: 'Mã số đề tài'_ThoiGianVaDiaDiemBaoVeDeCuong.pdf</p> */}
                        <br />
                        <div className="row">
                            <div className="col-sm-4">
                                <button className="btn btn-success mt-3 ">Thêm</button>
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
export default ModalThemThoiGianVaDiaDiem;
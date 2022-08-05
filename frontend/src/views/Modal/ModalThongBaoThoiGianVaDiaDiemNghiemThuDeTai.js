import React from "react";
import axios from "axios";
import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody
} from "reactstrap";
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { toast } from "react-toastify";


function ModalThongBaoThoiGianVaDiaDiemNghiemThuDeTai({ setOpenModalThongBaoThoiGianVaDiaDiemNghiemThuDeTai, openModalThongBaoThoiGianVaDiaDiemNghiemThuDeTai, infoDetai, goilai }) {
    //toggle chi danh cho toggle modal
    const toggle = () => setOpenModalThongBaoThoiGianVaDiaDiemNghiemThuDeTai(!openModalThongBaoThoiGianVaDiaDiemNghiemThuDeTai);
    const { register, handleSubmit } = useForm({});
    const onSubmit = async (data) => {
        // console.log(data);

        // const formData = new FormData();
        // formData.append("thoigianvadiadiemnghiemthudetai", data.thoigianvadiadiemnghiemthudetai[0]);
        // formData.append("id", infoDetai.id);

        const res = await axios.post(`http://localhost:8080/api/upload-thongbao-thoigian-va-diadiem-nghiemthu-detai`, { data, infoDetai });
        goilai();
        setOpenModalThongBaoThoiGianVaDiaDiemNghiemThuDeTai(!openModalThongBaoThoiGianVaDiaDiemNghiemThuDeTai);
        toast.success('Thêm thời gian và địa điểm nghiệm thu đề tài thành công!.');


    }
    return (
        <Modal isOpen={openModalThongBaoThoiGianVaDiaDiemNghiemThuDeTai} toggle={toggle}>
            <ModalHeader
                onClick={toggle} >Thời gian và địa điểm nghiệm thu đề tài: </ModalHeader>
            <ModalBody>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* <div className="col-sm-12">
                            <label >Thời gian và địa điểm nghiệm thu đề tài:</label>
                            <input
                                ref={register}
                                type='file'
                                className="form-control mt-1 mb-2 form-control"
                                name="thoigianvadiadiemnghiemthudetai"
                                id="thoigianvadiadiemnghiemthudetai"
                                {...register("thoigianvadiadiemnghiemthudetai", { required: true })}
                            // onChange={handleChangeFile}
                            // value={formData}
                            />
                        </div>
                        <br />
                        <p>Tên file: ThoiGianVaDiaDiemNghiemThuDeTai_'Tên đề tài'.pdf</p> */}
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
export default ModalThongBaoThoiGianVaDiaDiemNghiemThuDeTai;
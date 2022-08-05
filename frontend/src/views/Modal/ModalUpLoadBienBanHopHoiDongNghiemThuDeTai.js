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
function ModalUpLoadBienBanHopHoiDongNghiemThuDeTai({ setOpenModalUpLoadBienBanHopHoiDongNghiemThuDeTai, openModalUpLoadBienBanHopHoiDongNghiemThuDeTai, infoDetai, goilai }) {
    //toggle chi danh cho toggle modal
    const toggle = () => setOpenModalUpLoadBienBanHopHoiDongNghiemThuDeTai(!openModalUpLoadBienBanHopHoiDongNghiemThuDeTai);
    const { register, handleSubmit } = useForm({});

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("bienbanhopnghiemthudetai", data.bienbanhopnghiemthudetai[0]);
        formData.append("id", infoDetai.id);

        const res = await axios.post(`http://localhost:8080/api/upload-bien-ban-hop-hoi-dong-nghiem-thu-de-tai`, formData);
        goilai();
        setOpenModalUpLoadBienBanHopHoiDongNghiemThuDeTai(!openModalUpLoadBienBanHopHoiDongNghiemThuDeTai);
        toast.success('UpLoad thành công');

    }
    return (
        <Modal isOpen={openModalUpLoadBienBanHopHoiDongNghiemThuDeTai} toggle={toggle} className='modalchitiet'>
            <ModalHeader
                onClick={toggle} >UpLoad Biên bản họp hội đồng nghiệm thu đề tài</ModalHeader>
            <ModalBody >
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-sm-12">
                            <label >Biên bản họp hội đồng nghiệm thu đề tài:</label>
                            <input
                                ref={register}
                                type='file'
                                className="form-control mt-1 mb-2 form-control"
                                name="bienbanhopnghiemthudetai"
                                id="bienbanhopnghiemthudetai"
                                {...register("bienbanhopnghiemthudetai", { required: true })}
                            // onChange={handleChangeFile}
                            // value={formData}
                            />
                        </div>
                        <br />
                        <p>tên file: 'Mã số đề tài'_bienbanhophoidongnghiemthudetai.pdf</p>
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
export default ModalUpLoadBienBanHopHoiDongNghiemThuDeTai;
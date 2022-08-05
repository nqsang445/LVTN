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
function ModalUpLoadPhieuNhanXetDanhGiaSauNghiemThu({ setModalUpLoadPhieuNhanXetDanhGiaSauNghiemThu, openModalUpLoadPhieuNhanXetDanhGiaSauNghiemThu, infoDetai, goilai }) {
    //toggle chi danh cho toggle modal
    const toggle = () => setModalUpLoadPhieuNhanXetDanhGiaSauNghiemThu(!openModalUpLoadPhieuNhanXetDanhGiaSauNghiemThu);
    const { register, handleSubmit } = useForm({});

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("phieunhanxetdanhgia", data.phieunhanxetdanhgia[0]);
        formData.append("id", infoDetai.id);

        const res = await axios.post(`http://localhost:8080/api/upload-phieu-nhan-xet-danh-gia-sau-nghiem-thu`, formData);
        goilai();
        setModalUpLoadPhieuNhanXetDanhGiaSauNghiemThu(!openModalUpLoadPhieuNhanXetDanhGiaSauNghiemThu);
        toast.success('UpLoad thành công');

    }
    return (
        <Modal isOpen={openModalUpLoadPhieuNhanXetDanhGiaSauNghiemThu} toggle={toggle} className='modalchitiet'>
            <ModalHeader
                onClick={toggle} >UpLoad Phiếu nhận xét đánh giá sau nghiệm thu</ModalHeader>
            <ModalBody >
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-sm-12">
                            <label >Phiếu nhận xét đánh giá:</label>
                            <input
                                ref={register}
                                type='file'
                                className="form-control mt-1 mb-2 form-control"
                                name="phieunhanxetdanhgia"
                                id="phieunhanxetdanhgia"
                                {...register("phieunhanxetdanhgia", { required: true })}
                            // onChange={handleChangeFile}
                            // value={formData}
                            />
                        </div>
                        <br />
                        <p>tên file: 'Mã số đề tài'_phieunhanxetdanhgia_saunghiemthu.pdf</p>
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
export default ModalUpLoadPhieuNhanXetDanhGiaSauNghiemThu;
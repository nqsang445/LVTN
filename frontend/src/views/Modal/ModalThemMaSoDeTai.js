import React, { useEffect, useState } from "react";
import axios from "axios";
import './ModalChiTietDeTai.scss'
import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody, CardBody
} from "reactstrap";

import { useForm } from 'react-hook-form';
import moment from 'moment';
import { toast } from "react-toastify";

import fileDownload from 'js-file-download';
import { FaDownload } from 'react-icons/fa';

function ModalThemMaSoDeTai({ setOpenModalThemMaSoDeTai, openModalThemMaSoDeTai, infoDetai, goilai }) {
    //toggle chi danh cho toggle modal
    const toggle = () => setOpenModalThemMaSoDeTai(!openModalThemMaSoDeTai);
    const [data, setData] = useState();

    // useEffect(async () => {
    //     const nhanxetcuahoidong = await axios.post(`http://localhost:8080/api/get-nhanxet-cua-hoidong-detai-chunhiem`, { id: infoDetai.id })
    //     setData(nhanxetcuahoidong.data);
    // }, [infoDetai.id])
    // console.log(data);
    // let handleDownLoadPhieuDanhGia = async (id) => {
    //     // alert('click handleDownLoadPhieuDanhGia')

    //     const downloadPhieuDanhGia = await axios.post(`http://localhost:8080/api/download-PhieuDanhGia`, { id: id })
    //     fileDownload(downloadPhieuDanhGia.data, 'PhieuDanhGia.pdf')
    // }
    // let handleDownLoadBienBanHopHoiDongXetDuyet = async (id) => {
    //     // alert('click handleDownLoadBienBanHopHoiDongXetDuyet')

    //     const downloadBienBanHopHoiDongXetDuyet = await axios.post(`http://localhost:8080/api/download-BienBanHopHoiDongXetDuyet`, { id: id })
    //     fileDownload(downloadBienBanHopHoiDongXetDuyet.data, 'BienBanHopHoiDongXetDuyet.pdf')
    // }
    // let handleDownLoadBienBanHopHoiDongDeCuong = async (id) => {
    //     // alert('click handleDownLoadBienBanHopHoiDongDeCuong')

    //     const downloadBienBanHopHoiDongDeCuong = await axios.post(`http://localhost:8080/api/download-BienBanHopHoiDongDeCuong`, { id: id })
    //     fileDownload(downloadBienBanHopHoiDongDeCuong.data, 'BienBanHopHoiDongDeCuong.pdf')
    // }
    const { register, handleSubmit } = useForm({
        // defaultValues: userEditCVHT
    });
    const onSubmit = async (data) => {
        const nhapMaSoDeTai = await axios.post(`http://localhost:8080/api/nhap-ma-so-de-tai-da-ban-giao`, { data, infoDetai });
        goilai();
        setOpenModalThemMaSoDeTai(!openModalThemMaSoDeTai);
        toast.success('Thêm mã số đề tài thành công');
    }
    return (
        <Modal isOpen={openModalThemMaSoDeTai} toggle={toggle} className='modalchitiet'>
            <ModalHeader
                onClick={toggle} >Thêm mã số cho đề tài: {infoDetai.tendetai}</ModalHeader>
            <ModalBody >
                <div className="row">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>Mã số đề tài đề tài</label>
                        <input type='text' className="form-control"
                            name="masodetai"
                            id="masodetai"
                            {...register("masodetai", { required: true })}
                        /><br />
                        <button type="submit" className="btn btn-primary">Lưu</button>
                    </form>
                </div>
            </ModalBody>
            <ModalFooter>

                <Button color="primary" onClick={toggle} >Cancel</Button>
            </ModalFooter>
        </Modal>
    );
}
export default ModalThemMaSoDeTai;
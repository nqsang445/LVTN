import React from "react";
import axios from "axios";
import { useEffect, useState } from 'react';
import moment from 'moment';
import fileDownload from 'js-file-download';
import { FaDownload } from 'react-icons/fa';
import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody
} from "reactstrap";
function ModalDanhGiaCuaHoiDongNghiemThuDeTai({ setOpenModalDanhGiaCuaHoiDongNghiemThuDeTai, openModalDanhGiaCuaHoiDongNghiemThuDeTai, infoDetai, goilai }) {
    //toggle chi danh cho toggle modal
    const toggle = () => setOpenModalDanhGiaCuaHoiDongNghiemThuDeTai(!openModalDanhGiaCuaHoiDongNghiemThuDeTai);
    const [data, setData] = useState();

    useEffect(async () => {
        const data = await axios.post(`http://localhost:8080/api/get-all-ket-qua-nghiemthu-detai`, { id: infoDetai.id })
        setData(data.data);
    }, [infoDetai.id])
    let handleDownLoadPhieuDanhGia = async (id) => {
        // alert('click handleDownLoadPhieuDanhGia')

        const handleDownLoadPhieuDanhGia = await axios.post(`http://localhost:8080/api/download-PhieuDanhGiaSauNghiemThu`, { id: id })
        fileDownload(handleDownLoadPhieuDanhGia.data, 'PhieuDanhGia.pdf')
    }
    let handleDownLoadPhieuNhanXetDanhGia = async (id) => {
        // alert('click handleDownLoadBienBanHopHoiDongDeCuong')

        const handleDownLoadPhieuNhanXetDanhGia = await axios.post(`http://localhost:8080/api/download-PhieuNhanXetDanhGia`, { id: id })
        fileDownload(handleDownLoadPhieuNhanXetDanhGia.data, 'PhieuNhanXetDanhGia.pdf')
    }
    let handleDownLoadBienBanHopHoiDongNghiemThu = async (id) => {
        // alert('click handleDownLoadBienBanHopHoiDongDeCuong')

        const handleDownLoadBienBanHopHoiDongNghiemThu = await axios.post(`http://localhost:8080/api/download-BienBanHopHoiDongNghiemThu`, { id: id })
        fileDownload(handleDownLoadBienBanHopHoiDongNghiemThu.data, 'BienBanHopHoiDongNghiemThu.pdf')
    }

    return (
        <Modal isOpen={openModalDanhGiaCuaHoiDongNghiemThuDeTai} toggle={toggle}>
            <ModalHeader
                onClick={toggle} >Đánh giá của hội đồng nghiệm thu đề tài: </ModalHeader>
            <ModalBody>
                <div>
                    <table className="table-bordered table">
                        <thead>
                            {data && data.length > 0 ?
                                data.map((item, index) => {
                                    return (<>
                                        <tr>
                                            <th>Phiếu đánh giá</th>
                                            {item.phieudanhgia ?
                                                <td>
                                                    <button
                                                        className="btn btn-success"
                                                        onClick={() => handleDownLoadPhieuDanhGia(item.id_detai)}
                                                    >
                                                        <FaDownload /> <td>{item.phieudanhgia.substring(33)}</td>
                                                    </button>
                                                </td>
                                                :
                                                <td>Đang cập nhật...</td>
                                            }
                                        </tr>
                                        <tr>
                                            <th>Phiếu nhận xét đánh giá</th>
                                            {item.phieunhanxetdanhgia ?
                                                <td>
                                                    <button
                                                        className="btn btn-success"
                                                        onClick={() => handleDownLoadPhieuNhanXetDanhGia(item.id_detai)}

                                                    >
                                                        <FaDownload /> <td>{item.phieunhanxetdanhgia.substring(40)}</td>
                                                    </button>
                                                </td>
                                                :
                                                <td>Đang cập nhật...</td>
                                            }
                                        </tr>
                                        <tr>
                                            <th>Biên bản họp hội đồng nghiệm thu đề tài</th>
                                            {item.bienbanhopnghiemthudetai ?
                                                <td>
                                                    <button
                                                        className="btn btn-success"
                                                        onClick={() => handleDownLoadBienBanHopHoiDongNghiemThu(item.id_detai)}

                                                    >
                                                        <FaDownload /> <td>{item.bienbanhopnghiemthudetai.substring(40)}</td>
                                                    </button>
                                                </td>
                                                :
                                                <td>Đang cập nhật...</td>
                                            }
                                        </tr>

                                    </>);
                                })
                                :
                                <>
                                    <tr>
                                        <th>Phiếu đánh giá</th>
                                        <td>Đang cập nhật...</td>
                                    </tr>
                                    <tr>
                                        <th>Phiếu nhận xét đánh giá</th>
                                        <td>Đang cập nhật...</td>
                                    </tr>
                                    <tr>
                                        <th>Biên bản họp hội đồng nghiệm thu đề tài</th>
                                        <td>Đang cập nhật...</td>
                                    </tr>
                                </>
                            }

                        </thead>
                    </table>
                </div>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={toggle} >Cancel</Button>
            </ModalFooter>
        </Modal>
    );
}
export default ModalDanhGiaCuaHoiDongNghiemThuDeTai;
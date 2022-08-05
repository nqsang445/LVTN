import React, { useEffect, useState } from "react";
import axios from "axios";
import './ModalChiTietDeTai.scss'
import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody, CardBody
} from "reactstrap";

import { useForm } from 'react-hook-form';
import moment from 'moment';

import fileDownload from 'js-file-download';
import { FaDownload } from 'react-icons/fa';

function ModalNhanXetCuaHoiDong({ setOpenModalNhanXetCuaHoiDong, openModalNhanXetCuaHoiDong, infoDetai, goilai }) {
    //toggle chi danh cho toggle modal
    const toggle = () => setOpenModalNhanXetCuaHoiDong(!openModalNhanXetCuaHoiDong);
    const [data, setData] = useState();

    useEffect(async () => {
        const nhanxetcuahoidong = await axios.post(`http://localhost:8080/api/get-nhanxet-cua-hoidong-detai-chunhiem`, { id: infoDetai.id })
        setData(nhanxetcuahoidong.data);
    }, [infoDetai.id])
    // console.log(data);
    let handleDownLoadPhieuDanhGia = async (id) => {
        // alert('click handleDownLoadPhieuDanhGia')

        const downloadPhieuDanhGia = await axios.post(`http://localhost:8080/api/download-PhieuDanhGia`, { id: id })
        fileDownload(downloadPhieuDanhGia.data, 'PhieuDanhGia.pdf')
    }
    let handleDownLoadBienBanHopHoiDongXetDuyet = async (id) => {
        // alert('click handleDownLoadBienBanHopHoiDongXetDuyet')

        const downloadBienBanHopHoiDongXetDuyet = await axios.post(`http://localhost:8080/api/download-BienBanHopHoiDongXetDuyet`, { id: id })
        fileDownload(downloadBienBanHopHoiDongXetDuyet.data, 'BienBanHopHoiDongXetDuyet.pdf')
    }
    let handleDownLoadBienBanHopHoiDongDeCuong = async (id) => {
        // alert('click handleDownLoadBienBanHopHoiDongDeCuong')

        const downloadBienBanHopHoiDongDeCuong = await axios.post(`http://localhost:8080/api/download-BienBanHopHoiDongDeCuong`, { id: id })
        fileDownload(downloadBienBanHopHoiDongDeCuong.data, 'BienBanHopHoiDongDeCuong.pdf')
    }
    return (
        <Modal isOpen={openModalNhanXetCuaHoiDong} toggle={toggle} className='modalchitiet'>
            <ModalHeader
                onClick={toggle} >Nhận xét của hội đồng: {infoDetai.tendetai}</ModalHeader>
            <ModalBody >
                <div className="row">
                    <table className="table table-bordered">
                        <thead>
                            {data && data.length > 0 ?
                                data.map(item => {
                                    return (<>
                                        <tr>
                                            <th>Phiếu đánh giá</th>
                                            {item.filedanhgia ?
                                                <td>
                                                    <button className="btn btn-success"
                                                        onClick={() => handleDownLoadPhieuDanhGia(item.id_detai)}
                                                    ><FaDownload /> {item.filedanhgia.substring(11)}</button>

                                                </td>
                                                :
                                                <td>Đang cập nhật....</td>

                                            }
                                        </tr>
                                        <tr>
                                            <th>Biên bản hợp hội đồng xét duyệt</th>
                                            {item.bienbanhophoidongxetduyet ?
                                                <td>
                                                    <button className="btn btn-success"
                                                        onClick={() => handleDownLoadBienBanHopHoiDongXetDuyet(item.id_detai)}
                                                    ><FaDownload /> {item.bienbanhophoidongxetduyet.substring(11)}</button>

                                                </td>
                                                :
                                                <td>Đang cập nhật....</td>

                                            }
                                        </tr>
                                        {/* <tr>
                                            <th>Kinh phí đề tài</th>
                                            {item.kinhphidetai ?
                                                <td>{item.kinhphidetai.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} (VNĐ)</td>
                                                :
                                                <td>Đang cập nhật....</td>

                                            }

                                        </tr> */}
                                        <tr>
                                            <th>Kinh phí đề tài do thư ký nhập</th>
                                            {item.kinhphidetaidothukynhap ?
                                                <td>{item.kinhphidetaidothukynhap.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} (VNĐ)</td>
                                                :
                                                <td>Đang cập nhật....</td>

                                            }
                                        </tr>
                                        <tr>
                                            <th>Biên bản hợp hội đồng đề cương</th>
                                            {item.bienbanhophoidongdecuong ?
                                                <td>
                                                    <button className="btn btn-success"
                                                        onClick={() => handleDownLoadBienBanHopHoiDongDeCuong(item.id_detai)}
                                                    ><FaDownload /> {item.bienbanhophoidongdecuong.substring(11)}</button>

                                                </td>
                                                :
                                                <td>Đang cập nhật....</td>

                                            }
                                        </tr>
                                    </>);
                                })
                                :
                                <>
                                    <tr>
                                        <th>Phiếu đánh giá</th>
                                        <td>Đang cập nhật....</td>
                                    </tr>
                                    <tr>
                                        <th>Biên bản hợp hội đồng xét duyệt</th>
                                        <td>Đang cập nhật....</td>
                                    </tr>
                                    {/* <tr>
                                        <th>Kinh phí đề tài</th>
                                        <td>Đang cập nhật....</td>
                                    </tr> */}
                                    <tr>
                                        <th>Kinh phí đề tài do thư ký nhập</th>
                                        <td>Đang cập nhật....</td>
                                    </tr>
                                    <tr>
                                        <th>Biên bản hợp hội đồng đề cương</th>
                                        <td>Đang cập nhật....</td>
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
export default ModalNhanXetCuaHoiDong;
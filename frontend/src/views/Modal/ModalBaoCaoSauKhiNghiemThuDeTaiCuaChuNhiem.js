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
function ModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem({ setOpenModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem, openModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem, infoDetai, goilai }) {
    //toggle chi danh cho toggle modal
    const toggle = () => setOpenModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem(!openModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem);
    const [data, setData] = useState();

    useEffect(async () => {
        const data = await axios.post(`http://localhost:8080/api/get-all-ket-qua-nghiemthu-detai`, { id: infoDetai.id })
        setData(data.data);
    }, [infoDetai.id]);
    let handleDownLoadPhieuGiaiTrinhSauNghiemThu = async (id) => {
        // alert('click handleDownLoadBienBanHopHoiDongDeCuong')

        const handleDownLoadPhieuGiaiTrinhSauNghiemThu = await axios.post(`http://localhost:8080/api/download-PhieuGiaiTrinhSauNghiemThu`, { id: id })
        fileDownload(handleDownLoadPhieuGiaiTrinhSauNghiemThu.data, 'PhieuGiaiTrinhSauNghiemThu.pdf')
    }
    let handleDownLoadFileBaoCaoSauChinhSua = async (id) => {
        // alert('click handleDownLoadBienBanHopHoiDongDeCuong')

        const handleDownLoadFileBaoCaoSauChinhSua = await axios.post(`http://localhost:8080/api/download-FileBaoCaoSauChinhSua`, { id: id })
        fileDownload(handleDownLoadFileBaoCaoSauChinhSua.data, 'FileBaoCaoSauChinhSua.pdf')
    }

    return (
        <Modal isOpen={openModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem} toggle={toggle}>
            <ModalHeader
                onClick={toggle} >Báo cáo sau khi nghiệm thu đề tài của chủ nhiệm: </ModalHeader>
            <ModalBody>
                <div>
                    <table className="table-bordered table">
                        <thead>
                            {data && data.length > 0 ?
                                data.map(item => {
                                    return (<>
                                        <tr>
                                            <th>Phiếu giải trình sau nghiệm thu </th>
                                            {item.phieugiaitrinh ?
                                                <td>
                                                    <button
                                                        className="btn btn-success"
                                                        onClick={() => handleDownLoadPhieuGiaiTrinhSauNghiemThu(item.id_detai)}

                                                    >
                                                        <FaDownload /> <td>{item.phieugiaitrinh.substring(35)}</td>
                                                    </button>
                                                </td>
                                                :
                                                <td>Đang cập nhật...</td>
                                            }
                                        </tr>
                                        <tr>
                                            <th>File báo cáo sau chỉnh sửa</th>
                                            {item.filebaocaosauchinhsua ?
                                                <td>
                                                    <button
                                                        className="btn btn-success"
                                                        onClick={() => handleDownLoadFileBaoCaoSauChinhSua(item.id_detai)}

                                                    >
                                                        <FaDownload /> <td>{item.filebaocaosauchinhsua.substring(30)}</td>
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
                                        <th>Phiếu giải trình sau nghiệm thu </th>
                                        <td>Đang cập nhật...</td>

                                    </tr>
                                    <tr>
                                        <th>File báo cáo sau chỉnh sửa</th>
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
export default ModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem;
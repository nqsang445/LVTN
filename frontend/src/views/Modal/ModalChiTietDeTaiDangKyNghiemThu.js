import React from "react";
import axios from "axios";
import './ModalChiTietDeTai.scss'
import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody, CardBody
} from "reactstrap";
import { FaDownload } from 'react-icons/fa';
import fileDownload from 'js-file-download';
import moment from 'moment';

function ModalChiTietDeTaiDangKyNghiemThu({ setOpenModalEditDeTaiDangKyNghiemThu, openModalEditDeTaiDangKyNghiemThu, infoDetai, goilai }) {
    //toggle chi danh cho toggle modal
    const toggle = () => setOpenModalEditDeTaiDangKyNghiemThu(!openModalEditDeTaiDangKyNghiemThu);

    let handleDownLoadfilethuyetminh = async (id) => {
        const downloadfilethuyetminh = await axios.post(`http://localhost:8080/api/download-filethuyetminh`, { id: id })
        fileDownload(downloadfilethuyetminh.data, 'filethuyetminh.pdf')
    }
    let handleDownLoadphieugiaitrinh = async (id) => {
        const downloadphieugiaitrinh = await axios.post(`http://localhost:8080/api/download-phieugiaitrinh`, { id: id })
        fileDownload(downloadphieugiaitrinh.data, 'phieugiaitrinh.pdf')
    }
    let handleDownLoadThoiGianVaDiaDiemNghiemThuDeTai = async (id) => {
        const handleDownLoadThoiGianVaDiaDiemNghiemThuDeTai = await axios.post(`http://localhost:8080/api/download-ThoiGianVaDiaDiemNghiemThuDeTai`, { id: id })
        fileDownload(handleDownLoadThoiGianVaDiaDiemNghiemThuDeTai.data, 'ThoiGianVaDiaDiemNghiemThuDeTai.pdf')
    }
    return (
        <Modal isOpen={openModalEditDeTaiDangKyNghiemThu} toggle={toggle} className='modalchitiet'>
            <ModalHeader
                onClick={toggle} >Chi tiết đề tài đăng ký nghiệm thu</ModalHeader>
            <ModalBody >
                <table className="table-bordered table">
                    <thead key={infoDetai.id}>
                        <tr >
                            <th>Tên đề tài</th>
                            <td>{infoDetai.tendetai}</td>
                        </tr>
                        {infoDetai.masodetai &&
                            <tr >
                                <th>Mã số đề tài</th>
                                <td>{infoDetai.masodetai}</td>
                            </tr>
                        }

                        <tr >
                            <th>Loại hình ưu tiên</th>
                            <td>{infoDetai.linhvucuutien}</td>
                        </tr>
                        <tr >
                            <th>Lĩnh vực Nghiên cứu</th>
                            <td>{infoDetai.linhvucnghiencuu}</td>
                        </tr>
                        <tr >
                            <th>Loại hình Nghiên cứu</th>
                            <td>{infoDetai.loaihinhnghiencuu}</td>
                        </tr>
                        <tr >
                            <th>Thời gian bắt đầu - kết thúc</th>
                            <td>
                                {moment(infoDetai.thoigianbatdau).format("DD/MM/YYYY")} -
                                {moment(infoDetai.thoigianketthuc).format("DD/MM/YYYY")}
                            </td>
                        </tr>
                        <tr >
                            <th>Thông tin chủ nhiệm đề tài</th>
                            <td>{infoDetai.thongtinchunhiemdetai}</td>
                        </tr>
                        <tr >
                            <th>Thông tin giảng viên hướng dẫn</th>
                            <td>{infoDetai.masogiaovienhuongdan}, {infoDetai.thongtingianvienhuongdan}, {infoDetai.nhiemvu}</td>
                        </tr>
                        <tr >
                            <th>Kinh phí đề tài</th>
                            <td>{infoDetai.kinhphidetai.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} (VNĐ)</td>
                        </tr>
                        <tr >
                            <th colSpan='2'>Thành viên tham gia thực hiện đề tài: </th>
                        </tr>

                        <tr >
                            <th>+ Thành viên 1</th>
                            <td>{infoDetai.thongtinthanhvien1}</td>
                        </tr>
                        <tr >
                            <th>+ Thành viên 2</th>
                            <td>{infoDetai.thongtinthanhvien2}</td>
                        </tr>
                        {infoDetai.thongtinthanhvien3 !== '' &&
                            <tr >
                                <th>+ Thành viên 3</th>
                                <td>{infoDetai.thongtinthanhvien3}</td>
                            </tr>
                        }

                        {infoDetai.thongtinthanhvien4 !== '' &&
                            <tr >
                                <th>+ Thành viên 4</th>
                                <td>{infoDetai.thongtinthanhvien4}</td>
                            </tr>
                        }
                        {infoDetai.thongtinthanhvien5 !== '' &&
                            <tr >
                                <th>+ Thành viên 5</th>
                                <td>{infoDetai.thongtinthanhvien5}</td>
                            </tr>
                        }

                        <tr >
                            <th>File thuyết minh</th>
                            {infoDetai.filethuyetminh ?
                                <td>
                                    <button className="btn btn-success"
                                        onClick={() => handleDownLoadfilethuyetminh(infoDetai.id)}
                                    ><FaDownload /> {infoDetai.filethuyetminh.substring(23)}</button>

                                </td>
                                :
                                <td>Đang cập nhật....</td>
                            }
                        </tr>
                        <tr >
                            <th>Phiếu giải trình</th>
                            {infoDetai.phieugiaitrinh ?
                                <td>
                                    <button className="btn btn-success"
                                        onClick={() => handleDownLoadphieugiaitrinh(infoDetai.id)}
                                    ><FaDownload /> {infoDetai.phieugiaitrinh.substring(11)}</button>

                                </td>
                                :
                                <td>Đang cập nhật....</td>
                            }
                        </tr>
                        <tr >
                            <th>Thời gian và địa điểm nghiệm thu đề tài</th>
                            {infoDetai.thoigianvadiadiemnghiemthudetai ?
                                <td>
                                    {/* <button className="btn btn-success"
                                        onClick={() => handleDownLoadThoiGianVaDiaDiemNghiemThuDeTai(infoDetai.id)}
                                    ><FaDownload /> {infoDetai.thoigianvadiadiemnghiemthudetai.substring(40)}</button> */}
                                    {infoDetai.thoigianvadiadiemnghiemthudetai}
                                </td>
                                :
                                <td>Đang cập nhật....</td>
                            }
                            {/* <td>Đang cập nhật....</td> */}
                        </tr>

                        {/* <tr >
                            <th>Thời gian và địa điểm bảo vệ đề cương</th>
                            {infoDetai.thoigianvadiadiembaovedecuong ?
                                <td>
                                    <button className="btn btn-success"
                                        onClick={() => handleDownLoadThoiGianVaDiaDiemBaoVeDeCuong(infoDetai.id)}
                                    ><FaDownload /> {infoDetai.thoigianvadiadiembaovedecuong.substring(11)}</button>

                                </td>
                                :
                                <td>Đang cập nhật....</td>
                            }
                        </tr> */}
                    </thead>

                </table>

            </ModalBody>
            <ModalFooter>

                <Button color="primary" onClick={toggle} >Cancel</Button>
            </ModalFooter>
        </Modal>
    );
}
export default ModalChiTietDeTaiDangKyNghiemThu;
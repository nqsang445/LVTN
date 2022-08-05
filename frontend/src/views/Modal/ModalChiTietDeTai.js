import React from "react";
import axios from "axios";
import './ModalChiTietDeTai.scss'
import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody, CardBody
} from "reactstrap";
import moment from 'moment';
import { FaRegStickyNote, FaTrash, FaDownload } from 'react-icons/fa';
import fileDownload from 'js-file-download';
function ModalChiTietDeTai({ setOpenModalChiTietDeTai, openModalChiTietDeTai, thongtindetai }) {
    //toggle chi danh cho toggle modal
    const toggle = () => setOpenModalChiTietDeTai(!openModalChiTietDeTai);
    // console.log(deleteSVCL);
    // let deletUserId = async () => {
    //     try {
    //         await doDeleteUserId(deleteSVCL);
    //         setOpenModalDeleteUserSVCLC(!openModalDeleteUserSVCLC);
    //     } catch (e) {
    //         console.log(e)
    //     }

    // }
    let handleDownLoadfilethuyetminh = async (id) => {
        const downloadfilethuyetminh = await axios.post(`http://localhost:8080/api/download-filethuyetminh`, { id: id })
        fileDownload(downloadfilethuyetminh.data, 'filethuyetminh.pdf')
    }
    return (
        <Modal isOpen={openModalChiTietDeTai} toggle={toggle}>
            <ModalHeader
                onClick={toggle} >Chi tiết đề tài</ModalHeader>
            <ModalBody >
                <table className="table-bordered table modal-width" >
                    <thead key={thongtindetai.id}>
                        <tr >
                            <th>Tên đề tài</th>
                            <td>{thongtindetai.tendetai}</td>
                        </tr>
                        {thongtindetai.masodetai &&
                            <tr >
                                <th>Mã số đề tài</th>
                                <td>{thongtindetai.masodetai}</td>
                            </tr>
                        }
                        <tr >
                            <th>Loại hình ưu tiên</th>
                            <td>{thongtindetai.linhvucuutien}</td>
                        </tr>
                        <tr >
                            <th>Lĩnh vực Nghiên cứu</th>
                            <td>{thongtindetai.linhvucnghiencuu}</td>
                        </tr>
                        <tr >
                            <th>Loại hình Nghiên cứu</th>
                            <td>{thongtindetai.loaihinhnghiencuu}</td>
                        </tr>
                        <tr >
                            <th>Thời gian bắt đầu - kết thúc</th>
                            <td>
                                {moment(thongtindetai.thoigianbatdau).format("DD/MM/YYYY")} -
                                {moment(thongtindetai.thoigianketthuc).format("DD/MM/YYYY")}
                            </td>
                        </tr>
                        <tr >
                            <th>Thông tin chủ nhiệm đề tài</th>
                            <td>{thongtindetai.thongtinchunhiemdetai}</td>
                        </tr>
                        <tr >
                            <th>Thông tin giảng viên hướng dẫn</th>
                            <td>{thongtindetai.masogiaovienhuongdan}, {thongtindetai.thongtingianvienhuongdan}, {thongtindetai.nhiemvu}</td>
                        </tr>
                        <tr >
                            <th>Kinh phí đề tài</th>
                            <td>{thongtindetai.kinhphidetai.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} (VNĐ)</td>
                        </tr>
                        <tr >
                            <th colSpan='2'>Thành viên tham gia thực hiện đề tài: </th>
                        </tr>

                        <tr >
                            <th>+ Thành viên 1</th>
                            <td>{thongtindetai.thongtinthanhvien1}</td>
                        </tr>
                        <tr >
                            <th>+ Thành viên 2</th>
                            <td>{thongtindetai.thongtinthanhvien2}</td>
                        </tr>
                        {thongtindetai.thongtinthanhvien3 !== '' &&
                            <tr >
                                <th>+ Thành viên 3</th>
                                <td>{thongtindetai.thongtinthanhvien3}</td>
                            </tr>
                        }

                        {thongtindetai.thongtinthanhvien4 !== '' &&
                            <tr >
                                <th>+ Thành viên 4</th>
                                <td>{thongtindetai.thongtinthanhvien4}</td>
                            </tr>
                        }
                        {thongtindetai.thongtinthanhvien5 !== '' &&
                            <tr >
                                <th>+ Thành viên 5</th>
                                <td>{thongtindetai.thongtinthanhvien5}</td>
                            </tr>
                        }
                        <tr >
                            <th>File thuyết minh</th>
                            <td style={{ position: 'relative' }}>
                                <button className="btn btn-success"
                                    onClick={() => handleDownLoadfilethuyetminh(thongtindetai.id)}
                                >
                                    <FaDownload />  {thongtindetai.filethuyetminh.substring(23)}
                                </button>

                            </td>
                        </tr>
                    </thead>

                </table>

            </ModalBody>
            <ModalFooter>

                <Button color="primary" onClick={toggle} >Cancel</Button>
            </ModalFooter>
        </Modal>
    );
}
export default ModalChiTietDeTai;
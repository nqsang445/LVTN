import React from "react";
import axios from "axios";
import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody
} from "reactstrap";
import moment from 'moment';
import { FaDownload } from "react-icons/fa";
import fileDownload from 'js-file-download';

function ModalDonXinNghiemThuDeTai({ setOpenModalDonXinNghiemThuDeTai, openModalDonXinNghiemThuDeTai, infoDetai, goilai }) {
    //toggle chi danh cho toggle modal
    const toggle = () => setOpenModalDonXinNghiemThuDeTai(!openModalDonXinNghiemThuDeTai);

    let handleDownLoadDonDangKyBaoCao = async (id) => {
        const handleDownLoadDonDangKyBaoCao = await axios.post(`http://localhost:8080/api/download-DonDangKyBaoCao`, { id: id })
        fileDownload(handleDownLoadDonDangKyBaoCao.data, 'DonDangKyBaoCao.pdf')
    }
    let handleDownLoadFileBaoCaoNghiemThu = async (id) => {
        const handleDownLoadFileBaoCaoNghiemThu = await axios.post(`http://localhost:8080/api/download-FileBaoCaoNghiemThu`, { id: id })
        fileDownload(handleDownLoadFileBaoCaoNghiemThu.data, 'FileBaoCaoNghiemThu.pdf')
    }

    return (
        <Modal isOpen={openModalDonXinNghiemThuDeTai} toggle={toggle}>
            <ModalHeader
                onClick={toggle} >Đơn xin nghiệm thu đề tài: </ModalHeader>
            <ModalBody>
                <div>
                    <table className="table-bordered table">
                        <thead>
                            <tr>
                                <th>Đơn đăng ký báo cáo</th>
                                <td>
                                    <button className="btn btn-success"
                                        onClick={() => handleDownLoadDonDangKyBaoCao(infoDetai.id)}
                                    ><FaDownload /> {infoDetai.dondangkybaocao.substring(24)}</button>

                                </td>
                            </tr>
                            <tr>
                                <th>File báo cáo nghiệm thu</th>
                                <td>
                                    <button className="btn btn-success"
                                        onClick={() => handleDownLoadFileBaoCaoNghiemThu(infoDetai.id)}
                                    ><FaDownload /> {infoDetai.filebaocaonghiemthu.substring(28)}</button>

                                </td>
                            </tr>
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
export default ModalDonXinNghiemThuDeTai;
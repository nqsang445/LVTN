import React, { useEffect, useState } from "react";
import axios from "axios";
import './ModalChiTietDeTai.scss'
import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody, CardBody
} from "reactstrap";

import { useForm } from 'react-hook-form';


function ModalThongTinHoiDong({ setOpenModalThongTinHoiDong, openModalThongTinHoiDong, thongtindetai, goilai }) {
    //toggle chi danh cho toggle modal
    const toggle = () => setOpenModalThongTinHoiDong(!openModalThongTinHoiDong);
    const { register, handleSubmit } = useForm({
        // defaultValues: userEditCVHT
    });
    const [data, setData] = useState();
    const [chutich, setChuTich] = useState();
    const [thuky, setThuky] = useState();
    const [thanhvien1, setThanhvien1] = useState();
    const [thanhvien2, setThanhvien2] = useState();
    const [thanhvien3, setThanhvien3] = useState();

    useEffect(async () => {
        let res = await axios.post(`http://localhost:8080/api/get-info-hoidong-detai`, { id: thongtindetai.id })
        setChuTich(res.data.chutich.firstName + ' ' + res.data.chutich.lastName);
        setThuky(res.data.thuky.firstName + ' ' + res.data.thuky.lastName);
        setThanhvien1(res.data.thanhvien1.firstName + ' ' + res.data.thanhvien1.lastName);
        setThanhvien2(res.data.thanhvien2.firstName + ' ' + res.data.thanhvien2.lastName);
        setThanhvien3(res.data.thanhvien3.firstName + ' ' + res.data.thanhvien3.lastName);
        setData(res.data.hoidong);
    }, [])

    return (
        <Modal isOpen={openModalThongTinHoiDong} toggle={toggle} className='modalchitiet'>
            <ModalHeader
                onClick={toggle} >Hội đồng để tài: {thongtindetai.tendetai}</ModalHeader>
            <ModalBody >
                <table className="table-bordered table">
                    <thead>
                        {data && data.length > 0 ?
                            data.map((item, index) => {
                                return (<>

                                    <tr>
                                        <th>Chủ tịch</th>
                                        <td>: {item.chutich}, {chutich}</td>
                                    </tr>
                                    <tr>
                                        <th>Thư ký</th>
                                        <td>: {item.thuky}, {thuky}</td>
                                    </tr>
                                    <tr>
                                        <th>Thành viên</th>
                                        <td>: {item.thanhvien1}, {thanhvien1}</td>
                                    </tr>
                                    <tr>
                                        <th>Thành viên</th>
                                        <td>: {item.thanhvien2}, {thanhvien2}</td>
                                    </tr>
                                    <tr>
                                        <th>Thành viên</th>
                                        <td>: {item.thanhvien3}, {thanhvien3}</td>
                                    </tr>
                                </>);
                            })
                            :
                            <>
                                <tr>
                                    <th>Chủ tịch</th>
                                    <td>: Đang cập nhật...</td>
                                </tr>
                                <tr>
                                    <th>Thư ký</th>
                                    <td>: Đang cập nhật...</td>
                                </tr>
                                <tr>
                                    <th>Thành viên</th>
                                    <td>: Đang cập nhật...</td>
                                </tr>
                                <tr>
                                    <th>Thành viên</th>
                                    <td>: Đang cập nhật...</td>
                                </tr>
                                <tr>
                                    <th>Thành viên</th>
                                    <td>: Đang cập nhật...</td>
                                </tr>
                            </>
                        }

                    </thead>

                </table>



            </ModalBody>
            <ModalFooter>

                <Button color="primary" onClick={toggle} >Cancel</Button>
            </ModalFooter>
        </Modal>
    );
}
export default ModalThongTinHoiDong;
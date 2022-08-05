import React, { useEffect, useState } from "react";
import axios from "axios";
import './ModalChiTietDeTai.scss'
import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody, CardBody
} from "reactstrap";
import { FaTrash, FaEdit, FaSearch, FaDownload, FaStickyNote } from 'react-icons/fa';

import { set, useForm } from 'react-hook-form';
import ModalChiTietThongKeDeTaiGVHD from "./ModalChiTietThongKeDeTaiGVHD";

function ModalThongKeDeTaiHuongDanGVHD({ setOpenModalThongKeDeTaiHuongDanGVHD, openModalThongKeDeTaiHuongDanGVHD, infoGVHD, getListUserChuNhiem }) {
    //toggle chi danh cho toggle modal
    const toggle = () => setOpenModalThongKeDeTaiHuongDanGVHD(!openModalThongKeDeTaiHuongDanGVHD);
    const { register, handleSubmit } = useForm({
        // defaultValues: userEditCVHT
    });
    const [data, setData] = useState();
    const [openModalChiTietThongKeDeTaiGVHD, setOpenModalChiTietThongKeDeTaiGVHD] = useState(false);
    const [infodetai, setInfodetai] = useState();

    const onSubmit = async (data) => {
        let res = await axios.post(`http://localhost:8080/api/get-detai-huongdan-giaovienhuongdan`, { data, infoGVHD })
        setData(res.data);
        // setOpenModalThongKeDeTaiHuongDanGVHD(!openModalThongKeDeTaiHuongDanGVHD);
    }
    // console.log(data)
    let handleChiTietThongKeDeTaiGVHD = (item) => {
        setOpenModalChiTietThongKeDeTaiGVHD(!openModalChiTietThongKeDeTaiGVHD)
        setInfodetai(item);
    }
    return (
        <>
            {openModalChiTietThongKeDeTaiGVHD &&
                <ModalChiTietThongKeDeTaiGVHD
                    openModalChiTietThongKeDeTaiGVHD={openModalChiTietThongKeDeTaiGVHD}
                    setOpenModalChiTietThongKeDeTaiGVHD={setOpenModalChiTietThongKeDeTaiGVHD}
                    thongtindetai={infodetai}
                />
            }
            <Modal isOpen={openModalThongKeDeTaiHuongDanGVHD} toggle={toggle} className='modalchitiet'>
                <ModalHeader
                    onClick={toggle} >Thống kê đề tài hướng dẫn: </ModalHeader>
                <ModalBody >
                    <p>Mã số Giáo viên: {infoGVHD.account}</p>
                    <p>Họ và tên: {infoGVHD.firstName} {infoGVHD.lastName}</p>
                    <p>Email: {infoGVHD.email}</p>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* <label >Thời gian:</label> */}
                            <input
                                ref={register}
                                type='date'
                                className=""
                                name="thoigian"
                                id="thoigian"
                                {...register("thoigian", { required: true })}
                            // onChange={handleChangeFile}
                            // value={formData}
                            />&nbsp;
                            <button className="btn btn-primary"><FaSearch /></button>
                        </form>
                    </div>
                    {/* thong tin de tai  */}
                    <div>
                        <table className="table  table-bordered text-center" id="table-chunhiem">
                            <thead className="thead-dark">
                                <tr>
                                    <th>STT</th>
                                    <th>Tên đề tài</th>
                                    <th>Mã số đề tài</th>
                                    <th>Chủ Nhiệm</th>
                                    <th>Chi Tiết</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data && data.length > 0 ?
                                    data.map((item, index) => {
                                        return (<>
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{item.tendetai}</td>
                                                <td>{item.masodetai}</td>
                                                <td>{item.thongtinthanhvien1}</td>
                                                <td>
                                                    <button className="btn btn-primary"
                                                        onClick={() => handleChiTietThongKeDeTaiGVHD(item)}
                                                    ><FaStickyNote /></button>
                                                </td>
                                            </tr>
                                        </>);
                                    })
                                    :
                                    <tr>
                                        <td colSpan='5'> Chưa có đề tài</td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </ModalBody>
                <ModalFooter>

                    <Button color="primary" onClick={toggle} >Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}
export default ModalThongKeDeTaiHuongDanGVHD;
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
function ModalXacNhanHoanThanhDeTai({ setOpenModalXacNhanHoanThanhDeTai, openModalXacNhanHoanThanhDeTai, idDeTai, goilaiKhiXacNhanHoanThanhDeTai, goilai }) {
    //toggle chi danh cho toggle modal
    const toggle = () => setOpenModalXacNhanHoanThanhDeTai(!openModalXacNhanHoanThanhDeTai);
    const { register, handleSubmit } = useForm({});
    let handleClickXacNhanHoanThanhDeTai = async (DeTai) => {
        // alert(JSON.stringify(DeTai))
        let infoDeTai = await axios.post(`http://localhost:8080/api/xac-nhan-hoan-thanh-de-tai`, DeTai);
        goilai();
        setOpenModalXacNhanHoanThanhDeTai(!openModalXacNhanHoanThanhDeTai);
    }
    // let handleClickXacNhanHoanThanhDeTai = async () => {
    //     try {
    //         await goilaiKhiXacNhanHoanThanhDeTai(idDeTai);
    //         setOpenModalXacNhanHoanThanhDeTai(!openModalXacNhanHoanThanhDeTai);
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }
    return (
        <Modal isOpen={openModalXacNhanHoanThanhDeTai} toggle={toggle} className='modalchitiet'>
            <ModalHeader
                onClick={toggle} >Xác nhận hoàn thành đề tài</ModalHeader>
            <ModalBody >
                <div className="row">
                    <div className="col-sm-12">
                        <p>Xác nhận giao đề tài: {idDeTai.tendetai} ?</p>
                        {/* <p>hoàn thành?</p> */}

                    </div>
                    <div className="col-sm-12">
                        <button type="button" className="btn btn-success"
                            onClick={() => handleClickXacNhanHoanThanhDeTai(idDeTai)}
                        >Xác Nhận?</button>
                    </div>

                </div>
            </ModalBody>
            <ModalFooter>

                <Button color="primary" onClick={toggle} >Cancel</Button>
            </ModalFooter>
        </Modal>
    );
}
export default ModalXacNhanHoanThanhDeTai;
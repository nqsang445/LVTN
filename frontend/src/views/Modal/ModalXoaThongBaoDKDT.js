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
function ModalXoaThongBaoDangKyDeTai({ setOpenModalXoaThongBaoDangKyDeTai, openModalXoaThongBaoDangKyDeTai, goilai2, item }) {
    //toggle chi danh cho toggle modal
    const toggle = () => setOpenModalXoaThongBaoDangKyDeTai(!openModalXoaThongBaoDangKyDeTai);
    // console.log(item)
    let handleXoaDeTaiDuocChon = async () => {
        try {
            const res = await axios.delete(`http://localhost:8080/api/xoa-thong-bao-dang-ky-de-tai`, { data: { id: item.id } });
            goilai2();
            setOpenModalXoaThongBaoDangKyDeTai(!openModalXoaThongBaoDangKyDeTai);
        } catch (e) {
            console(e)
        }

    }
    return (
        <Modal isOpen={openModalXoaThongBaoDangKyDeTai} toggle={toggle} className='modalchitiet'>
            <ModalHeader
                onClick={toggle} >Xóa thông báo đăng ký đề tài</ModalHeader>
            <ModalBody >
                <div className="row">
                    <div className="col-sm-12">
                        Xác định xóa thông báo này?
                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
                <Button color="danger" onClick={handleXoaDeTaiDuocChon} >Xóa</Button>
                <Button color="primary" onClick={toggle} >Cancel</Button>
            </ModalFooter>
        </Modal>
    );
}
export default ModalXoaThongBaoDangKyDeTai;
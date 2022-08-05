import React from "react";
import axios from "axios";
import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody
} from "reactstrap";
import { toast } from "react-toastify";

function ModalXacNhanHoanThanhDeTaiTuAdmin({ setOpenModalXacNhanHoanThanhDeTaiTuAdmin, openModalXacNhanHoanThanhDeTaiTuAdmin, infoDetai, goilai }) {
    //toggle chi danh cho toggle modal
    const toggle = () => setOpenModalXacNhanHoanThanhDeTaiTuAdmin(!openModalXacNhanHoanThanhDeTaiTuAdmin);

    let handleXacNhanHoanThanhDeTaiTuAdmin = async () => {
        const xacnhanhoanthanh = await axios.post(`http://localhost:8080/api/xac-nhan-hoan-thanh-de-tai-tu-admin`, { id: infoDetai.id })
        goilai();
        setOpenModalXacNhanHoanThanhDeTaiTuAdmin(!openModalXacNhanHoanThanhDeTaiTuAdmin);
        toast.success('Xác nhận hoàn thành đề tài thành công');
    }
    return (
        <Modal isOpen={openModalXacNhanHoanThanhDeTaiTuAdmin} toggle={toggle}>
            <ModalHeader
                onClick={toggle} >Xác nhận hoàn thành đề tài : </ModalHeader>
            <ModalBody>
                <div>
                    <p>Xác nhận hoàn thành đề tài:  {infoDetai.tendetai}</p>
                    <button className="btn btn-success"
                        onClick={() => handleXacNhanHoanThanhDeTaiTuAdmin()}
                    >Xác nhận</button>
                </div>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={toggle} >Cancel</Button>
            </ModalFooter>
        </Modal>
    );
}
export default ModalXacNhanHoanThanhDeTaiTuAdmin;
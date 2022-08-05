import React from "react";
import axios from "axios";
import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody
} from "reactstrap";
function ModalHuyDuyetDeTai({ setOpenModalHuyDuyetDeTai, openModalHuyDuyetDeTai, HuyDuyetDeTai, idDetai }) {
    //toggle chi danh cho toggle modal
    const toggle = () => setOpenModalHuyDuyetDeTai(!openModalHuyDuyetDeTai);
    let HuyDuyet = async () => {
        try {
            await HuyDuyetDeTai(idDetai);
            setOpenModalHuyDuyetDeTai(!openModalHuyDuyetDeTai);
        } catch (e) {
            console.log(e)
        }

    }
    return (
        <Modal isOpen={openModalHuyDuyetDeTai} toggle={toggle}>
            <ModalHeader
                onClick={toggle} >Xóa đề tài</ModalHeader>
            <ModalBody>
                Bạn có chắc chắn muốn xóa đề tài này?
            </ModalBody>
            <ModalFooter>
                <Button color="danger" onClick={HuyDuyet}>Xóa</Button>
                <Button color="primary" onClick={toggle} >Cancel</Button>
            </ModalFooter>
        </Modal>
    );
}
export default ModalHuyDuyetDeTai;
import React from "react";
import axios from "axios";
import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody
} from "reactstrap";
function ModalDuyetDeTai({ setOpenModalDuyetDeTai, openModalDuyetDeTai, idDetai, DuyetDeTai }) {
    //toggle chi danh cho toggle modal
    const toggle = () => setOpenModalDuyetDeTai(!openModalDuyetDeTai);
    // console.log(idDetai);
    let Duyet = async () => {
        try {
            await DuyetDeTai(idDetai);
            setOpenModalDuyetDeTai(!openModalDuyetDeTai);
        } catch (e) {
            console.log(e)
        }

    }
    return (
        <Modal isOpen={openModalDuyetDeTai} toggle={toggle}>
            <ModalHeader
                onClick={toggle} >Duyệt đề tài</ModalHeader>
            <ModalBody>
                Bạn có xác nhận duyệt đề tài này?
            </ModalBody>
            <ModalFooter>
                <Button color="success" onClick={Duyet} >Duyệt</Button>
                <Button color="primary" onClick={toggle} >Cancel</Button>
            </ModalFooter>
        </Modal>
    );
}
export default ModalDuyetDeTai;
import React from "react";
import axios from "axios";
import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody
} from "reactstrap";
function ModalDeleteUserSVCLC({ setOpenModalDeleteUserSVCLC, openModalDeleteUserSVCLC, deleteSVCL, doDeleteUserId }) {
    //toggle chi danh cho toggle modal
    const toggle = () => setOpenModalDeleteUserSVCLC(!openModalDeleteUserSVCLC);
    // console.log(deleteSVCL);
    let deletUserId = async () => {
        try {
            await doDeleteUserId(deleteSVCL);
            setOpenModalDeleteUserSVCLC(!openModalDeleteUserSVCLC);
        } catch (e) {
            console.log(e)
        }

    }
    return (
        <Modal isOpen={openModalDeleteUserSVCLC} toggle={toggle}>
            <ModalHeader
                onClick={toggle} >Xóa thông tin sinh viên chất lượng cao</ModalHeader>
            <ModalBody>
                Hành động này sẽ xóa vĩnh viễn, bạn có chắc chắn?.
            </ModalBody>
            <ModalFooter>
                <Button color="danger" onClick={deletUserId}  >Xóa</Button>
                <Button color="primary" onClick={toggle} >Cancel</Button>
            </ModalFooter>
        </Modal>
    );
}
export default ModalDeleteUserSVCLC;
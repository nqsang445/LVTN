import React from "react";
import axios from "axios";
import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody
} from "reactstrap";
function ModalDeleteUserHoiDong({ setOpenModalDeleteUserHD, openModalDeleteUserHD, deleteHD, doDeleteUserId }) {
    //toggle chi danh cho toggle modal
    const toggle = () => setOpenModalDeleteUserHD(!openModalDeleteUserHD);
    // console.log(deleteSVCL);
    let deletUserId = async () => {
        try {
            await doDeleteUserId(deleteHD);
            setOpenModalDeleteUserHD(!openModalDeleteUserHD);
        } catch (e) {
            console.log(e)
        }

    }
    return (
        <Modal isOpen={openModalDeleteUserHD} toggle={toggle}>
            <ModalHeader
                onClick={toggle} >Xóa thông tin thành viên hội dồng</ModalHeader>
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
export default ModalDeleteUserHoiDong;
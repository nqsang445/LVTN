import React from "react";
import axios from "axios";
import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody
} from "reactstrap";
function ModalHuyDeTaiDaDuyet({ setOpenModalHuyDeTaiDaDuyet, openModalHuyDeTaiDaDuyet, infoDetai, goilai }) {
    //toggle chi danh cho toggle modal
    const toggle = () => setOpenModalHuyDeTaiDaDuyet(!openModalHuyDeTaiDaDuyet);
    // let HuyDuyet = async () => {
    //     try {
    //         await HuyDuyetDeTai(idDetai);
    //         setOpenModalHuyDuyetDeTai(!openModalHuyDuyetDeTai);
    //     } catch (e) {
    //         console.log(e)
    //     }

    // }
    let handleClick = async () => {
        // alert(JSON.stringify(infoDetai));
        const res = await axios.post(`http://localhost:8080/api/Huy-De-Tai-Da-Duyet`, infoDetai);
        goilai();
        setOpenModalHuyDeTaiDaDuyet(!openModalHuyDeTaiDaDuyet);
    }
    return (
        <Modal isOpen={openModalHuyDeTaiDaDuyet} toggle={toggle}>
            <ModalHeader
                onClick={toggle} >Xóa đề tài</ModalHeader>
            <ModalBody>
                <p>Bạn có chắc chắn muốn xóa đề tài này?</p>
                <button className="btn btn-danger"
                    onClick={() => handleClick()}
                >Xác nhận</button>
            </ModalBody>
            <ModalFooter>
                {/* <Button color="danger" onClick={HuyDuyet}>Xóa</Button> */}
                <Button color="primary" onClick={toggle} >Cancel</Button>
            </ModalFooter>
        </Modal>
    );
}
export default ModalHuyDeTaiDaDuyet;
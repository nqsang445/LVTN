import React, { useEffect, useState } from "react";
import axios from "axios";
import './ModalChiTietDeTai.scss'
import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody, CardBody
} from "reactstrap";

import { useForm } from 'react-hook-form';
import { toast } from "react-toastify";


function ModalNhapKinhPhiThucHienDeTai({ setOpenModalNhapKinhPhiThucHienDeTai, openModalNhapKinhPhiThucHienDeTai, infoDetai, goilai }) {
    //toggle chi danh cho toggle modal
    const [kinhphidt, setKinhphidt] = useState('15000000');

    const toggle = () => setOpenModalNhapKinhPhiThucHienDeTai(!openModalNhapKinhPhiThucHienDeTai);
    const { register, handleSubmit } = useForm({
        // defaultValues: userEditCVHT
    });
    const onSubmit = async (data) => {
        const nhapKinhPhiThucHienDeTai = await axios.post(`http://localhost:8080/api/nhap-kinhphi-thuchien-detai-chunhiem`, { data, infoDetai });
        setOpenModalNhapKinhPhiThucHienDeTai(!openModalNhapKinhPhiThucHienDeTai);
        toast.success('Thêm kinh phí thực hiện đề tài thành công');
    }

    return (
        <Modal isOpen={openModalNhapKinhPhiThucHienDeTai} toggle={toggle} className='modalchitiet'>
            <ModalHeader
                onClick={toggle} >Nhập kinh phí thực hiện đề tài của chủ nhiệm đề tài: {infoDetai.tendetai}</ModalHeader>
            <ModalBody >
                <div className="row">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>Nhập kinh phí thực hiện đề tài</label>
                        <input type='text' className="form-control"
                            name="kinhphidetai"
                            id="kinhphidetai"
                            value={kinhphidt}
                            {...register("kinhphidetai", { required: true })}
                            onChange={(e) => setKinhphidt(e.target.value)}
                        /><br />
                        <button type="submit" className="btn btn-primary">Lưu</button>
                    </form>
                </div>
            </ModalBody>
            <ModalFooter>

                <Button color="primary" onClick={toggle} >Cancel</Button>
            </ModalFooter>
        </Modal>
    );
}
export default ModalNhapKinhPhiThucHienDeTai;
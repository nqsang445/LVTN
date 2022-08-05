import React from "react";
import axios from "axios";
import { useEffect, useState } from 'react';

import './ModalChiTietDeTai.scss'
import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody, CardBody
} from "reactstrap";
import { useForm, Controller } from 'react-hook-form';
import { FaFilePdf } from 'react-icons/fa';
import NumberFormat from 'react-number-format';

import { toast } from "react-toastify";
function ModalEditKinhPhiDeTaiDoThuKyThucHien({ setOpenModalEditKinhPhiDeTaiDoThuKyThucHien, openModalEditKinhPhiDeTaiDoThuKyThucHien, idDeTai, goilai }) {
    //toggle chi danh cho toggle modal
    const toggle = () => setOpenModalEditKinhPhiDeTaiDoThuKyThucHien(!openModalEditKinhPhiDeTaiDoThuKyThucHien);
    const { register, handleSubmit, control } = useForm({
        defaultValues: {
            NumberFormat: {}
        }
    });
    const [kinhphidt, setKinhphidt] = useState('15000000');

    const onSubmit = async (data) => {
        // alert(JSON.stringify({ data, idDeTai }));
        const nhapKinhPhiThucHienDeTaiDoThuKy = await axios.post(`http://localhost:8080/api/nhap-kinhphi-thuchien-detai-thuky`, { data, idDeTai });
        setOpenModalEditKinhPhiDeTaiDoThuKyThucHien(!openModalEditKinhPhiDeTaiDoThuKyThucHien);
        toast.success('Thêm kinh phí thực hiện đề tài thành công');
    }
    return (
        <Modal isOpen={openModalEditKinhPhiDeTaiDoThuKyThucHien} toggle={toggle} className='modalchitiet'>
            <ModalHeader
                onClick={toggle} >Chỉnh sửa kinh phí đề tài do thư ký thực hiện: </ModalHeader>
            <ModalBody >
                <div className="row">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>Kinh phí thực hiện đề tài do thư ký nhập: (VNĐ)</label>
                        {/* <input type='text' className="form-control"
                            name="kinhphidetaidothukynhap"
                            id="kinhphidetaidothukynhap"
                            value={kinhphidt}
                            {...register("kinhphidetaidothukynhap", { required: true })}
                            onChange={(e) => setKinhphidt(e.target.value)}
                        /> */}
                        <Controller
                            control={control}
                            render={({ field }) =>
                                <NumberFormat
                                    thousandSeparator {...field}
                                    // suffix={'(VNĐ)'}
                                    className="form-control mt-1 mb-2"
                                    placeholder=' Mặc định: 15,000,000 (VNĐ)'
                                />
                            }
                            name="kinhphidetaidothukynhap"

                        // {...register("kinhphidetai", { required: true, minLength: 8, pattern: [0 - 9] })}
                        // onChange={(e) => setKinhphidetai(e.target.value)}
                        // value={kinhphidetai}
                        />
                        <br />
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
export default ModalEditKinhPhiDeTaiDoThuKyThucHien;
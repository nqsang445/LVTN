import React from "react";
import axios from "axios";
import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody
} from "reactstrap";
import { useForm, Controller } from 'react-hook-form';
import { toast } from "react-toastify";

function ModalDangKyNghiemThuDeTai({ setOpenModalDangKyNghiemThuDeTai, openModalDangKyNghiemThuDeTai, infoDetai, goilai }) {
    //toggle chi danh cho toggle modal
    const toggle = () => setOpenModalDangKyNghiemThuDeTai(!openModalDangKyNghiemThuDeTai);
    // console.log(deleteSVCL);
    // let deletUserId = async () => {
    //     try {
    //         await doDeleteUserId(deleteChuNhiem);
    //         setOpenModalDeleteUserChuNhiem(!openModalDeleteUserChuNhiem);
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }
    // let handleclick = async () => {
    //     const donxinnghiemthudetai = await axios.post(`http://localhost:8080/api/don-xin-nghiem-thu-de-tai`, infoDetai)

    // }
    const { register, handleSubmit, control } = useForm({
    });
    const onSubmit = async (data) => {
        // console.log(infoDetai.id);
        const formData = new FormData();
        formData.append("dondangkybaocao", data.dondangkybaocao[0]);
        formData.append("filebaocaonghiemthu", data.filebaocaonghiemthu[0]);
        formData.append("idDetai", infoDetai.id);
        // console.log(formData);
        // formData.append("linhvucuutien", data.linhvucuutien);
        // formData.append("linhvucnghiencuu", data.linhvucnghiencuu);
        // formData.append("loaihinhnghiencuu", data.loaihinhnghiencuu);
        // formData.append("thoigianbatdau", data.thoigianbatdau);
        // formData.append("thoigianketthuc", data.thoigianketthuc);
        // formData.append("thongtinchunhiemdetai", data.thongtinchunhiemdetai);
        // formData.append("thongtingiangvienhuongdan", data.thongtingiangvienhuongdan);
        // formData.append("nhiemvu", data.nhiemvu);
        // formData.append("kinhphidetai", data.kinhphidetai);
        // formData.append("masogiaovienhuongdan", data.masogiaovienhuongdan);
        // formData.append("thongtinthanhvien1", data.thongtinthanhvien1);
        // formData.append("thongtinthanhvien2", data.thongtinthanhvien2);
        // formData.append("thongtinthanhvien3", data.thongtinthanhvien3);
        // formData.append("thongtinthanhvien4", data.thongtinthanhvien4);
        // formData.append("thongtinthanhvien5", data.thongtinthanhvien5);

        const donxinnghiemthudetai = await axios.post(`http://localhost:8080/api/don-xin-nghiem-thu-de-tai`, formData)

        // const res1 = await axios.post(`http://localhost:8080/api/post-formdata`, formData)
        // const res2 = await axios.post(`http://localhost:8080/api/post-formdata`, data)
        goilai();
        setOpenModalDangKyNghiemThuDeTai(!openModalDangKyNghiemThuDeTai);
        toast.success('????ng ky?? nghi????m thu ?????? ta??i tha??nh c??ng!.');

    }


    return (
        <Modal isOpen={openModalDangKyNghiemThuDeTai} toggle={toggle}>
            <ModalHeader
                onClick={toggle} >????n xin nghi????m thu ?????? ta??i: {infoDetai.tendetai}</ModalHeader>
            <ModalBody>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-sm-9">
                                <label htmlFor="dondangkybaocao">????n ????ng ky?? nghi????m thu:</label>
                                <input
                                    type='file'
                                    className="form-control mt-1 mb-2"
                                    name="dondangkybaocao"
                                    id="dondangkybaocao"
                                    {...register("dondangkybaocao", { required: true })}
                                />
                            </div>
                        </div>
                        <p>T??n file: DonDangKyBaoCao_'T??n ?????? ta??i'.pdf</p>
                        <div className="row">
                            <div className="col-sm-9">
                                <label htmlFor="filebaocaonghiemthu">File ba??o ca??o nghi????m thu:</label>
                                <input
                                    type='file'
                                    className="form-control mt-1 mb-2"
                                    name="filebaocaonghiemthu"
                                    id="filebaocaonghiemthu"
                                    {...register("filebaocaonghiemthu", { required: true })}
                                />
                            </div>
                        </div>
                        <p>T??n file: BaoCaoNghiemThu_'T??n ?????? ta??i'.pdf</p>

                        <div className="row">
                            <div className="col-sm-8">
                                <button className="btn btn-success mt-3 ">????ng ky?? nghi????m thu</button>
                            </div>
                        </div>
                    </form>
                </div>
            </ModalBody>
            <ModalFooter>
                {/* <Button color="danger" onClick={deletUserId}  >Xo??a</Button> */}
                <Button color="primary" onClick={toggle} >Cancel</Button>
            </ModalFooter>
        </Modal>
    );
}
export default ModalDangKyNghiemThuDeTai;
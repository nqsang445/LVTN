import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import axios from "axios";

import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody
} from "reactstrap";
import { toast } from "react-toastify";
import moment from 'moment';


function ModalEditDeTaiDangThucHienChuNhiem({ openModalEditDeTaiDangThucHienChuNhiem, setOpenModalEditDeTaiDangThucHienChuNhiem, infoDetai, goilai }) {
    //toggle chi danh cho toggle modal
    const toggle = () => setOpenModalEditDeTaiDangThucHienChuNhiem(!openModalEditDeTaiDangThucHienChuNhiem);
    // console.log(userEditChuNhiem);
    const { register, handleSubmit } = useForm({
        defaultValues: infoDetai
    });
    const onSubmit = async (data) => {
        // console.log(data)
        const listDeTaiEdit = await axios.put(`http://localhost:8080/api/edit-detai-chunhiem-dangthuchien`, data)
        goilai();
        setOpenModalEditDeTaiDangThucHienChuNhiem(!openModalEditDeTaiDangThucHienChuNhiem);
        toast.success('Chỉnh sửa thông tin đề tài thành công!.')
    }
    return (<>
        <Modal isOpen={openModalEditDeTaiDangThucHienChuNhiem} toggle={toggle}>
            <ModalHeader
                onClick={toggle} >Chỉnh sửa thông tin đề tài: {infoDetai.tendetai}</ModalHeader>
            <ModalBody>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-sm-6">
                                <label htmlFor="tendetai">Tên đề tài:</label>
                                <input
                                    type='text'
                                    className="form-control mt-1 mb-2"
                                    name="tendetai"
                                    id="tendetai"
                                    placeholder="Tên đề tài"
                                    {...register("tendetai", { required: true })}
                                />
                            </div>
                            {/* <div className="col-sm-6">
                                <label htmlFor="masodetai">Mã số đề tài:</label>
                                <input
                                    type='text'
                                    className="form-control mt-1 mb-2"
                                    name="masodetai"
                                    id="masodetai"
                                    placeholder="vd: TST2021-.........."
                                    {...register("masodetai", { required: true })}
                                />
                            </div> */}

                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <label htmlFor="linhvucuutien">Lĩnh vực ưu tiên:</label>
                                <select
                                    className="custom-select my-1 mr-sm-2 form-control"
                                    id="linhvucuutien"
                                    name="linhvucuutien"
                                    {...register("linhvucuutien", { required: true })}
                                >
                                    <option selected value='Kỹ thuật công nghệ và công nghệ thông tin-truyền thông'>Kỹ thuật công nghệ và công nghệ thông tin-truyền thông</option>
                                    <option value="Ứng dụng công nghệ cao trong nông nghiệp, thủy sản và môi trường">Ứng dụng công nghệ cao trong nông nghiệp, thủy sản và môi trường</option>
                                    <option value="Quản lý và sử dụng bền vững tài nguyên thiên nhiên">Quản lý và sử dụng bền vững tài nguyên thiên nhiên</option>
                                    <option value="Khoa học Giáo dục, Luật và Xã hội Nhân văn">Khoa học Giáo dục, Luật và Xã hội Nhân văn</option>
                                    <option value="Phát triển kinh tế, thị trường">Phát triển kinh tế, thị trường</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <label htmlFor="linhvucnghiencuu">Lĩnh vực nghiên cứu:</label>
                                <select
                                    className="custom-select my-1 mr-sm-2 form-control"
                                    id="linhvucnghiencuu"
                                    name="linhvucnghiencuu"
                                    {...register("linhvucnghiencuu", { required: true })}
                                >
                                    <option selected value='Khoa học Kỹ thuật và Công nghệ'>Khoa học Kỹ thuật và Công nghệ</option>
                                    <option value="Khoa học Tự nhiên">Khoa học Tự nhiên</option>
                                    <option value="Khoa học Y dược">Khoa học Y dược</option>
                                    <option value="Khoa học Nông nghiệp">Khoa học Nông nghiệp</option>
                                    <option value="Khoa học Xã hội">Khoa học Xã hội</option>
                                    <option value="Khoa học Nhân văn">Khoa học Nhân văn</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <label htmlFor="loaihinhnghiencuu">Loại hình nghiên cứu:</label>
                                <select
                                    className="custom-select my-1 mr-sm-2 form-control"
                                    id="loaihinhnghiencuu"
                                    name="loaihinhnghiencuu"
                                    {...register("loaihinhnghiencuu", { required: true })}
                                >
                                    <option selected value='Ứng dụng'>Ứng dụng</option>
                                    <option value="Cơ bản">Cơ bản</option>
                                    <option value="Triển khai">Triển khai</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <label htmlFor="thoigianbatdau">Thời gian bắt đầu:</label>
                                <input
                                    type='date'
                                    className="form-control mt-1 mb-2"
                                    name="thoigianbatdau"
                                    id="thoigianbatdau"
                                    {...register("thoigianbatdau", { required: true })}
                                />
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="thoigianketthuc">Thời gian kết thúc:</label>
                                <input
                                    type='date'
                                    className="form-control mt-1 mb-2"
                                    name="thoigianketthuc"
                                    id="thoigianketthuc"
                                    {...register("thoigianketthuc", { required: true })}
                                />
                            </div>

                            {/* <div className="col-sm-4">
                            <label htmlFor="thoigianvadiadiembaovedecuong">Thời gian và địa điểm bảo vệ đề cương:</label>
                        </div> */}
                        </div>

                        <div className="row">
                            <div className="col-sm-12">
                                <label htmlFor="thongtinchunhiemdetai">Thông tin chủ nhiệm đề tài:</label>
                                <input
                                    type='text'
                                    className="form-control mt-1 mb-2 form-control inputHeight"
                                    name="thongtinchunhiemdetai"
                                    id="thongtinchunhiemdetai"
                                    {...register("thongtinchunhiemdetai", { required: true })}
                                // onChange={(e) => setInfoUser(e.target.value)}
                                // value={infoUser}
                                // value={user.account + ',' + user.firstName + user.lastName + ','}
                                />
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <label htmlFor="thongtingiangvienhuongdan ">Thông tin giảng viên hướng dẫn:</label>
                                <input
                                    type='text'
                                    className="form-control mt-1 mb-2 form-control inputHeight"
                                    name="thongtingianvienhuongdan"
                                    id="thongtingianvienhuongdan"
                                    {...register("thongtingianvienhuongdan", { required: true })}
                                // onChange={(e) => setInfoUser2(e.target.value)}
                                // value={infoUser2}
                                />
                                <label>( Họ tên, mã số cán bộ, đơn vị công tác, lĩnh vực chuyên môn, và nhiệm vụ )</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-4">
                                <button className="btn btn-success mt-3 ">Lưu</button>
                            </div>
                        </div>
                    </form>
                </div>

                {/* <table className="border table">
                    <thead key={infoDetai.id}>
                        <tr >
                            <th>Tên đề tài</th>
                            <td>{infoDetai.tendetai}</td>
                        </tr>
                        <tr >
                            <th>Mã số đề tài</th>
                            <td>{infoDetai.masodetai}</td>
                        </tr>
                        <tr >
                            <th>Loại hình ưu tiên</th>
                            <td>{infoDetai.linhvucuutien}</td>
                        </tr>
                        <tr >
                            <th>Lĩnh vực Nghiên cứu</th>
                            <td>{infoDetai.linhvucnghiencuu}</td>
                        </tr>
                        <tr >
                            <th>Loại hình Nghiên cứu</th>
                            <td>{infoDetai.loaihinhnghiencuu}</td>
                        </tr>
                        <tr >
                            <th>Thời gian bắt đầu - kết thúc</th>
                            <td>
                                {moment(infoDetai.thoigianbatdau).format("DD/MM/YYYY")} -
                                {moment(infoDetai.thoigianketthuc).format("DD/MM/YYYY")}
                            </td>
                        </tr>
                        <tr >
                            <th>Thông tin chủ nhiệm đề tài</th>
                            <td>{infoDetai.thongtinchunhiemdetai}</td>
                        </tr>
                        <tr >
                            <th>Thông tin giảng viên hướng dẫn</th>
                            <td>{infoDetai.thongtingianvienhuongdan}</td>
                        </tr>



                    </thead>

                </table> */}

            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={toggle} >Cancel</Button>
            </ModalFooter>
        </Modal>

    </>
    );
}
export default ModalEditDeTaiDangThucHienChuNhiem;
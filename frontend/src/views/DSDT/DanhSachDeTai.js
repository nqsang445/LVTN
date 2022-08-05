import React from "react";
import { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import './DanhSachDeTai.scss';
// import { useStore, actions } from "../../store";
import { FaStickyNote, FaUpload, FaEdit, FaSearch } from 'react-icons/fa';
import { useParams } from "react-router-dom";
import axios from "axios";
import ModalChiTietDeTaiDangThucHienChuNhiem from "../Modal/ModalChiTietDeTaiDangThucHien_ChuNhiem";
import ModalChiTietDeTaiDangThucHienChuNhiemCOPY from "../Modal/ModalChiTietDeTaiDangThucHien_ChuNhiem_COPY";
// import ModalUpLoadFileThuyetMinh from "../Modal/ModalUpLoadFileThuyetMinh";
// import ModalUpLoadPhieuGiaiTrinh from "../Modal/ModalUpLoadPhieuGiaiTrinh";
// import ModalEditDeTaiDangThucHienChuNhiem from "../Modal/ModalEditDeTaiDangThucHienChuNhiem";
// import ModalNhanXetCuaHoiDong from "../Modal/ModalNhanXetHoiDong";
// import ModalNhapKinhPhiThucHienDeTai from "../Modal/ModalNhapKinhPhiDeTaiChuNhiem";

import moment from 'moment';
import { useForm } from 'react-hook-form';

function DanhSachDeTai() {
    const [data, setData] = useState();
    const [openModalChiTietDeTaiDangThucHienChuNhiem, setOpenModalChiTietDeTaiDangThucHienChuNhiem] = useState(false);
    const [infoDetai, setInfoDetai] = useState();

    const [openModalUpLoadFileThuyetMinh, setOpenModalUpLoadFileThuyetMinh] = useState(false);
    const [openModalUpLoadPhieuGiaiTrinh, setOpenModalUpLoadPhieuGiaiTrinh] = useState(false);
    const [idDeTai, setIdDeTai] = useState();

    const [openModalEditDeTaiDangThucHienChuNhiem, setOpenModalEditDeTaiDangThucHienChuNhiem] = useState(false);

    const [openModalNhanXetCuaHoiDong, setOpenModalNhanXetCuaHoiDong] = useState(false);
    const [openModalNhapKinhPhiThucHienDeTai, setOpenModalNhapKinhPhiThucHienDeTai] = useState(false);
    const { register, handleSubmit } = useForm({});

    useEffect(async () => {
        const listDeTai = await axios.get(`http://localhost:8080/api/danh-sach-de-tai-da-hoan-thanh-home`);
        setData(listDeTai.data);
    }, [])
    let handleModalChiTietDetaiDangThucHienChuNhiem = (item) => {
        setOpenModalChiTietDeTaiDangThucHienChuNhiem(!openModalChiTietDeTaiDangThucHienChuNhiem);
        setInfoDetai(item);
        // alert(JSON.stringify(item))
    }
    let handleEditModalChiTietDetaiDangThucHienChuNhiem = (item) => {
        setOpenModalEditDeTaiDangThucHienChuNhiem(!openModalEditDeTaiDangThucHienChuNhiem);
        setInfoDetai(item);

    }

    let handleModalUpLoadFileThuyetMinh = (item) => {
        setOpenModalUpLoadFileThuyetMinh(!openModalUpLoadFileThuyetMinh);
        setIdDeTai(item);
    }
    let handleModalUpLoadPhieuGiaiTrinh = (item) => {
        setOpenModalUpLoadPhieuGiaiTrinh(!openModalUpLoadPhieuGiaiTrinh);
        setIdDeTai(item);

    }
    // let goilai = async () => {
    //     await getListDeTai();
    // }
    let handleModalNhanXetCuaHoiDong = (item) => {
        setOpenModalNhanXetCuaHoiDong(!openModalNhanXetCuaHoiDong);
        setInfoDetai(item);

    }
    let handleEditModalNhapKinhPhiDeTaiChuNhiem = (item) => {
        setOpenModalNhapKinhPhiThucHienDeTai(!openModalNhapKinhPhiThucHienDeTai);
        setInfoDetai(item);

    }
    // console.log(data);
    const onSubmit = async (data) => {
        // console.log(data)
        const res = await axios.post(`http://localhost:8080/api/search-detaidahoanthanh`, data)
        setData(res.data)

        // toast.success('Đăng ký đề tài thành công!.');

    }
    return (
        <>
            {openModalChiTietDeTaiDangThucHienChuNhiem &&
                <ModalChiTietDeTaiDangThucHienChuNhiemCOPY
                    openModalChiTietDeTaiDangThucHienChuNhiem={openModalChiTietDeTaiDangThucHienChuNhiem}
                    setOpenModalChiTietDeTaiDangThucHienChuNhiem={setOpenModalChiTietDeTaiDangThucHienChuNhiem}
                    infoDetai={infoDetai}
                />
            }
            <div className="search-home">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-sm-12">
                        <input
                            type='text'
                            className=" mt-1 mb-2"
                            name="tendetai"
                            id="tendetai"
                            placeholder="Tên đề tài"
                            {...register("tendetai")}
                        /> &nbsp;
                        <input
                            type='text'
                            className=" mt-1 mb-2"
                            name="masodetai"
                            id="masodetai"
                            placeholder="Mã số đề tài"
                            {...register("masodetai")}
                        /> &nbsp;
                        <input
                            type='text'
                            className=" mt-1 mb-2"
                            name="thongtinthanhvien1"
                            id="thongtinthanhvien1"
                            placeholder="MSSV Chủ nhiệm"
                            {...register("thongtinthanhvien1")}
                        /> &nbsp;
                        <button className="btn btn-primary"><FaSearch /></button>
                    </div>
                </form>

            </div>
            <hr />
            <div>
                {/* <h1></h1> */}<br />
                <table className="table table-bordered text-center">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên đề tài</th>
                            <th>Mã số đề tài</th>
                            <th>Chủ nhiệm</th>
                            <th>Thời gian bắt đầu - kết thúc</th>
                            <th>Chi tiết</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.length > 0 ?
                            data.map((item, index) => {
                                return (<>
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item.tendetai}</td>
                                        <td>{item.masodetai}</td>
                                        {/* <td>{item.phieugiaitrinh}</td> */}

                                        <td>{item.thongtinthanhvien1}</td>
                                        <td>
                                            {moment(item.thoigianbatdau).format("DD/MM/YYYY")} -
                                            {moment(item.thoigianketthuc).format("DD/MM/YYYY")}
                                        </td>
                                        <td>
                                            <button className="btn btn-primary"
                                                onClick={() => handleModalChiTietDetaiDangThucHienChuNhiem(item)}
                                            ><FaStickyNote /></button>
                                        </td>

                                    </tr>
                                </>);
                            })
                            :
                            <h4 className="text-center">Chưa có đề tài</h4>
                        }
                    </tbody>

                </table>

            </div>
        </>
    )
}
export default DanhSachDeTai;
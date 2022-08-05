import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaRegStickyNote, FaSearch, FaStickyNote } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

import ModalChiTietDeTaiDaDuyet from "../Modal/ModalChiTietDeTaiDaDuyet";
import ModalThemHoiDong from "../Modal/ModalThemHoiDong";
import ModalThemThoiGianVaDiaDiem from "../Modal/ModalThemThoiGIanVaDiaDiem";
import moment from 'moment';
import ModalThongTinHoiDong from "../Modal/ModalThongTinHoiDong";
import ModalNhanXetCuaHoiDong from "../Modal/ModalNhanXetHoiDong";
import ModalDanhGiaCuaHoiDongNghiemThuDeTai from "../Modal/ModalDanhGiaCuaHoiDongNghiemThuDeTai";
import ModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem from "../Modal/ModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem";

function DeTaiDaHoanThanhAdmin() {
    const [data, setData] = useState();
    const [thongtindetai, setThongtindetai] = useState();
    const [openModalChiTietDeTaiDaDuyet, setOpenModalChiTietDeTaiDaDuyet] = useState(false);
    const [themhoidong, setThemhoidong] = useState();
    const [openModalThemDeTai, setOpenModalThemDeTai] = useState(false);
    const [openModalThemThoiGianVaDiaDiem, setOpenModalThemThoiGianVaDiaDiem] = useState(false);
    const [openModalThongTinHoiDong, setOpenModalThongTinHoiDong] = useState(false);

    const [openModalNhanXetCuaHoiDong, setOpenModalNhanXetCuaHoiDong] = useState(false);

    const [infoDetai, setInfoDetai] = useState();
    const [openModalDanhGiaCuaHoiDongNghiemThuDeTai, setOpenModalDanhGiaCuaHoiDongNghiemThuDeTai] = useState(false);
    const [openModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem, setOpenModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem] = useState(false);


    const { register, handleSubmit } = useForm({});

    useEffect(async () => {
        await getlistdetaidaduyet()
    }, [])
    let getlistdetaidaduyet = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/api/get-detai-dahoanthanh`)
            setData(res.data);
        } catch (e) {
            console.log(e)
        }
    }
    let handleChiTietDeTaiDaDuyet = (item) => {
        setOpenModalChiTietDeTaiDaDuyet(!openModalChiTietDeTaiDaDuyet);
        setThongtindetai(item);
    }
    // let handleThemHoiDong = (item) => {
    //     setOpenModalThemDeTai(!openModalThemDeTai)
    //     setThongtindetai(item);
    // }
    let goilai = () => {
        getlistdetaidaduyet();
    }
    let handleThemThoiGianVaDiaDiem = (item) => {
        setOpenModalThemThoiGianVaDiaDiem(!openModalThemThoiGianVaDiaDiem)
        setThongtindetai(item);

    }
    let handleThongTinHoiDong = (item) => {
        setOpenModalThongTinHoiDong(!openModalThongTinHoiDong)
        setThongtindetai(item);

    }
    let handleModalNhanXetCuaHoiDong = (item) => {
        setOpenModalNhanXetCuaHoiDong(!openModalNhanXetCuaHoiDong);
        setThongtindetai(item);

    }
    const onSubmit = async (data) => {
        // console.log(data)
        const res = await axios.post(`http://localhost:8080/api/search-detaidahoanthanh`, data)
        setData(res.data)

        // toast.success('Đăng ký đề tài thành công!.');

    }
    let handleModalDanhGiaCuaHoiDongNghiemThuDeTai = (item) => {
        setOpenModalDanhGiaCuaHoiDongNghiemThuDeTai(!openModalDanhGiaCuaHoiDongNghiemThuDeTai)
        setInfoDetai(item);

    }
    let handleModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem = (item) => {
        setOpenModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem(!openModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem)
        setInfoDetai(item);

    }
    return (
        <>
            {openModalChiTietDeTaiDaDuyet &&
                <ModalChiTietDeTaiDaDuyet
                    openModalChiTietDeTaiDaDuyet={openModalChiTietDeTaiDaDuyet}
                    setOpenModalChiTietDeTaiDaDuyet={setOpenModalChiTietDeTaiDaDuyet}
                    thongtindetai={thongtindetai}
                    goilai={goilai}
                />
            }
            {openModalThemDeTai &&
                <ModalThemHoiDong
                    openModalThemDeTai={openModalThemDeTai}
                    setOpenModalThemDeTai={setOpenModalThemDeTai}
                    thongtindetai={thongtindetai}
                    goilai={goilai}

                />
            }
            {openModalThemThoiGianVaDiaDiem &&
                <ModalThemThoiGianVaDiaDiem
                    openModalThemThoiGianVaDiaDiem={openModalThemThoiGianVaDiaDiem}
                    setOpenModalThemThoiGianVaDiaDiem={setOpenModalThemThoiGianVaDiaDiem}
                    thongtindetai={thongtindetai}
                    goilai={goilai}

                />
            }
            {openModalThongTinHoiDong &&
                <ModalThongTinHoiDong
                    openModalThongTinHoiDong={openModalThongTinHoiDong}
                    setOpenModalThongTinHoiDong={setOpenModalThongTinHoiDong}
                    thongtindetai={thongtindetai}
                    goilai={goilai}

                />
            }
            {openModalNhanXetCuaHoiDong &&
                <ModalNhanXetCuaHoiDong
                    openModalNhanXetCuaHoiDong={openModalNhanXetCuaHoiDong}
                    setOpenModalNhanXetCuaHoiDong={setOpenModalNhanXetCuaHoiDong}
                    infoDetai={thongtindetai}
                    goilai={goilai}

                />
            }

            {openModalDanhGiaCuaHoiDongNghiemThuDeTai &&
                <ModalDanhGiaCuaHoiDongNghiemThuDeTai
                    openModalDanhGiaCuaHoiDongNghiemThuDeTai={openModalDanhGiaCuaHoiDongNghiemThuDeTai}
                    setOpenModalDanhGiaCuaHoiDongNghiemThuDeTai={setOpenModalDanhGiaCuaHoiDongNghiemThuDeTai}
                    infoDetai={infoDetai}
                    goilai={goilai}

                />
            }
            {openModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem &&
                <ModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem
                    openModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem={openModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem}
                    setOpenModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem={setOpenModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem}
                    infoDetai={infoDetai}
                    goilai={goilai}

                />
            }
            <h1>Danh sách đề tài đã hoàn thành</h1>
            <hr />
            <div>
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
            <br />

            <table className="table table-bordered text-center">
                <thead className="thead-dark">
                    <tr>
                        <th>STT</th>
                        <th>Tên đề tài</th>
                        <th>Mã số đề tài</th>
                        <th>Chủ nhiệm</th>
                        <th>Thời gian bắt đầu - kết thúc</th>
                        <th>Chi tiết</th>
                        {/* <th>Thời gian và địa điểm bảo vệ đề cương</th> */}
                        <th>Đánh giá xét chọn đề tài của hội đồng</th>
                        <th>Đánh giá nghiệm thu đề tài của hội đồng</th>
                        <th>Báo cáo của chủ nhiệm sau khi nghiệm thu</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((item, index) => {
                        return (<>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{item.tendetai}</td>
                                <td>{item.masodetai}</td>
                                <td>{item.thongtinthanhvien1}</td>
                                <td>
                                    {moment(item.thoigianbatdau).format("DD/MM/YYYY")} -
                                    {moment(item.thoigianketthuc).format("DD/MM/YYYY")}
                                </td>

                                <td>
                                    <button type="button" className="btn btn-primary"
                                        onClick={() => handleChiTietDeTaiDaDuyet(item)}
                                    ><FaStickyNote /></button>

                                </td>
                                {/* <td>
                                    <button type="button" className="btn btn-success"
                                        onClick={() => handleThemThoiGianVaDiaDiem(item)}
                                    >Thêm...</button>

                                </td> */}
                                {/* <td>
                                    <button type="button" className="btn btn-primary"
                                        onClick={() => handleThongTinHoiDong(item)}
                                    ><FaRegStickyNote /></button>
                                </td> */}
                                <td>
                                    <button className="btn btn-primary"
                                        onClick={() => handleModalNhanXetCuaHoiDong(item)}
                                    ><FaStickyNote /></button>
                                </td>

                                <td>
                                    <button className="btn btn-primary"
                                        onClick={() => handleModalDanhGiaCuaHoiDongNghiemThuDeTai(item)}
                                    ><FaStickyNote /></button>
                                </td>
                                <td>
                                    <button className="btn btn-primary"
                                        onClick={() => handleModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem(item)}
                                    ><FaStickyNote /></button>
                                </td>
                            </tr>
                        </>);
                    })}

                </tbody>
            </table>
        </>
    );
}
export default DeTaiDaHoanThanhAdmin;
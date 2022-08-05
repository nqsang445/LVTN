import React from "react";
import { useEffect, useState } from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from "react-router-dom";
import moment from 'moment';
import { FaStickyNote, FaFileDownload, FaEdit, FaUpload, FaFileUpload } from 'react-icons/fa';
// import { FaStickyNote, FaUpload, FaEdit } from 'react-icons/fa';

import ModalChiTietDeTaiHoiDong from "../Modal/ModalChiTietDeTaiHoiDong";
import ModalNhanXetCuaHoiDong from "../Modal/ModalNhanXetHoiDong";
import ModalUpLoadPhieuDanhGia from "../Modal/ModalUpLoadPhieuDanhGia";
import ModalUpLoadBienBanHopHoiDongXetDuyet from "../Modal/ModalUpLoadBienBanHopHoiDongXetDuyet";
import ModalUpLoadBienBanHopHoiDongDeCuong from "../Modal/ModalUpLoadBienBanHopHoiDongDeCuong";
import ModalXacNhanHoanThanhDeTai from "../Modal/ModalXacNhanHoanThanhDeTai";
import ModalEditKinhPhiDeTaiDoThuKyThucHien from "../Modal/ModalEditKinhPhiDeTaiDoThuKyThucHien";
import ModalDanhGiaCuaHoiDongNghiemThuDeTai from "../Modal/ModalDanhGiaCuaHoiDongNghiemThuDeTai";
import ModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem from "../Modal/ModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem";

function LichSuDeTaiDuocPhanCongChoHoiDong() {
    let paramUserid = useParams();
    // console.log(paramUserid);
    const [data, setData] = useState();
    const [infoHD, setInfoHD] = useState();
    const [account, setAccount] = useState();
    const [trangthaiquyen, setTrangthaiquyen] = useState();
    const [idDetai, setIdDeTai] = useState();
    const [infoDetai, setInfoDetai] = useState();

    const [openModalChiTietDeTaiHoiDong, setOpenModalChiTietDeTaiHoiDong] = useState(false);
    const [thongtindetai, setThongtindetai] = useState();
    const [openModalNhanXetCuaHoiDong, setOpenModalNhanXetCuaHoiDong] = useState(false);

    const [openModalUpLoadPhieuDanhGia, setOpenModalUpLoadPhieuDanhGia] = useState(false);
    const [openModalUpLoadBienBanHopHoiDongXetDuyet, setOpenModalUpLoadBienBanHopHoiDongXetDuyet] = useState(false);
    const [openModalUpLoadBienBanHopHoiDongDeCuong, setOpenModalUpLoadBienBanHopHoiDongDeCuong] = useState(false);

    const [openModalXacNhanHoanThanhDeTai, setOpenModalXacNhanHoanThanhDeTai] = useState(false);
    const [openModalEditKinhPhiDeTaiDoThuKyThucHien, setOpenModalEditKinhPhiDeTaiDoThuKyThucHien] = useState(false);

    const [openGIAODETAI, setOpenGIAODETAI] = useState(false);
    const [openModalDanhGiaCuaHoiDongNghiemThuDeTai, setOpenModalDanhGiaCuaHoiDongNghiemThuDeTai] = useState(false);
    const [openModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem, setOpenModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem] = useState(false);


    useEffect(() => {
        getlistDeTaiDuocPhanCong();
    }, []);
    useEffect(() => {
        getlistHoiDong();
    }, []);
    useEffect(() => {
        getlistTrangThaiHoiDong();
    }, []);
    useEffect(() => {
        getnhanxetcuaHD();
    }, []);
    // getnhanxetcuaHD
    let getlistDeTaiDuocPhanCong = async () => {
        let infoDeTai = await axios.post(`http://localhost:8080/api/get-list-lichsudetaiduocphancong`, paramUserid);
        // setData(infoDeTai.data.data);
        setData(infoDeTai.data);
    }
    let getlistHoiDong = async () => {
        let listHD = await axios.post(`http://localhost:8080/api/get-list-HD`, paramUserid);
        setInfoHD(listHD.data.listHD.thuky);
        setAccount(listHD.data.AccountHD);
        // console.log(listHD);
    }
    let getlistTrangThaiHoiDong = async () => {
        let trangthaiHoiDong = await axios.post(`http://localhost:8080/api/trangthai-quyen-cua-hoidong`, paramUserid);
        // setInfoHD(listHD.data.listHD.thuky);
        // setAccount(listHD.data.AccountHD);
        // console.log(trangthaiHoiDong.data.condition);
        setTrangthaiquyen(trangthaiHoiDong.data.condition);
        // /api/trangthai-quyen-cua-hoidong
    }
    let getnhanxetcuaHD = async () => {
        let nhanxetcuaHD = await axios.post(`http://localhost:8080/api/Nhan-Xet-Cua-HoiDong`, paramUserid);
        // setInfoHD(listHD.data.listHD.thuky);
        // setAccount(listHD.data.AccountHD);
        // console.log(trangthaiHoiDong.data.condition);
        // setTrangthaiquyen(trangthaiHoiDong.data.condition);
        // /api/trangthai-quyen-cua-hoidong
    }
    let handleModalChiTietDetaiHoiDong = (item) => {
        setOpenModalChiTietDeTaiHoiDong(!openModalChiTietDeTaiHoiDong);
        setThongtindetai(item)
    }
    let goilai = () => {
        getlistDeTaiDuocPhanCong();
    }
    let goilaiKhiXacNhanHoanThanhDeTai = (idDeTai) => {
        // console.log(idDeTai);
    }
    let handleModalNhanXetCuaHoiDong = (item) => {
        setOpenModalNhanXetCuaHoiDong(!openModalNhanXetCuaHoiDong);
        setThongtindetai(item)

    }
    let handleModalUpLoadPhieuDanhGia = (item) => {
        setOpenModalUpLoadPhieuDanhGia(!openModalUpLoadPhieuDanhGia);
        setThongtindetai(item);

    }
    let handleModalUpLoadBienBanHopHoiDongXetDuyet = (item) => {
        setOpenModalUpLoadBienBanHopHoiDongXetDuyet(!openModalUpLoadBienBanHopHoiDongXetDuyet);
        setThongtindetai(item);

    }
    let handleModalUpLoadBienBanHopHoiDongDeCuong = (item) => {
        setOpenModalUpLoadBienBanHopHoiDongDeCuong(!openModalUpLoadBienBanHopHoiDongDeCuong);
        setThongtindetai(item);

    }
    let handleModalEditKinhPhiDeTaiDoThuKyThucHien = (item) => {
        setOpenModalEditKinhPhiDeTaiDoThuKyThucHien(!openModalEditKinhPhiDeTaiDoThuKyThucHien);
        setThongtindetai(item);

    }
    let handleModalXacNhanHoanThanhDeTai = (item) => {
        setOpenModalXacNhanHoanThanhDeTai(!openModalXacNhanHoanThanhDeTai)
        setThongtindetai(item);

    }
    // console.log(infoHD);
    // console.log(account);
    // console.log(thongtindetai);
    // console.log(data);\
    let handleModalDanhGiaCuaHoiDongNghiemThuDeTai = (item) => {
        setOpenModalDanhGiaCuaHoiDongNghiemThuDeTai(!openModalDanhGiaCuaHoiDongNghiemThuDeTai)
        setInfoDetai(item);

    }
    let handleModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem = (item) => {
        setOpenModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem(!openModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem)
        setInfoDetai(item);

    }

    // handleModalEditKinhPhiDeTaiDoThuKyThucHien
    // console.log('thu ky: ', infoHD, '|', 'user hien tai', account)
    return (<>
        {openModalChiTietDeTaiHoiDong &&
            <ModalChiTietDeTaiHoiDong
                openModalChiTietDeTaiHoiDong={openModalChiTietDeTaiHoiDong}
                setOpenModalChiTietDeTaiHoiDong={setOpenModalChiTietDeTaiHoiDong}
                thongtindetai={thongtindetai}
                goilai={goilai}
            />
        }
        {
            openModalNhanXetCuaHoiDong &&
            <ModalNhanXetCuaHoiDong
                openModalNhanXetCuaHoiDong={openModalNhanXetCuaHoiDong}
                setOpenModalNhanXetCuaHoiDong={setOpenModalNhanXetCuaHoiDong}
                infoDetai={thongtindetai}
                goilai={goilai}

            />
        }
        {openModalUpLoadPhieuDanhGia &&
            <ModalUpLoadPhieuDanhGia
                openModalUpLoadPhieuDanhGia={openModalUpLoadPhieuDanhGia}
                setOpenModalUpLoadPhieuDanhGia={setOpenModalUpLoadPhieuDanhGia}
                idDeTai={thongtindetai}
                goilai={goilai}

            />
        }
        {openModalUpLoadBienBanHopHoiDongXetDuyet &&
            <ModalUpLoadBienBanHopHoiDongXetDuyet
                openModalUpLoadBienBanHopHoiDongXetDuyet={openModalUpLoadBienBanHopHoiDongXetDuyet}
                setOpenModalUpLoadBienBanHopHoiDongXetDuyet={setOpenModalUpLoadBienBanHopHoiDongXetDuyet}
                idDeTai={thongtindetai}
                goilai={goilai}
            />
        }
        {openModalUpLoadBienBanHopHoiDongDeCuong &&
            <ModalUpLoadBienBanHopHoiDongDeCuong
                openModalUpLoadBienBanHopHoiDongDeCuong={openModalUpLoadBienBanHopHoiDongDeCuong}
                setOpenModalUpLoadBienBanHopHoiDongDeCuong={setOpenModalUpLoadBienBanHopHoiDongDeCuong}
                idDeTai={thongtindetai}
                goilai={goilai}
                openGIAODETAI={openGIAODETAI}
                setOpenGIAODETAI={setOpenGIAODETAI}
            />
        }
        {openModalXacNhanHoanThanhDeTai &&
            <ModalXacNhanHoanThanhDeTai
                openModalXacNhanHoanThanhDeTai={openModalXacNhanHoanThanhDeTai}
                setOpenModalXacNhanHoanThanhDeTai={setOpenModalXacNhanHoanThanhDeTai}
                idDeTai={thongtindetai}
                goilaiKhiXacNhanHoanThanhDeTai={goilaiKhiXacNhanHoanThanhDeTai}
                goilai={goilai}

            />
        }
        {openModalEditKinhPhiDeTaiDoThuKyThucHien &&
            <ModalEditKinhPhiDeTaiDoThuKyThucHien
                openModalEditKinhPhiDeTaiDoThuKyThucHien={openModalEditKinhPhiDeTaiDoThuKyThucHien}
                setOpenModalEditKinhPhiDeTaiDoThuKyThucHien={setOpenModalEditKinhPhiDeTaiDoThuKyThucHien}
                idDeTai={thongtindetai}
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
        <h1>Danh sách các Hội đồng xét duyệt đề tài đã tham gia: </h1>
        <table className="table table-bordered text-center ">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên đề tài</th>
                    <th>Mã số đề tài</th>
                    <th>Chủ nhiệm</th>
                    <th>Thời gian bắt đầu - kết thúc</th>
                    <th>Chi tiết</th>
                    <th>Đánh giá xét chọn đề tài của hội đồng</th>
                    <th>Đánh giá nghiệm thu đề tài của hội đồng</th>
                    <th>Báo cáo sau khi nghiệm thu của Chủ nhiệm</th>
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
                                <td>{item.thongtinthanhvien1}</td>
                                <td>
                                    {moment(item.thoigianbatdau).format("DD/MM/YYYY")} -
                                    {moment(item.thoigianketthuc).format("DD/MM/YYYY")}
                                </td>
                                <td>
                                    <button className="btn btn-primary"
                                        onClick={() => handleModalChiTietDetaiHoiDong(item)}
                                    ><FaStickyNote /></button>
                                </td>
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

                    })
                    :
                    <td className="text-center" colSpan='10'>

                        <h3>Chưa có đề tài</h3>
                    </td>
                }

            </tbody>

        </table>
        {/* <p className="text-center" style={{ textAlign: 'center' }}>Chưa có đề tài</p> */}



    </>);
}
export default LichSuDeTaiDuocPhanCongChoHoiDong;
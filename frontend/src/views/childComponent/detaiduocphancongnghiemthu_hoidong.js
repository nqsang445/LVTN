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
import ModalChiTietDeTaiDangKyNghiemThu from "../Modal/ModalChiTietDeTaiDangKyNghiemThu";
// ==================================================
import ModalUpLoadPhieuDanhGiaSauNghiemThu from "../Modal/ModalUpLoadPhieuDanhGiaSauNghiemThu";
import ModalUpLoadPhieuNhanXetDanhGiaSauNghiemThu from "../Modal/ModalUpLoadPhieuNhanXetDanhGiaSauNghiemThu";
import ModalUpLoadBienBanHopHoiDongNghiemThuDeTai from "../Modal/ModalUpLoadBienBanHopHoiDongNghiemThuDeTai";
import ModalDanhGiaCuaHoiDongNghiemThuDeTai from "../Modal/ModalDanhGiaCuaHoiDongNghiemThuDeTai";
import ModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem from "../Modal/ModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem";


// ====================================================
function DeTaiDuocPhanCongNghiemThuChoHoiDong() {
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
    const [openModalEditDeTaiDangKyNghiemThu, setOpenModalEditDeTaiDangKyNghiemThu] = useState(false);


    // ==================================================
    const [openModalUpLoadPhieuDanhGiaSauNghiemThu, setOpenModalUpLoadPhieuDanhGiaSauNghiemThu] = useState(false);
    const [openModalUpLoadPhieuNhanXetDanhGiaSauNghiemThu, setModalUpLoadPhieuNhanXetDanhGiaSauNghiemThu] = useState(false);
    const [openModalUpLoadBienBanHopHoiDongNghiemThuDeTai, setOpenModalUpLoadBienBanHopHoiDongNghiemThuDeTai] = useState(false);
    // ===========================================================

    // ===============================
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
        let infoDeTai = await axios.post(`http://localhost:8080/api/get-list-detai-hoidong-duocphancongnghiemthu`, paramUserid);
        setData(infoDeTai.data.data);
        const dsThuKy = [];
        // setIdDeTai(infoDeTai.data.id);
        infoDeTai.data.dsHDDeTai.filter(item => {

            dsThuKy.push({ thuky: item.thuky, id_detai: item.id_detai });
        })
        setIdDeTai(dsThuKy);
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
    let handleModalChiTietDetaiDangKyNghiemThu = (item) => {
        setOpenModalEditDeTaiDangKyNghiemThu(!openModalEditDeTaiDangKyNghiemThu);
        setInfoDetai(item);
    }
    // console.log(infoHD);
    // console.log(account);
    // console.log(thongtindetai);
    // console.log(data);

    // handleModalEditKinhPhiDeTaiDoThuKyThucHien
    // console.log('thu ky: ', infoHD, '|', 'user hien tai', account)



    // ================================================================
    let handleModalUpLoadPhieuDanhGiaSauNghiemThu = (item) => {
        setOpenModalUpLoadPhieuDanhGiaSauNghiemThu(!openModalUpLoadPhieuDanhGiaSauNghiemThu);
        setInfoDetai(item);
    }
    let handleModalUpLoadPhieuNhanXetDanhGiaSauNghiemThu = (item) => {
        setModalUpLoadPhieuNhanXetDanhGiaSauNghiemThu(!openModalUpLoadPhieuNhanXetDanhGiaSauNghiemThu);
        setInfoDetai(item);
    }
    let handleModalUpLoadBienBanHopHoiDongNghiemThuDeTai = (item) => {
        setOpenModalUpLoadBienBanHopHoiDongNghiemThuDeTai(!openModalUpLoadBienBanHopHoiDongNghiemThuDeTai);
        setInfoDetai(item);
    }
    // ================================================================
    // ===========================================
    let handleModalDanhGiaCuaHoiDongNghiemThuDeTai = (item) => {
        setOpenModalDanhGiaCuaHoiDongNghiemThuDeTai(!openModalDanhGiaCuaHoiDongNghiemThuDeTai)
        setInfoDetai(item);

    }
    let handleModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem = (item) => {
        setOpenModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem(!openModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem)
        setInfoDetai(item);

    }
    // ========================================
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
        {openModalEditDeTaiDangKyNghiemThu &&
            <ModalChiTietDeTaiDangKyNghiemThu
                openModalEditDeTaiDangKyNghiemThu={openModalEditDeTaiDangKyNghiemThu}
                setOpenModalEditDeTaiDangKyNghiemThu={setOpenModalEditDeTaiDangKyNghiemThu}
                infoDetai={infoDetai}
                goilai={goilai}
            />
        }
        {/* ======================================================= */}
        {openModalUpLoadPhieuDanhGiaSauNghiemThu &&
            <ModalUpLoadPhieuDanhGiaSauNghiemThu
                openModalUpLoadPhieuDanhGiaSauNghiemThu={openModalUpLoadPhieuDanhGiaSauNghiemThu}
                setOpenModalUpLoadPhieuDanhGiaSauNghiemThu={setOpenModalUpLoadPhieuDanhGiaSauNghiemThu}
                infoDetai={infoDetai}
                goilai={goilai}

            />
        }
        {openModalUpLoadPhieuNhanXetDanhGiaSauNghiemThu &&
            <ModalUpLoadPhieuNhanXetDanhGiaSauNghiemThu
                openModalUpLoadPhieuNhanXetDanhGiaSauNghiemThu={openModalUpLoadPhieuNhanXetDanhGiaSauNghiemThu}
                setModalUpLoadPhieuNhanXetDanhGiaSauNghiemThu={setModalUpLoadPhieuNhanXetDanhGiaSauNghiemThu}
                infoDetai={infoDetai}
                goilai={goilai}

            />
        }
        {openModalUpLoadBienBanHopHoiDongNghiemThuDeTai &&
            <ModalUpLoadBienBanHopHoiDongNghiemThuDeTai
                openModalUpLoadBienBanHopHoiDongNghiemThuDeTai={openModalUpLoadBienBanHopHoiDongNghiemThuDeTai}
                setOpenModalUpLoadBienBanHopHoiDongNghiemThuDeTai={setOpenModalUpLoadBienBanHopHoiDongNghiemThuDeTai}
                infoDetai={infoDetai}
                goilai={goilai}

            />
        }

        {/* ======================================================== */}

        {/* ======================= */}
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

        {/* ====================== */}

        <div>
            {trangthaiquyen == '0' &&
                <>
                    <p style={{ color: 'red' }}>Ta??i khoa??n bi?? kho??a quy????n chi??nh s????a ?????? ta??i, vui lo??ng li??n h???? qua??n tri?? vi??n ?????? m???? kho??a la??i quy????n!.</p>
                </>
            }
            {idDetai && idDetai.length > 0 ?
                // start idDetai
                idDetai.map((item) => {
                    return (
                        item.thuky === account ?
                            // n????u h????i ??????ng la?? th?? ky?? cu??a m????t ?????? ta??i na??o ??o??
                            <>
                                <h2>Th?? ky?? h????i ??????ng cu??a ?????? ta??i:</h2>
                                <table className="table table-bordered text-center ">
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>T??n ?????? ta??i</th>
                                            {/* <th>Ma?? s???? ?????? ta??i</th> */}
                                            <th>Chu?? nhi????m</th>
                                            <th>Th????i gian b????t ??????u - k????t thu??c</th>
                                            <th>Chi ti????t</th>
                                            <th>??a??nh gia?? sau khi nghi????m thu cu??a h????i ??????ng</th>
                                            <th>Ba??o ca??o cu??a chu?? nhi????m sau khi nghi????m thu</th>
                                            {trangthaiquyen == '1' &&
                                                <>
                                                    <th>Upload phi????u ??a??nh gia??</th>
                                                    <th>Upload phi????u nh????n xe??t ??a??nh gia??</th>
                                                    <th>Bi??n ba??n ho??p h????i ??????ng nghi????m thu ?????? ta??i</th>

                                                </>
                                            }
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data && data.map((list, index) => {
                                            return (<>
                                                {item.id_detai == list.id &&
                                                    <tr key={list.id}>
                                                        <td>{index + 1}</td>
                                                        <td>{list.tendetai}</td>
                                                        {/* <td>{list.masodetai}</td> */}
                                                        <td>{list.thongtinthanhvien1}</td>
                                                        <td>
                                                            {moment(list.thoigianbatdau).format("DD/MM/YYYY")} -
                                                            {moment(list.thoigianketthuc).format("DD/MM/YYYY")}
                                                        </td>
                                                        <td>
                                                            <button className="btn btn-primary"
                                                                onClick={() => handleModalChiTietDetaiDangKyNghiemThu(list)}
                                                            ><FaStickyNote /></button>
                                                        </td>
                                                        <td>
                                                            <button className="btn btn-primary"
                                                                onClick={() => handleModalDanhGiaCuaHoiDongNghiemThuDeTai(list)}
                                                            ><FaStickyNote /></button>
                                                        </td>
                                                        <td>
                                                            <button className="btn btn-primary"
                                                                onClick={() => handleModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem(list)}
                                                            ><FaStickyNote /></button>
                                                        </td>
                                                        {trangthaiquyen == '1' &&
                                                            <>
                                                                <td>
                                                                    <button className="btn btn-success"
                                                                        onClick={() => handleModalUpLoadPhieuDanhGiaSauNghiemThu(list)}
                                                                    ><FaFileUpload /> Upload</button>
                                                                </td>

                                                                <td>
                                                                    <button className="btn btn-success"
                                                                        onClick={() => handleModalUpLoadPhieuNhanXetDanhGiaSauNghiemThu(list)}
                                                                    ><FaFileUpload /> Upload</button>
                                                                </td>

                                                                {/* <td>
                                                                    <button className="btn btn-primary"
                                                                        onClick={() => handleModalEditKinhPhiDeTaiDoThuKyThucHien(list)}
                                                                    ><FaEdit /></button>
                                                                </td> */}
                                                                <td>
                                                                    <button className="btn btn-success"
                                                                        onClick={() => handleModalUpLoadBienBanHopHoiDongNghiemThuDeTai(list)}
                                                                    ><FaFileUpload /> Upload</button>
                                                                </td>
                                                                {/* {openGIAODETAI &&
                                                                    <td>
                                                                        <button className="btn btn-success"
                                                                            onClick={() => handleModalXacNhanHoanThanhDeTai(list)}
                                                                        >Xa??c nh????n</button>
                                                                    </td>
                                                                } */}
                                                            </>

                                                        }

                                                    </tr>
                                                }
                                            </>);
                                        })}
                                    </tbody>
                                </table>
                            </>
                            :
                            // n????u h????i ??????ng la?? tha??nh vi??n cu??a m????t ?????? ta??i na??o ??o??
                            <>
                                <h2>Tha??nh vi??n h????i ??????ng cu??a ?????? ta??i:</h2>
                                <table className="table table-bordered text-center ">
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>T??n ?????? ta??i</th>
                                            {/* <th>Ma?? s???? ?????? ta??i</th> */}
                                            <th>Chu?? nhi????m</th>
                                            <th>Th????i gian b????t ??????u - k????t thu??c</th>
                                            <th>Chi ti????t</th>
                                            <th>??a??nh gia?? sau khi nghi????m thu cu??a h????i ??????ng</th>
                                            <th>Ba??o ca??o cu??a chu?? nhi????m sau khi nghi????m thu</th>
                                            {trangthaiquyen == '1' &&
                                                <>
                                                    <th>Upload phi????u ??a??nh gia??</th>
                                                    <th>Upload phi????u nh????n xe??t ??a??nh gia??</th>

                                                    {/* <th>Upload Bi??n ba??n ho??p h????i ??????ng xe??t cho??n ?????? ta??i</th> */}
                                                </>
                                            }
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data && data.map((list, index) => {
                                            return (<>
                                                {item.id_detai == list.id &&
                                                    <tr key={list.id}>
                                                        <td>{index + 1}</td>
                                                        {/* <td>{list.tendetai}</td> */}
                                                        <td>{list.tendetai}</td>
                                                        <td>{list.thongtinthanhvien1}</td>
                                                        <td>
                                                            {moment(list.thoigianbatdau).format("DD/MM/YYYY")} -
                                                            {moment(list.thoigianketthuc).format("DD/MM/YYYY")}
                                                        </td>
                                                        <td>
                                                            <button className="btn btn-primary"
                                                                onClick={() => handleModalChiTietDetaiDangKyNghiemThu(list)}
                                                            ><FaStickyNote /></button>
                                                        </td>
                                                        <td>
                                                            <button className="btn btn-primary"
                                                                onClick={() => handleModalDanhGiaCuaHoiDongNghiemThuDeTai(list)}
                                                            ><FaStickyNote /></button>
                                                        </td>
                                                        <td>
                                                            <button className="btn btn-primary"
                                                                onClick={() => handleModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem(list)}
                                                            ><FaStickyNote /></button>
                                                        </td>
                                                        {trangthaiquyen == '1' &&
                                                            <>
                                                                <td>
                                                                    <button className="btn btn-success"
                                                                        onClick={() => handleModalUpLoadPhieuDanhGiaSauNghiemThu(list)}
                                                                    ><FaFileUpload /> Upload</button>
                                                                </td>

                                                                <td>
                                                                    <button className="btn btn-success"
                                                                        onClick={() => handleModalUpLoadPhieuNhanXetDanhGiaSauNghiemThu(list)}
                                                                    ><FaFileUpload /> Upload</button>
                                                                </td>
                                                                {/* <td>
                                                                    <button className="btn btn-success"
                                                                        onClick={() => handleModalXacNhanHoanThanhDeTai(list)}
                                                                    >Xa??c nh????n</button>
                                                                </td> */}
                                                            </>

                                                        }
                                                    </tr>
                                                }
                                            </>);
                                        })}
                                    </tbody>
                                </table>
                            </>
                    );

                    // return(<></>);


                    // return (<>
                    //     <p>{item.id_detai}</p>
                    //     <p>{item.thuky}</p>
                    //     <p>{account}</p>
                    // </>);
                })
                :
                <h1>Hi????n ta??i ch??a co?? ?????? ta??i ????????c ph??n c??ng!</h1>
            }
            {/* end idDetai */}





            {/* <h1>?????? ta??i ????????c ph??n c??ng</h1>
            {trangthaiquyen == '0' &&
                <>
                    <p style={{ color: 'red' }}>Ta??i khoa??n bi?? kho??a quy????n chi??nh s????a ?????? ta??i, vui lo??ng li??n h???? qua??n tri?? vi??n ?????? m???? kho??a la??i quy????n!.</p>
                </>
            }

            <table className="table table-bordered text-center ">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>T??n ?????? ta??i</th>
                        <th>Ma?? s???? ?????? ta??i</th>
                        <th>Chu?? nhi????m</th>
                        <th>Th????i gian b????t ??????u - k????t thu??c</th>
                        <th>Chi ti????t</th>
                        <th>??a??nh gia?? cu??a h????i ??????ng</th>
                        {trangthaiquyen == '1' &&
                            <>
                                <th>Upload phi????u ??a??nh gia??</th>
                                <th>Upload Bi??n ba??n ho??p h????i ??????ng xe??t cho??n ?????? ta??i</th>
                                {infoHD === account &&
                                    <>
                                        <th>Kinh phi?? th????c hi????n ?????? ta??i do Th?? ky?? nh????p</th>
                                        <th>File Bi??n ba??n h????p h????i ??????ng ?????? c????ng</th>
                                    </>

                                }

                                <th>Xe??t duy????t hoa??n tha??nh ?????? ta??i</th>
                            </>
                        }



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
                                    {trangthaiquyen == '1' &&
                                        <>
                                            <td>
                                                <button className="btn btn-success"
                                                    onClick={() => handleModalUpLoadPhieuDanhGia(item)}
                                                ><FaFileUpload /> Upload</button>
                                            </td>

                                            <td>
                                                <button className="btn btn-success"
                                                    onClick={() => handleModalUpLoadBienBanHopHoiDongXetDuyet(item)}
                                                ><FaFileUpload /> Upload</button>
                                            </td>
                                            {infoHD === account &&
                                                <>
                                                    <td>
                                                        <button className="btn btn-primary"
                                                            onClick={() => handleModalEditKinhPhiDeTaiDoThuKyThucHien(item)}
                                                        ><FaEdit /></button>
                                                    </td>
                                                    <td>
                                                        <button className="btn btn-success"
                                                            onClick={() => handleModalUpLoadBienBanHopHoiDongDeCuong(item)}
                                                        ><FaFileUpload /> Upload</button>
                                                    </td>
                                                </>

                                            }

                                            <td>
                                                <button className="btn btn-success"
                                                    onClick={() => handleModalXacNhanHoanThanhDeTai(item)}
                                                >Xa??c nh????n</button>
                                            </td>
                                        </>

                                    }

                                </tr>
                            </>);

                        })
                        :
                        <td className="text-center" colSpan='10'>

                            <h3>Ch??a co?? ?????? ta??i</h3>
                        </td>
                    }

                </tbody>

            </table> */}
            {/* <p className="text-center" style={{ textAlign: 'center' }}>Ch??a co?? ?????? ta??i</p> */}

        </div>

    </>);
}
export default DeTaiDuocPhanCongNghiemThuChoHoiDong;
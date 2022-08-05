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

function DeTaiDuocPhanCongChoHoiDong() {
    let paramUserid = useParams();
    // console.log(paramUserid);
    const [data, setData] = useState();
    const [infoHD, setInfoHD] = useState();
    const [account, setAccount] = useState();
    const [trangthaiquyen, setTrangthaiquyen] = useState();
    const [idDetai, setIdDeTai] = useState();

    const [openModalChiTietDeTaiHoiDong, setOpenModalChiTietDeTaiHoiDong] = useState(false);
    const [thongtindetai, setThongtindetai] = useState();
    const [openModalNhanXetCuaHoiDong, setOpenModalNhanXetCuaHoiDong] = useState(false);

    const [openModalUpLoadPhieuDanhGia, setOpenModalUpLoadPhieuDanhGia] = useState(false);
    const [openModalUpLoadBienBanHopHoiDongXetDuyet, setOpenModalUpLoadBienBanHopHoiDongXetDuyet] = useState(false);
    const [openModalUpLoadBienBanHopHoiDongDeCuong, setOpenModalUpLoadBienBanHopHoiDongDeCuong] = useState(false);

    const [openModalXacNhanHoanThanhDeTai, setOpenModalXacNhanHoanThanhDeTai] = useState(false);
    const [openModalEditKinhPhiDeTaiDoThuKyThucHien, setOpenModalEditKinhPhiDeTaiDoThuKyThucHien] = useState(false);

    const [openGIAODETAI, setOpenGIAODETAI] = useState(false);


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
        let infoDeTai = await axios.post(`http://localhost:8080/api/get-list-detai-hoidong-duocphancong`, paramUserid);
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
    // console.log(infoHD);
    // console.log(account);
    // console.log(thongtindetai);
    // console.log(data);

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

        <div>
            {trangthaiquyen == '0' &&
                <>
                    <p style={{ color: 'red' }}>Tài khoản bị khóa quyền chỉnh sửa đề tài, vui lòng liên hệ quản trị viên để mở khóa lại quyền!.</p>
                </>
            }
            {idDetai && idDetai.length > 0 ?
                // start idDetai
                idDetai.map((item) => {
                    return (
                        item.thuky === account ?
                            // nếu hội đồng là thư ký của một đề tài nào đó
                            <>
                                <h2>Thư ký hội đồng của đề tài:</h2>
                                <table className="table table-bordered text-center ">
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Tên đề tài</th>
                                            {/* <th>Mã số đề tài</th> */}
                                            <th>Chủ nhiệm</th>
                                            <th>Thời gian bắt đầu - kết thúc</th>
                                            <th>Chi tiết</th>
                                            <th>Đánh giá của hội đồng</th>
                                            {trangthaiquyen == '1' &&
                                                <>
                                                    <th>Upload phiếu đánh giá</th>
                                                    <th>Upload Biên bản họp hội đồng xét chọn đề tài</th>
                                                    <th>Kinh phí thực hiện đề tài do Thư ký nhập</th>
                                                    <th>File Biên bản họp hội đồng đề cương</th>
                                                    {openGIAODETAI &&
                                                        <th>Giao đề tài</th>
                                                    }
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
                                                                onClick={() => handleModalChiTietDetaiHoiDong(list)}
                                                            ><FaStickyNote /></button>
                                                        </td>
                                                        <td>
                                                            <button className="btn btn-primary"
                                                                onClick={() => handleModalNhanXetCuaHoiDong(list)}
                                                            ><FaStickyNote /></button>
                                                        </td>
                                                        {trangthaiquyen == '1' &&
                                                            <>
                                                                <td>
                                                                    <button className="btn btn-success"
                                                                        onClick={() => handleModalUpLoadPhieuDanhGia(list)}
                                                                    ><FaFileUpload /> Upload</button>
                                                                </td>

                                                                <td>
                                                                    <button className="btn btn-success"
                                                                        onClick={() => handleModalUpLoadBienBanHopHoiDongXetDuyet(list)}
                                                                    ><FaFileUpload /> Upload</button>
                                                                </td>

                                                                <td>
                                                                    <button className="btn btn-primary"
                                                                        onClick={() => handleModalEditKinhPhiDeTaiDoThuKyThucHien(list)}
                                                                    ><FaEdit /></button>
                                                                </td>
                                                                <td>
                                                                    <button className="btn btn-success"
                                                                        onClick={() => handleModalUpLoadBienBanHopHoiDongDeCuong(list)}
                                                                    ><FaFileUpload /> Upload</button>
                                                                </td>
                                                                {openGIAODETAI &&
                                                                    <td>
                                                                        <button className="btn btn-success"
                                                                            onClick={() => handleModalXacNhanHoanThanhDeTai(list)}
                                                                        >Xác nhận</button>
                                                                    </td>
                                                                }
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
                            // nếu hội đồng là thành viên của một đề tài nào đó
                            <>
                                <h2>Thành viên hội đồng của đề tài:</h2>
                                <table className="table table-bordered text-center ">
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Tên đề tài</th>
                                            {/* <th>Mã số đề tài</th> */}
                                            <th>Chủ nhiệm</th>
                                            <th>Thời gian bắt đầu - kết thúc</th>
                                            <th>Chi tiết</th>
                                            <th>Đánh giá của hội đồng</th>
                                            {trangthaiquyen == '1' &&
                                                <>
                                                    <th>Upload phiếu đánh giá</th>
                                                    {/* <th>Upload Biên bản họp hội đồng xét chọn đề tài</th> */}
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
                                                        <td>{list.masodetai}</td>
                                                        <td>{list.thongtinthanhvien1}</td>
                                                        <td>
                                                            {moment(list.thoigianbatdau).format("DD/MM/YYYY")} -
                                                            {moment(list.thoigianketthuc).format("DD/MM/YYYY")}
                                                        </td>
                                                        <td>
                                                            <button className="btn btn-primary"
                                                                onClick={() => handleModalChiTietDetaiHoiDong(list)}
                                                            ><FaStickyNote /></button>
                                                        </td>
                                                        <td>
                                                            <button className="btn btn-primary"
                                                                onClick={() => handleModalNhanXetCuaHoiDong(list)}
                                                            ><FaStickyNote /></button>
                                                        </td>
                                                        {trangthaiquyen == '1' &&
                                                            <>
                                                                <td>
                                                                    <button className="btn btn-success"
                                                                        onClick={() => handleModalUpLoadPhieuDanhGia(list)}
                                                                    ><FaFileUpload /> Upload</button>
                                                                </td>

                                                                {/* <td>
                                                                    <button className="btn btn-success"
                                                                        onClick={() => handleModalUpLoadBienBanHopHoiDongXetDuyet(list)}
                                                                    ><FaFileUpload /> Upload</button>
                                                                </td> */}
                                                                {/* <td>
                                                                    <button className="btn btn-success"
                                                                        onClick={() => handleModalXacNhanHoanThanhDeTai(list)}
                                                                    >Xác nhận</button>
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
                <h1>Hiện tại chưa có đề tài được phân công!</h1>
            }
            {/* end idDetai */}





            {/* <h1>Đề tài được phân công</h1>
            {trangthaiquyen == '0' &&
                <>
                    <p style={{ color: 'red' }}>Tài khoản bị khóa quyền chỉnh sửa đề tài, vui lòng liên hệ quản trị viên để mở khóa lại quyền!.</p>
                </>
            }

            <table className="table table-bordered text-center ">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên đề tài</th>
                        <th>Mã số đề tài</th>
                        <th>Chủ nhiệm</th>
                        <th>Thời gian bắt đầu - kết thúc</th>
                        <th>Chi tiết</th>
                        <th>Đánh giá của hội đồng</th>
                        {trangthaiquyen == '1' &&
                            <>
                                <th>Upload phiếu đánh giá</th>
                                <th>Upload Biên bản họp hội đồng xét chọn đề tài</th>
                                {infoHD === account &&
                                    <>
                                        <th>Kinh phí thực hiện đề tài do Thư ký nhập</th>
                                        <th>File Biên bản hợp hội đồng đề cương</th>
                                    </>

                                }

                                <th>Xét duyệt hoàn thành đề tài</th>
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
                                                >Xác nhận</button>
                                            </td>
                                        </>

                                    }

                                </tr>
                            </>);

                        })
                        :
                        <td className="text-center" colSpan='10'>

                            <h3>Chưa có đề tài</h3>
                        </td>
                    }

                </tbody>

            </table> */}
            {/* <p className="text-center" style={{ textAlign: 'center' }}>Chưa có đề tài</p> */}

        </div>

    </>);
}
export default DeTaiDuocPhanCongChoHoiDong;
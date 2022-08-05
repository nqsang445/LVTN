import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaRegStickyNote, FaUpload, FaTrash, FaEdit } from 'react-icons/fa';

import ModalChiTietDeTaiDaDuyet from "../Modal/ModalChiTietDeTaiDaDuyet";
import ModalThemHoiDong from "../Modal/ModalThemHoiDong";
import ModalThemThoiGianVaDiaDiem from "../Modal/ModalThemThoiGIanVaDiaDiem";
import moment from 'moment';
import ModalThongTinHoiDong from "../Modal/ModalThongTinHoiDong";
import ModalNhanXetCuaHoiDong from "../Modal/ModalNhanXetHoiDong";
import ModalHuyDeTaiDaDuyet from "../Modal/ModalHuyDeTaiDaDuyet";
function DeTaiDaDuyet() {
    const [data, setData] = useState();
    const [thongtindetai, setThongtindetai] = useState();
    const [openModalChiTietDeTaiDaDuyet, setOpenModalChiTietDeTaiDaDuyet] = useState(false);
    const [themhoidong, setThemhoidong] = useState();
    const [openModalThemDeTai, setOpenModalThemDeTai] = useState(false);
    const [openModalThemThoiGianVaDiaDiem, setOpenModalThemThoiGianVaDiaDiem] = useState(false);
    const [openModalThongTinHoiDong, setOpenModalThongTinHoiDong] = useState(false);

    const [openModalNhanXetCuaHoiDong, setOpenModalNhanXetCuaHoiDong] = useState(false);

    const [openModalHuyDeTaiDaDuyet, setOpenModalHuyDeTaiDaDuyet] = useState(false);

    useEffect(async () => {
        await getlistdetaidaduyet()
    }, [])
    let getlistdetaidaduyet = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/api/get-detai-daduyet`)
            setData(res.data);
        } catch (e) {
            console.log(e)
        }
    }
    let handleChiTietDeTaiDaDuyet = (item) => {
        setOpenModalChiTietDeTaiDaDuyet(!openModalChiTietDeTaiDaDuyet);
        setThongtindetai(item);
    }
    let handleThemHoiDong = (item) => {
        setOpenModalThemDeTai(!openModalThemDeTai)
        setThongtindetai(item);
    }
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
    let handleModalHuyDeTaiDaDuyet = (item) => {
        setOpenModalHuyDeTaiDaDuyet(!openModalHuyDeTaiDaDuyet);
        setThongtindetai(item);


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
                    idDeTai={thongtindetai}
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
            {openModalHuyDeTaiDaDuyet &&
                <ModalHuyDeTaiDaDuyet
                    openModalHuyDeTaiDaDuyet={openModalHuyDeTaiDaDuyet}
                    setOpenModalHuyDeTaiDaDuyet={setOpenModalHuyDeTaiDaDuyet}
                    infoDetai={thongtindetai}
                    goilai={goilai}
                />
            }
            <h1>Danh sách đề tài đã duyệt</h1>
            <hr />
            <br />
            <table className="table table-bordered text-center">
                <thead className="thead-dark">
                    <tr>
                        <th>STT</th>
                        <th>Tên đề tài</th>
                        {/* <th>Mã số đề tài</th> */}
                        <th>Chủ nhiệm</th>
                        <th>Thời gian bắt đầu - kết thúc</th>
                        <th>Chi tiết</th>
                        <th>Thời gian và địa điểm bảo vệ đề cương</th>
                        <th>Hội đồng</th>
                        <th>Phân công hội đồng</th>
                        <th>Đánh giá của hội đồng</th>
                        <th>Hủy</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.length > 0 ?
                        data.map((item, index) => {
                            return (<>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.tendetai}</td>
                                    {/* <td>{item.masodetai}</td> */}
                                    <td>{item.thongtinthanhvien1}</td>
                                    <td>
                                        {moment(item.thoigianbatdau).format("DD/MM/YYYY")} -
                                        {moment(item.thoigianketthuc).format("DD/MM/YYYY")}
                                    </td>

                                    <td>
                                        <button type="button" className="btn btn-primary"
                                            onClick={() => handleChiTietDeTaiDaDuyet(item)}
                                        ><FaRegStickyNote /></button>

                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-primary"
                                            onClick={() => handleThemThoiGianVaDiaDiem(item)}
                                        ><FaEdit /></button>

                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-primary"
                                            onClick={() => handleThongTinHoiDong(item)}
                                        ><FaRegStickyNote /></button>
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-success"
                                            onClick={() => handleThemHoiDong(item)}
                                        >Thêm...</button>

                                    </td>
                                    <td>
                                        <button className="btn btn-primary"
                                            onClick={() => handleModalNhanXetCuaHoiDong(item)}
                                        ><FaRegStickyNote /></button>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger"
                                            onClick={() => handleModalHuyDeTaiDaDuyet(item)}
                                        ><FaTrash /></button>
                                    </td>
                                    {/* FaTrash */}
                                </tr>
                            </>);
                        })
                        :
                        <tr>
                            <td className="text-center" colSpan='10'>
                                <h2>Chưa có đề tài</h2>
                            </td>
                        </tr>
                    }

                </tbody>
            </table>
        </>
    );
}
export default DeTaiDaDuyet;
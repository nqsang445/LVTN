import React from "react";
import { useEffect, useState } from 'react';
import { toast } from "react-toastify";
// import { useStore, actions } from "../../store";
import { FaStickyNote, FaUpload, FaEdit } from 'react-icons/fa';
import { useParams } from "react-router-dom";
import axios from "axios";
import ModalChiTietDeTaiDangThucHienChuNhiem from "../Modal/ModalChiTietDeTaiDangThucHien_ChuNhiem";
import ModalUpLoadFileThuyetMinh from "../Modal/ModalUpLoadFileThuyetMinh";
import ModalUpLoadPhieuGiaiTrinh from "../Modal/ModalUpLoadPhieuGiaiTrinh";
import ModalEditDeTaiDangThucHienChuNhiem from "../Modal/ModalEditDeTaiDangThucHienChuNhiem";
import ModalNhanXetCuaHoiDong from "../Modal/ModalNhanXetHoiDong";
import ModalNhapKinhPhiThucHienDeTai from "../Modal/ModalNhapKinhPhiDeTaiChuNhiem";
import moment from 'moment';
import ModalDanhGiaCuaHoiDongNghiemThuDeTai from "../Modal/ModalDanhGiaCuaHoiDongNghiemThuDeTai";
import ModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem from "../Modal/ModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem";


function DeTaiDaHoanThanhChuNhiem() {
    let paramUserId = useParams();
    // console.log(paramUserId);
    const [data, setData] = useState();
    const [openModalChiTietDeTaiDangThucHienChuNhiem, setOpenModalChiTietDeTaiDangThucHienChuNhiem] = useState(false);
    const [infoDetai, setInfoDetai] = useState();

    const [openModalUpLoadFileThuyetMinh, setOpenModalUpLoadFileThuyetMinh] = useState(false);
    const [openModalUpLoadPhieuGiaiTrinh, setOpenModalUpLoadPhieuGiaiTrinh] = useState(false);
    const [idDeTai, setIdDeTai] = useState();

    const [openModalEditDeTaiDangThucHienChuNhiem, setOpenModalEditDeTaiDangThucHienChuNhiem] = useState(false);

    const [openModalNhanXetCuaHoiDong, setOpenModalNhanXetCuaHoiDong] = useState(false);
    const [openModalNhapKinhPhiThucHienDeTai, setOpenModalNhapKinhPhiThucHienDeTai] = useState(false);

    // ====
    const [openModalDanhGiaCuaHoiDongNghiemThuDeTai, setOpenModalDanhGiaCuaHoiDongNghiemThuDeTai] = useState(false);
    const [openModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem, setOpenModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem] = useState(false);

    useEffect(() => {
        getListDeTai();

    }, [])
    let getListDeTai = async () => {
        try {
            const listDeTai = await axios.post(`http://localhost:8080/api/get-all-list-detai-dahoanthanh-chunhiem`, paramUserId)
            // console.log(listDeTai);
            setData(listDeTai.data);

        } catch (e) {
            console.log(e)
        }
    }
    // console.log(data);
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
    let goilai = async () => {
        await getListDeTai();
    }
    let handleModalNhanXetCuaHoiDong = (item) => {
        setOpenModalNhanXetCuaHoiDong(!openModalNhanXetCuaHoiDong);
        setInfoDetai(item);

    }
    let handleEditModalNhapKinhPhiDeTaiChuNhiem = (item) => {
        setOpenModalNhapKinhPhiThucHienDeTai(!openModalNhapKinhPhiThucHienDeTai);
        setInfoDetai(item);

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
            {openModalChiTietDeTaiDangThucHienChuNhiem &&
                <ModalChiTietDeTaiDangThucHienChuNhiem
                    openModalChiTietDeTaiDangThucHienChuNhiem={openModalChiTietDeTaiDangThucHienChuNhiem}
                    setOpenModalChiTietDeTaiDangThucHienChuNhiem={setOpenModalChiTietDeTaiDangThucHienChuNhiem}
                    infoDetai={infoDetai}
                />
            }
            {openModalUpLoadFileThuyetMinh &&
                <ModalUpLoadFileThuyetMinh
                    openModalUpLoadFileThuyetMinh={openModalUpLoadFileThuyetMinh}
                    setOpenModalUpLoadFileThuyetMinh={setOpenModalUpLoadFileThuyetMinh}
                    idDeTai={idDeTai}
                    goilai={goilai}
                />
            }
            {openModalUpLoadPhieuGiaiTrinh &&
                <ModalUpLoadPhieuGiaiTrinh
                    openModalUpLoadPhieuGiaiTrinh={openModalUpLoadPhieuGiaiTrinh}
                    setOpenModalUpLoadPhieuGiaiTrinh={setOpenModalUpLoadPhieuGiaiTrinh}
                    idDeTai={idDeTai}
                    goilai={goilai}

                />

            }
            {openModalEditDeTaiDangThucHienChuNhiem &&
                <ModalEditDeTaiDangThucHienChuNhiem
                    openModalEditDeTaiDangThucHienChuNhiem={openModalEditDeTaiDangThucHienChuNhiem}
                    setOpenModalEditDeTaiDangThucHienChuNhiem={setOpenModalEditDeTaiDangThucHienChuNhiem}
                    infoDetai={infoDetai}
                    goilai={goilai}

                />
            }
            {openModalNhanXetCuaHoiDong &&
                <ModalNhanXetCuaHoiDong
                    openModalNhanXetCuaHoiDong={openModalNhanXetCuaHoiDong}
                    setOpenModalNhanXetCuaHoiDong={setOpenModalNhanXetCuaHoiDong}
                    infoDetai={infoDetai}
                    goilai={goilai}

                />
            }
            {openModalNhapKinhPhiThucHienDeTai &&
                <ModalNhapKinhPhiThucHienDeTai
                    openModalNhapKinhPhiThucHienDeTai={openModalNhapKinhPhiThucHienDeTai}
                    setOpenModalNhapKinhPhiThucHienDeTai={setOpenModalNhapKinhPhiThucHienDeTai}
                    infoDetai={infoDetai}
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
            <div>
                <h1>Đề tài Đã hoàn thành</h1>
                <table className="table table-bordered text-center">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên đề tài</th>
                            <th>Mã số đề tài</th>
                            <th>Chủ nhiệm</th>
                            <th>Thời gian bắt đầu - kết thúc</th>
                            <th>Chi tiết</th>
                            <th>Đánh giá xét chọn đề tài của hội đồng</th>
                            <th>Đánh giá nghiệm thu đề tài của hội đồng </th>
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
                                        {/* <td>
                                            <button className="btn btn-primary"
                                                onClick={() => handleEditModalChiTietDetaiDangThucHienChuNhiem(item)}
                                            ><FaEdit /></button>
                                        </td> */}
                                        {/* <td>
                                            <button className="btn btn-success"
                                                onClick={() => handleModalUpLoadFileThuyetMinh(item)}

                                            ><FaUpload />   File Thuyết Minh</button>
                                        </td> */}
                                        {/* <td>
                                            <button className="btn btn-success"
                                                onClick={() => handleModalUpLoadPhieuGiaiTrinh(item)}

                                            ><FaUpload />   Phiếu Giải Trình</button>
                                        </td> */}
                                        <td>
                                            <button className="btn btn-primary"
                                                onClick={() => handleModalNhanXetCuaHoiDong(item)}
                                            ><FaStickyNote /></button>
                                        </td>
                                        {/* <td>
                                            <button className="btn btn-primary"
                                                onClick={() => handleEditModalNhapKinhPhiDeTaiChuNhiem(item)}
                                            ><FaEdit /></button>
                                        </td> */}
                                        {/* FaUpload */}
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
                            <td className="text-center" colSpan='12'>

                                <h3>Chưa có đề tài</h3>
                            </td>
                        }
                    </tbody>

                </table>

            </div>
        </>
    );
}
export default DeTaiDaHoanThanhChuNhiem;
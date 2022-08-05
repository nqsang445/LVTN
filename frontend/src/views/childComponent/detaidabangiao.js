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
import ModalChiTietDeTaiDangThucHien_DaBanGiao from '../Modal/ModalChiTietDeTaiDangThucHien_DaBanGiao';
import ModalThemMaSoDeTai from "../Modal/ModalThemMaSoDeTai";
import ModalXacNhanHoanThanhDeTaiDaNghiemThu from "../Modal/ModalHoanThanhNghiemThuDeTai";
import { useStore, actions } from "../../store";


function DeTaiDaBanGiao() {
    let paramUserId = useParams();
    const [state, dispatch] = useStore();
    const { isLogin, user, roleId } = state;
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

    const [openModalThemMaSoDeTai, setOpenModalThemMaSoDeTai] = useState(false);
    const [openModalXacNhanHoanThanhDeTaiDaNghiemThu, setOpenModalXacNhanHoanThanhDeTaiDaNghiemThu] = useState(false);

    // ModalXacNhanHoanThanhDeTaiDaNghiemThu
    useEffect(() => {
        getListDeTai();

    }, [])
    let getListDeTai = async () => {
        try {
            const listDeTai = await axios.post(`http://localhost:8080/api/get-all-list-detai-dabangiao-chunhiem`, paramUserId)
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
    let handleEditModalThemMaSoDeTAi = (item) => {
        setOpenModalThemMaSoDeTai(!openModalThemMaSoDeTai);
        setInfoDetai(item);
    }
    let handleEditModalHoanThanhNghiemThuDeTai = (item) => {
        setOpenModalXacNhanHoanThanhDeTaiDaNghiemThu(!openModalXacNhanHoanThanhDeTaiDaNghiemThu);
        setInfoDetai(item);

    }
    // handleEditModalThemMaSoDeTAi
    // handleEditModalHoanThanhNghiemThuDeTai
    return (
        <>
            {openModalChiTietDeTaiDangThucHienChuNhiem &&
                <ModalChiTietDeTaiDangThucHien_DaBanGiao
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
            {openModalThemMaSoDeTai &&
                <ModalThemMaSoDeTai
                    openModalThemMaSoDeTai={openModalThemMaSoDeTai}
                    setOpenModalThemMaSoDeTai={setOpenModalThemMaSoDeTai}
                    infoDetai={infoDetai}
                    goilai={goilai}
                />
            }
            {openModalXacNhanHoanThanhDeTaiDaNghiemThu &&
                <ModalXacNhanHoanThanhDeTaiDaNghiemThu
                    openModalXacNhanHoanThanhDeTaiDaNghiemThu={openModalXacNhanHoanThanhDeTaiDaNghiemThu}
                    setOpenModalXacNhanHoanThanhDeTaiDaNghiemThu={setOpenModalXacNhanHoanThanhDeTaiDaNghiemThu}
                    infoDetai={infoDetai}
                    goilai={goilai}


                />
            }
            <div>
                <h1>Đề tài đã bàn giao của hội đồng</h1>
                <table className="table table-bordered text-center">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên đề tài</th>
                            {/* <th>Mã số đề tài</th> */}
                            <th>Chủ nhiệm</th>
                            <th>Thời gian bắt đầu - kết thúc</th>
                            <th>Chi tiết</th>
                            <th>Đánh giá của hội đồng</th>
                            {data && data.length > 0 && data.map(item => {
                                return (<>
                                    {user.account == item.thongtinthanhvien1 &&
                                        <>
                                            <th>Thêm mã số đề tài</th>
                                            {data && data.map((item, index) => {
                                                return (<>
                                                    {item.masodetai &&
                                                        <th>Nhận đề tài</th>
                                                    }
                                                </>);
                                            })}
                                        </>
                                    }
                                </>);
                            })}



                        </tr>
                    </thead>
                    <tbody>
                        {data && data.length > 0 ?
                            data.map((item, index) => {
                                return (<>
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item.tendetai}</td>
                                        {/* <td>{item.masodetai}</td> */}
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
                                        {user.account == item.thongtinthanhvien1 &&
                                            <>
                                                <td>
                                                    <button className="btn btn-success"
                                                        onClick={() => handleEditModalThemMaSoDeTAi(item)}
                                                    >Thêm...</button>
                                                </td>
                                                {item.masodetai &&
                                                    <td>
                                                        <button className="btn btn-success"
                                                            onClick={() => handleEditModalHoanThanhNghiemThuDeTai(item)}
                                                        >Xác nhận</button>
                                                    </td>
                                                }
                                            </>
                                        }


                                        {/* FaUpload */}
                                    </tr>
                                </>);
                            })
                            :
                            <td className="text-center" colSpan='7'>

                                <h3>Chưa có đề tài</h3>
                            </td>
                        }
                    </tbody>

                </table>

            </div>
        </>
    );
}
export default DeTaiDaBanGiao;
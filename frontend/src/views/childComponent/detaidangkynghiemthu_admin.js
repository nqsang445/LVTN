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
import ModalChiTietDeTaiDangKyNghiemThu from "../Modal/ModalChiTietDeTaiDangKyNghiemThu";
// Click modal
import ModalDonXinNghiemThuDeTai from "../Modal/ModalDonXinNghiemThuDeTaiAdmin";
import ModalThongBaoThoiGianVaDiaDiemNghiemThuDeTai from "../Modal/ModalThongBaoThoiGianVaDiaDiemNghiemThuDeTai";
import ModalDanhSachHoiDongNghiemThuDeTai from "../Modal/ModalDanhSachHoiDongNghiemThuDeTai";
import ModalLapHoiDongNghiemThuDeTai from "../Modal/ModalLapHoiDongNghiemThuDeTai";
import ModalDanhGiaCuaHoiDongNghiemThuDeTai from "../Modal/ModalDanhGiaCuaHoiDongNghiemThuDeTai";
import ModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem from "../Modal/ModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem";
import ModalXacNhanHoanThanhDeTaiTuAdmin from "../Modal/ModalXacNhanHoanThanhDeTaiTuAdmin";


// =====
import moment from 'moment';
import { useStore, actions } from "../../store";

function DeTaiDangKyNghiemThuAdmin() {
    // let paramUserId = useParams();
    // const [state, dispatch] = useStore();
    // const { isLogin, user, roleId } = state;

    const [data, setData] = useState();
    const [infoDetai, setInfoDetai] = useState();

    // const [idDeTai, setIdDeTai] = useState();

    const [openModalEditDeTaiDangKyNghiemThu, setOpenModalEditDeTaiDangKyNghiemThu] = useState(false);

    // modal action
    const [openModalDonXinNghiemThuDeTai, setOpenModalDonXinNghiemThuDeTai] = useState(false);
    const [openModalThongBaoThoiGianVaDiaDiemNghiemThuDeTai, setOpenModalThongBaoThoiGianVaDiaDiemNghiemThuDeTai] = useState(false);
    const [openModalDanhSachHoiDongNghiemThuDeTai, setOpenModalDanhSachHoiDongNghiemThuDeTai] = useState(false);
    const [openModalLapHoiDongNghiemThuDeTai, setOpenModalLapHoiDongNghiemThuDeTai] = useState(false);
    const [openModalDanhGiaCuaHoiDongNghiemThuDeTai, setOpenModalDanhGiaCuaHoiDongNghiemThuDeTai] = useState(false);
    const [openModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem, setOpenModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem] = useState(false);
    const [openModalXacNhanHoanThanhDeTaiTuAdmin, setOpenModalXacNhanHoanThanhDeTaiTuAdmin] = useState(false);


    useEffect(() => {
        getListDeTaiDangKyNghiemThu();

    }, [])
    let getListDeTaiDangKyNghiemThu = async () => {
        try {
            const listDeTaiDangKyNghiemThu = await axios.get(`http://localhost:8080/api/get-all-list-detai-dangkynghiemthu`)
            // console.log(listDeTai);
            setData(listDeTaiDangKyNghiemThu.data);

        } catch (e) {
            console.log(e)
        }
    }
    let goilai = async () => {
        await getListDeTaiDangKyNghiemThu();
    }
    // // console.log(data);
    let handleModalChiTietDetaiDangKyNghiemThu = (item) => {
        setOpenModalEditDeTaiDangKyNghiemThu(!openModalEditDeTaiDangKyNghiemThu);
        setInfoDetai(item);
    }
    let handleModalDonXinNghiemThuDeTai = (item) => {
        setOpenModalDonXinNghiemThuDeTai(!openModalDonXinNghiemThuDeTai)
        setInfoDetai(item);

    }

    let handleModalThongBaoThoiGianVaDiaDiemNghiemThuDeTai = (item) => {
        setOpenModalThongBaoThoiGianVaDiaDiemNghiemThuDeTai(!openModalThongBaoThoiGianVaDiaDiemNghiemThuDeTai)
        setInfoDetai(item);

    }
    let handlModalDanhSachHoiDongNghiemThuDeTai = (item) => {
        setOpenModalDanhSachHoiDongNghiemThuDeTai(!openModalDanhSachHoiDongNghiemThuDeTai)
        setInfoDetai(item);

    }

    let handleModalLapHoiDongNghiemThuDeTai = (item) => {
        setOpenModalLapHoiDongNghiemThuDeTai(!openModalLapHoiDongNghiemThuDeTai)
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
    let handleModalXacNhanHoanThanhDeTaiTuAdmin = (item) => {
        setOpenModalXacNhanHoanThanhDeTaiTuAdmin(!openModalXacNhanHoanThanhDeTaiTuAdmin)
        setInfoDetai(item);

    }
    return (
        <>
            {openModalEditDeTaiDangKyNghiemThu &&
                <ModalChiTietDeTaiDangKyNghiemThu
                    openModalEditDeTaiDangKyNghiemThu={openModalEditDeTaiDangKyNghiemThu}
                    setOpenModalEditDeTaiDangKyNghiemThu={setOpenModalEditDeTaiDangKyNghiemThu}
                    infoDetai={infoDetai}
                    goilai={goilai}
                />
            }
            {/*  */}
            {openModalDonXinNghiemThuDeTai &&
                <ModalDonXinNghiemThuDeTai
                    openModalDonXinNghiemThuDeTai={openModalDonXinNghiemThuDeTai}
                    setOpenModalDonXinNghiemThuDeTai={setOpenModalDonXinNghiemThuDeTai}
                    infoDetai={infoDetai}
                    goilai={goilai}
                />
            }
            {openModalThongBaoThoiGianVaDiaDiemNghiemThuDeTai &&
                <ModalThongBaoThoiGianVaDiaDiemNghiemThuDeTai
                    openModalThongBaoThoiGianVaDiaDiemNghiemThuDeTai={openModalThongBaoThoiGianVaDiaDiemNghiemThuDeTai}
                    setOpenModalThongBaoThoiGianVaDiaDiemNghiemThuDeTai={setOpenModalThongBaoThoiGianVaDiaDiemNghiemThuDeTai}
                    infoDetai={infoDetai}
                    goilai={goilai}

                />

            }
            {openModalDanhSachHoiDongNghiemThuDeTai &&
                <ModalDanhSachHoiDongNghiemThuDeTai
                    openModalDanhSachHoiDongNghiemThuDeTai={openModalDanhSachHoiDongNghiemThuDeTai}
                    setOpenModalDanhSachHoiDongNghiemThuDeTai={setOpenModalDanhSachHoiDongNghiemThuDeTai}
                    infoDetai={infoDetai}
                    goilai={goilai}

                />
            }
            {openModalLapHoiDongNghiemThuDeTai &&
                <ModalLapHoiDongNghiemThuDeTai
                    openModalLapHoiDongNghiemThuDeTai={openModalLapHoiDongNghiemThuDeTai}
                    setOpenModalLapHoiDongNghiemThuDeTai={setOpenModalLapHoiDongNghiemThuDeTai}
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
            {openModalXacNhanHoanThanhDeTaiTuAdmin &&
                <ModalXacNhanHoanThanhDeTaiTuAdmin
                    openModalXacNhanHoanThanhDeTaiTuAdmin={openModalXacNhanHoanThanhDeTaiTuAdmin}
                    setOpenModalXacNhanHoanThanhDeTaiTuAdmin={setOpenModalXacNhanHoanThanhDeTaiTuAdmin}
                    infoDetai={infoDetai}
                    goilai={goilai}

                />
            }
            {/* ModalXacNhanHoanThanhDeTaiTuAdmin */}
            <div>
                {/* <h1 disabled>Bước 1- Đăng ký đề tài: đã đăng ký</h1>
                <h1>Bước 2-Duyệt đăng ký đề tài: </h1> */}
                <h1>Danh sách Đề tài Đăng Ký Nghiệm Thu: </h1>
                <table className="table table-bordered text-center">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên đề tài</th>
                            {/* <th>Mã số đề tài</th> */}
                            <th>Chủ nhiệm</th>
                            <th>Thời gian bắt đầu - kết thúc</th>

                            <th>Chi tiết</th>
                            <th>Đơn xin nghiệm thu đề tài</th>
                            <th>Thông báo thời gian và địa điểm nghiệm thu đề tài</th>
                            <th>Danh sách hội đồng nghiệm thu đề tài</th>
                            <th>Lập hội đồng nghiệm thu đề tài</th>
                            <th>Đánh giá của hội đồng nghiệm thu đề tài</th>
                            <th>Báo cáo sau khi nghiệm thu của Chủ nhiệm</th>
                            <th>Xác nhận hoàn thành đề tài</th>

                            {/* {user.account == item.thongtinthanhvien1 && */}
                            {/* {data && data.length > 0 && data.map(item => {
                                return (<>
                                    {user.account == item.thongtinthanhvien1 &&
                                        <>
                                            <th>Chỉnh sửa đề tài</th>
                                            <th>Upload Phiếu Giải Trình</th>
                                            <th>Upload File Thuyết Minh sau khi chỉnh sữa</th>

                                        </>
                                    }
                                </>);
                            })} */}

                            {/* <th>Đánh giá của hội đồng</th> */}
                            {/* <th>Nhập kinh phí đề tài</th> */}



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
                                                onClick={() => handleModalChiTietDetaiDangKyNghiemThu(item)}
                                            ><FaStickyNote /></button>
                                        </td>
                                        <td>
                                            <button className="btn btn-primary"
                                                onClick={() => handleModalDonXinNghiemThuDeTai(item)}
                                            ><FaStickyNote /></button>
                                        </td>
                                        <td>
                                            <button className="btn btn-primary"
                                                onClick={() => handleModalThongBaoThoiGianVaDiaDiemNghiemThuDeTai(item)}
                                            ><FaEdit /></button>
                                        </td>
                                        <td>
                                            <button className="btn btn-primary"
                                                onClick={() => handlModalDanhSachHoiDongNghiemThuDeTai(item)}
                                            ><FaStickyNote /></button>
                                        </td>
                                        <td>
                                            <button className="btn btn-success"
                                                onClick={() => handleModalLapHoiDongNghiemThuDeTai(item)}
                                            >Thêm...</button>
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
                                        <td>
                                            <button className="btn btn-success"
                                                onClick={() => handleModalXacNhanHoanThanhDeTaiTuAdmin(item)}
                                            >Xác nhận</button>
                                        </td>
                                        {/* {user.account == item.thongtinthanhvien1 &&
                                            <>
                                                <td>
                                                    <button className="btn btn-primary"
                                                        onClick={() => handleEditModalChiTietDetaiDangThucHienChuNhiem(item)}
                                                    ><FaEdit /></button>
                                                </td>

                                                <td>
                                                    <button className="btn btn-success"
                                                        onClick={() => handleModalUpLoadPhieuGiaiTrinh(item)}

                                                    ><FaUpload />   Phiếu Giải Trình</button>
                                                </td>
                                                <td>
                                                    <button className="btn btn-success"
                                                        onClick={() => handleModalUpLoadFileThuyetMinh(item)}

                                                    ><FaUpload />   File thuyết minh</button>
                                                </td>
                                            </>
                                        }
                                        <td>
                                            <button className="btn btn-primary"
                                                onClick={() => handleModalNhanXetCuaHoiDong(item)}
                                            ><FaStickyNote /></button>
                                        </td> */}
                                        {/* <td>
                                            <button className="btn btn-primary"
                                                onClick={() => handleEditModalNhapKinhPhiDeTaiChuNhiem(item)}
                                            ><FaEdit /></button>
                                        </td> */}
                                        {/* FaUpload */}
                                    </tr>
                                </>);
                            })
                            :
                            <td className="text-center" colSpan='11'>

                                <h3>Chưa có đề tài</h3>
                            </td>
                        }
                    </tbody>

                </table>
                {/* <p className="text-center" style={{ textAlign: 'center' }}>Chưa có đề tài</p> */}

            </div>
        </>
    );
}
export default DeTaiDangKyNghiemThuAdmin;
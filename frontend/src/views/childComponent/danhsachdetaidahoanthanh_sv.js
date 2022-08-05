import React from "react";
import { useEffect, useState } from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from "react-router-dom";
import moment from 'moment';
import { FaStickyNote } from 'react-icons/fa';
import ModalChiTietDeTaiDangThucHienSV from "../Modal/ModalChiTietDeTaiDangThucHien_sv";
import ModalNhanXetCuaHoiDong from "../Modal/ModalNhanXetHoiDong";
import ModalDanhGiaCuaHoiDongNghiemThuDeTai from "../Modal/ModalDanhGiaCuaHoiDongNghiemThuDeTai";
import ModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem from "../Modal/ModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem";
// import { FaRegStickyNote } from 'react-icons/fa';

function DeTaiDaHoanThanhSinhVien() {
    let paramUserid = useParams();
    // console.log(paramUserid);
    const [data, setData] = useState();
    const [openModalChiTietDeTaiDangThucHienSV, setOpenModalChiTietDeTaiDangThucHienSV] = useState(false);
    const [infoDetai, setInfoDetai] = useState();

    const [openModalNhanXetCuaHoiDong, setOpenModalNhanXetCuaHoiDong] = useState(false);

    const [openModalDanhGiaCuaHoiDongNghiemThuDeTai, setOpenModalDanhGiaCuaHoiDongNghiemThuDeTai] = useState(false);
    const [openModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem, setOpenModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem] = useState(false);


    useEffect(() => {
        getDeTaiHoanThanhSV()

        // console.log(userInFo.data);
    }, []);
    let getDeTaiHoanThanhSV = async () => {
        let userInFo = await axios.post(`http://localhost:8080/api/get-detai-sinhvien-dahoanthanh`, paramUserid)
        setData(userInFo.data);
    }
    let goilai = () => {
        getDeTaiHoanThanhSV();
    }
    let handleModalChiTietDetaiDangThucHienSV = (item) => {
        setOpenModalChiTietDeTaiDangThucHienSV(!openModalChiTietDeTaiDangThucHienSV);
        setInfoDetai(item);
    }
    let handleModalNhanXetCuaHoiDong = (item) => {
        setOpenModalNhanXetCuaHoiDong(!openModalNhanXetCuaHoiDong);
        setInfoDetai(item);

    }
    // console.log(data);
    let handleModalDanhGiaCuaHoiDongNghiemThuDeTai = (item) => {
        setOpenModalDanhGiaCuaHoiDongNghiemThuDeTai(!openModalDanhGiaCuaHoiDongNghiemThuDeTai)
        setInfoDetai(item);

    }
    let handleModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem = (item) => {
        setOpenModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem(!openModalBaoCaoSauKhiNghiemThuDeTaiCuaChuNhiem)
        setInfoDetai(item);

    }
    return (<>
        {openModalChiTietDeTaiDangThucHienSV &&
            <ModalChiTietDeTaiDangThucHienSV
                openModalChiTietDeTaiDangThucHienSV={openModalChiTietDeTaiDangThucHienSV}
                setOpenModalChiTietDeTaiDangThucHienSV={setOpenModalChiTietDeTaiDangThucHienSV}
                infoDetai={infoDetai}
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
            <h1>Đề tài đã hoàn thành</h1>
            <table className="table table-bordered text-center">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên đề tài</th>
                        <th>Mã số đề tài</th>
                        <th>Chủ nhiệm</th>
                        {/* <th>Lĩnh vực ưu tiên</th>
                        <th>Lĩnh vực nghiên cứu</th>
                        <th>Loại hình nghiên cứu</th> */}
                        <th>Thời gian bắt đầu - kết thúc</th>
                        {/* <th>Thời gian bắt đầu</th>
                        <th>Thời gian kết thúc</th> */}
                        <th>Chi tiết</th>
                        <th>Đánh giá xét chọn đề tài của hội đồng</th>
                        <th>Đánh giá nghiệm thu đề tài của hội đồng </th>
                        <th>Báo cáo sau khi nghiệm thu của Chủ nhiệm</th>
                        {/* <th>Thông tin chủ nhiệm đề tài</th>
                        <th>Thông tin giảng viên hướng dẫn</th>
                        <th>Thông tin thành viên 1</th>
                        <th>Thông tin thành viên 2</th>
                        <th>Thông tin thành viên 3</th>
                        <th>Thông tin thành viên 4</th>
                        <th>Thời gian và địa điểm bắt đầu bảo vệ đề cương</th>
                        <th>File thuyết minh</th>
                        <th>Phiếu giải trình</th>
                        <th>Trạng thái đề tài</th> */}
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
                                            onClick={() => handleModalChiTietDetaiDangThucHienSV(item)}
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
                        <td className="text-center" colSpan='7'>

                            <h3>Chưa có đề tài</h3>
                        </td>
                    }

                </tbody>

            </table>
            {/* <p className="text-center" style={{ textAlign: 'center' }}>Chưa có đề tài</p> */}

        </div>
    </>);
}
export default DeTaiDaHoanThanhSinhVien;

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
            <h1>?????? ta??i ??a?? hoa??n tha??nh</h1>
            <table className="table table-bordered text-center">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>T??n ?????? ta??i</th>
                        <th>Ma?? s???? ?????? ta??i</th>
                        <th>Chu?? nhi????m</th>
                        {/* <th>Li??nh v????c ??u ti??n</th>
                        <th>Li??nh v????c nghi??n c????u</th>
                        <th>Loa??i hi??nh nghi??n c????u</th> */}
                        <th>Th????i gian b????t ??????u - k????t thu??c</th>
                        {/* <th>Th????i gian b????t ??????u</th>
                        <th>Th????i gian k????t thu??c</th> */}
                        <th>Chi ti????t</th>
                        <th>??a??nh gia?? xe??t cho??n ?????? ta??i cu??a h????i ??????ng</th>
                        <th>??a??nh gia?? nghi????m thu ?????? ta??i cu??a h????i ??????ng </th>
                        <th>Ba??o ca??o sau khi nghi????m thu cu??a Chu?? nhi????m</th>
                        {/* <th>Th??ng tin chu?? nhi????m ?????? ta??i</th>
                        <th>Th??ng tin gia??ng vi??n h??????ng d????n</th>
                        <th>Th??ng tin tha??nh vi??n 1</th>
                        <th>Th??ng tin tha??nh vi??n 2</th>
                        <th>Th??ng tin tha??nh vi??n 3</th>
                        <th>Th??ng tin tha??nh vi??n 4</th>
                        <th>Th????i gian va?? ??i??a ??i????m b????t ??????u ba??o v???? ?????? c????ng</th>
                        <th>File thuy????t minh</th>
                        <th>Phi????u gia??i tri??nh</th>
                        <th>Tra??ng tha??i ?????? ta??i</th> */}
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

                            <h3>Ch??a co?? ?????? ta??i</h3>
                        </td>
                    }

                </tbody>

            </table>
            {/* <p className="text-center" style={{ textAlign: 'center' }}>Ch??a co?? ?????? ta??i</p> */}

        </div>
    </>);
}
export default DeTaiDaHoanThanhSinhVien;

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useStore, actions } from "../../store";
import axios from "axios";
import { FaRegStickyNote, FaTrash } from 'react-icons/fa';
import ModalDuyetDeTai from '../Modal/ModalDuyetDeTai';
import ModalHuyDuyetDeTai from '../Modal/ModalHuyDuyetDeTai';
import ModalChiTietDeTai from '../Modal/ModalChiTietDeTai';
import moment from 'moment';

function MoDangKyDeTai() {
    const [modangky, setModangky] = useState(false);
    const [dongdangky, setDongdangky] = useState(true);
    const [state, dispatch] = useStore();
    const { dangKyDeTai, tendetai, roleId } = state;
    const [data, setData] = useState();
    const [openModalDuyetDeTai, setOpenModalDuyetDeTai] = useState(false);
    const [openModalHuyDuyetDeTai, setOpenModalHuyDuyetDeTai] = useState(false);
    const [openModalChiTietDeTai, setOpenModalChiTietDeTai] = useState(false);
    const [thongtindetai, setThongtindetai] = useState();
    const [idDetai, setIdDetai] = useState();
    const [trangthaimodangkydetai, setTrangthaimodangkydetai] = useState();

    // console.log(dangKyDeTai);
    useEffect(async () => {
        try {
            await getlistdetaidangky();
            await gettrangthaimodangkydetai();

        } catch (e) {
            console.log(e)
        }
    }, []);
    useEffect(async () => {
        try {
            if (trangthaimodangkydetai === 'mo') {
                setModangky(!modangky);
                setDongdangky(!dongdangky);
            }

        } catch (e) {
            console.log(e)
        }
    }, [trangthaimodangkydetai]);

    let getlistdetaidangky = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/api/list-detai-dangky`)
            setData(res.data);
        } catch (e) {
            console.log(e)
        }
    }
    let gettrangthaimodangkydetai = async () => {
        try {
            const trangthai = await axios.get(`http://localhost:8080/api/trangthai-dangky-detai-admin`)
            setTrangthaimodangkydetai(trangthai.data[0].trangthaidangky)
        } catch (e) {
            console.log(e)
        }
    }
    let handleModalChiTietDeTai = (item) => {
        setOpenModalChiTietDeTai(!openModalChiTietDeTai)
        // console.log(item);
        setThongtindetai(item)
    }
    let handleModalDuyetDeTai = (item) => {
        setOpenModalDuyetDeTai(!openModalDuyetDeTai)
        // console.log(item);
        setIdDetai(item)


    }
    let handleModalHuyDuyetDeTai = (item) => {
        setOpenModalHuyDuyetDeTai(!openModalHuyDuyetDeTai)
        // console.log(item);
        setIdDetai(item.id)
    }
    let HuyDuyetDeTai = async (idDetai) => {
        try {
            // console.log(idDetai);
            const res = await axios.delete(`http://localhost:8080/api/delete-detai-dangky`, { data: { id: idDetai } })
            if (res.data.errCode === 0) {
                await getlistdetaidangky();
            } else {
                alert('Thất bại');
            }
        } catch (e) {
            console.log(e)
        }
    }
    let DuyetDeTai = async (idDetai) => {
        try {
            // console.log(idDetai);
            const res = await axios.put(`http://localhost:8080/api/duyet-detai-dangky`, idDetai)
            if (res.data.errCode === 0) {
                await getlistdetaidangky();
            } else {
                alert('Thất bại');
            }
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <>
            {openModalDuyetDeTai &&
                <ModalDuyetDeTai
                    openModalDuyetDeTai={openModalDuyetDeTai}
                    setOpenModalDuyetDeTai={setOpenModalDuyetDeTai}
                    idDetai={idDetai}
                    DuyetDeTai={DuyetDeTai}
                />

            }
            {openModalHuyDuyetDeTai &&
                <ModalHuyDuyetDeTai
                    openModalHuyDuyetDeTai={openModalHuyDuyetDeTai}
                    setOpenModalHuyDuyetDeTai={setOpenModalHuyDuyetDeTai}
                    HuyDuyetDeTai={HuyDuyetDeTai}
                    idDetai={idDetai}
                />

            }
            {openModalChiTietDeTai &&
                <ModalChiTietDeTai
                    openModalChiTietDeTai={openModalChiTietDeTai}
                    setOpenModalChiTietDeTai={setOpenModalChiTietDeTai}
                    thongtindetai={thongtindetai}
                />

            }

            <h1>Mở đăng ký đề tài</h1>
            <hr />

            <p>Trạng thái đăng ký đề tài: &nbsp;&nbsp;&nbsp;
                {trangthaimodangkydetai == 'dong' &&
                    <span style={{ color: 'red', }}>Đóng</span>
                }
                {trangthaimodangkydetai == 'mo' &&
                    <span style={{ color: 'red', }}>Mở</span>
                }

            </p>
            <br />
            <button
                type="button"
                className="btn btn-success"
                disabled={modangky}
                onClick={async () => {
                    setModangky(!modangky);
                    setDongdangky(!dongdangky);
                    let res = await axios.post(`http://localhost:8080/api/modangkydetai`)
                    await gettrangthaimodangkydetai();
                    // toast.success('Mở đăng ký đề tài thành công!.');
                    //edit
                }}
            >Mở đăng ký</button>
            &nbsp;&nbsp;&nbsp;
            <button
                type="button"
                className="btn btn-primary"
                disabled={dongdangky}
                onClick={async () => {
                    setModangky(!modangky);
                    setDongdangky(!dongdangky);
                    let res = await axios.post(`http://localhost:8080/api/dongdangkydetai`)
                    await gettrangthaimodangkydetai();
                    // console.log(dangKyDeTai);
                    // toast.success('Đóng đăng ký đề tài thành công!.');
                    //edit
                }}
            >Đóng đăng ký</button>
            <hr />
            <h1>Danh sách đề tài đã đăng ký</h1>
            <hr />
            <br />
            <table className="table table-bordered text-center">
                <thead className="thead-dark">
                    <tr>
                        <th>STT</th>
                        <th>Tên đề tài</th>
                        {/* <th>Mã số đề tài</th> */}
                        <th>Chủ nhiệm đề tài</th>
                        <th>Thời gian bắt đầu - kết thúc</th>
                        <th>Chi tiết</th>
                        <th>Duyệt đề tài</th>
                        <th>Xóa đề tài</th>
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
                                    <td>{item.thongtinchunhiemdetai}</td>
                                    <td>
                                        {moment(item.thoigianbatdau).format("DD/MM/YYYY")} -
                                        {moment(item.thoigianketthuc).format("DD/MM/YYYY")}
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-primary"
                                            onClick={() => handleModalChiTietDeTai(item)}
                                        ><FaRegStickyNote /></button>
                                    </td>
                                    <td>
                                        <span type="button" className="btn btn-success"
                                            onClick={() => handleModalDuyetDeTai(item)}
                                        >Duyệt</span> &nbsp;

                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-danger"
                                            onClick={() => handleModalHuyDuyetDeTai(item)}
                                        ><FaTrash /></button>
                                    </td>
                                </tr>
                            </>)
                        })
                        :
                        <tr>
                            <td className="text-center" colSpan='7'>
                                <h2>Chưa có đề tài</h2>
                            </td>
                        </tr>
                    }

                </tbody>
            </table>
        </>
    );
}
export default MoDangKyDeTai;
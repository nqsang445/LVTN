import React from "react";
import { useEffect, useState } from 'react';
import axios from "axios";
import { useForm } from 'react-hook-form';

import { ToastContainer, toast } from 'react-toastify';
// import './ChangePassword.scss';
// import { useParams } from "react-router-dom";
import ModalThemThongBaoDangKyDeTai from "../Modal/ModalThemThongBaoDangKyDeTai";
import ModalXoaThongBaoDangKyDeTai from "../Modal/ModalXoaThongBaoDKDT";
import moment from 'moment';
import fileDownload from 'js-file-download';
import { FaDownload, FaSearch, FaTrash } from 'react-icons/fa';

function ThongBaoDangKyDeTai() {
    const [openModalThemThongBaoDangKyDeTai, setOpenModalThemThongBaoDangKyDeTai] = useState();
    const [openModalXoaThongBaoDangKyDeTai, setOpenModalXoaThongBaoDangKyDeTai] = useState();
    const [dataThongbao, setDataThongbao] = useState();
    const [item, setItem] = useState();
    const { register, handleSubmit } = useForm({});

    useEffect(() => {
        getAllThongbaoDangkyDetai()
    }, [])
    let getAllThongbaoDangkyDetai = async () => {
        let listThongBao = await axios.get(`http://localhost:8080/api/get-all-thong-bao-dang-ky-de-tai`);
        setDataThongbao(listThongBao.data);
    }
    let handleOpenModalThemThongBaoDangKyDeTai = () => {
        setOpenModalThemThongBaoDangKyDeTai(!openModalThemThongBaoDangKyDeTai)
    }
    let handleOpenModalXoaThongBaoDangKyDeTai = (item) => {
        setOpenModalXoaThongBaoDangKyDeTai(!openModalXoaThongBaoDangKyDeTai);
        setItem(item)
        // console.log(item)
    }
    let goilai = () => {
        getAllThongbaoDangkyDetai()
    }
    let goilai2 = () => {
        getAllThongbaoDangkyDetai()
    }

    let dowloadFileThongBao = async (item) => {
        const dowloadFileThongBao = await axios.post(`http://localhost:8080/api/download-ThongbaoDKDT`, item)
        fileDownload(dowloadFileThongBao.data, 'FileThongBao.pdf')
    }
    // console.log(item);
    const onSubmit = async (data) => {
        // console.log(data)
        const res = await axios.post(`http://localhost:8080/api/search-tenthongbao`, data)
        setDataThongbao(res.data)

        // toast.success('Đăng ký đề tài thành công!.');

    }
    return (<>
        {openModalThemThongBaoDangKyDeTai &&
            <ModalThemThongBaoDangKyDeTai
                openModalThemThongBaoDangKyDeTai={openModalThemThongBaoDangKyDeTai}
                setOpenModalThemThongBaoDangKyDeTai={setOpenModalThemThongBaoDangKyDeTai}
                goilai={goilai}
            />
        }
        {openModalXoaThongBaoDangKyDeTai &&
            <ModalXoaThongBaoDangKyDeTai
                openModalXoaThongBaoDangKyDeTai={openModalXoaThongBaoDangKyDeTai}
                setOpenModalXoaThongBaoDangKyDeTai={setOpenModalXoaThongBaoDangKyDeTai}
                goilai2={goilai2}
                item={item}
            />

        }
        <div>
            <h1>Thông báo đăng ký đề tài</h1>
            <br />
            <button className="btn btn-primary"
                onClick={() => handleOpenModalThemThongBaoDangKyDeTai()}
            >Thêm thông báo</button>
        </div>
        <hr />
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="col-sm-8">
                    <input
                        type='text'
                        className=" mt-1 mb-2"
                        name="tenthongbao"
                        id="tenthongbao"
                        placeholder="Tên thông báo"
                        {...register("tenthongbao", { required: true })}
                    /> &nbsp;
                    <button className="btn btn-primary"><FaSearch /></button>
                </div>
            </form>

        </div>
        <table className="table table-bordered text-center">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên thông báo</th>
                    <th>File thông báo</th>
                    <th>Xóa</th>
                </tr>
            </thead>
            <tbody>
                {dataThongbao &&
                    dataThongbao.map((item, index) => {
                        return (<>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{item.tenthongbao}</td>
                                <td>
                                    <button className="btn btn-success"
                                        onClick={() => dowloadFileThongBao(item)}
                                    ><FaDownload /> {item.filethongbao.substring(11)}</button>
                                </td>
                                {/* FaDownload */}
                                <td>
                                    <button className="btn btn-danger"
                                        onClick={() => handleOpenModalXoaThongBaoDangKyDeTai(item)}
                                    ><FaTrash /></button>
                                </td>

                            </tr>
                        </>);
                    })
                }

            </tbody>
        </table>
    </>);
}
export default ThongBaoDangKyDeTai;
import React from "react";
import { useEffect, useState } from 'react';
import { toast } from "react-toastify";
// import { useStore, actions } from "../../store";
import { FaStickyNote, FaUpload, FaEdit } from 'react-icons/fa';
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from 'moment';
import fileDownload from 'js-file-download';
import { FaDownload } from 'react-icons/fa';
import './ThongBaoDangKyDeTai.scss';

function ThongBaoDangKyDeTaiHome() {
    const [data, setData] = useState();

    useEffect(async () => {
        const listThongBao = await axios.get(`http://localhost:8080/api/get-all-thong-bao-dang-ky-de-tai`);
        setData(listThongBao.data);
    }, [])
    let dowloadFileThongBao = async (item) => {
        const dowloadFileThongBao = await axios.post(`http://localhost:8080/api/download-ThongbaoDKDT`, item)
        fileDownload(dowloadFileThongBao.data, 'FileThongBao.pdf')
    }
    // console.log(data);
    return (<>

        <div className="main-thongbao">
            <h2 className="text-center">THÔNG BÁO</h2>
            <div className="main-thongbao-content">
                <ul className="danhsachthongbao">
                    {data &&
                        data.map((item, index) => {
                            return (<>
                                <li
                                    onClick={() => dowloadFileThongBao(item)}
                                >{item.tenthongbao}</li>
                            </>);
                        })
                    }
                </ul>
            </div>
        </div>
    </>);
}
export default ThongBaoDangKyDeTaiHome;
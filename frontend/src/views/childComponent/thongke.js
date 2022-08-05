import React from "react";
import { useEffect, useState } from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from "react-router-dom";
// import ModalCapNhatThongTinCaNhan from "../Modal/ModalCapNhatThongTinCaNhan";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

function ThongKe() {
    // let paramUserid = useParams();
    const [listDeTai, setListDeTai] = useState();
    // const [openModalCapNhatThongTinCaNhan, setOpenModalCapNhatThongTinCaNhan] = useState(false);
    const [detaidangthuchien, setDetaidangthuchien] = useState();
    const [detaihoanthanh, setDetaihoanthanh] = useState();
    // const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    // const RADIAN = Math.PI / 180;

    useEffect(() => {

        getListDeTai();
        // console.log(userInFo.data);
    }, []);
    let getListDeTai = async () => {
        let listDeTai = await axios.get(`http://localhost:8080/api/get-list-detai-thongke`)
        // setListDeTai(listDeTai.data);
        // console.log(listDeTai.data.detaidangthuchien);
        // console.log(listDeTai.data.detaihoanthanh);
        setDetaidangthuchien(listDeTai.data.detaidangthuchien.length);
        setDetaihoanthanh(listDeTai.data.detaihoanthanh.length)

    }
    // let handleModalCapNhatThongTinCaNhan = () => {
    //     setOpenModalCapNhatThongTinCaNhan(!openModalCapNhatThongTinCaNhan);

    // }
    // const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    //     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    //     const x = cx + radius * Math.cos(-midAngle * RADIAN);
    //     const y = cy + radius * Math.sin(-midAngle * RADIAN);

    //     return (
    //         <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
    //             {`${(percent * 100).toFixed(0)}%`}
    //         </text>
    //     );
    // };
    return (

        <div>
            {/* {openModalCapNhatThongTinCaNhan &&
                <ModalCapNhatThongTinCaNhan
                    openModalCapNhatThongTinCaNhan={openModalCapNhatThongTinCaNhan}
                    setOpenModalCapNhatThongTinCaNhan={setOpenModalCapNhatThongTinCaNhan}
                    userInfo={userInfo}
                    getUserInFo={getUserInFo}
                />
            } */}

            <h1>Thống kê</h1><br />

            <div className="col-sm-8">
                <table className="table-bordered table">
                    <thead>
                        <tr>
                            <th>Đề tài đang thực hiện</th>
                            <td>Số lượng đề tài: <span style={{ color: 'red' }}>{detaidangthuchien}</span></td>

                        </tr>
                    </thead>
                </table>
            </div>
            <div className="col-sm-8">
                <table className="table-bordered table">
                    <thead>
                        <tr>
                            <th>Đề tài đã hoàn thành</th>
                            <td>Số lượng đề tài: <span style={{ color: 'red' }}>{detaihoanthanh}</span></td>

                        </tr>
                    </thead>
                </table>
            </div>
        </div >

    );
}
export default ThongKe;
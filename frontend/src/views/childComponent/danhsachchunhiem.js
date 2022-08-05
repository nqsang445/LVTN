import React, { useEffect, useState } from "react";
import './danhsachcvht.scss';
import axios from "axios";
import ModalDeleteUserChuNhiem from "../Modal/ModalDeleteUserChuNhiem";
import ModalEditUserChuNhiem from "../Modal/ModalEditUserChuNhiem";

import { FaTrash, FaEdit, FaSearch, FaDownload, FaStickyNote } from 'react-icons/fa';
import * as XLSX from 'xlsx';
import { useForm } from 'react-hook-form';
import ModalThongKeDeTaiHuongDanGVHD from "../Modal/ModalThongKeDeTaiHuongDanGVHD";

function DanhSachChuNhiem() {
    const [data, setData] = useState();
    const [openModalEditUserChuNhiem, setOpenModalEditUserChuNhiem] = useState(false);
    const [openModalDeleteUserChuNhiem, setOpenModalDeleteUserChuNhiem] = useState(false);
    const { register, handleSubmit } = useForm();
    const [userEditChuNhiem, setUserEditChuNhiem] = useState();
    const [deleteChuNhiem, setDeleteChuNhiem] = useState();
    const [openModalThongKeDeTaiHuongDanGVHD, setOpenModalThongKeDeTaiHuongDanGVHD] = useState(false);
    const [infoGVHD, setInfoGVHD] = useState();

    useEffect(async () => {
        try {
            await getListUserChuNhiem();
        } catch (e) {
            console.log(e)
        }
    }, [])
    let getListUserChuNhiem = async () => {
        try {
            let listUserInFo = await axios.get(`http://localhost:8080/api/get-all-user-chunhiem`)
            setData(listUserInFo.data.users);
        } catch (e) {
            console.log(e)
        }
    }
    const onSubmit = async (data) => {
        let searchUserInFor = await axios.post(`http://localhost:8080/api/search-user-infor-chunhiem`, data)
        // console.log(searchUserInFor);
        setData(searchUserInFor.data);
        // await getListUserSVCLC();
    }
    let handleEditUserChuNhiem = (user) => {
        setOpenModalEditUserChuNhiem(!openModalEditUserChuNhiem);
        setUserEditChuNhiem(user);
    }
    let doEditUserIdChuNhiem = async (data) => {
        try {
            let editUserIdChuNhiem = await axios.put(`http://localhost:8080/api/edit-user-id-ChuNhiem`, data)
            if (editUserIdChuNhiem.data.errCode === 0) {
                await getListUserChuNhiem();
            } else {
                alert('Thất bại');
            }
        } catch (e) {
            console.log(e)
        }
    }
    let handleDeleteUserChuNhiem = (userId) => {
        setOpenModalDeleteUserChuNhiem(!openModalDeleteUserChuNhiem)
        setDeleteChuNhiem(userId);

    }
    let doDeleteUserId = async (userId) => {
        try {
            let deleteUserId = await axios.delete(`http://localhost:8080/api/delete-user-id`, { data: { id: userId } })
            if (deleteUserId.data.errCode === 0) {
                await getListUserChuNhiem();
            } else {
                alert('Thất bại');
            }
        } catch (e) {
            console.log(e)
        }
    }
    let handleExportExcel = (data) => {
        // console.log(data)
        // Acquire Data (reference to the HTML table)
        var table_elt = document.getElementById("table-chunhiem");

        // Extract Data (create a workbook object from the table)
        var workbook = XLSX.utils.table_to_book(table_elt);

        // Process Data (add a new row)
        var ws = workbook.Sheets["Sheet1"];
        XLSX.utils.sheet_add_aoa(ws, [["Created " + new Date().toISOString()]], { origin: -1 });

        // Package and Release Data (`writeFile` tries to write and save an XLSB file)
        XLSX.writeFile(workbook, "DanhSachChuNhiem.xlsb");
    }
    let handleOpenModalThongKeDeTaiHuongDanGVHD = (item) => {
        // console.log(item);
        setOpenModalThongKeDeTaiHuongDanGVHD(!openModalThongKeDeTaiHuongDanGVHD);
        setInfoGVHD(item);
    }
    return (<>
        {openModalEditUserChuNhiem &&
            <ModalEditUserChuNhiem
                openModalEditUserChuNhiem={openModalEditUserChuNhiem}
                setOpenModalEditUserChuNhiem={setOpenModalEditUserChuNhiem}
                userEditChuNhiem={userEditChuNhiem}
                doEditUserIdChuNhiem={doEditUserIdChuNhiem}

            />
        }
        {openModalDeleteUserChuNhiem &&
            <ModalDeleteUserChuNhiem
                setOpenModalDeleteUserChuNhiem={setOpenModalDeleteUserChuNhiem}
                openModalDeleteUserChuNhiem={openModalDeleteUserChuNhiem}
                deleteChuNhiem={deleteChuNhiem}
                doDeleteUserId={doDeleteUserId}
            />
        }
        {openModalThongKeDeTaiHuongDanGVHD &&
            <ModalThongKeDeTaiHuongDanGVHD
                openModalThongKeDeTaiHuongDanGVHD={openModalThongKeDeTaiHuongDanGVHD}
                setOpenModalThongKeDeTaiHuongDanGVHD={setOpenModalThongKeDeTaiHuongDanGVHD}
                infoGVHD={infoGVHD}
                getListUserChuNhiem={getListUserChuNhiem}
            />
        }
        <h1>Danh sách Giáo viên hướng dẫn</h1>
        <hr />
        <br />
        <button
            className="btn btn-success"
            onClick={() => handleExportExcel(data)}
        ><FaDownload />  &nbsp;&nbsp;Excel</button>
        <br />
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type='text'
                placeholder="Tài khoản"
                name="account"
                id="account"
                {...register("account", { required: true })}
            /> &nbsp;
            <button type="submit" className="btn btn-primary"><FaSearch /></button> &nbsp;&nbsp;
        </form>
        <br />
        <table className="table  table-bordered text-center" id="table-chunhiem">
            <thead className="thead-dark">
                <tr>
                    <th>STT</th>
                    <th>Tài Khoản</th>
                    <th>Email</th>
                    <th>Họ và tên</th>
                    <th>Địa chỉ</th>
                    <th>Giới Tính</th>
                    <th>Số điện thoại</th>
                    <th>Thống kê đề tài hướng dẫn</th>
                    <th></th>
                </tr>
            </thead>
            {data && data.map((item, index) => {
                return (
                    <tbody key={item.id}>
                        <tr >
                            <td>{index + 1}</td>
                            <td>{item.account}</td>
                            <td>{item.email}</td>
                            <td>{item.firstName} {item.lastName}</td>
                            <td>{item.address}</td>
                            <td>{item.gender == '1' || item.gender == 'Nam' ? 'Nam' : 'Nữ'}</td>
                            <td>{item.phonenumber}</td>
                            <td>
                                <button
                                    className="btn btn-primary"
                                    style={{ backgroundColor: 'blue', border: 'none' }}
                                    onClick={() => handleOpenModalThongKeDeTaiHuongDanGVHD(item)}
                                ><FaStickyNote /></button>&nbsp;
                            </td>
                            <td>
                                <button
                                    className="btn btn-primary"
                                    style={{ backgroundColor: 'blue', border: 'none' }}
                                    onClick={() => handleEditUserChuNhiem(item)}
                                ><FaEdit /></button>&nbsp;

                                <button
                                    className="btn btn-primary"
                                    style={{ backgroundColor: 'red', border: 'none' }}
                                    onClick={() => handleDeleteUserChuNhiem(item.id)}
                                ><FaTrash /></button>
                            </td>
                        </tr>

                    </tbody>

                );
            })}
        </table>
    </>

    );
}
export default DanhSachChuNhiem;
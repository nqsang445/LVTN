import React, { useEffect, useState } from "react";
import './danhsachcvht.scss';
import axios from "axios";
import ModalDeleteUserCVHT from "../Modal/ModalDeleteUserCVHT";
import ModalEditUserCVHT from "../Modal/ModalEditUserCVHT";
import { FaTrash, FaEdit, FaSearch, FaDownload } from 'react-icons/fa';

import * as XLSX from 'xlsx';
import { useForm } from 'react-hook-form';

function DanhSachCVHT() {
    const [data, setData] = useState();
    const [openModalEditUserCVHT, setOpenModalEditUserCVHT] = useState(false);
    const [openModalDeleteUserCVHT, setOpenModalDeleteUserCVHT] = useState(false);
    const { register, handleSubmit } = useForm();
    const [userEditCVHT, setUserEditCVHT] = useState();
    const [deleteCVHT, setDeleteCVHT] = useState();
    useEffect(async () => {
        try {
            await getListUserCVHT();

        } catch (e) {
            console.log(e);
        }
    }, [])
    let getListUserCVHT = async () => {
        try {
            let listUserInFo = await axios.get(`http://localhost:8080/api/get-all-user-cvht`)
            setData(listUserInFo.data.users);
        } catch (e) {
            console.log(e)
        }
    }
    const onSubmit = async (data) => {
        let searchUserInFor = await axios.post(`http://localhost:8080/api/search-user-infor-cvht`, data)
        // console.log(searchUserInFor);
        setData(searchUserInFor.data);
        // await getListUserSVCLC();
    }
    let handleEditUserCVHT = (user) => {
        setOpenModalEditUserCVHT(!openModalEditUserCVHT);
        setUserEditCVHT(user);
    }
    let doEditUserIdCVHT = async (data) => {
        try {
            let editUserIdCVHT = await axios.put(`http://localhost:8080/api/edit-user-id-CVHT`, data)
            if (editUserIdCVHT.data.errCode === 0) {
                await getListUserCVHT();
            } else {
                alert('Thất bại');
            }
        } catch (e) {
            console.log(e)
        }
    }
    let handleDeleteUserCVHT = (userId) => {
        setOpenModalDeleteUserCVHT(!openModalDeleteUserCVHT)
        setDeleteCVHT(userId);

    }
    let doDeleteUserId = async (userId) => {
        try {
            let deleteUserId = await axios.delete(`http://localhost:8080/api/delete-user-id`, { data: { id: userId } })
            if (deleteUserId.data.errCode === 0) {
                await getListUserCVHT();
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
        var table_elt = document.getElementById("table-cvht");

        // Extract Data (create a workbook object from the table)
        var workbook = XLSX.utils.table_to_book(table_elt);

        // Process Data (add a new row)
        var ws = workbook.Sheets["Sheet1"];
        XLSX.utils.sheet_add_aoa(ws, [["Created " + new Date().toISOString()]], { origin: -1 });

        // Package and Release Data (`writeFile` tries to write and save an XLSB file)
        XLSX.writeFile(workbook, "DanhSachCoVanHocTap.xlsb");
    }

    return (<>
        {openModalEditUserCVHT &&
            <ModalEditUserCVHT
                openModalEditUserCVHT={openModalEditUserCVHT}
                setOpenModalEditUserCVHT={setOpenModalEditUserCVHT}
                userEditCVHT={userEditCVHT}
                doEditUserIdCVHT={doEditUserIdCVHT}

            />
        }
        {openModalDeleteUserCVHT &&
            <ModalDeleteUserCVHT
                setOpenModalDeleteUserCVHT={setOpenModalDeleteUserCVHT}
                openModalDeleteUserCVHT={openModalDeleteUserCVHT}
                deleteCVHT={deleteCVHT}
                doDeleteUserId={doDeleteUserId}
            />
        }
        <h1>Danh sách Cố Vấn Học Tập</h1>
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
        <table className="table  table-bordered text-center" id="table-cvht">
            <thead className="thead-dark">
                <tr>
                    <th>STT</th>
                    <th>Tài Khoản</th>
                    <th>Email</th>
                    <th>Họ và tên</th>
                    <th>Địa chỉ</th>
                    <th>Giới Tính</th>
                    <th>Số điện thoại</th>
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
                                    onClick={() => handleEditUserCVHT(item)}
                                ><FaEdit /></button>&nbsp;
                                <button
                                    className="btn btn-primary"
                                    style={{ backgroundColor: 'red', border: 'none' }}
                                    onClick={() => handleDeleteUserCVHT(item.id)}
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
export default DanhSachCVHT;
import React, { useEffect, useState } from "react";
import './danhsachcvht.scss';
import axios from "axios";
import ModalDeleteUserHoiDong from "../Modal/ModalDeleteUserHoiDong";
import ModalEditUserHoiDong from "../Modal/ModalEditUserHoiDong";
import { FaTrash, FaEdit, FaSearch, FaDownload } from 'react-icons/fa';
import * as XLSX from 'xlsx';
import { useForm } from 'react-hook-form';


function DanhSachHoiDong() {
    const [data, setData] = useState();
    const [openModalEditUserHD, setOpenModalEditUserHD] = useState(false);
    const [openModalDeleteUserHD, setOpenModalDeleteUserHD] = useState(false);
    const { register, handleSubmit } = useForm();
    const [userEditHD, setUserEditHD] = useState();
    const [deleteHD, setDeleteHD] = useState();
    useEffect(async () => {
        try {
            await getListUserHoiDong();
        } catch (e) {
            console.log(e);
        }
    }, [])
    let getListUserHoiDong = async () => {
        try {
            let listUserInFo = await axios.get(`http://localhost:8080/api/get-all-user-hoidong`)
            setData(listUserInFo.data.users);
        } catch (e) {
            console.log(e)
        }
    }
    const onSubmit = async (data) => {
        let searchUserInFor = await axios.post(`http://localhost:8080/api/search-user-infor-hoidong`, data)
        // console.log(searchUserInFor);
        setData(searchUserInFor.data);
        // await getListUserSVCLC();
    }
    //edit
    let handleEditUserHD = (user) => {
        setOpenModalEditUserHD(!openModalEditUserHD);
        setUserEditHD(user);
    }
    let doEditUserIdHD = async (data) => {
        try {
            let editUserIdHD = await axios.put(`http://localhost:8080/api/edit-user-id-HoiDong`, data)
            if (editUserIdHD.data.errCode === 0) {
                await getListUserHoiDong();
            } else {
                alert('Thất bại');
            }
        } catch (e) {
            console.log(e)
        }
    }
    //delete
    let handleDeleteUserHD = (userId) => {
        setOpenModalDeleteUserHD(!openModalDeleteUserHD)
        setDeleteHD(userId);

    }
    let doDeleteUserId = async (userId) => {
        try {
            let deleteUserId = await axios.delete(`http://localhost:8080/api/delete-user-id`, { data: { id: userId } })
            if (deleteUserId.data.errCode === 0) {
                await getListUserHoiDong();
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
        var table_elt = document.getElementById("table-hoidong");

        // Extract Data (create a workbook object from the table)
        var workbook = XLSX.utils.table_to_book(table_elt);

        // Process Data (add a new row)
        var ws = workbook.Sheets["Sheet1"];
        XLSX.utils.sheet_add_aoa(ws, [["Created " + new Date().toISOString()]], { origin: -1 });

        // Package and Release Data (`writeFile` tries to write and save an XLSB file)
        XLSX.writeFile(workbook, "DanhSachHoiDong.xlsb");
    }
    let handleKhoaQuyenHoiDong = async (id) => {
        // console.log(id)
        try {
            let trangthaiQuyen = await axios.post(`http://localhost:8080/api/khoa-quyen-chinh-sua-de-tai-cua-hoi-dong`, { id: id })
            getListUserHoiDong();
        } catch (e) {

        }

    }
    let handleMoKhoaQuyenHoiDong = async (id) => {
        console.log(id)
        try {
            let trangthaiQuyen = await axios.post(`http://localhost:8080/api/mo-khoa-quyen-chinh-sua-de-tai-cua-hoi-dong`, { id: id })
            getListUserHoiDong();

        } catch (e) {

        }

    }

    return (<>
        {openModalEditUserHD &&
            <ModalEditUserHoiDong
                openModalEditUserHD={openModalEditUserHD}
                setOpenModalEditUserHD={setOpenModalEditUserHD}
                userEditHD={userEditHD}
                doEditUserIdHD={doEditUserIdHD}

            />
        }
        {openModalDeleteUserHD &&
            <ModalDeleteUserHoiDong
                setOpenModalDeleteUserHD={setOpenModalDeleteUserHD}
                openModalDeleteUserHD={openModalDeleteUserHD}
                deleteHD={deleteHD}
                doDeleteUserId={doDeleteUserId}
            />
        }
        <h1>Danh sách Hội Đồng</h1>
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
        <table className="table  table-bordered text-center" id="table-hoidong">
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
                                    onClick={() => handleEditUserHD(item)}
                                ><FaEdit /></button>&nbsp;
                                <button
                                    className="btn btn-primary"
                                    style={{ backgroundColor: 'red', border: 'none' }}
                                    onClick={() => handleDeleteUserHD(item.id)}
                                ><FaTrash /></button>&nbsp;
                                {item.condition == '1' &&
                                    <button
                                        className="btn btn-danger"
                                        style={{ border: 'none' }}
                                        onClick={() => handleKhoaQuyenHoiDong(item.id)}
                                    >Khóa</button>
                                }
                                {item.condition == '0' &&
                                    <button
                                        className="btn btn-warning"
                                        style={{ border: 'none' }}
                                        onClick={() => handleMoKhoaQuyenHoiDong(item.id)}
                                    >Mở</button>
                                }

                            </td>
                        </tr>

                    </tbody>

                );
            })}
        </table>
    </>

    );
}
export default DanhSachHoiDong;
import React, { useEffect, useState } from "react";
import './danhsachcvht.scss';
import axios from "axios";
import { useForm } from 'react-hook-form';

import ModalEditUserSVCLC from "../Modal/ModalEditUserSVCLC";
import ModalDeleteUserSVCLC from "../Modal/ModalDeleteUserSVCLC";
import ExportExcelSVCLC from "../exportExcel/exportExcelSVCLC";

import { FaTrash, FaEdit, FaSearch, FaDownload } from 'react-icons/fa';


import * as XLSX from 'xlsx';

function DanhSachSVCLC() {
    const [data, setData] = useState();
    const [openModalEditUserSVCLC, setOpenModalEditUserSVCLC] = useState(false);
    const [openModalDeleteUserSVCLC, setOpenModalDeleteUserSVCLC] = useState(false);
    const { register, handleSubmit } = useForm({
        code: '',
        khoi: '',
        condition: ''
    });
    const [userEditSVCLC, setUserEditSVCLC] = useState();
    const [deleteSVCL, setDeleteSVCLC] = useState();

    useEffect(async () => {
        try {
            await getListUserSVCLC();
        } catch (e) {
            console.log(e)
        }

    }, [])
    let getListUserSVCLC = async () => {
        try {
            let listUserInFo = await axios.get(`http://localhost:8080/api/get-all-user-svclc`)
            setData(listUserInFo.data.users);
        } catch (e) {
            console.log(e)
        }
    }
    const onSubmit = async (data) => {
        let searchUserInFor = await axios.post(`http://localhost:8080/api/search-user-infor-svclc`, data)
        // console.log(searchUserInFor);
        setData(searchUserInFor.data);
        // await getListUserSVCLC();
    }
    let handleEditUserSVCLC = (user) => {
        setOpenModalEditUserSVCLC(!openModalEditUserSVCLC);
        setUserEditSVCLC(user);
    }
    let doEditUserIdSVCLC = async (data) => {
        try {
            let editUserIdSVCLC = await axios.put(`http://localhost:8080/api/edit-user-id-svclc`, data)
            if (editUserIdSVCLC.data.errCode === 0) {
                await getListUserSVCLC();
            } else {
                alert('Thất bại');
            }
        } catch (e) {
            console.log(e)
        }
    }
    let handleDeleteUserSVCLC = (userId) => {
        setOpenModalDeleteUserSVCLC(!openModalDeleteUserSVCLC)
        setDeleteSVCLC(userId);

    }
    let doDeleteUserId = async (userId) => {
        try {
            let deleteUserId = await axios.delete(`http://localhost:8080/api/delete-user-id`, { data: { id: userId } })
            if (deleteUserId.data.errCode === 0) {
                await getListUserSVCLC();
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
        var table_elt = document.getElementById("table-svclc");

        // Extract Data (create a workbook object from the table)
        var workbook = XLSX.utils.table_to_book(table_elt);

        // Process Data (add a new row)
        var ws = workbook.Sheets["Sheet1"];
        XLSX.utils.sheet_add_aoa(ws, [["Created " + new Date().toISOString()]], { origin: -1 });

        // Package and Release Data (`writeFile` tries to write and save an XLSB file)
        XLSX.writeFile(workbook, "DanhSachSinhVienChatLuongCao.xlsb");
    }

    return (<>
        {openModalEditUserSVCLC &&
            <ModalEditUserSVCLC
                openModalEditUserSVCLC={openModalEditUserSVCLC}
                setOpenModalEditUserSVCLC={setOpenModalEditUserSVCLC}
                userEditSVCLC={userEditSVCLC}
                doEditUserIdSVCLC={doEditUserIdSVCLC}

            />
        }
        {openModalDeleteUserSVCLC &&
            <ModalDeleteUserSVCLC
                setOpenModalDeleteUserSVCLC={setOpenModalDeleteUserSVCLC}
                openModalDeleteUserSVCLC={openModalDeleteUserSVCLC}
                deleteSVCL={deleteSVCL}
                doDeleteUserId={doDeleteUserId}
            />
        }


        <h1>Danh sách Sinh Viên Chất Lượng Cao</h1>
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
                name="mssv"
                id="mssv"
                placeholder="MSSV"
                {...register("mssv")}
            />&nbsp;&nbsp;
            <input
                type='text'
                name="code"
                id="code"
                placeholder="Mã lớp"
                {...register("code")}
            />&nbsp;&nbsp;

            <label class="my-1 mr-2" htmlFor="gender">Trạng thái:</label>&nbsp;
            <select
                class="custom-select my-1 mr-sm-2"
                id="condition"
                name="condition"
                {...register("condition")}
            >
                <option selected value=''>Chọn.....</option>
                <option value="Chưa thực hiện">Chưa thực hiện</option>
                <option value="Đang thực hiện">Đang thực hiện</option>
                <option value="Đã hoàn thành">Đã hoàn thành</option>
            </select>&nbsp;&nbsp;&nbsp;
            &nbsp;
            <label class="my-1 mr-2" htmlFor="gender" hidden>Khối: </label>&nbsp;
            <input
                type='text'
                name="khoi"
                id="khoi"
                placeholder="VD: k44"
                {...register("khoi")}
                hidden
            />
            {/* <select
                class="custom-select my-1 mr-sm-2"
                id="khoi"
                name="khoi"
                {...register("khoi")}

            >
                <option selected value=''>Chọn.....</option>
                <option value="k43">k43</option>
                <option value="k44">k44</option>
                <option value="k45">k45</option>
                <option value="k46">k46</option>
                <option value="k47">k47</option>
                <option value="k48">k48</option>
            </select> */}
            &nbsp;&nbsp;
            <button
                type="submit"
                className="btn btn-primary"
            ><FaSearch />
            </button> &nbsp;&nbsp;
        </form>
        <br />
        <table className="table  table-bordered text-center" id="table-svclc">
            <thead className="thead-dark">
                <tr>
                    <th>STT</th>
                    <th>MSSV</th>
                    <th>Email</th>
                    <th>Họ và tên</th>
                    <th>Mã Lớp</th>
                    {/* <th>Địa chỉ</th> */}
                    <th>Giới Tính</th>
                    <th>Trạng thái thực hiện đề tài</th>
                    {/* <th>Khối</th> */}
                    {/* <th>Trạng thái</th> */}

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
                            <td>{item.code}</td>
                            {/* <td>{item.address}</td> */}
                            <td>{item.gender}</td>
                            {/* <td>{item.phonenumber}</td> */}
                            {/* <td>{item.khoi}</td> */}
                            <td>{item.condition}</td>
                            <td>
                                <button
                                    className="btn btn-primary"
                                    style={{ backgroundColor: 'blue', border: 'none' }}
                                    onClick={() => handleEditUserSVCLC(item)}
                                ><FaEdit /></button>&nbsp;

                            </td>
                            <td>
                                <button
                                    className="btn btn-primary"
                                    style={{ backgroundColor: 'red', border: 'none' }}
                                    onClick={() => handleDeleteUserSVCLC(item.id)}
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
export default DanhSachSVCLC;
import React from "react";
import { useEffect, useState } from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from "react-router-dom";
import ModalCapNhatThongTinCaNhan from "../Modal/ModalCapNhatThongTinCaNhan";
function ProFile() {
    let paramUserid = useParams();
    const [userInfo, setUserInfo] = useState();
    const [openModalCapNhatThongTinCaNhan, setOpenModalCapNhatThongTinCaNhan] = useState(false);

    useEffect(() => {

        getUserInFo();
        // console.log(userInFo.data);
    }, [paramUserid]);
    let getUserInFo = async () => {
        let userInFo = await axios.post(`http://localhost:8080/api/get-user-id`, { id: paramUserid })
        setUserInfo(userInFo.data);
    }
    let handleModalCapNhatThongTinCaNhan = () => {
        setOpenModalCapNhatThongTinCaNhan(!openModalCapNhatThongTinCaNhan);

    }
    return (

        <div>
            {openModalCapNhatThongTinCaNhan &&
                <ModalCapNhatThongTinCaNhan
                    openModalCapNhatThongTinCaNhan={openModalCapNhatThongTinCaNhan}
                    setOpenModalCapNhatThongTinCaNhan={setOpenModalCapNhatThongTinCaNhan}
                    userInfo={userInfo}
                    getUserInFo={getUserInFo}
                />
            }

            <h2>Thông Tin Cá Nhân</h2><br />
            <table className="table table-bordered">

                {userInfo && userInfo.map((item, index) => {
                    return (
                        <><tbody key={index}>
                            <tr  >
                                <td style={{ color: 'blue' }} key={index}>Tài khoản</td>
                                <td>: {item.account}</td>
                            </tr>
                            <tr>
                                <td style={{ color: 'blue', }}>Email</td>
                                <td>: {item.email}</td>
                            </tr >
                            <tr >
                                <td style={{ color: 'blue', }}>Họ và tên</td>
                                <td>: {item.firstName}&nbsp;{item.lastName}</td>
                            </tr>
                            {/* <tr >
                                <td style={{ color: 'blue', }}>Số điện thoại</td>
                                <td>: {item.phonenumber}</td>
                            </tr> */}
                            <tr >
                                <td style={{ color: 'blue', }}>Giới tính</td>
                                <td>: {item.gender}</td>
                            </tr >
                            <tr >
                                <td style={{ color: 'blue', }}>Chức vụ</td>
                                <td>: {item.roleId === "R1" ? 'Quản trị viên' :
                                    item.roleId === "R2" ? 'Cố Vấn Học Tập' :
                                        item.roleId === "R3" ? 'Giáo viên hướng dẫn' :
                                            item.roleId === "R4" ? 'Hội Đồng' :
                                                item.roleId === "R5" ? 'Sinh Viên Chất Lượng Cao' : ''
                                }</td>
                            </tr>
                            {item.roleId === 'R5' ?
                                <>
                                    {/* <tr>

                                        <td style={{ color: 'blue', }}>Khối</td>
                                        <td>: {item.khoi}</td>
                                    </tr> */}
                                    <tr>

                                        <td style={{ color: 'blue', }}>Lớp</td>
                                        <td>: {item.code}</td>
                                    </tr>
                                </>

                                :
                                ''
                            }

                        </tbody>
                        </>
                    );
                }
                )

                }

            </table>
            <div>
                <button className="btn btn-primary"
                    onClick={() => handleModalCapNhatThongTinCaNhan()}
                >Cập nhật thông tin cá nhân </button>
            </div>
        </div >

    );
}
export default ProFile;
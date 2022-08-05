import React from "react";
// import "./AdminPage.scss";
import { FaUserCog } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
import { FaSortUp } from "react-icons/fa";
import { FaSignOutAlt, FaAngleDown } from "react-icons/fa";
import { useState, useEffect } from "react";
import {

    Link,
    Outlet,
    NavLink,
    useNavigate,
    Navigate,
    useParams,
} from "react-router-dom";
import HomePage from "../Home/HomePage";
import axios from "axios";
import { useStore, actions } from "../../store";

function AdminPage() {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [showNameLogin, setShowNameLogin] = useState(false);
    const navigate = useNavigate();
    const [state, dispatch] = useStore();
    const { isLogin, user, roleId } = state;
    // console.log('isLogin: ', isLogin);
    // console.log('user: ', user);
    // console.log('roleId: ', roleId);
    useEffect(() => {
        if (isLogin === false) {
            navigate('/');
        }
    }, [isLogin]);

    let handleLogout = () => {
        let isLogin = false;
        dispatch(actions.LoginSucces(isLogin));
        navigate('/');
    }

    return (
        <>
            <div className="admin-container">
                <div className="admin-left">
                    <div className="admin-left-content-header">
                        <a href="#top" className="admin-left-header"
                            style={{ textDecoration: 'none', color: 'white' }}
                        >
                            QUẢN TRỊ VIÊN
                        </a>
                    </div>
                    <hr />
                    <div className="menu">
                        <div className="main-menu">
                            <div className="sidebar">

                                <a onClick={() => setShow(!show)} style={{ color: 'white' }}>Quản lý tài khoản <FaAngleDown /></a>
                                {show &&
                                    <>
                                        <Link to='/admin' style={{ color: 'white' }}>Cập nhật danh sách sinh viên</Link>
                                        <Link to='dangkytaikhoan' style={{ color: 'white' }}>Tạo tài khoản</Link>
                                        <Link to='danhsachsvclc' style={{ color: 'white' }}>Quản lý Danh sách sinh viên chất lượng cao</Link>
                                        <Link to='danhsachcvht' style={{ color: 'white' }}>Quản lý Danh sách cố vấn học tập</Link>
                                        <Link to='danhsachhoidong' style={{ color: 'white' }}>Quản lý Danh sách hội đồng</Link>
                                        <Link to='danhsachchunhiem' style={{ color: 'white' }}>Quản lý Danh sách giáo viên hướng dẫn</Link>
                                    </>
                                }
                                {/* show */}
                                <a onClick={() => setShow1(!show1)} style={{ color: 'white' }}>Quản lý đề tài <FaAngleDown /></a>
                                {show1 &&
                                    <>
                                        <Link to='thongbaodangkydetai' style={{ color: 'white' }}>Thông báo đăng ký đề tài</Link>
                                        <Link to='modangkydetai' style={{ color: 'white' }}>Mở đăng ký đề tài</Link>
                                        <Link to='detaidaduyet' style={{ color: 'white' }}>Đề tài đã duyệt</Link>
                                        <Link to='detaidangkynghiemthuadmin' style={{ color: 'white' }}>Đề tài đăng ký nghiệm thu</Link>
                                        <Link to='detaidahoanthanh' style={{ color: 'white' }}>Đề tài đã hoàn thành</Link>
                                        {/* <Link to='thongke' >Thống kê</Link> */}

                                        {/* detaidangkynghiemthuadmin */}
                                    </>
                                }
                                {/* show1 */}
                                {/* <Link to='/admin' >Cập nhật danh sách sinh viên</Link>
                                <Link to='dangkytaikhoan' >Tạo tài khoản</Link>
                                <Link to='danhsachsvclc' >Danh sách sinh viên chất lượng cao</Link>
                                <Link to='danhsachcvht' >Danh sách cố vấn học tập</Link>
                                <Link to='danhsachhoidong' >Danh sách hội đồng</Link>
                                <Link to='danhsachchunhiem' >Danh sách chủ nhiệm</Link>
                                <Link to='thongbaodangkydetai' >Thông báo đăng ký đề tài</Link>
                                <Link to='modangkydetai' >Mở đăng ký đề tài</Link>
                                <Link to='detaidaduyet' >Đề tài đã duyệt</Link>
                                <Link to='detaidahoanthanh' >Đề tài đã hoàn thành</Link> */}

                            </div>
                        </div>
                    </div>





                </div>
                <div className="admin-right" id="top">
                    <div className="admin-header">
                        <div className="admin-header-right-content-left">

                        </div>
                        <div className="admin-header-right-content-right">
                            <div className="content-right-text-rigt">
                                <span className="content-right-text-rigt-left">{user.account}</span>
                                <span onClick={() => setShowNameLogin(!showNameLogin)}><FaSortDown className="icon-dropdown" /></span>
                                {showNameLogin &&
                                    <div className="showInfoUser">

                                        <div className="sidebar">
                                            <Link to={`/admin/${user.id}`} onClick={() => setShowNameLogin(!showNameLogin)}>Thông tin cá nhân</Link>
                                            <Link to={`changepassword${user.id}`} onClick={() => setShowNameLogin(!showNameLogin)}>Đổi mật khẩu</Link>

                                        </div>
                                    </div>

                                }
                            </div>
                            <span onClick={handleLogout}><FaSignOutAlt className="icon-logout" /></span>
                        </div>
                    </div>
                    <div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )

}
export default AdminPage;
import React from "react";
import "./CHUNHIEM.scss";
import { FaUserCog } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
import { FaSortUp } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import {

    Link,
    Outlet,
    NavLink,
    useNavigate
} from "react-router-dom";
import { useStore, actions } from "../../store";
import axios from "axios";

function CHUNHIEM(props) {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [showNameLogin, setShowNameLogin] = useState(false);
    const navigate = useNavigate();
    const [state, dispatch] = useStore();
    const { isLogin, user, roleId } = state;
    const [detai, setDetai] = useState();

    // console.log('isLogin: ', isLogin);
    // console.log('user: ', user);
    // console.log('roleId: ', roleId);
    useEffect(() => {
        if (isLogin === false) {
            navigate('/');
        }
    }, [isLogin]);
    useEffect(() => {
        getListDeTaiCuaSinhVienCLCDangLam();
    }, []);

    let handleLogout = () => {
        let isLogin = false;
        dispatch(actions.LoginSucces(isLogin));
        navigate('/');
    }
    let getListDeTaiCuaSinhVienCLCDangLam = async () => {
        const res = await axios.post(`http://localhost:8080/api/getListDeTaiCuaSinhVienCLCDangLam`, user)
        setDetai(res.data[0].trangthaidetai);
    }
    console.log(detai);

    return (
        <>
            <div className="admin-container">
                <div className="admin-left">
                    <div className="admin-left-content-header">
                        <a href="#top" className="admin-left-header"
                            style={{ textDecoration: 'none', color: 'white' }}
                        >
                            SINH VIÊN CLC
                        </a>
                    </div>
                    <hr />
                    <div className="menu">
                        <div className="main-menu">
                            <div className="sidebar">
                                {detai && detai == 'dangky' ?
                                    <Link to='/chunhiem' style={{ color: 'green' }}>Đăng ký đề tài</Link>
                                    :
                                    <Link to='/chunhiem' style={{ color: 'white' }}>Đăng ký đề tài</Link>
                                }
                                {/* <Link to='/chunhiem' >Đăng ký đề tài</Link> */}
                                {detai && detai == 'duyet' ?
                                    <Link to={`/chunhiem/detaidangthuchien${user.id}`} style={{ color: 'green' }}>Đề tài đã được duyệt</Link>
                                    :
                                    <Link to={`/chunhiem/detaidangthuchien${user.id}`} style={{ color: 'white' }}>Đề tài đã được duyệt</Link>

                                }
                                {detai && detai == 'giaodetai' ?
                                    <Link to={`/chunhiem/detaidabangiao${user.id}`} style={{ color: 'green' }}>Đề tài đã được bàn giao</Link>
                                    :
                                    <Link to={`/chunhiem/detaidabangiao${user.id}`} style={{ color: 'white' }}>Đề tài đã được bàn giao</Link>

                                }
                                {detai && detai == 'nhandetai' ?
                                    <Link to={`/chunhiem/detaidanhan${user.id}`} style={{ color: 'green' }}>Đề tài đang thực hiện</Link>
                                    :
                                    <Link to={`/chunhiem/detaidanhan${user.id}`} style={{ color: 'white' }}>Đề tài đang thực hiện</Link>
                                }
                                {detai && detai == 'xinnghiemthu' ?
                                    <Link to={`/chunhiem/detaidangnghiemthu${user.id}`} style={{ color: 'green' }}>Đề tài đang nghiệm thu</Link>
                                    :
                                    <Link to={`/chunhiem/detaidangnghiemthu${user.id}`} style={{ color: 'white' }}>Đề tài đang nghiệm thu</Link>
                                }
                                {detai && detai == 'hoanthanh' ?
                                    <Link to={`/chunhiem/detaidahoanthanh${user.id}`} style={{ color: 'green' }}>Đề tài đã hoàn thành</Link>
                                    :
                                    <Link to={`/chunhiem/detaidahoanthanh${user.id}`} style={{ color: 'white' }}>Đề tài đã hoàn thành</Link>

                                }
                                {/* <Link to={`/chunhiem/detaidabangiao${user.id}`} >Đề tài đã được bàn giao</Link>
                                <Link to={`/chunhiem/detaidahoanthanh${user.id}`} >Đề tài đã hoàn thành</Link> */}
                                {/* detaidanhan */}
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
                                            <Link to={`/chunhiem/${user.id}`} onClick={() => setShowNameLogin(!showNameLogin)}>Thông tin cá nhân</Link>
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
export default CHUNHIEM;
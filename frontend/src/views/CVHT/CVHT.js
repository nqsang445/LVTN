import React from "react";
import "./CVHT.scss";
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

function CVHT() {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [showNameLogin, setShowNameLogin] = useState(false);
    const navigate = useNavigate();
    const [state, dispatch] = useStore();
    const { isLogin, user, roleId } = state;

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
                            CỐ VẤN HỌC TẬP
                        </a>
                    </div>
                    <hr />
                    <div className="menu">
                        <div className="main-menu">
                            <div className="sidebar">
                                <Link to='/cvht' style={{ color: 'white' }}>Cập nhật danh sách sinh viên</Link>
                                <Link to='/cvht/danhsachsvclc_copy' style={{ color: 'white' }}>Danh sách sinh viên chất lượng cao</Link>

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
                                            <Link to={`/cvht/${user.id}`} onClick={() => setShowNameLogin(!showNameLogin)}>Thông tin cá nhân</Link>
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
export default CVHT;
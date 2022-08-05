import React from "react";
import "./HOIDONG.scss";
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

function HOIDONG(props) {
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
                            HỘI ĐỒNG
                        </a>
                    </div>
                    <hr />
                    <div className="menu">
                        <div className="main-menu">
                            <div className="sidebar">
                                <Link to={`/hoidong/detaiduocphancongchohoidong${user.id}`} style={{ color: 'white' }}>Đề tài được phân công xét duyệt</Link>
                                <Link to={`/hoidong/detaiduocphancongnghiemthuchohoidong${user.id}`} style={{ color: 'white' }}>Đề tài được phân công nghiệm thu</Link>

                                <Link to={`/hoidong/lichsudetai${user.id}`} style={{ color: 'white' }}>Lịch sử Đề tài được phân công</Link>

                                {/* lichsudetai */}
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
                                            <Link to={`/hoidong/${user.id}`} onClick={() => setShowNameLogin(!showNameLogin)}>Thông tin cá nhân</Link>
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
export default HOIDONG;
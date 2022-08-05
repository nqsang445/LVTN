import {
    Routes,
    Route,
    Outlet,
    NavLink,
    Link
} from "react-router-dom";
import './HomePage.scss';

function HomePage() {
    return (
        <>
            <div className="container background">
                <div className="Header">
                    <div className="header-content">
                        <p className="header-content-1">TRƯỜNG ĐẠI HỌC CẦN THƠ</p>
                        <p className="header-content-2">NGHIÊN CỨU KHOA HỌC</p>
                    </div>
                </div>
                <div className="sidebar">

                    <NavLink to='/' >Đăng Nhập</NavLink>
                    <NavLink to='danhsachdetai' >Danh Sách Đề Tài</NavLink>
                    <NavLink to='thongbaodangkydetaihome' >Thông báo</NavLink>

                    {/* thongbaodangkydetaihome */}
                </div>
                <div className="content">
                    <Outlet />
                </div>
            </div >
        </>
    )
}
export default HomePage;
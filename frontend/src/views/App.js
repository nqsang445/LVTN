import './App.scss';

import Login from './auth/login';
import DanhSachDeTai from './DSDT/DanhSachDeTai';
import AdminPage from './AdminPage/AdminPage';
import CVHT from './CVHT/CVHT';
import CHUNHIEM from './CHUNHIEM/CHUNHIEM';
import HOIDONG from './HOIDONG/HOIDONG';
import SVCLC from './SVCLC/SVCLC';
import Child1 from './childComponent/child1';
import Child2 from './childComponent/child2';
import Child3 from './childComponent/child3';
import CapNhatDanhSachSv from './childComponent/capnhatdanhsachsv';
import ProFile from './childComponent/ProFile';
import ChangePassword from './childComponent/ChangPassword';
import DanhSachCVHT from './childComponent/danhsachcvht';
import DanhSachSVCLC from './childComponent/danhsachsvclc';
import DanhSachHoiDong from './childComponent/danhsachhoidong';
import DanhSachChuNhiem from './childComponent/danhsachchunhiem'
import DangKyTaiKhoan from './childComponent/dangkytaikhoan';
import MoDangKyDeTai from './childComponent/modangkydetai';
import DeTaiDaDuyet from './childComponent/detaidaduyet';
import DeTaiDaHoanThanhChuNhiem from './childComponent/detaidahoanthanh_chunhiem';
import DeTaiDangThucHienChuNhiem from './childComponent/detaidangthuchien_chunhiem';
import DangKyDeTaiChuNhiem from './childComponent/dangkydetai_chunhiem';
import DanhSachSVCLCCopy from './childComponent/danhsachsvclc_copy';
import DeTaiDangThucHienSinhVien from './childComponent/danhsachdetaidangthuchien_sv';
import DeTaiDaHoanThanhSinhVien from './childComponent/danhsachdetaidahoanthanh_sv';
import DeTaiDuocPhanCongChoHoiDong from './childComponent/detaiduocphancongchohoidong';
import DeTaiDaHoanThanhAdmin from './childComponent/danhsachdetai_dahoanthanh_admin';
import ThongBaoDangKyDeTai from './childComponent/thongbaodangkydetai_admin';
import ThongBaoDangKyDeTaiHome from './DSDT/ThongBaoDangKyDeTai';
import DeTaiDaBanGiao from './childComponent/detaidabangiao';
import LichSuDeTaiDuocPhanCongChoHoiDong from './childComponent/lichsudetaiduocphanconghd';
import DeTaiDaNhan from './childComponent/detaidanhan_chunhiem';
import DeTaiDangKyNghiemThuAdmin from './childComponent/detaidangkynghiemthu_admin';
import DeTaiDangNghiemThuChuNhiem from './childComponent/detainghiemthu_chunhiem';
import DeTaiDuocPhanCongNghiemThuChoHoiDong from './childComponent/detaiduocphancongnghiemthu_hoidong';

import ThongKe from './childComponent/thongke';

import {
  Routes,
  Route,
} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './Home/HomePage';
import { useContext, useState } from 'react';
import { StoreContext } from '../store';
import { LoginProvider } from '../store/LoginContext';

function App() {
  // const [state, dispatch] = useContext(StoreContext);
  // console.log(state);
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}>
          <Route index element={<Login />} />
          <Route path='danhsachdetai' element={<DanhSachDeTai />} />
          <Route path='thongbaodangkydetaihome' element={<ThongBaoDangKyDeTaiHome />} />
        </Route>
        <Route path='/admin' element={<AdminPage />} >
          <Route index element={<CapNhatDanhSachSv />} />
          <Route path='danhsachcvht' element={<DanhSachCVHT />} />
          <Route path='danhsachsvclc' element={<DanhSachSVCLC />} />
          <Route path='danhsachhoidong' element={<DanhSachHoiDong />} />
          <Route path='danhsachchunhiem' element={<DanhSachChuNhiem />} />
          <Route path='dangkytaikhoan' element={<DangKyTaiKhoan />} />
          <Route path='modangkydetai' element={<MoDangKyDeTai />} />
          <Route path='detaidaduyet' element={<DeTaiDaDuyet />} />
          <Route path='detaidahoanthanh' element={<DeTaiDaHoanThanhAdmin />} />
          <Route path='thongbaodangkydetai' element={<ThongBaoDangKyDeTai />} />
          <Route path='detaidangkynghiemthuadmin' element={<DeTaiDangKyNghiemThuAdmin />} />
          <Route path='thongke' element={<ThongKe />} />

          {/* ThongKe */}
          <Route path=':id' element={<ProFile />} />
          <Route path='changepassword:id' element={<ChangePassword />} />
        </Route>
        <Route path='/svclc:id' element={<SVCLC />} >
          <Route index element={<DeTaiDangThucHienSinhVien />} />
          <Route path='detaidahoanthanh:id' element={<DeTaiDaHoanThanhSinhVien />} />
          <Route path=':id' element={<ProFile />} />
          <Route path='changepassword:id' element={<ChangePassword />} />
        </Route>
        <Route path='/chunhiem' element={<CHUNHIEM />} >
          <Route index element={<DangKyDeTaiChuNhiem />} />
          <Route path='detaidahoanthanh:id' element={<DeTaiDaHoanThanhChuNhiem />} />
          <Route path='detaidangthuchien:id' element={<DeTaiDangThucHienChuNhiem />} />
          <Route path='detaidabangiao:id' element={<DeTaiDaBanGiao />} />
          <Route path='detaidanhan:id' element={<DeTaiDaNhan />} />
          <Route path='detaidangnghiemthu:id' element={<DeTaiDangNghiemThuChuNhiem />} />

          {/* ThongKe */}
          <Route path=':id' element={<ProFile />} />
          <Route path='changepassword:id' element={<ChangePassword />} />
        </Route>
        <Route path='/cvht' element={<CVHT />} >
          <Route index element={<CapNhatDanhSachSv />} />
          <Route path='danhsachsvclc_copy' element={<DanhSachSVCLCCopy />} />

          <Route path=':id' element={<ProFile />} />
          <Route path='changepassword:id' element={<ChangePassword />} />

          <Route path='child2' element={<Child2 />} />
          <Route path='child3' element={<Child3 />} />
        </Route>
        <Route path='/hoidong' element={<HOIDONG />} >
          {/* <Route index element={<Child1 />} /> */}
          <Route path=':id' element={<ProFile />} />
          <Route path='detaiduocphancongchohoidong:id' element={<DeTaiDuocPhanCongChoHoiDong />} />
          <Route path='detaiduocphancongnghiemthuchohoidong:id' element={<DeTaiDuocPhanCongNghiemThuChoHoiDong />} />

          {/* DeTaiDuocPhanCongNghiemThuChoHoiDong */}
          <Route path='lichsudetai:id' element={<LichSuDeTaiDuocPhanCongChoHoiDong />} />
          <Route path='changepassword:id' element={<ChangePassword />} />
          {/* DeTaiDuocPhanCongChoHoiDong */}

        </Route>
        <Route path='*' element={<div>401 Không Tìm Thấy</div>} />

      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={300}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
}

export default App;

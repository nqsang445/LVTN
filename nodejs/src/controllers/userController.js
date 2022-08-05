

import userService from '../services/userService';
import jwt from 'jsonwebtoken';


let handleLogin = async (req, res) => {
    let account = req.body.account;
    let password = req.body.password;

    if (!account || !password) {
        return res.status(200).json({
            errCode: 1,
            massage: 'Vui lòng điền đầy đủ thông tin!.',
        })
    }
    let userData = await userService.handleUserLogin(account, password);
    if (userData.errCode !== 0) {
        return res.status(200).json({
            errCode: userData.errCode,
            message: userData.errMessage,
        })
    } else {
        const accessToken = jwt.sign({ id: userData.user.id }, 'tokensecret', { expiresIn: '2h' })
        return res.status(200).json({
            auth: true,
            accessToken: accessToken,
            user: userData.user
        })
    }

}
let handleGetAllUser = async (req, res) => {
    let users = await userService.getAllUser();
    return res.status(200).json({
        users
    })
}
let handleCreateUser = async (req, res) => {
    let data = req.body;
    let message = await userService.createNewUser(data);
    return res.status(200).json(message);
}
let getUserId = async (req, res) => {
    let userId = req.body.id.id;

    let userInfo = await userService.getUserId(userId);

    return res.status(200).json(userInfo);

}
let changePasswordUserId = async (req, res) => {
    let userId = req.body.id.id;
    let passOld = req.body.passwordOld;
    let passNew = req.body.passwordNew;
    let message = await userService.changePasswordUserId(userId, passOld, passNew);

    return res.status(200).json(message);
}
let createExcelUserStudent = async (req, res) => {
    let message = await userService.createNewUserStudentArray(req.body.data);
    return res.status(200).json(message);
}
let handleGetAllUserCVHT = async (req, res) => {
    let users = await userService.getAllUserCVHT();
    return res.status(200).json({
        users
    })
}
let handleGetAllUserChuNhiem = async (req, res) => {
    let users = await userService.getAllUserChuNhiem();
    return res.status(200).json({
        users
    })
}
let handleGetAllUserHoiDong = async (req, res) => {
    let users = await userService.getAllUserHoiDong();
    return res.status(200).json({
        users
    })
}
let handleGetAllUserSVCLC = async (req, res) => {
    let users = await userService.getAllUserSVCLC();
    return res.status(200).json({
        users
    })
}
let handleEditUserIdSVCLC = async (req, res) => {
    let message = await userService.editUserIdSVCLC(req.body);
    return res.status(200).json(message);
}
let handleDeleteUserId = async (req, res) => {
    let message = await userService.deleteUserId(req.body.id);
    return res.status(200).json(message);
}
let handleEditUserIdCVHT = async (req, res) => {
    let message = await userService.editUserIdCVHT(req.body);
    return res.status(200).json(message);
}
let handleEditUserIdChuNhiem = async (req, res) => {
    let message = await userService.editUserIdChuNhiem(req.body);
    return res.status(200).json(message);
}
let handleEditUserIdHoiDong = async (req, res) => {
    let message = await userService.editUserIdHoiDong(req.body);
    return res.status(200).json(message);
}
let searchUserSVCLC = async (req, res) => {
    let listSearchUserSVCLC = await userService.searchUserSVCLC(req.body);
    return res.status(200).json(listSearchUserSVCLC);
}
let searchUserChuNhiem = async (req, res) => {
    let listSearchUserChuNhiem = await userService.searchUserChuNhiem(req.body);
    return res.status(200).json(listSearchUserChuNhiem);
}
let searchUserHoiDong = async (req, res) => {
    let listSearchUserHoiDong = await userService.searchUserHoiDong(req.body);
    return res.status(200).json(listSearchUserHoiDong);
}
let searchUserCVHT = async (req, res) => {
    let listSearchUserCVHT = await userService.searchUserCVHT(req.body);
    return res.status(200).json(listSearchUserCVHT);
}
let postFormData = async (req, res) => {
    try {
        // if (!req.files) {
        //     res.send({
        //         status: false,
        //         message: "no file"
        //     })
        // } else {
        //     const { filethuyetminh } = req.files
        //     filethuyetminh.mv("./uploads/" + filethuyetminh.name)
        //     res.send({
        //         status: true,
        //         message: "file is upload"
        //     })
        // }
        // console.log(req.files);
        // console.log(req.body);
        let dangkydetai = await userService.DangKyDeTai(req.files, req.body);
        return res.status(200).json(dangkydetai);
    } catch (e) {
        res.status(500).send(e);
    }
}
let getListDeTaiDangKy = async (req, res) => {
    let listDeTaiDangKy = await userService.getDeTaiDangky();
    return res.status(200).json(listDeTaiDangKy);
}
let MoDangKyDeTai = async (req, res) => {
    let MoDangKyDeTai = await userService.postMoDangKyDeTai();
    return res.status(200).json(MoDangKyDeTai);
}
let DongDangKyDeTai = async (req, res) => {
    let DongDangKyDeTai = await userService.postDongDangKyDeTai();
    return res.status(200).json(DongDangKyDeTai);
}
let getTrangThaiMoDangKyDeTai = async (req, res) => {
    let TrangThaiDangKyDeTai = await userService.getTrangThaiDangKyDeTai();
    return res.status(200).json(TrangThaiDangKyDeTai);
}
let deleteDeTaiDangKy = async (req, res) => {
    let deleteDeTaiDangKy = await userService.deleteDeTaiDangKy(req.body.id);
    return res.status(200).json(deleteDeTaiDangKy);
}
let duyetDetaiDangKy = async (req, res) => {
    let duyetDetaiDangKy = await userService.duyetDetaiDangKy(req.body);
    return res.status(200).json(duyetDetaiDangKy);
}
let getDeTaiDaDuyet = async (req, res) => {
    let getDeTaiDaDuyet = await userService.getDeTaiDaDuyet();
    return res.status(200).json(getDeTaiDaDuyet);
}
let getTrangThaiMoDangKyDeTaiADmin = async (req, res) => {
    let getTrangThaiMoDangKyDeTaiAdmin = await userService.getTrangThaiMoDangKyDeTaiAdmin();
    return res.status(200).json(getTrangThaiMoDangKyDeTaiAdmin);
}
let getInfoDetaiUserSinhVien = async (req, res) => {
    let getInfoDetaiUserSinhVien = await userService.getInfoDetaiUserSinhVien(req.body.id.id);
    return res.status(200).json(getInfoDetaiUserSinhVien);
}
let getInfoDeTaiUserChuNhiem = async (req, res) => {
    let getInfoDeTaiUserChuNhiem = await userService.getInfoDeTaiUserChuNhiem(req.body.id);
    return res.status(200).json(getInfoDeTaiUserChuNhiem);
}
let UploadFileThuyetMinh = async (req, res) => {
    // console.log(req.files);
    // console.log(req.body.idDeTai);
    let UploadFileThuyetMinh = await userService.UploadFileThuyetMinh(req.files, req.body.idDeTai);
    return res.status(200).json(UploadFileThuyetMinh);

}
let DownLoadFileThuyetMinh = async (req, res) => {
    let DownLoadFileThuyetMinh = await userService.DownLoadFileThuyetMinh(req.body.id);
    // console.log(DownLoadFileThuyetMinh);
    return res.download(DownLoadFileThuyetMinh);
}
let UpLoadPhieuGiaiTrinh = async (req, res) => {
    let UpLoadPhieuGiaiTrinh = await userService.UpLoadPhieuGiaiTrinh(req.files, req.body.idDeTai);
    return res.status(200).json(UpLoadPhieuGiaiTrinh);
}
let DownLoadPhieuGiaiTrinh = async (req, res) => {
    let DownLoadPhieuGiaiTrinh = await userService.DownLoadPhieuGiaiTrinh(req.body.id);
    // console.log(DownLoadFileThuyetMinh);
    return res.download(DownLoadPhieuGiaiTrinh);
}
let themThoiGianVaDiaDiemBaoVeDC = async (req, res) => {
    let themThoiGianVaDiaDiemBaoVeDC = await userService.themThoiGianVaDiaDiemBaoVeDC(req.body);
    return res.status(200).json(themThoiGianVaDiaDiemBaoVeDC);
}
let ThemHoiDongDeTai = async (req, res) => {

    let ThemHoiDongDeTai = await userService.ThemHoiDongDeTai(req.body);
    return res.status(200).json(ThemHoiDongDeTai);
}
let getInfoHoiDongDeTai = async (req, res) => {
    let getInfoHoiDongDeTai = await userService.getInfoHoiDongDeTai(req.body.id);
    return res.status(200).json(getInfoHoiDongDeTai);
}
let editDeTaiChuNhiemDangThucHien = async (req, res) => {
    // console.log(req.body);
    let editDeTaiChuNhiemDangThucHien = await userService.editDeTaiChuNhiemDangThucHien(req.body);
    return res.status(200).json(editDeTaiChuNhiemDangThucHien);
}
let getlistDeTaiHoiDongDuocPhanCong = async (req, res) => {
    // console.log(req.body.id);
    let getlistDeTaiHoiDongDuocPhanCong = await userService.getlistDeTaiHoiDongDuocPhanCong(req.body.id);
    return res.status(200).json(getlistDeTaiHoiDongDuocPhanCong);
}
let getlistHD = async (req, res) => {
    let getlistHD = await userService.getlistHD(req.body.id);
    return res.status(200).json(getlistHD);
}

let getNhanXetCuaHoiDongDeTaiChuNHiem = async (req, res) => {
    // console.log(req.body);
    let getNhanXetCuaHoiDongDeTaiChuNHiem = await userService.getNhanXetCuaHoiDongDeTaiChuNHiem(req.body.id);
    return res.status(200).json(getNhanXetCuaHoiDongDeTaiChuNHiem);
}
let NhapKinhPhiThucHienDeTaiChuNhiem = async (req, res) => {
    // console.log(req.body)
    let NhapKinhPhiThucHienDeTaiChuNhiem = await userService.NhapKinhPhiThucHienDeTaiChuNhiem(req.body);
    return res.status(200).json(NhapKinhPhiThucHienDeTaiChuNhiem);
}
let NhapKinhPhiThucHienDeTaiThuKy = async (req, res) => {
    // console.log(req.body);
    let NhapKinhPhiThucHienDeTaiThuKy = await userService.NhapKinhPhiThucHienDeTaiThuKy(req.body);
    return res.status(200).json(NhapKinhPhiThucHienDeTaiThuKy);
}
// UpLoadPhieuDanhGia
let UpLoadPhieuDanhGia = async (req, res) => {
    let UpLoadPhieuDanhGia = await userService.UpLoadPhieuDanhGia(req.files, req.body.idDeTai);
    return res.status(200).json(UpLoadPhieuDanhGia);
}
// UpLoadBienBanHopHoiDongXetDuyet
let UpLoadBienBanHopHoiDongXetDuyet = async (req, res) => {
    let UpLoadBienBanHopHoiDongXetDuyet = await userService.UpLoadBienBanHopHoiDongXetDuyet(req.files, req.body.idDeTai);
    return res.status(200).json(UpLoadBienBanHopHoiDongXetDuyet);
}
// UpLoadBienBanHopHoiDongDeCuong
let UpLoadBienBanHopHoiDongDeCuong = async (req, res) => {
    let UpLoadBienBanHopHoiDongDeCuong = await userService.UpLoadBienBanHopHoiDongDeCuong(req.files, req.body.idDeTai);
    return res.status(200).json(UpLoadBienBanHopHoiDongDeCuong);
}
// DownLoadPhieuDanhGia
let DownLoadPhieuDanhGia = async (req, res) => {
    // console.log(req.body.id);
    let DownLoadPhieuDanhGia = await userService.DownLoadPhieuDanhGia(req.body.id);
    // console.log(DownLoadFileThuyetMinh);
    return res.download(DownLoadPhieuDanhGia);
}
// DownLoadBienBanHopHoiDongXetDuyet
let DownLoadBienBanHopHoiDongXetDuyet = async (req, res) => {
    // console.log(req.body.id);

    let DownLoadBienBanHopHoiDongXetDuyet = await userService.DownLoadBienBanHopHoiDongXetDuyet(req.body.id);
    // console.log(DownLoadFileThuyetMinh);
    return res.download(DownLoadBienBanHopHoiDongXetDuyet);
}
// DownLoadBienBanHopHoiDongDeCuong
let DownLoadBienBanHopHoiDongDeCuong = async (req, res) => {
    // console.log(req.body.id);

    let DownLoadBienBanHopHoiDongDeCuong = await userService.DownLoadBienBanHopHoiDongDeCuong(req.body.id);
    // console.log(DownLoadFileThuyetMinh);
    return res.download(DownLoadBienBanHopHoiDongDeCuong);
}
// XacNhanHoanThanhDeTai
let XacNhanHoanThanhDeTai = async (req, res) => {
    // console.log(req.body.id);

    let XacNhanHoanThanhDeTai = await userService.XacNhanHoanThanhDeTai(req.body);
    // console.log(DownLoadFileThuyetMinh);
    return res.status(200).json(XacNhanHoanThanhDeTai);
}
// getDeTaiDaHoanThanh
let getDeTaiDaHoanThanh = async (req, res) => {
    let getDeTaiDaHoanThanh = await userService.getDeTaiDaHoanThanh();
    return res.status(200).json(getDeTaiDaHoanThanh);
}
// DeTaiSinhVienDaHoanThanh
let DeTaiSinhVienDaHoanThanh = async (req, res) => {
    // console.log(req.body.id);
    let DeTaiSinhVienDaHoanThanh = await userService.DeTaiSinhVienDaHoanThanh(req.body.id);
    return res.status(200).json(DeTaiSinhVienDaHoanThanh);
}
// DeTaiChuNhiemDaHoanThanh
let DeTaiChuNhiemDaHoanThanh = async (req, res) => {
    // console.log(req.body.id);
    let DeTaiChuNhiemDaHoanThanh = await userService.DeTaiChuNhiemDaHoanThanh(req.body.id);
    return res.status(200).json(DeTaiChuNhiemDaHoanThanh);
}
// DSDTDaHoanThanhHome
let DSDTDaHoanThanhHome = async (req, res) => {
    // console.log(req.body.id);
    let DSDTDaHoanThanhHome = await userService.DSDTDaHoanThanhHome();
    return res.status(200).json(DSDTDaHoanThanhHome);
}
// UpLoadThoiGianVaDiaDiemBaoVeDC
let UpLoadThoiGianVaDiaDiemBaoVeDC = async (req, res) => {
    // console.log(req.body);
    let UpLoadThoiGianVaDiaDiemBaoVeDC = await userService.UpLoadThoiGianVaDiaDiemBaoVeDC(req.body);
    return res.status(200).json(UpLoadThoiGianVaDiaDiemBaoVeDC);
}
// DownLoadThoiGianVaDiaDiemBaoVeDeCuong
let DownLoadThoiGianVaDiaDiemBaoVeDeCuong = async (req, res) => {
    // console.log(req.body.id);

    let DownLoadThoiGianVaDiaDiemBaoVeDeCuong = await userService.DownLoadThoiGianVaDiaDiemBaoVeDeCuong(req.body.id);
    // console.log(DownLoadFileThuyetMinh);
    return res.download(DownLoadThoiGianVaDiaDiemBaoVeDeCuong);
}

// UpLoadThongBaoDangKyDeTai
let UpLoadThongBaoDangKyDeTai = async (req, res) => {
    // console.log(req.body.tenthongbao);
    let UpLoadThongBaoDangKyDeTai = await userService.UpLoadThongBaoDangKyDeTai(req.files, req.body.tenthongbao);
    return res.status(200).json(UpLoadThongBaoDangKyDeTai);
}
// getAllThongbaoDKDT
let getAllThongbaoDKDT = async (req, res) => {
    // console.log(req.body.tenthongbao);
    let getAllThongbaoDKDT = await userService.getAllThongbaoDKDT();
    return res.status(200).json(getAllThongbaoDKDT);
}
// XoaThongbaoDKDT
let XoaThongbaoDKDT = async (req, res) => {
    // console.log(req.body);
    let XoaThongbaoDKDT = await userService.XoaThongbaoDKDT(req.body.id);
    return res.status(200).json(XoaThongbaoDKDT);
}
// DownloadThongbaoDKDT
let DownloadThongbaoDKDT = async (req, res) => {
    // console.log(req.body.id);

    let DownloadThongbaoDKDT = await userService.DownloadThongbaoDKDT(req.body.id);
    // console.log(DownLoadFileThuyetMinh);
    return res.download(DownloadThongbaoDKDT);
}
// SearchTenThongbaoDKDT
let SearchTenThongbaoDKDT = async (req, res) => {
    // console.log(req.body);

    let SearchTenThongbaoDKDT = await userService.SearchTenThongbaoDKDT(req.body);
    // console.log(DownLoadFileThuyetMinh);
    return res.status(200).json(SearchTenThongbaoDKDT);
}
// SearchDeTaiDaHoanThanh
let SearchDeTaiDaHoanThanh = async (req, res) => {
    // console.log(req.body);

    let SearchDeTaiDaHoanThanh = await userService.SearchDeTaiDaHoanThanh(req.body);
    // console.log(DownLoadFileThuyetMinh);
    return res.status(200).json(SearchDeTaiDaHoanThanh);
}
// KhoaQuyenCuaHoiDong
let KhoaQuyenCuaHoiDong = async (req, res) => {
    // console.log(req.body);

    let KhoaQuyenCuaHoiDong = await userService.KhoaQuyenCuaHoiDong(req.body.id);
    // console.log(DownLoadFileThuyetMinh);
    return res.status(200).json(KhoaQuyenCuaHoiDong);
}
// MoKhoaQuyenCuaHoiDong
let MoKhoaQuyenCuaHoiDong = async (req, res) => {
    // console.log(req.body);

    let MoKhoaQuyenCuaHoiDong = await userService.MoKhoaQuyenCuaHoiDong(req.body.id);
    // console.log(DownLoadFileThuyetMinh);
    return res.status(200).json(MoKhoaQuyenCuaHoiDong);
}
// TrangThaiQuyenCuaHoiDong
let TrangThaiQuyenCuaHoiDong = async (req, res) => {
    // console.log(req.body);

    let TrangThaiQuyenCuaHoiDong = await userService.TrangThaiQuyenCuaHoiDong(req.body.id);
    // console.log(DownLoadFileThuyetMinh);
    return res.status(200).json(TrangThaiQuyenCuaHoiDong);
}
// DeTaiDaBanGiao
let DeTaiDaBanGiao = async (req, res) => {
    // console.log(req.body);

    let DeTaiDaBanGiao = await userService.DeTaiDaBanGiao(req.body);
    // console.log(DownLoadFileThuyetMinh);
    return res.status(200).json(DeTaiDaBanGiao);
}
// NhapMaSoDeTaiDaBanGiao
let NhapMaSoDeTaiDaBanGiao = async (req, res) => {
    // console.log(req.body);

    let NhapMaSoDeTaiDaBanGiao = await userService.NhapMaSoDeTaiDaBanGiao(req.body);
    // console.log(DownLoadFileThuyetMinh);
    return res.status(200).json(NhapMaSoDeTaiDaBanGiao);
}
// XacNhanHoanThanhDeTaiDaNghiemThu
let XacNhanHoanThanhDeTaiDaNghiemThu = async (req, res) => {
    // console.log(req.body.id);

    let XacNhanHoanThanhDeTaiDaNghiemThu = await userService.XacNhanHoanThanhDeTaiDaNghiemThu(req.body);
    // console.log(DownLoadFileThuyetMinh);
    return res.status(200).json(XacNhanHoanThanhDeTaiDaNghiemThu);
}
// getListDanhSachSinhVien
let getListDanhSachSinhVien = async (req, res) => {
    // console.log(req.body.id);

    let getListDanhSachSinhVien = await userService.getListDanhSachSinhVien();
    // console.log(DownLoadFileThuyetMinh);
    return res.status(200).json(getListDanhSachSinhVien);
}
// HuyDeTaiDaDuyet
let HuyDeTaiDaDuyet = async (req, res) => {
    // console.log(req.body.id);

    let HuyDeTaiDaDuyet = await userService.HuyDeTaiDaDuyet(req.body);
    // console.log(DownLoadFileThuyetMinh);
    return res.status(200).json(HuyDeTaiDaDuyet);
}
// getListDeTaiCuaSinhVienCLCDangLam
let getListDeTaiCuaSinhVienCLCDangLam = async (req, res) => {
    // console.log(req.body.id);

    let getListDeTaiCuaSinhVienCLCDangLam = await userService.getListDeTaiCuaSinhVienCLCDangLam(req.body);
    // console.log(DownLoadFileThuyetMinh);
    return res.status(200).json(getListDeTaiCuaSinhVienCLCDangLam);
}
// LichSuDeTaiDuocPhanCongHD
let LichSuDeTaiDuocPhanCongHD = async (req, res) => {
    // console.log(req.body.id);

    let LichSuDeTaiDuocPhanCongHD = await userService.LichSuDeTaiDuocPhanCongHD(req.body);
    // console.log(DownLoadFileThuyetMinh);
    return res.status(200).json(LichSuDeTaiDuocPhanCongHD);
}
// DeTaiDaNhanChuNhiem
let DeTaiDaNhanChuNhiem = async (req, res) => {
    // console.log(req.body.id);

    let DeTaiDaNhanChuNhiem = await userService.DeTaiDaNhanChuNhiem(req.body);
    // console.log(DownLoadFileThuyetMinh);
    return res.status(200).json(DeTaiDaNhanChuNhiem);
}
// getListDanhSachHoiDong
let getListDanhSachHoiDong = async (req, res) => {
    // console.log(req.body.id);

    let getListDanhSachHoiDong = await userService.getListDanhSachHoiDong();
    // console.log(DownLoadFileThuyetMinh);
    return res.status(200).json(getListDanhSachHoiDong);
}
// DonXinNghiemThuDeTai
let DonXinNghiemThuDeTai = async (req, res) => {
    // console.log('id de tai', req.body.idDetai);
    // console.log(req.files);
    let DonXinNghiemThuDeTai = await userService.DonXinNghiemThuDeTai(req.files, req.body.idDetai);
    // // console.log(DownLoadFileThuyetMinh);
    return res.status(200).json(DonXinNghiemThuDeTai);
}
// getListDanhSachDeTaiDangKyNghiemThu
let getListDanhSachDeTaiDangKyNghiemThu = async (req, res) => {
    // console.log('id de tai', req.body.idDetai);
    // console.log(req.files);
    let getListDanhSachDeTaiDangKyNghiemThu = await userService.getListDanhSachDeTaiDangKyNghiemThu();
    // // console.log(DownLoadFileThuyetMinh);
    return res.status(200).json(getListDanhSachDeTaiDangKyNghiemThu);
}
// DownloadDonDangKyBaoCao
let DownloadDonDangKyBaoCao = async (req, res) => {
    // console.log(req.body.id);

    let DownloadDonDangKyBaoCao = await userService.DownloadDonDangKyBaoCao(req.body.id);
    // console.log(DownLoadFileThuyetMinh);
    return res.download(DownloadDonDangKyBaoCao);
}
// DownloadFileBaoCaoNghiemThu
let DownloadFileBaoCaoNghiemThu = async (req, res) => {
    // console.log(req.body.id);

    let DownloadFileBaoCaoNghiemThu = await userService.DownloadFileBaoCaoNghiemThu(req.body.id);
    // console.log(DownLoadFileThuyetMinh);
    return res.download(DownloadFileBaoCaoNghiemThu);
}
// UpLoadThoiGianVaDiaDiemNghiemThuDeTai
let UpLoadThoiGianVaDiaDiemNghiemThuDeTai = async (req, res) => {
    let UpLoadThoiGianVaDiaDiemNghiemThuDeTai = await userService.UpLoadThoiGianVaDiaDiemNghiemThuDeTai(req.body);
    return res.status(200).json(UpLoadThoiGianVaDiaDiemNghiemThuDeTai);
}
// DownLoadThoiGianVaDiaDiemNghiemThuDeTai
let DownLoadThoiGianVaDiaDiemNghiemThuDeTai = async (req, res) => {
    // console.log(req.body.id);

    let DownLoadThoiGianVaDiaDiemNghiemThuDeTai = await userService.DownLoadThoiGianVaDiaDiemNghiemThuDeTai(req.body.id);
    // console.log(DownLoadFileThuyetMinh);
    return res.download(DownLoadThoiGianVaDiaDiemNghiemThuDeTai);
}
// ThemHoiDongNghiemThuDeTai
let ThemHoiDongNghiemThuDeTai = async (req, res) => {
    let ThemHoiDongNghiemThuDeTai = await userService.ThemHoiDongNghiemThuDeTai(req.body);
    return res.status(200).json(ThemHoiDongNghiemThuDeTai);
}
// getListHoiDongNghiemThuDeTai
let getListHoiDongNghiemThuDeTai = async (req, res) => {
    let getListHoiDongNghiemThuDeTai = await userService.getListHoiDongNghiemThuDeTai(req.body.id);
    return res.status(200).json(getListHoiDongNghiemThuDeTai);
}
// getListDeTaiDangNghiemThuChuNhiem
let getListDeTaiDangNghiemThuChuNhiem = async (req, res) => {
    let getListDeTaiDangNghiemThuChuNhiem = await userService.getListDeTaiDangNghiemThuChuNhiem(req.body);
    return res.status(200).json(getListDeTaiDangNghiemThuChuNhiem);
}
// UpLoadPhieuGiaiTrinhSauNghiemThu
let UpLoadPhieuGiaiTrinhSauNghiemThu = async (req, res) => {
    let UpLoadPhieuGiaiTrinhSauNghiemThu = await userService.UpLoadPhieuGiaiTrinhSauNghiemThu(req.files, req.body.id);
    return res.status(200).json(UpLoadPhieuGiaiTrinhSauNghiemThu);
}
// UpLoadFileBaoCaoSauChinhSua
let UpLoadFileBaoCaoSauChinhSua = async (req, res) => {
    let UpLoadFileBaoCaoSauChinhSua = await userService.UpLoadFileBaoCaoSauChinhSua(req.files, req.body.id);
    return res.status(200).json(UpLoadFileBaoCaoSauChinhSua);
}
// getListDeTaiDuocPhanCongNghiemThu
let getListDeTaiDuocPhanCongNghiemThu = async (req, res) => {
    let getListDeTaiDuocPhanCongNghiemThu = await userService.getListDeTaiDuocPhanCongNghiemThu(req.body.id);
    return res.status(200).json(getListDeTaiDuocPhanCongNghiemThu);
}
// UpLoadPhieuDanhGiaSauNghiemThu
let UpLoadPhieuDanhGiaSauNghiemThu = async (req, res) => {
    let UpLoadPhieuDanhGiaSauNghiemThu = await userService.UpLoadPhieuDanhGiaSauNghiemThu(req.files, req.body.id);
    return res.status(200).json(UpLoadPhieuDanhGiaSauNghiemThu);
}
// UpLoadPhieuNhanXetDanhGiaSauNghiemThu
let UpLoadPhieuNhanXetDanhGiaSauNghiemThu = async (req, res) => {
    let UpLoadPhieuNhanXetDanhGiaSauNghiemThu = await userService.UpLoadPhieuNhanXetDanhGiaSauNghiemThu(req.files, req.body.id);
    return res.status(200).json(UpLoadPhieuNhanXetDanhGiaSauNghiemThu);
}
// UpLoadBienBanHopHoiDongNghiemThuDeTai
let UpLoadBienBanHopHoiDongNghiemThuDeTai = async (req, res) => {
    let UpLoadBienBanHopHoiDongNghiemThuDeTai = await userService.UpLoadBienBanHopHoiDongNghiemThuDeTai(req.files, req.body.id);
    return res.status(200).json(UpLoadBienBanHopHoiDongNghiemThuDeTai);
}
// getAllKetQuaNghiemThuDeTai
let getAllKetQuaNghiemThuDeTai = async (req, res) => {
    let getAllKetQuaNghiemThuDeTai = await userService.getAllKetQuaNghiemThuDeTai(req.body.id);
    return res.status(200).json(getAllKetQuaNghiemThuDeTai);
}
// DownLoadPhieuDanhGiaSauNghiemThu
let DownLoadPhieuDanhGiaSauNghiemThu = async (req, res) => {
    // console.log(req.body.id);

    let DownLoadPhieuDanhGiaSauNghiemThu = await userService.DownLoadPhieuDanhGiaSauNghiemThu(req.body.id);
    // console.log(DownLoadFileThuyetMinh);
    return res.download(DownLoadPhieuDanhGiaSauNghiemThu);
}
// DownLoadPhieuNhanXetDanhGia
let DownLoadPhieuNhanXetDanhGia = async (req, res) => {
    // console.log(req.body.id);

    let DownLoadPhieuNhanXetDanhGia = await userService.DownLoadPhieuNhanXetDanhGia(req.body.id);
    // console.log(DownLoadFileThuyetMinh);
    return res.download(DownLoadPhieuNhanXetDanhGia);
}
// DownLoadBienBanHopHoiDongNghiemThu
let DownLoadBienBanHopHoiDongNghiemThu = async (req, res) => {
    // console.log(req.body.id);

    let DownLoadBienBanHopHoiDongNghiemThu = await userService.DownLoadBienBanHopHoiDongNghiemThu(req.body.id);
    // console.log(DownLoadFileThuyetMinh);
    return res.download(DownLoadBienBanHopHoiDongNghiemThu);
}
// DownLoadPhieuGiaiTrinhSauNghiemThu
let DownLoadPhieuGiaiTrinhSauNghiemThu = async (req, res) => {
    // console.log(req.body.id);

    let DownLoadPhieuGiaiTrinhSauNghiemThu = await userService.DownLoadPhieuGiaiTrinhSauNghiemThu(req.body.id);
    // console.log(DownLoadFileThuyetMinh);
    return res.download(DownLoadPhieuGiaiTrinhSauNghiemThu);
}
// DownLoadFileBaoCaoSauChinhSua
let DownLoadFileBaoCaoSauChinhSua = async (req, res) => {
    // console.log(req.body.id);

    let DownLoadFileBaoCaoSauChinhSua = await userService.DownLoadFileBaoCaoSauChinhSua(req.body.id);
    // console.log(DownLoadFileThuyetMinh);
    return res.download(DownLoadFileBaoCaoSauChinhSua);
}

// XacNhanHoanThanhDeTaiTuAdmin
let XacNhanHoanThanhDeTaiTuAdmin = async (req, res) => {
    let XacNhanHoanThanhDeTaiTuAdmin = await userService.XacNhanHoanThanhDeTaiTuAdmin(req.body.id);
    return res.status(200).json(XacNhanHoanThanhDeTaiTuAdmin);
}

// EditThongTinCaNhan
let EditThongTinCaNhan = async (req, res) => {
    let EditThongTinCaNhan = await userService.EditThongTinCaNhan(req.body);
    return res.status(200).json(EditThongTinCaNhan);
}
// GetDeTaiHuongDanGVHD
let GetDeTaiHuongDanGVHD = async (req, res) => {
    let GetDeTaiHuongDanGVHD = await userService.GetDeTaiHuongDanGVHD(req.body);
    return res.status(200).json(GetDeTaiHuongDanGVHD);
}
// GetListDeTaiThongKe
let GetListDeTaiThongKe = async (req, res) => {
    let GetListDeTaiThongKe = await userService.GetListDeTaiThongKe();
    return res.status(200).json(GetListDeTaiThongKe);
}

module.exports = {
    handleLogin: handleLogin,
    handleGetAllUser: handleGetAllUser,
    handleCreateUser: handleCreateUser,
    getUserId: getUserId,
    changePasswordUserId: changePasswordUserId,
    createExcelUserStudent: createExcelUserStudent,
    handleGetAllUserCVHT: handleGetAllUserCVHT,
    handleGetAllUserChuNhiem: handleGetAllUserChuNhiem,
    handleGetAllUserHoiDong: handleGetAllUserHoiDong,
    handleGetAllUserSVCLC: handleGetAllUserSVCLC,
    handleEditUserIdSVCLC: handleEditUserIdSVCLC,
    handleDeleteUserId: handleDeleteUserId,
    handleEditUserIdCVHT: handleEditUserIdCVHT,
    handleEditUserIdChuNhiem: handleEditUserIdChuNhiem,
    handleEditUserIdHoiDong: handleEditUserIdHoiDong,
    searchUserSVCLC: searchUserSVCLC,
    searchUserHoiDong: searchUserHoiDong,
    searchUserCVHT: searchUserCVHT,
    searchUserChuNhiem: searchUserChuNhiem,
    postFormData: postFormData,
    getListDeTaiDangKy: getListDeTaiDangKy,
    MoDangKyDeTai: MoDangKyDeTai,
    DongDangKyDeTai: DongDangKyDeTai,
    getTrangThaiMoDangKyDeTai: getTrangThaiMoDangKyDeTai,
    deleteDeTaiDangKy: deleteDeTaiDangKy,
    duyetDetaiDangKy: duyetDetaiDangKy,
    getDeTaiDaDuyet: getDeTaiDaDuyet,
    getTrangThaiMoDangKyDeTaiADmin: getTrangThaiMoDangKyDeTaiADmin,
    getInfoDetaiUserSinhVien: getInfoDetaiUserSinhVien,
    getInfoDeTaiUserChuNhiem: getInfoDeTaiUserChuNhiem,
    UploadFileThuyetMinh: UploadFileThuyetMinh,
    DownLoadFileThuyetMinh: DownLoadFileThuyetMinh,
    UpLoadPhieuGiaiTrinh: UpLoadPhieuGiaiTrinh,
    DownLoadPhieuGiaiTrinh: DownLoadPhieuGiaiTrinh,
    themThoiGianVaDiaDiemBaoVeDC: themThoiGianVaDiaDiemBaoVeDC,
    ThemHoiDongDeTai: ThemHoiDongDeTai,
    getInfoHoiDongDeTai: getInfoHoiDongDeTai,
    editDeTaiChuNhiemDangThucHien: editDeTaiChuNhiemDangThucHien,
    getlistDeTaiHoiDongDuocPhanCong: getlistDeTaiHoiDongDuocPhanCong,
    getlistHD: getlistHD,
    NhapKinhPhiThucHienDeTaiChuNhiem: NhapKinhPhiThucHienDeTaiChuNhiem,
    getNhanXetCuaHoiDongDeTaiChuNHiem: getNhanXetCuaHoiDongDeTaiChuNHiem,
    NhapKinhPhiThucHienDeTaiThuKy: NhapKinhPhiThucHienDeTaiThuKy,
    UpLoadPhieuDanhGia: UpLoadPhieuDanhGia,
    UpLoadBienBanHopHoiDongXetDuyet: UpLoadBienBanHopHoiDongXetDuyet,
    UpLoadBienBanHopHoiDongDeCuong: UpLoadBienBanHopHoiDongDeCuong,
    DownLoadPhieuDanhGia: DownLoadPhieuDanhGia,
    DownLoadBienBanHopHoiDongXetDuyet: DownLoadBienBanHopHoiDongXetDuyet,
    DownLoadBienBanHopHoiDongDeCuong: DownLoadBienBanHopHoiDongDeCuong,
    XacNhanHoanThanhDeTai: XacNhanHoanThanhDeTai,
    getDeTaiDaHoanThanh: getDeTaiDaHoanThanh,
    DeTaiSinhVienDaHoanThanh: DeTaiSinhVienDaHoanThanh,
    DeTaiChuNhiemDaHoanThanh: DeTaiChuNhiemDaHoanThanh,
    DSDTDaHoanThanhHome: DSDTDaHoanThanhHome,
    UpLoadThoiGianVaDiaDiemBaoVeDC: UpLoadThoiGianVaDiaDiemBaoVeDC,
    DownLoadThoiGianVaDiaDiemBaoVeDeCuong: DownLoadThoiGianVaDiaDiemBaoVeDeCuong,
    UpLoadThongBaoDangKyDeTai: UpLoadThongBaoDangKyDeTai,
    getAllThongbaoDKDT: getAllThongbaoDKDT,
    XoaThongbaoDKDT: XoaThongbaoDKDT,
    DownloadThongbaoDKDT: DownloadThongbaoDKDT,
    SearchTenThongbaoDKDT: SearchTenThongbaoDKDT,
    SearchDeTaiDaHoanThanh: SearchDeTaiDaHoanThanh,
    KhoaQuyenCuaHoiDong: KhoaQuyenCuaHoiDong,
    MoKhoaQuyenCuaHoiDong: MoKhoaQuyenCuaHoiDong,
    TrangThaiQuyenCuaHoiDong: TrangThaiQuyenCuaHoiDong,
    DeTaiDaBanGiao: DeTaiDaBanGiao,
    NhapMaSoDeTaiDaBanGiao: NhapMaSoDeTaiDaBanGiao,
    XacNhanHoanThanhDeTaiDaNghiemThu: XacNhanHoanThanhDeTaiDaNghiemThu,
    getListDanhSachSinhVien: getListDanhSachSinhVien,
    HuyDeTaiDaDuyet: HuyDeTaiDaDuyet,
    getListDeTaiCuaSinhVienCLCDangLam: getListDeTaiCuaSinhVienCLCDangLam,
    LichSuDeTaiDuocPhanCongHD: LichSuDeTaiDuocPhanCongHD,
    DeTaiDaNhanChuNhiem: DeTaiDaNhanChuNhiem,
    getListDanhSachHoiDong: getListDanhSachHoiDong,
    DonXinNghiemThuDeTai: DonXinNghiemThuDeTai,
    getListDanhSachDeTaiDangKyNghiemThu: getListDanhSachDeTaiDangKyNghiemThu,
    DownloadDonDangKyBaoCao: DownloadDonDangKyBaoCao,
    DownloadFileBaoCaoNghiemThu: DownloadFileBaoCaoNghiemThu,
    UpLoadThoiGianVaDiaDiemNghiemThuDeTai: UpLoadThoiGianVaDiaDiemNghiemThuDeTai,
    DownLoadThoiGianVaDiaDiemNghiemThuDeTai: DownLoadThoiGianVaDiaDiemNghiemThuDeTai,
    ThemHoiDongNghiemThuDeTai: ThemHoiDongNghiemThuDeTai,
    getListHoiDongNghiemThuDeTai: getListHoiDongNghiemThuDeTai,
    getListDeTaiDangNghiemThuChuNhiem: getListDeTaiDangNghiemThuChuNhiem,
    UpLoadPhieuGiaiTrinhSauNghiemThu: UpLoadPhieuGiaiTrinhSauNghiemThu,
    UpLoadFileBaoCaoSauChinhSua: UpLoadFileBaoCaoSauChinhSua,
    getListDeTaiDuocPhanCongNghiemThu: getListDeTaiDuocPhanCongNghiemThu,
    UpLoadPhieuDanhGiaSauNghiemThu: UpLoadPhieuDanhGiaSauNghiemThu,
    UpLoadPhieuNhanXetDanhGiaSauNghiemThu: UpLoadPhieuNhanXetDanhGiaSauNghiemThu,
    UpLoadBienBanHopHoiDongNghiemThuDeTai: UpLoadBienBanHopHoiDongNghiemThuDeTai,
    getAllKetQuaNghiemThuDeTai: getAllKetQuaNghiemThuDeTai,
    DownLoadPhieuDanhGiaSauNghiemThu: DownLoadPhieuDanhGiaSauNghiemThu,
    DownLoadPhieuNhanXetDanhGia: DownLoadPhieuNhanXetDanhGia,
    DownLoadBienBanHopHoiDongNghiemThu: DownLoadBienBanHopHoiDongNghiemThu,
    DownLoadPhieuGiaiTrinhSauNghiemThu: DownLoadPhieuGiaiTrinhSauNghiemThu,
    DownLoadFileBaoCaoSauChinhSua: DownLoadFileBaoCaoSauChinhSua,
    XacNhanHoanThanhDeTaiTuAdmin: XacNhanHoanThanhDeTaiTuAdmin,
    EditThongTinCaNhan: EditThongTinCaNhan,
    GetDeTaiHuongDanGVHD: GetDeTaiHuongDanGVHD,
    GetListDeTaiThongKe: GetListDeTaiThongKe,


}   
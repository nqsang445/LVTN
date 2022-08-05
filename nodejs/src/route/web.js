import express from "express";
import userController from "../controllers/userController";
let router = express.Router();

let initWebRoutes = (app) => {

    router.post('/login', userController.handleLogin);
    router.get('/api/get-all-user', userController.handleGetAllUser);
    router.post('/api/create-user', userController.handleCreateUser);
    router.post('/api/get-user-id', userController.getUserId);
    router.put('/api/change-password-user-id', userController.changePasswordUserId);
    router.post('/api/create-user-student-file-excel', userController.createExcelUserStudent);


    // lay danh sach user
    router.get('/api/get-all-user-cvht', userController.handleGetAllUserCVHT);
    router.get('/api/get-all-user-chunhiem', userController.handleGetAllUserChuNhiem);
    router.get('/api/get-all-user-hoidong', userController.handleGetAllUserHoiDong);
    router.get('/api/get-all-user-svclc', userController.handleGetAllUserSVCLC);


    //Edit user infor
    router.put('/api/edit-user-id-svclc', userController.handleEditUserIdSVCLC);
    router.put('/api/edit-user-id-CVHT', userController.handleEditUserIdCVHT);
    router.put('/api/edit-user-id-ChuNhiem', userController.handleEditUserIdChuNhiem);
    router.put('/api/edit-user-id-HoiDong', userController.handleEditUserIdHoiDong);
    //Delete User
    router.delete('/api/delete-user-id', userController.handleDeleteUserId);

    //search user svclc
    router.post('/api/search-user-infor-svclc', userController.searchUserSVCLC);
    router.post('/api/search-user-infor-hoidong', userController.searchUserHoiDong);
    router.post('/api/search-user-infor-cvht', userController.searchUserCVHT);
    router.post('/api/search-user-infor-chunhiem', userController.searchUserChuNhiem);

    //form data post
    router.post('/api/post-formdata', userController.postFormData);
    //get data detai
    router.get('/api/list-detai-dangky', userController.getListDeTaiDangKy);
    //modangkydetai
    router.post('/api/modangkydetai', userController.MoDangKyDeTai);

    //dongdangkydetai
    router.post('/api/dongdangkydetai', userController.DongDangKyDeTai);
    // get trang thai mo dang ky de tai /api/get-trangthai-modangkydetai
    router.get('/api/get-trangthai-modangkydetai', userController.getTrangThaiMoDangKyDeTai);
    //delete de tai trang thai dang ky /api/delete-detai-dangky
    router.delete('/api/delete-detai-dangky', userController.deleteDeTaiDangKy);
    //duyet de tai trang thai dang ky /api/duyet-detai-dangky
    router.put('/api/duyet-detai-dangky', userController.duyetDetaiDangKy);
    //de tai da duyet
    router.get('/api/get-detai-daduyet', userController.getDeTaiDaDuyet);
    //lay trang thai mo dang ky de tai /api/trangthai-dangky-detai
    router.get('/api/trangthai-dangky-detai-admin', userController.getTrangThaiMoDangKyDeTaiADmin);
    // lay danh sach de tai sinh vien dang thuc hien
    router.post('/api/get-info-detai-user-sinhvien', userController.getInfoDetaiUserSinhVien);
    // lay danh sach de tai dang thuc hien chu nhiem /api/get-all-list-detai-dangthuchien-chunhiem
    router.post('/api/get-all-list-detai-dangthuchien-chunhiem', userController.getInfoDeTaiUserChuNhiem);
    // upload file thuyet minh /api/upload-file-thuyet-minh
    router.post('/api/upload-file-thuyet-minh', userController.UploadFileThuyetMinh);
    // download file thuyet minh /api/download-filethuyetminh
    router.post('/api/download-filethuyetminh', userController.DownLoadFileThuyetMinh);
    //upload phieu giai trinh /api/upload-phieu-giai-trinh
    router.post('/api/upload-phieu-giai-trinh', userController.UpLoadPhieuGiaiTrinh);
    //download phieu giai trinh /api/download-phieugiaitrinh
    router.post('/api/download-phieugiaitrinh', userController.DownLoadPhieuGiaiTrinh);
    // them thoi gian va dia diem bao ve de cuong /api/Them-thoigian-diadiem-baove-decuong
    router.post('/api/Them-thoigian-diadiem-baove-decuong', userController.themThoiGianVaDiaDiemBaoVeDC);
    //them hoi dong de tai /api/post-them-hoidong-detai
    router.post('/api/post-them-hoidong-detai', userController.ThemHoiDongDeTai);
    //lay thong tin hoi dong de tai /api/get-info-hoidong-detai 
    router.post('/api/get-info-hoidong-detai', userController.getInfoHoiDongDeTai);
    // edit de tai chu nhiem dang thuc hien /api/edit-detai-chunhiem-dangthuchien
    router.put('/api/edit-detai-chunhiem-dangthuchien', userController.editDeTaiChuNhiemDangThucHien);
    // get list de tai duoc phan cong cho hoi dong /api/get-list-detai-hoidong-duocphancong
    router.post('/api/get-list-detai-hoidong-duocphancong', userController.getlistDeTaiHoiDongDuocPhanCong);
    // get list hd /api/get-list-HD
    router.post('/api/get-list-HD', userController.getlistHD);
    // nhap kinh phi cua chu nhiem /api/nhap-kinhphi-thuchien-detai-chunhiem
    router.post('/api/nhap-kinhphi-thuchien-detai-chunhiem', userController.NhapKinhPhiThucHienDeTaiChuNhiem);
    // lay nhan xet cua hoi dong cho de tai chu nhiem /api/get-nhanxet-cua-hoidong-detai-chunhiem
    router.post('/api/get-nhanxet-cua-hoidong-detai-chunhiem', userController.getNhanXetCuaHoiDongDeTaiChuNHiem);
    //nhap kinh phi cua thu ky    /api/nhap-kinhphi-thuchien-detai-thuky
    router.post('/api/nhap-kinhphi-thuchien-detai-thuky', userController.NhapKinhPhiThucHienDeTaiThuKy);

    //upload phieu danh gia /api/upload-phieu-danh-gia
    router.post('/api/upload-phieu-danh-gia', userController.UpLoadPhieuDanhGia);
    //upload bien ban hop hoi dong xet duyet /api/upload-bien-ban-hop-hoi-dong-xet-duyet
    router.post('/api/upload-bien-ban-hop-hoi-dong-xet-duyet', userController.UpLoadBienBanHopHoiDongXetDuyet);
    //upload bien ban hop hoi dong de cuong  /api/upload-bien-ban-hop-hoi-dong-de-cuong
    router.post('/api/upload-bien-ban-hop-hoi-dong-de-cuong', userController.UpLoadBienBanHopHoiDongDeCuong);

    // download file phieu danh gia /api/download-PhieuDanhGia
    router.post('/api/download-PhieuDanhGia', userController.DownLoadPhieuDanhGia);
    // download file Bien Ban Hop Hoi Dong Xet Duyet /api/download-BienBanHopHoiDongXetDuyet
    router.post('/api/download-BienBanHopHoiDongXetDuyet', userController.DownLoadBienBanHopHoiDongXetDuyet);
    // download file Bien Ban Hop Hoi Dong De Cuong /api/download-BienBanHopHoiDongDeCuong
    router.post('/api/download-BienBanHopHoiDongDeCuong', userController.DownLoadBienBanHopHoiDongDeCuong);

    //xac nhan de tai duoc chon duoc hoan thanh /api/xac-nhan-hoan-thanh-de-tai
    router.post('/api/xac-nhan-hoan-thanh-de-tai', userController.XacNhanHoanThanhDeTai);
    //lay danh sach de tai da hoan thanh /api/get-detai-dahoanthanh
    router.get('/api/get-detai-dahoanthanh', userController.getDeTaiDaHoanThanh);
    //lay danh sach de tai da hoan thành sinh vien  /api/get-detai-sinhvien-dahoanthanh
    router.post('/api/get-detai-sinhvien-dahoanthanh', userController.DeTaiSinhVienDaHoanThanh);

    //lay danh sach de tai da hoan thành chu nhiem /api/get-all-list-detai-dahoanthanh-chunhiem
    router.post('/api/get-all-list-detai-dahoanthanh-chunhiem', userController.DeTaiChuNhiemDaHoanThanh);
    // lay danh sach de tai da hoan thanh cho trang home /api/danh-sach-de-tai-da-hoan-thanh-home
    router.get('/api/danh-sach-de-tai-da-hoan-thanh-home', userController.DSDTDaHoanThanhHome);
    // /api/upload-thoi-gian-va-dia-diem-bao-ve-de-cuong
    router.post('/api/upload-thoi-gian-va-dia-diem-bao-ve-de-cuong', userController.UpLoadThoiGianVaDiaDiemBaoVeDC);
    // /api/download-ThoiGianVaDiaDiemBaoVeDeCuong
    router.post('/api/download-ThoiGianVaDiaDiemBaoVeDeCuong', userController.DownLoadThoiGianVaDiaDiemBaoVeDeCuong);
    // /api/upload-thong-bao-dang-ky-de-tai
    router.post('/api/upload-thong-bao-dang-ky-de-tai', userController.UpLoadThongBaoDangKyDeTai);
    // /api/get-all-thong-bao-dang-ky-de-tai
    router.get('/api/get-all-thong-bao-dang-ky-de-tai', userController.getAllThongbaoDKDT);
    // /api/xoa-thong-bao-dang-ky-de-tai
    router.delete('/api/xoa-thong-bao-dang-ky-de-tai', userController.XoaThongbaoDKDT);
    //download thong bao dang ky de tai /api/download-ThongbaoDKDT
    router.post('/api/download-ThongbaoDKDT', userController.DownloadThongbaoDKDT);
    //  /api/search-tenthongbao
    router.post('/api/search-tenthongbao', userController.SearchTenThongbaoDKDT);
    //  /api/search-detaidahoanthanh
    router.post('/api/search-detaidahoanthanh', userController.SearchDeTaiDaHoanThanh);

    // /api/khoa-quyen-chinh-sua-de-tai-cua-hoi-dong
    router.post('/api/khoa-quyen-chinh-sua-de-tai-cua-hoi-dong', userController.KhoaQuyenCuaHoiDong);
    // /api/mo-khoa-quyen-chinh-sua-de-tai-cua-hoi-dong
    router.post('/api/mo-khoa-quyen-chinh-sua-de-tai-cua-hoi-dong', userController.MoKhoaQuyenCuaHoiDong);
    //  /api/trangthai-quyen-cua-hoidong
    router.post('/api/trangthai-quyen-cua-hoidong', userController.TrangThaiQuyenCuaHoiDong);
    // /api/get-all-list-detai-dabangiao-chunhiem
    router.post('/api/get-all-list-detai-dabangiao-chunhiem', userController.DeTaiDaBanGiao);
    // /api/nhap-ma-so-de-tai-da-ban-giao
    router.post('/api/nhap-ma-so-de-tai-da-ban-giao', userController.NhapMaSoDeTaiDaBanGiao);
    // /api/xac-nhan-hoan-thanh-de-tai-da-nghiem-thu
    router.post('/api/xac-nhan-hoan-thanh-de-tai-da-nghiem-thu', userController.XacNhanHoanThanhDeTaiDaNghiemThu);
    // /api/get-Danh-Sach-Sinh-Vien
    router.get('/api/get-Danh-Sach-Sinh-Vien', userController.getListDanhSachSinhVien);
    // /api/Huy-De-Tai-Da-Duyet
    router.post('/api/Huy-De-Tai-Da-Duyet', userController.HuyDeTaiDaDuyet);
    // /api/getListDeTaiCuaSinhVienCLCDangLam
    router.post('/api/getListDeTaiCuaSinhVienCLCDangLam', userController.getListDeTaiCuaSinhVienCLCDangLam);
    // /api/get-list-lichsudetaiduocphancong
    router.post('/api/get-list-lichsudetaiduocphancong', userController.LichSuDeTaiDuocPhanCongHD);
    // /api/get-all-list-detai-danhan-chunhiem
    router.post('/api/get-all-list-detai-danhan-chunhiem', userController.DeTaiDaNhanChuNhiem);
    // /api/get-list-danh-sach-hoi-dong
    router.get('/api/get-list-danh-sach-hoi-dong', userController.getListDanhSachHoiDong);

    // /api/don-xin-nghiem-thu-de-tai
    router.post('/api/don-xin-nghiem-thu-de-tai', userController.DonXinNghiemThuDeTai);
    // /api/get-all-list-detai-dangkynghiemthu
    router.get('/api/get-all-list-detai-dangkynghiemthu', userController.getListDanhSachDeTaiDangKyNghiemThu);

    // /api/download-DonDangKyBaoCao
    router.post('/api/download-DonDangKyBaoCao', userController.DownloadDonDangKyBaoCao);

    // /api/download-FileBaoCaoNghiemThu
    router.post('/api/download-FileBaoCaoNghiemThu', userController.DownloadFileBaoCaoNghiemThu);

    // /api/upload-thongbao-thoigian-va-diadiem-nghiemthu-detai
    router.post('/api/upload-thongbao-thoigian-va-diadiem-nghiemthu-detai', userController.UpLoadThoiGianVaDiaDiemNghiemThuDeTai);

    // /api/download-ThoiGianVaDiaDiemNghiemThuDeTai
    router.post('/api/download-ThoiGianVaDiaDiemNghiemThuDeTai', userController.DownLoadThoiGianVaDiaDiemNghiemThuDeTai);

    // /api/post-them-hoidong-detai-nghiemthu
    router.post('/api/post-them-hoidong-detai-nghiemthu', userController.ThemHoiDongNghiemThuDeTai);

    // /api/get-info-hoidong-nghiemthu-detai
    router.post('/api/get-info-hoidong-nghiemthu-detai', userController.getListHoiDongNghiemThuDeTai);

    // /api/get-all-list-detai-dangnghiemthu-chunhiem
    router.post('/api/get-all-list-detai-dangnghiemthu-chunhiem', userController.getListDeTaiDangNghiemThuChuNhiem);

    // /api/upload-phieu-giai-trinh-sau-nghiem-thu
    router.post('/api/upload-phieu-giai-trinh-sau-nghiem-thu', userController.UpLoadPhieuGiaiTrinhSauNghiemThu);

    // /api/upload-file-bao-cao-sau-chinh-sua
    router.post('/api/upload-file-bao-cao-sau-chinh-sua', userController.UpLoadFileBaoCaoSauChinhSua);

    // /api/get-list-detai-hoidong-duocphancongnghiemthu
    router.post('/api/get-list-detai-hoidong-duocphancongnghiemthu', userController.getListDeTaiDuocPhanCongNghiemThu);

    // ======================================
    // /api/upload-phieu-danh-gia-sau-nghiem-thu
    router.post('/api/upload-phieu-danh-gia-sau-nghiem-thu', userController.UpLoadPhieuDanhGiaSauNghiemThu);

    // /api/upload-phieu-nhan-xet-danh-gia-sau-nghiem-thu
    router.post('/api/upload-phieu-nhan-xet-danh-gia-sau-nghiem-thu', userController.UpLoadPhieuNhanXetDanhGiaSauNghiemThu);

    // /api/upload-bien-ban-hop-hoi-dong-nghiem-thu-de-tai
    router.post('/api/upload-bien-ban-hop-hoi-dong-nghiem-thu-de-tai', userController.UpLoadBienBanHopHoiDongNghiemThuDeTai);

    // =======================================

    // /api/get-all-ket-qua-nghiemthu-detai
    router.post('/api/get-all-ket-qua-nghiemthu-detai', userController.getAllKetQuaNghiemThuDeTai);

    // =====================================
    // /api/download-PhieuDanhGiaSauNghiemThu
    router.post('/api/download-PhieuDanhGiaSauNghiemThu', userController.DownLoadPhieuDanhGiaSauNghiemThu);


    // /api/download-PhieuNhanXetDanhGia
    router.post('/api/download-PhieuNhanXetDanhGia', userController.DownLoadPhieuNhanXetDanhGia);


    // /api/download-BienBanHopHoiDongNghiemThu
    router.post('/api/download-BienBanHopHoiDongNghiemThu', userController.DownLoadBienBanHopHoiDongNghiemThu);


    // /api/download-PhieuGiaiTrinhSauNghiemThu
    router.post('/api/download-PhieuGiaiTrinhSauNghiemThu', userController.DownLoadPhieuGiaiTrinhSauNghiemThu);


    // /api/download-FileBaoCaoSauChinhSua
    router.post('/api/download-FileBaoCaoSauChinhSua', userController.DownLoadFileBaoCaoSauChinhSua);

    // =====================================


    // /api/xac-nhan-hoan-thanh-de-tai-tu-admin
    router.post('/api/xac-nhan-hoan-thanh-de-tai-tu-admin', userController.XacNhanHoanThanhDeTaiTuAdmin);

    // /api/edit-Thong-tin-ca-nhan
    router.put('/api/edit-Thong-tin-ca-nhan', userController.EditThongTinCaNhan);

    // /api/get-detai-huongdan-giaovienhuongdan
    router.post('/api/get-detai-huongdan-giaovienhuongdan', userController.GetDeTaiHuongDanGVHD);

    // /api/get-list-detai-thongke
    router.get('/api/get-list-detai-thongke', userController.GetListDeTaiThongKe);


    // /userInfo:id /api/change-password-user-id
    // /api/create-user-student-file-excel
    return app.use("/", router);
}

module.exports = initWebRoutes;

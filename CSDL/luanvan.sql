-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th8 05, 2022 lúc 02:20 PM
-- Phiên bản máy phục vụ: 10.4.22-MariaDB
-- Phiên bản PHP: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `luanvan`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chamdiemdetais`
--

CREATE TABLE `chamdiemdetais` (
  `id` int(11) NOT NULL,
  `id_detai` varchar(255) DEFAULT NULL,
  `filedanhgia` varchar(255) DEFAULT NULL,
  `bienbanhophoidongxetduyet` varchar(255) DEFAULT NULL,
  `kinhphidetai` varchar(255) DEFAULT NULL,
  `kinhphidetaidothukynhap` varchar(255) DEFAULT NULL,
  `bienbanhophoidongdecuong` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `chamdiemdetais`
--

INSERT INTO `chamdiemdetais` (`id`, `id_detai`, `filedanhgia`, `bienbanhophoidongxetduyet`, `kinhphidetai`, `kinhphidetaidothukynhap`, `bienbanhophoidongdecuong`, `createdAt`, `updatedAt`) VALUES
(3, '17', './uploads3/phieudanhgia.pdf', './uploads4/bien_ban_hop_hoi_dong_xet_duyet.pdf', NULL, '16,000,000', './uploads5/bien_ban_hop_hoi_dong_de_cuong.pdf', '2022-05-12 07:00:48', '2022-05-12 07:01:39'),
(4, '18', './uploads3/phieudanhgia.pdf', './uploads4/bien_ban_hop_hoi_dong_xet_duyet.pdf', NULL, '18,000,000', './uploads5/bien_ban_hop_hoi_dong_de_cuong.pdf', '2022-05-16 05:46:43', '2022-05-16 05:47:01'),
(5, '19', './uploads3/phieudanhgia.pdf', './uploads4/bien_ban_hop_hoi_dong_xet_duyet.pdf', NULL, '15,000,000', './uploads5/bien_ban_hop_hoi_dong_de_cuong.pdf', '2022-05-16 07:49:25', '2022-05-16 07:50:41'),
(6, '20', './uploads3/phieudanhgia.pdf', './uploads4/bien_ban_hop_hoi_dong_xet_duyet.pdf', NULL, '16,000,000', './uploads5/bien_ban_hop_hoi_dong_de_cuong.pdf', '2022-05-18 06:36:53', '2022-05-18 06:37:10'),
(7, '21', './uploads3/phieudanhgia.pdf', './uploads4/bien_ban_hop_hoi_dong_xet_duyet.pdf', NULL, '16,000,000', './uploads5/bien_ban_hop_hoi_dong_de_cuong.pdf', '2022-05-20 18:39:29', '2022-05-20 18:39:50'),
(8, '22', './uploads3/phieudanhgia.pdf', './uploads4/bien_ban_hop_hoi_dong_xet_duyet.pdf', NULL, '16,000,000', './uploads5/bien_ban_hop_hoi_dong_de_cuong.pdf', '2022-05-22 10:52:16', '2022-05-22 10:52:42'),
(9, '24', './uploads3/PhieuChamDiem.pdf', './uploads4/BienBanHopHoiDongXetChonDetai.pdf', NULL, '16,000,000', './uploads5/BienBanHopHoiDongDeCuong.pdf', '2022-05-24 04:05:19', '2022-05-24 04:07:27'),
(10, '25', './uploads3/PhieuChamDiem.pdf', './uploads4/BienBanHopHoiDongXetChonDetai.pdf', NULL, '18,000,000', './uploads5/BienBanHopHoiDongDeCuong.pdf', '2022-05-24 04:22:34', '2022-05-24 04:22:53'),
(11, '26', './uploads3/PhieuChamDiem.pdf', './uploads4/BienBanHopHoiDongXetChonDetai.pdf', NULL, '16,000,000', './uploads5/BienBanHopHoiDongDeCuong.pdf', '2022-05-24 04:31:59', '2022-05-24 04:32:19'),
(12, '27', './uploads3/PhieuChamDiem.pdf', './uploads4/BienBanHopHoiDongXetChonDetai.pdf', NULL, '16,000,000', './uploads5/BienBanHopHoiDongDeCuong.pdf', '2022-05-24 04:43:59', '2022-05-24 04:44:13'),
(13, '28', './uploads3/PhieuChamDiem.pdf', './uploads4/BienBanHopHoiDongXetChonDetai.pdf', NULL, '16,000,000', './uploads5/BienBanHopHoiDongDeCuong.pdf', '2022-05-24 04:55:28', '2022-05-24 04:55:40'),
(14, '29', './uploads3/PhieuChamDiem.pdf', './uploads4/BienBanHopHoiDongXetChonDetai.pdf', NULL, '16,000,000', './uploads5/BienBanHopHoiDongDeCuong.pdf', '2022-05-24 05:07:48', '2022-05-24 05:08:01'),
(15, '32', './uploads3/BienBanHopHoiDongDeCuong.pdf', NULL, NULL, NULL, NULL, '2022-05-24 14:54:44', '2022-05-24 14:54:44'),
(16, '33', './uploads3/PhieuChamDiem.pdf', './uploads4/BienBanHopHoiDongXetChonDetai.pdf', NULL, '16,000,000', './uploads5/BienBanHopHoiDongDeCuong.pdf', '2022-05-25 02:07:30', '2022-05-25 02:07:48'),
(17, '34', './uploads3/fielthuyettrinh.pdf', NULL, NULL, NULL, NULL, '2022-05-26 02:27:47', '2022-05-26 02:27:47');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `detais`
--

CREATE TABLE `detais` (
  `id` int(11) NOT NULL,
  `tendetai` varchar(255) DEFAULT NULL,
  `masodetai` varchar(255) DEFAULT NULL,
  `linhvucuutien` varchar(255) DEFAULT NULL,
  `linhvucnghiencuu` varchar(255) DEFAULT NULL,
  `loaihinhnghiencuu` varchar(255) DEFAULT NULL,
  `thoigianbatdau` datetime DEFAULT NULL,
  `thoigianketthuc` datetime DEFAULT NULL,
  `thongtinchunhiemdetai` varchar(255) DEFAULT NULL,
  `thongtingianvienhuongdan` varchar(255) DEFAULT NULL,
  `thongtinthanhvien1` varchar(255) DEFAULT NULL,
  `thongtinthanhvien2` varchar(255) DEFAULT NULL,
  `thongtinthanhvien3` varchar(255) DEFAULT NULL,
  `thongtinthanhvien4` varchar(255) DEFAULT NULL,
  `thongtinthanhvien5` varchar(255) DEFAULT NULL,
  `nhiemvu` varchar(255) DEFAULT NULL,
  `kinhphidetai` varchar(255) DEFAULT NULL,
  `masogiaovienhuongdan` varchar(255) DEFAULT NULL,
  `filethuyetminh` varchar(255) DEFAULT NULL,
  `thoigianvadiadiembaovedecuong` varchar(255) DEFAULT NULL,
  `phieugiaitrinh` varchar(255) DEFAULT NULL,
  `trangthaidetai` varchar(255) DEFAULT NULL,
  `dondangkybaocao` varchar(1000) DEFAULT NULL,
  `filebaocaonghiemthu` varchar(1000) DEFAULT NULL,
  `thoigianvadiadiemnghiemthudetai` varchar(1000) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `detais`
--

INSERT INTO `detais` (`id`, `tendetai`, `masodetai`, `linhvucuutien`, `linhvucnghiencuu`, `loaihinhnghiencuu`, `thoigianbatdau`, `thoigianketthuc`, `thongtinchunhiemdetai`, `thongtingianvienhuongdan`, `thongtinthanhvien1`, `thongtinthanhvien2`, `thongtinthanhvien3`, `thongtinthanhvien4`, `thongtinthanhvien5`, `nhiemvu`, `kinhphidetai`, `masogiaovienhuongdan`, `filethuyetminh`, `thoigianvadiadiembaovedecuong`, `phieugiaitrinh`, `trangthaidetai`, `dondangkybaocao`, `filebaocaonghiemthu`, `thoigianvadiadiemnghiemthudetai`, `createdAt`, `updatedAt`) VALUES
(24, 'Xây dựng ứng dụng sinh câu mô tả cho hình ảnh trên nền tảng website và mobile', 'THS2022-DT01', 'Kỹ thuật công nghệ và công nghệ thông tin-truyền thông', 'Khoa học Kỹ thuật và Công nghệ', 'Ứng dụng', '2022-05-24 00:00:00', '2022-11-24 00:00:00', 'B1910391, Hồng Quốc Khánh, KhánhB1910391@student.ctu.edu.vn', 'Trần Công Án, tca@ctu.edu.vn', 'B1910391', 'B1900349', 'B1910611', '', '', 'Nhiệm vụ: Hướng dẫn nội dung khoa học và hướng dẫn lập dự toán kinh phí đề tài', '15,000,000', '001533', './uploadFileThuyetMinh/ThuyetMinh_SinhCauMoTaChoHinhAnh_final_Signed_v2 - Copy.pdf', '18h, 2022-05-24, 101/C1', './uploads2/Phieugiaitrinh_SCMTCHA.pdf', 'hoanthanh', './uploadDonDangKyBaoCao/DonDangKyNghiemThu.pdf', './uploadFileBaoCaoNghiemThu/FileBaoCaoNghiemThu.pdf', '18h, 2022-05-06, 101/C1', '2022-05-24 03:48:49', '2022-05-24 04:14:46'),
(25, 'Hệ thống kiểm tra và nhắc nhở đeo khẩu trang', 'TST2022-DT02', 'Kỹ thuật công nghệ và công nghệ thông tin-truyền thông', 'Khoa học Kỹ thuật và Công nghệ', 'Ứng dụng', '2022-05-24 00:00:00', '2022-11-24 00:00:00', 'B1910619, Nguyễn Chí Bảo, BảoB1910619@student.ctu.edu.vn', 'Lê Văn Lâm, lvl@ctu.edu.vn', 'B1910619', 'B1910620', 'B1910623', '', '', 'Nhiệm vụ: Hướng dẫn nội dung khoa học và hướng dẫn lập dự toán kinh phí đề tài', '15,000,000', '001349', './uploadFileThuyetMinh/Thuyết Minh NCKH-Khẩu Trang.pdf', '18h, 2022-05-24, 101/C1', './uploads2/Phieugiaitrinh_SCMTCHA.pdf', 'hoanthanh', './uploadDonDangKyBaoCao/DonDangKyNghiemThu.pdf', './uploadFileBaoCaoNghiemThu/FileBaoCaoNghiemThu.pdf', '18h, 2022-05-20, 101/C1', '2022-05-24 04:19:48', '2022-05-24 04:26:16'),
(26, 'Ứng dụng mobile học tiếng anh qua đối tượng được nhận dạng trong hình ảnh và video', 'TST2022-DT03', 'Kỹ thuật công nghệ và công nghệ thông tin-truyền thông', 'Khoa học Kỹ thuật và Công nghệ', 'Ứng dụng', '2022-05-24 00:00:00', '2022-11-25 00:00:00', 'B1910628, Hồ Xuân Phương Đông, ĐôngB1910628@student.ctu.edu.vn', 'Trần Minh Tân, tmt@ctu.edu.vn', 'B1910628', 'B1910641', 'B1910654', '', '', 'Nhiệm vụ: Hướng dẫn nội dung khoa học và hướng dẫn lập dự toán kinh phí đề tài', '15,000,000', '001445', './uploadFileThuyetMinh/FILE_20220117_094021_TM_NCKH-2022_K45.pdf', '18h, 2022-05-24, 101/C1', './uploads2/Phieugiaitrinh_SCMTCHA.pdf', 'hoanthanh', './uploadDonDangKyBaoCao/DonDangKyNghiemThu.pdf', './uploadFileBaoCaoNghiemThu/FileBaoCaoNghiemThu.pdf', '18h, 2022-05-24, 101/C1', '2022-05-24 04:29:55', '2022-05-24 04:35:02'),
(27, 'Xây dựng website nhận dạng giọng nói kết hợp rèn luyện các kĩ năng tiếng Anh SLSEEnglish', 'TST2022-DT04', 'Kỹ thuật công nghệ và công nghệ thông tin-truyền thông', 'Khoa học Kỹ thuật và Công nghệ', 'Ứng dụng', '2022-05-24 00:00:00', '2022-11-30 00:00:00', 'B1910657, Nguyễn Thị Mỹ Khánh, KhánhB1910657@student.ctu.edu.vn', 'Trần Nguyễn Minh Thư, tnmt@ctu.edu.vn', 'B1910657', 'B1910666', 'B1910672', '', '', 'Nhiệm vụ: Hướng dẫn nội dung khoa học và hướng dẫn lập dự toán kinh phí đề tài', '15,000,000', '002635', './uploadFileThuyetMinh/ThuyetMinh.pdf', '18h, 2022-05-25, 101/C1', './uploads2/Phieugiaitrinh_SCMTCHA.pdf', 'hoanthanh', './uploadDonDangKyBaoCao/DonDangKyNghiemThu.pdf', './uploadFileBaoCaoNghiemThu/FileBaoCaoNghiemThu.pdf', '18h, 2022-05-24, 101/C1', '2022-05-24 04:41:54', '2022-05-24 04:46:38'),
(28, 'Xây dựng ứng dụng di động giới thiệu ẩm thực miền Tây Nam Bộ', 'TST2022-DT05', 'Kỹ thuật công nghệ và công nghệ thông tin-truyền thông', 'Khoa học Kỹ thuật và Công nghệ', 'Ứng dụng', '2022-05-26 00:00:00', '2022-11-27 00:00:00', 'B1908407, Trần Bá Phương, PhươngB1908407@student.ctu.edu.vn', 'Bùi Đặng Hà Phương, bdht@ctu.edu.vn', 'B1908407', 'B1910253', 'B1910497', '', '', 'Nhiệm vụ: Hướng dẫn nội dung khoa học và hướng dẫn lập dự toán kinh phí đề tài', '15,000,000', '002297', './uploadFileThuyetMinh/thuyetminh_app.pdf', '18h, 2022-05-29, 101/C1', './uploads2/Phieugiaitrinh_SCMTCHA.pdf', 'hoanthanh', './uploadDonDangKyBaoCao/DonDangKyNghiemThu.pdf', './uploadFileBaoCaoNghiemThu/FileBaoCaoNghiemThu.pdf', '18h, 2022-05-28, 101/C1', '2022-05-24 04:50:53', '2022-05-24 04:58:55'),
(29, 'Quan sát  tập tính ra vào nhà yến của chim yến bằng camera', 'TST2022-DT06', 'Kỹ thuật công nghệ và công nghệ thông tin-truyền thông', 'Khoa học Kỹ thuật và Công nghệ', 'Ứng dụng', '2022-05-27 00:00:00', '2022-11-30 00:00:00', 'B1910680, Lê Huỳnh Như, NhưB1910680@student.ctu.edu.vn', 'Trần Thị Tố Quyên, tttq@ctu.edu.vn', 'B1910680', 'B1910689', 'B1910697', '', '', 'Nhiệm vụ: Hướng dẫn nội dung khoa học và hướng dẫn lập dự toán kinh phí đề tài', '15,000,000', '002480', './uploadFileThuyetMinh/ThuyetMinh_QuanSatTapTinhRaVaoCuaToYen.pdf', '18h, 2022-05-26, 101/C1', './uploads2/Phieugiaitrinh_SCMTCHA.pdf', 'hoanthanh', './uploadDonDangKyBaoCao/DonDangKyNghiemThu.pdf', './uploadFileBaoCaoNghiemThu/FileBaoCaoNghiemThu.pdf', '18h, 2022-05-29, 101/C1', '2022-05-24 05:05:43', '2022-05-24 05:15:52'),
(33, 'Xây dựng ứng dụng tìm kiếm và tra cứu thông tin cây thuốc nam trên thiết bị di động dựa trên hình ảnh', 'TST2022-DT08', 'Kỹ thuật công nghệ và công nghệ thông tin-truyền thông', 'Khoa học Kỹ thuật và Công nghệ', 'Ứng dụng', '2022-05-28 00:00:00', '2022-11-30 00:00:00', 'B1706861, Nguyen Quang Sang, sangB1706861@student.ctu.edu.vn', 'Trần Công Án, tca@ctu.edu.vn', 'B1706861', 'B1903705', 'B1910403', '', '', 'Nhiệm vụ: Hướng dẫn nội dung khoa học và hướng dẫn lập dự toán kinh phí đề tài', '15,000,000', '001533', './uploadFileThuyetMinh/ThuyetMinh_XayDungUngDungTimKiemVaTraCuuThongTinCayThuoc(DaChinhSua).pdf', '18h, 2022-05-20, LT1', './uploads2/PhieuGiaiTrinh.pdf', 'hoanthanh', './uploadDonDangKyBaoCao/DonDangKyNghiemThu.pdf', './uploadFileBaoCaoNghiemThu/FileBaoCaoNghiemThu.pdf', '18h, 2022-05-27, LT1', '2022-05-25 02:02:18', '2022-05-25 02:13:16'),
(34, 'đề tài 01', 'TST2022-DT0111', 'Kỹ thuật công nghệ và công nghệ thông tin-truyền thông', 'Khoa học Kỹ thuật và Công nghệ', 'Ứng dụng', '2022-05-28 00:00:00', '2022-11-29 00:00:00', 'B2000016, Huynh van vu, vuB2000016@student.ctu.edu.vn', 'Trần Công Án, tca@ctu.edu.vn', 'B2000016', 'B2000015', 'B2000014', '', '', 'Nhiệm vụ: Hướng dẫn nội dung khoa học và hướng dẫn lập dự toán kinh phí đề tài', '15,000,000', '001533', './uploadFileThuyetMinh/fielthuyettrinh.pdf', '18h, 2022-05-20, 101/C1', './uploads2/fielthuyettrinh.pdf', 'hoanthanh', './uploadDonDangKyBaoCao/fielthuyettrinh.pdf', './uploadFileBaoCaoNghiemThu/filegiaitrinh.pdf', '18h, 2022-05-13, LT1', '2022-05-26 02:13:59', '2022-05-26 02:35:43');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hoidongdetais`
--

CREATE TABLE `hoidongdetais` (
  `id` int(11) NOT NULL,
  `id_detai` varchar(255) DEFAULT NULL,
  `chutich` varchar(255) DEFAULT NULL,
  `thuky` varchar(255) DEFAULT NULL,
  `thanhvien1` varchar(255) DEFAULT NULL,
  `thanhvien2` varchar(255) DEFAULT NULL,
  `thanhvien3` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `hoidongdetais`
--

INSERT INTO `hoidongdetais` (`id`, `id_detai`, `chutich`, `thuky`, `thanhvien1`, `thanhvien2`, `thanhvien3`, `createdAt`, `updatedAt`) VALUES
(3, '17', 'hoidong1', 'hoidong2', 'hoidong3', 'hoidong4', 'hoidong5', '2022-05-12 05:43:25', '2022-05-12 06:58:24'),
(4, '18', 'hoidong1', 'hoidong2', 'hoidong3', 'hoidong4', 'hoidong5', '2022-05-16 05:40:22', '2022-05-16 05:40:22'),
(5, '19', 'hoidong1', 'hoidong2', 'hoidong3', 'hoidong4', 'hoidong5', '2022-05-16 07:42:55', '2022-05-16 07:42:55'),
(6, '20', 'hoidong1', 'hoidong2', 'hoidong3', 'hoidong4', 'hoidong5', '2022-05-18 06:36:23', '2022-05-18 06:36:23'),
(7, '21', 'hoidong1', 'hoidong2', 'hoidong3', 'hoidong4', 'hoidong5', '2022-05-20 18:18:33', '2022-05-20 18:32:08'),
(8, '22', 'hoidong1', 'hoidong2', 'hoidong3', 'hoidong4', 'hoidong5', '2022-05-22 10:46:43', '2022-05-22 10:46:43'),
(9, '24', '001000', '001229', '001348', '001943', '001944', '2022-05-24 04:01:41', '2022-05-24 04:01:41'),
(10, '25', '001000', '001229', '001348', '001943', '001944', '2022-05-24 04:20:48', '2022-05-24 04:20:48'),
(11, '26', '001000', '001229', '001348', '001943', '001944', '2022-05-24 04:31:42', '2022-05-24 04:31:42'),
(12, '27', '001000', '001229', '001348', '001943', '001944', '2022-05-24 04:43:05', '2022-05-24 04:43:05'),
(13, '28', '001000', '001229', '001348', '001943', '001944', '2022-05-24 04:51:50', '2022-05-24 04:51:50'),
(14, '29', '001000', '001229', '001348', '001943', '001944', '2022-05-24 05:07:15', '2022-05-24 05:07:15'),
(15, '32', '001000', '001229', '001348', '001943', '001944', '2022-05-24 13:56:00', '2022-05-24 13:56:49'),
(16, '33', '001000', '001229', '001348', '001943', '001944', '2022-05-25 02:04:15', '2022-05-25 02:04:15'),
(17, '34', '001000', '001229', '001348', '001943', '001944', '2022-05-26 02:24:16', '2022-05-26 02:24:16');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hoidongnghiemthus`
--

CREATE TABLE `hoidongnghiemthus` (
  `id` int(11) NOT NULL,
  `id_detai` varchar(255) DEFAULT NULL,
  `chutich` varchar(255) DEFAULT NULL,
  `thuky` varchar(255) DEFAULT NULL,
  `thanhvien1` varchar(255) DEFAULT NULL,
  `thanhvien2` varchar(255) DEFAULT NULL,
  `thanhvien3` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `hoidongnghiemthus`
--

INSERT INTO `hoidongnghiemthus` (`id`, `id_detai`, `chutich`, `thuky`, `thanhvien1`, `thanhvien2`, `thanhvien3`, `createdAt`, `updatedAt`) VALUES
(2, '17', 'hoidong1', 'hoidong2', 'hoidong3', 'hoidong4', 'hoidong5', '2022-05-14 20:24:37', '2022-05-14 20:52:31'),
(3, '18', 'hoidong1', 'hoidong2', 'hoidong3', 'hoidong4', 'hoidong5', '2022-05-16 05:57:44', '2022-05-16 05:57:44'),
(4, '19', 'hoidong1', 'hoidong2', 'hoidong3', 'hoidong4', 'hoidong5', '2022-05-16 08:07:03', '2022-05-16 08:07:03'),
(5, '20', 'hoidong1', 'hoidong2', 'hoidong3', 'hoidong4', 'hoidong5', '2022-05-18 06:44:18', '2022-05-18 06:44:18'),
(6, '21', 'hoidong1', 'hoidong2', 'hoidong3', 'hoidong4', 'hoidong5', '2022-05-20 19:16:13', '2022-05-20 19:16:13'),
(7, '22', 'hoidong1', 'hoidong2', 'hoidong3', 'hoidong4', 'hoidong5', '2022-05-22 10:59:18', '2022-05-22 10:59:18'),
(8, '24', '001000', '001229', '001348', '001943', '001944', '2022-05-24 04:11:11', '2022-05-24 04:11:11'),
(9, '25', '001000', '001229', '001348', '001943', '001944', '2022-05-24 04:24:21', '2022-05-24 04:24:21'),
(10, '26', '001000', '001229', '001348', '001943', '001944', '2022-05-24 04:33:30', '2022-05-24 04:33:30'),
(11, '27', '001000', '001229', '001348', '001943', '001944', '2022-05-24 04:45:33', '2022-05-24 04:45:33'),
(12, '28', '001000', '001229', '001348', '001943', '001944', '2022-05-24 04:57:41', '2022-05-24 04:57:41'),
(13, '29', '001000', '001229', '001348', '001943', '001944', '2022-05-24 05:10:58', '2022-05-24 05:10:58'),
(14, '32', '001000', '001229', '001348', '001943', '001944', '2022-05-24 14:56:30', '2022-05-24 15:08:34'),
(15, '33', '001000', '001229', '001348', '001943', '001944', '2022-05-25 02:11:21', '2022-05-25 02:11:21'),
(16, '34', '001000', '001229', '001348', '001943', '001944', '2022-05-26 02:33:24', '2022-05-26 02:33:24');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `modangkydetais`
--

CREATE TABLE `modangkydetais` (
  `id` int(11) NOT NULL,
  `trangthaidangky` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `modangkydetais`
--

INSERT INTO `modangkydetais` (`id`, `trangthaidangky`, `createdAt`, `updatedAt`) VALUES
(1, 'mo', '2022-05-11 07:44:52', '2022-05-25 01:59:24');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nghiemthudetais`
--

CREATE TABLE `nghiemthudetais` (
  `id` int(11) NOT NULL,
  `id_detai` varchar(255) DEFAULT NULL,
  `phieudanhgia` varchar(255) DEFAULT NULL,
  `phieunhanxetdanhgia` varchar(255) DEFAULT NULL,
  `bienbanhopnghiemthudetai` varchar(255) DEFAULT NULL,
  `phieugiaitrinh` varchar(255) DEFAULT NULL,
  `filebaocaosauchinhsua` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `nghiemthudetais`
--

INSERT INTO `nghiemthudetais` (`id`, `id_detai`, `phieudanhgia`, `phieunhanxetdanhgia`, `bienbanhopnghiemthudetai`, `phieugiaitrinh`, `filebaocaosauchinhsua`, `createdAt`, `updatedAt`) VALUES
(1, '17', './uploadPhieuDanhGiaSauNghiemThu/phieudanhgia.pdf', './uploadPhieuNhanXetDanhGiaSauNghiemThu/phieudanhgia_2.pdf', './uploadBienBanHopHoiDongNghiemThuDeTai/bien_ban_hop_hoi_dong_nghiem_thu_de_tai.pdf', './uploadPhieuGiaiTrinhSauNghiemThu/phieugiaitrinh_saunghiemthu.pdf', './uploadFileBaoCaoSauChinhSua/Filebaocao_sauchinhsua.pdf', '2022-05-14 22:49:33', '2022-05-15 06:37:18'),
(2, '18', NULL, NULL, NULL, './uploadPhieuGiaiTrinhSauNghiemThu/phieudanhgia_saunghiemthu.pdf', NULL, '2022-05-16 06:02:21', '2022-05-16 06:02:21'),
(3, '19', './uploadPhieuDanhGiaSauNghiemThu/phieudanhgia.pdf', './uploadPhieuNhanXetDanhGiaSauNghiemThu/phieudanhgia_2.pdf', './uploadBienBanHopHoiDongNghiemThuDeTai/bien_ban_hop_hoi_dong_nghiem_thu_de_tai.pdf', './uploadPhieuGiaiTrinhSauNghiemThu/phieugiaitrinh_saunghiemthu.pdf', './uploadFileBaoCaoSauChinhSua/Filebaocao_sauchinhsua.pdf', '2022-05-16 08:09:07', '2022-05-16 08:11:10'),
(4, '20', './uploadPhieuDanhGiaSauNghiemThu/fielthuyettrinh.pdf', './uploadPhieuNhanXetDanhGiaSauNghiemThu/fielthuyettrinh_2.pdf', './uploadBienBanHopHoiDongNghiemThuDeTai/bien_ban_hop_hoi_dong_nghiem_thu_de_tai.pdf', './uploadPhieuGiaiTrinhSauNghiemThu/phieudanhgia_saunghiemthu.pdf', './uploadFileBaoCaoSauChinhSua/Filebaocao_sauchinhsua.pdf', '2022-05-18 06:44:31', '2022-05-18 06:45:06'),
(5, '21', './uploadPhieuDanhGiaSauNghiemThu/phieudanhgia.pdf', './uploadPhieuNhanXetDanhGiaSauNghiemThu/phieugiaitrinh_2.pdf', './uploadBienBanHopHoiDongNghiemThuDeTai/bien_ban_hop_hoi_dong_nghiem_thu_de_tai.pdf', './uploadPhieuGiaiTrinhSauNghiemThu/phieugiaitrinh_saunghiemthu.pdf', './uploadFileBaoCaoSauChinhSua/Filebaocao_sauchinhsua.pdf', '2022-05-20 19:22:33', '2022-05-20 19:24:07'),
(6, '22', './uploadPhieuDanhGiaSauNghiemThu/phieudanhgia.pdf', './uploadPhieuNhanXetDanhGiaSauNghiemThu/phieudanhgia_2.pdf', './uploadBienBanHopHoiDongNghiemThuDeTai/bien_ban_hop_hoi_dong_nghiem_thu_de_tai.pdf', './uploadPhieuGiaiTrinhSauNghiemThu/phieugiaitrinh_saunghiemthu.pdf', './uploadFileBaoCaoSauChinhSua/Filebaocao_sauchinhsua.pdf', '2022-05-22 11:00:14', '2022-05-22 11:01:37'),
(7, '24', './uploadPhieuDanhGiaSauNghiemThu/PhieuDanhGia.pdf', './uploadPhieuNhanXetDanhGiaSauNghiemThu/PhieuNhanXetDanhGia.pdf', './uploadBienBanHopHoiDongNghiemThuDeTai/BienBanHopHoiDongNghiemThuDeTai.pdf', './uploadPhieuGiaiTrinhSauNghiemThu/Phieugiaitrinh_SCMTCHA_SauNghiemThu.pdf', './uploadFileBaoCaoSauChinhSua/FileBaoCaoNghiemThu_SauChinhSua.pdf', '2022-05-24 04:11:58', '2022-05-24 04:14:32'),
(8, '25', './uploadPhieuDanhGiaSauNghiemThu/PhieuDanhGia.pdf', './uploadPhieuNhanXetDanhGiaSauNghiemThu/PhieuNhanXetDanhGia.pdf', './uploadBienBanHopHoiDongNghiemThuDeTai/BienBanHopHoiDongNghiemThuDeTai.pdf', './uploadPhieuGiaiTrinhSauNghiemThu/Phieugiaitrinh_SCMTCHA_SauNghiemThu.pdf', './uploadFileBaoCaoSauChinhSua/FileBaoCaoNghiemThu_SauChinhSua.pdf', '2022-05-24 04:25:06', '2022-05-24 04:26:07'),
(9, '26', './uploadPhieuDanhGiaSauNghiemThu/PhieuDanhGia.pdf', './uploadPhieuNhanXetDanhGiaSauNghiemThu/PhieuNhanXetDanhGia.pdf', './uploadBienBanHopHoiDongNghiemThuDeTai/BienBanHopHoiDongNghiemThuDeTai.pdf', './uploadPhieuGiaiTrinhSauNghiemThu/Phieugiaitrinh_SCMTCHA_SauNghiemThu.pdf', './uploadFileBaoCaoSauChinhSua/FileBaoCaoNghiemThu_SauChinhSua.pdf', '2022-05-24 04:34:10', '2022-05-24 04:34:44'),
(10, '27', './uploadPhieuDanhGiaSauNghiemThu/PhieuDanhGia.pdf', './uploadPhieuNhanXetDanhGiaSauNghiemThu/PhieuNhanXetDanhGia.pdf', './uploadBienBanHopHoiDongNghiemThuDeTai/BienBanHopHoiDongNghiemThuDeTai.pdf', './uploadPhieuGiaiTrinhSauNghiemThu/Phieugiaitrinh_SCMTCHA_SauNghiemThu.pdf', './uploadFileBaoCaoSauChinhSua/FileBaoCaoNghiemThu_SauChinhSua.pdf', '2022-05-24 04:45:50', '2022-05-24 04:46:25'),
(11, '28', './uploadPhieuDanhGiaSauNghiemThu/PhieuDanhGia.pdf', './uploadPhieuNhanXetDanhGiaSauNghiemThu/PhieuNhanXetDanhGia.pdf', './uploadBienBanHopHoiDongNghiemThuDeTai/BienBanHopHoiDongNghiemThuDeTai.pdf', './uploadPhieuGiaiTrinhSauNghiemThu/Phieugiaitrinh_SCMTCHA_SauNghiemThu.pdf', './uploadFileBaoCaoSauChinhSua/FileBaoCaoNghiemThu_SauChinhSua.pdf', '2022-05-24 04:58:03', '2022-05-24 04:58:46'),
(12, '29', './uploadPhieuDanhGiaSauNghiemThu/PhieuDanhGia.pdf', './uploadPhieuNhanXetDanhGiaSauNghiemThu/PhieuNhanXetDanhGia.pdf', './uploadBienBanHopHoiDongNghiemThuDeTai/BienBanHopHoiDongNghiemThuDeTai.pdf', './uploadPhieuGiaiTrinhSauNghiemThu/Phieugiaitrinh_SCMTCHA_SauNghiemThu.pdf', './uploadFileBaoCaoSauChinhSua/FileBaoCaoNghiemThu_SauChinhSua.pdf', '2022-05-24 05:12:13', '2022-05-24 05:15:38'),
(13, '33', './uploadPhieuDanhGiaSauNghiemThu/PhieuDanhGia.pdf', './uploadPhieuNhanXetDanhGiaSauNghiemThu/PhieuNhanXetDanhGia.pdf', './uploadBienBanHopHoiDongNghiemThuDeTai/BienBanHopHoiDongNghiemThuDeTai.pdf', './uploadPhieuGiaiTrinhSauNghiemThu/PhieuGiaiTrinh_SauNghiemThu.pdf', './uploadFileBaoCaoSauChinhSua/FileBaoCaoNghiemThu_DaChinhSua.pdf', '2022-05-25 02:12:00', '2022-05-25 02:13:02'),
(14, '34', NULL, NULL, NULL, './uploadPhieuGiaiTrinhSauNghiemThu/fielthuyettrinh.pdf', './uploadFileBaoCaoSauChinhSua/fielthuyettrinh.pdf', '2022-05-26 02:31:55', '2022-05-26 02:32:02');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `positions`
--

CREATE TABLE `positions` (
  `id` int(11) NOT NULL,
  `roleId` varchar(255) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `positions`
--

INSERT INTO `positions` (`id`, `roleId`, `position`, `createdAt`, `updatedAt`) VALUES
(1, 'R1', 'admin', '2022-05-11 07:42:26', '2022-05-11 07:42:26'),
(2, 'R2', 'cố vấn học tập', '2022-05-11 07:43:09', '2022-05-11 07:43:09'),
(3, 'R3', 'chủ nhiệm', '2022-05-11 07:43:38', '2022-05-11 07:43:38'),
(4, 'R4', 'hội đồng', '2022-05-11 07:43:51', '2022-05-11 07:43:51'),
(5, 'R5', 'sinh viên chất lượng cao', '2022-05-11 07:44:01', '2022-05-11 07:44:01');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('migration-create-chamdiemdetai.js'),
('migration-create-detai.js'),
('migration-create-hoidongdetai.js'),
('migration-create-hoidongnghiemthu.js'),
('migration-create-modangkydetai.js'),
('migration-create-nghiemthudetai.js'),
('migration-create-position.js'),
('migration-create-thongbao.js'),
('migration-create-user.js');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `thongbaos`
--

CREATE TABLE `thongbaos` (
  `id` int(11) NOT NULL,
  `tenthongbao` varchar(255) DEFAULT NULL,
  `filethongbao` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `thongbaos`
--

INSERT INTO `thongbaos` (`id`, `tenthongbao`, `filethongbao`, `createdAt`, `updatedAt`) VALUES
(1, 'Thông báo thời gian đăng ký đề tài nghiên cứu khoa học năm 2022', './uploads7/fielthuyettrinh.pdf', '2022-05-11 05:55:11', '2022-05-11 05:55:11'),
(2, 'Thông báo thời gian đăng ký đề tài nghiên cứu khoa học năm 2023', './uploads7/fielthuyettrinh.pdf', '2022-05-11 05:55:26', '2022-05-11 05:55:26'),
(3, 'Thông báo thời gian đăng ký đề tài nghiên cứu khoa học năm 2024', './uploads7/fielthuyettrinh.pdf', '2022-05-11 05:55:35', '2022-05-11 05:55:35'),
(4, 'Thông báo thời gian đăng ký đề tài nghiên cứu khoa học năm 2025', './uploads7/fielthuyettrinh.pdf', '2022-05-11 05:55:45', '2022-05-11 05:55:45'),
(5, 'Thông báo thời gian đăng ký đề tài nghiên cứu khoa học năm 2026', './uploads7/fielthuyettrinh.pdf', '2022-05-11 05:55:52', '2022-05-11 05:55:52');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `account` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `roleId` varchar(255) DEFAULT NULL,
  `phonenumber` varchar(255) DEFAULT NULL,
  `khoi` varchar(255) DEFAULT NULL,
  `condition` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `account`, `email`, `password`, `firstName`, `lastName`, `code`, `address`, `gender`, `roleId`, `phonenumber`, `khoi`, `condition`, `createdAt`, `updatedAt`) VALUES
(2, 'admin', 'nqsang33@gmail.com', '$2a$10$JgTquCB2LOADX5DOtMYSH.RdTff/vdnWYmHc2KU9OobE5VcaAtJXK', 'vu van ', 'hoang', '2', 'Ha Noi', 'Nam', 'R1', '0345551234', NULL, '1', '2022-05-11 05:53:09', '2022-05-11 05:53:09'),
(3, 'admin1', 'nqsang33@gmail.com', '$2a$10$JgTquCB2LOADX5DOtMYSH.RdTff/vdnWYmHc2KU9OobE5VcaAtJXK', 'Vũ Minh', 'Toàn', '2', 'Ha Noi', 'Nam', 'R1', '0345551234', NULL, '1', '2022-05-11 05:53:32', '2022-05-25 01:55:41'),
(32, 'cvht1', 'cvht1@gmail.com', '$2a$10$EC.M2mcsgDaYLv0dZpVW4OmdEbf4Sm9bztrF5DO011qcIo43YGtvq', 'nguyen hoang ', 'A', '2', 'Cần thơ', 'Nam', 'R2', '0345551234', NULL, '1', '2022-05-11 05:58:42', '2022-05-11 05:58:42'),
(33, 'cvht2', 'cvht2@gmail.com', '$2a$10$EC.M2mcsgDaYLv0dZpVW4OmdEbf4Sm9bztrF5DO011qcIo43YGtvq', 'nguyen hoang ', 'B', '2', 'Cần thơ', 'Nam', 'R2', '0345551234', NULL, '1', '2022-05-11 05:58:49', '2022-05-11 05:58:49'),
(34, 'cvht3', 'cvht3@gmail.com', '$2a$10$EC.M2mcsgDaYLv0dZpVW4OmdEbf4Sm9bztrF5DO011qcIo43YGtvq', 'nguyen hoang ', 'C', '2', 'Cần thơ', 'Nam', 'R2', '0345551234', NULL, '1', '2022-05-11 05:58:54', '2022-05-11 05:58:54'),
(35, 'cvht4', 'cvht4@gmail.com', '$2a$10$EC.M2mcsgDaYLv0dZpVW4OmdEbf4Sm9bztrF5DO011qcIo43YGtvq', 'nguyen hoang ', 'D', '2', 'Cần thơ', 'Nam', 'R2', '0345551234', NULL, '1', '2022-05-11 05:59:01', '2022-05-11 05:59:01'),
(36, 'cvht5', 'cvht5@gmail.com', '$2a$10$EC.M2mcsgDaYLv0dZpVW4OmdEbf4Sm9bztrF5DO011qcIo43YGtvq', 'nguyen hoang ', 'E', '2', 'Cần thơ', 'Nam', 'R2', '0345551234', NULL, '1', '2022-05-11 05:59:08', '2022-05-11 05:59:08'),
(69, 'B1910391', 'KhanhB1910391@student.ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEaeWXEPEjmPN8E8WP9yDTTbc2VcD5punq6', 'Hồng Quốc', 'Khánh', 'DI19V7F2', NULL, 'Nam', 'R5', NULL, NULL, 'Đã hoàn thành', '2022-05-24 03:18:50', '2022-05-24 14:06:35'),
(70, 'B1910611', 'AnhB1910611@student.ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEaedtUgUV9es8OuKUU1RuDn8v8SOvWoZZ.', 'Lê Nguyễn Bảo', 'Anh', 'DI19V7F2', NULL, 'Nam', 'R5', NULL, NULL, 'Đã hoàn thành', '2022-05-24 03:18:50', '2022-05-24 04:14:46'),
(71, 'B1910619', 'BaoB1910619@student.ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEaeltXWTd3LPWVODuN.wV/KDf4dwrbka.y', 'Nguyễn Chí', 'Bảo', 'DI19V7F2', NULL, 'Nam', 'R5', NULL, NULL, 'Đã hoàn thành', '2022-05-24 03:18:50', '2022-05-24 14:06:45'),
(72, 'B1910620', 'BaoB1910620@student.ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEae8khn/azWWFLpWpjTfDQwVoxkcqS5ZDy', 'Phạm Ngọc Gia', 'Bảo', 'DI19V7F2', NULL, 'Nam', 'R5', NULL, NULL, 'Đã hoàn thành', '2022-05-24 03:18:50', '2022-05-24 14:06:53'),
(73, 'B1910623', 'CuongB1910623@student.ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEaeGy7L25iG40F2v96jZ1A7mxv6RBmfBOS', 'Đặng Quốc', 'Cường', 'DI19V7F2', NULL, 'Nam', 'R5', NULL, NULL, 'Đã hoàn thành', '2022-05-24 03:18:50', '2022-05-24 14:07:02'),
(74, 'B1910628', 'DongB1910628@student.ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEae/w9InFNj0kmtD3kfovRQtoiR.j6upi6', 'Hồ Xuân Phương', 'Đông', 'DI19V7F2', NULL, 'Nam', 'R5', NULL, NULL, 'Đã hoàn thành', '2022-05-24 03:18:50', '2022-05-24 14:07:10'),
(75, 'B1910641', 'HienB1910641@student.ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEaeO6e5MsufkXK.cIu.EgQEm.BvDA3F1Ai', 'Võ Phan Minh', 'Hiển', 'DI19V7F2', NULL, 'Nam', 'R5', NULL, NULL, 'Đã hoàn thành', '2022-05-24 03:18:50', '2022-05-24 14:07:16'),
(76, 'B1910654', 'KhangB1910654@student.ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEae5a72BAn5aGVZYSp7Z1JpiM.ymp8zHe2', 'Nguyễn Duy', 'Khang', 'DI19V7F2', NULL, 'Nam', 'R5', NULL, NULL, 'Đã hoàn thành', '2022-05-24 03:18:50', '2022-05-24 04:35:02'),
(77, 'B1910657', 'KhanhB1910657@student.ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEaeEDnJ2TDuQ1LVeJvjTmJ.x6Exiac9MZ2', 'Nguyễn Thị Mỹ', 'Khánh', 'DI19V7F2', NULL, 'Nữ', 'R5', NULL, NULL, 'Đã hoàn thành', '2022-05-24 03:18:50', '2022-05-24 14:07:28'),
(78, 'B1910666', 'MinhB1910666@student.ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEaeC3iQdA0/LWov0dkn7s8GQU4yGqfZHDC', 'Nguyễn Ngọc Tường', 'Minh', 'DI19V7F2', NULL, 'Nam', 'R5', NULL, NULL, 'Đã hoàn thành', '2022-05-24 03:18:50', '2022-05-24 04:46:38'),
(79, 'B1910672', 'NghiaB1910672@student.ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEaeboZRkVKTrESoQamA8dc7kE1GJDH1OSi', 'Nguyễn Hiếu', 'Nghĩa', 'DI19V7F2', NULL, 'Nam', 'R5', NULL, NULL, 'Đã hoàn thành', '2022-05-24 03:18:50', '2022-05-24 14:07:37'),
(80, 'B1910680', 'NhuB1910680@student.ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEaecJ4/qiB0QmFGx2gY6rQZEWH4oW.1PZW', 'Lê Huỳnh', 'Như', 'DI19V7F2', NULL, 'Nữ', 'R5', NULL, NULL, 'Đã hoàn thành', '2022-05-24 03:18:50', '2022-05-24 14:07:42'),
(81, 'B1910689', 'PhuongB1910689@student.ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEaexLcFrxb4qovs22Dz.6tQaLGa0taFeRW', 'Trần Hữu', 'Phương', 'DI19V7F2', NULL, 'Nam', 'R5', NULL, NULL, 'Đã hoàn thành', '2022-05-24 03:18:50', '2022-05-24 14:07:50'),
(82, 'B1910697', 'TamB1910697@student.ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEaeREEDa.RArnZ3Ji0sQTt0I5SwNUX4bnu', 'Nguyễn Trung', 'Tâm', 'DI19V7F2', NULL, 'Nam', 'R5', NULL, NULL, 'Đã hoàn thành', '2022-05-24 03:18:50', '2022-05-24 14:07:59'),
(83, 'B1910700', 'TanB1910700@student.ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEae1Apa8spFmMT/i/nbOkrqHVulekO6wu.', 'Phan Minh', 'Tân', 'DI19V7F2', NULL, 'Nam', 'R5', NULL, NULL, 'Đã hoàn thành', '2022-05-24 03:18:50', '2022-05-24 15:08:49'),
(84, 'B1910707', 'ThaoB1910707@student.ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEaevVRYlmt7aoV4d67HWMO2G.qagV.ddrW', 'Ngô Thị Thanh', 'Thảo', 'DI19V7F2', NULL, 'Nữ', 'R5', NULL, NULL, 'Đã hoàn thành', '2022-05-24 03:18:50', '2022-05-24 15:08:49'),
(85, 'B1910711', 'ThongB1910711@student.ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEaePcZUADpRQ3ggKoyqgwZzDvRZURVb3f6', 'Bùi Tiến', 'Thông', 'DI19V7F2', NULL, 'Nam', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-24 03:18:50', '2022-05-24 14:08:21'),
(86, 'B1910719', 'TranB1910719@student.ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEaeTT89VjLofuQZBp3KB25Y2cJrq.gn.ni', 'Mai Nguyễn Bảo', 'Trân', 'DI19V7F2', NULL, 'Nữ', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-24 03:18:50', '2022-05-24 14:08:26'),
(87, 'B1910731', 'YenB1910731@student.ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEaehH6vzAXZqhdJ5eWjkE8gLx4kEL5rxKm', 'Lê Hải', 'Yến', 'DI19V7F2', NULL, 'Nữ', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-24 03:18:50', '2022-05-24 14:08:32'),
(88, 'B1706974', 'BuuB1706974@student.ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEaeVw.eGXL41xXaaoTSXiYI/KuGfN3dvMa', 'Đào Chí', 'Bửu', 'DI17V7F2', NULL, 'Nam', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-24 03:19:11', '2022-05-24 14:08:37'),
(89, 'B1706990', 'nguyenB1706990@student.ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEaeV1.DgOo.HkKQVRBSU7LujS9c.SeVi2q', 'Nguyễn Văn Hoàng', 'Nguyên', 'DI17V7F1', NULL, 'Nam', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-24 03:19:11', '2022-05-24 14:08:45'),
(90, 'B1900349', 'MinhB1900349@student.ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEaeDLYzQaGoOW6GsSPLIeX/Xg7Qg2a/aY2', 'Lê Đoàn Nhật', 'Minh', 'DI19V7F1', NULL, 'Nam', 'R5', NULL, NULL, 'Đã hoàn thành', '2022-05-24 03:19:11', '2022-05-24 04:14:46'),
(91, 'B1908407', 'PhuongB1908407@student.ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEaeYCtkSVjMsdVfm...WQWrg4KLe.jXSDK', 'Trần Bá', 'Phương', 'DI19V7F1', NULL, 'Nam', 'R5', NULL, NULL, 'Đã hoàn thành', '2022-05-24 03:19:11', '2022-05-24 14:08:55'),
(92, 'B1910253', 'LuanB1910253@student.ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEae5t8GhJm91OKxiqmbAReIRNhowT3FXvC', 'Nguyễn Minh', 'Luân', 'DI19V7F1', NULL, 'Nam', 'R5', NULL, NULL, 'Đã hoàn thành', '2022-05-24 03:19:11', '2022-05-24 14:09:02'),
(93, 'B1910497', 'ChanB1910497@student.ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEaef1szCuPZB/yBKwhz2HLv0ubbqMRRJDu', 'Trần', 'Chân', 'DI19V7F1', NULL, 'Nam', 'R5', NULL, NULL, 'Đã hoàn thành', '2022-05-24 03:19:11', '2022-05-24 14:09:07'),
(94, 'B1910609', 'AnB1910609@student.ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEaeY1ndXAXG/0OoRbG/8KhnbpvcTJGCvfe', 'Lăng Trường', 'An', 'DI19V7F1', NULL, 'Nam', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-24 03:19:11', '2022-05-24 03:19:11'),
(95, 'B1910618', 'BaoB1910618@student.ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEae0zuSnUXRFP3pthmG.GsPFigvUZoaov6', 'Nguyễn Quốc', 'Bảo', 'DI19V7F1', NULL, 'Nam', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-24 03:19:11', '2022-05-24 14:09:21'),
(96, 'B1910626', 'DuyB1910626@student.ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEae21EHscoiGX/fJckD6bG6RNJAR6Uysm6', 'Trần Lê', 'Duy', 'DI19V7F1', NULL, 'Nam', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-24 03:19:11', '2022-05-24 03:19:11'),
(97, 'B1910645', 'HuyB1910645@student.ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEaejrIxw.i2XLXjFjGGJsLJNggvs.G6RXm', 'Lý Võ Thanh', 'Huy', 'DI19V7F1', NULL, 'Nữ', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-24 03:19:11', '2022-05-24 03:19:11'),
(98, 'B1910648', 'HuyenB1910648@student.ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEaeanJJZ9UkIgrHKRSuttU5Na6JoF01twS', 'Nguyễn Thị Bích', 'Huyền', 'DI19V7F1', NULL, 'Nam', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-24 03:19:11', '2022-05-24 14:09:28'),
(99, 'B1910652', 'KhangB1910652@student.ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEaeDYv8NlDn0YVvkv5QhMqJodNviHruDyK', 'Nguyễn Duy', 'Khang', 'DI19V7F1', NULL, 'Nam', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-24 03:19:11', '2022-05-24 03:19:11'),
(100, 'B1910656', 'KhanhB1910656@student.ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEaemI7teCFS4CrR8LDXXQtz2MXhbLcuFpW', 'Nguyễn Tuấn', 'Khanh', 'DI19V7F1', NULL, 'Nữ', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-24 03:19:11', '2022-05-24 03:19:11'),
(101, 'B1910659', 'KhôiB1910659@student.ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEaeOW0tTu5mXihPZzuiQKNE2c1Ea9VC/9C', 'Lê Anh', 'Khôi', 'DI19V7F1', NULL, 'Nam', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-24 03:19:11', '2022-05-24 03:19:11'),
(102, 'B1910664', 'LocB1910664@student.ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEaevPRfofpJ6m25f6zxSjBs2ManQMZqgXG', 'Tống Phước', 'Lộc', 'DI19V7F2', NULL, 'Nam', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-24 03:19:11', '2022-05-24 14:09:35'),
(103, 'B1910668', 'NgaB1910668@student.ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEaeBvoNV4u6h54ZRmkGLeIbEhqc8eY5zYa', 'Lê Tuyết', 'Nga', 'DI19V7F1', NULL, 'Nam', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-24 03:19:11', '2022-05-24 03:19:11'),
(104, 'B1910674', 'NguyenB1910674@student.ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEaeWPVFBAXi.W2c6puokhqrutizDQblLbK', 'Phạm Đức', 'Nguyên', 'DI19V7F1', NULL, 'Nữ', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-24 03:19:11', '2022-05-24 14:09:42'),
(105, 'B1910694', 'TaiB1910694@student.ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEaeQuG0vaPm08aQlcBvnWI3wnAxgvwBIVm', 'Trần Tấn', 'Tài', 'DI19V7F1', NULL, 'Nam', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-24 03:19:11', '2022-05-24 14:09:49'),
(106, 'B1910699', 'TanB1910699@student.ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEae3fT7KMGSl8Zy.kfWIC7t5ML3rW4c0Ji', 'Lê Duy', 'Tân', 'DI19V7F1', NULL, 'Nữ', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-24 03:19:11', '2022-05-24 14:09:57'),
(130, '001000', 'nhh@ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEaeCIiWdFJnuZuA4ETsR0tnW5JrVO9SGXq', 'Nguyễn Hữu', 'Hòa', '2', 'Cần thơ', 'Nam', 'R4', '0345551234', NULL, '1', '2022-05-24 03:22:54', '2022-05-26 02:24:58'),
(131, '001229', 'ptp@ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEaeCIiWdFJnuZuA4ETsR0tnW5JrVO9SGXq', 'Phạm Thế', 'Phi', '2', 'Cần thơ', 'Nam', 'R4', '0345551234', NULL, '1', '2022-05-24 03:23:25', '2022-05-24 03:23:25'),
(132, '001348', 'pnk@ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEaeCIiWdFJnuZuA4ETsR0tnW5JrVO9SGXq', 'Phạm Nguyên', 'Khang', '2', 'Cần thơ', 'Nam', 'R4', '0345551234', NULL, '1', '2022-05-24 03:24:00', '2022-05-24 03:24:00'),
(133, '001944', 'tmt@ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEaeCIiWdFJnuZuA4ETsR0tnW5JrVO9SGXq', 'Thái Minh', 'Tuấn', '2', 'Cần thơ', 'Nam', 'R4', '0345551234', NULL, '1', '2022-05-24 03:24:22', '2022-05-24 03:24:22'),
(134, '001943', 'lnkhang@ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEaeCIiWdFJnuZuA4ETsR0tnW5JrVO9SGXq', 'Lâm Nhựt', 'Khang', '2', 'Cần thơ', 'Nữ', 'R4', '0345551234', NULL, '1', '2022-05-24 03:24:56', '2022-05-24 03:34:03'),
(135, '001533', 'tca@ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEaeCIiWdFJnuZuA4ETsR0tnW5JrVO9SGXq', 'Trần Công', 'Án', '2', 'Cần thơ', 'Nam', 'R3', '0345551234', NULL, '1', '2022-05-24 03:28:45', '2022-05-24 03:28:45'),
(136, '001349', 'lvl@ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEaeCIiWdFJnuZuA4ETsR0tnW5JrVO9SGXq', 'Lê Văn', 'Lâm', '2', 'Cần thơ', 'Nam', 'R3', '0345551234', NULL, '1', '2022-05-24 03:29:13', '2022-05-24 03:29:13'),
(137, '001445', 'tmt@ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEaeCIiWdFJnuZuA4ETsR0tnW5JrVO9SGXq', 'Trần Minh', 'Tân', '2', 'Cần thơ', 'Nam', 'R3', '0345551234', NULL, '1', '2022-05-24 03:29:32', '2022-05-24 03:29:32'),
(138, '002635', 'tnmt@ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEaeCIiWdFJnuZuA4ETsR0tnW5JrVO9SGXq', 'Trần Nguyễn Minh', 'Thư', '2', 'Cần thơ', 'Nữ', 'R3', '0345551234', NULL, '1', '2022-05-24 03:30:00', '2022-05-24 03:30:00'),
(139, '001531', 'tqd@ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEaeCIiWdFJnuZuA4ETsR0tnW5JrVO9SGXq', 'Trương Quốc', 'Định', '2', 'Cần thơ', 'Nam', 'R3', '0345551234', NULL, '1', '2022-05-24 03:30:32', '2022-05-24 03:30:32'),
(140, '001230', 'ptc@ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEaeCIiWdFJnuZuA4ETsR0tnW5JrVO9SGXq', 'Phan Thượng', 'Cang', '2', 'Cần thơ', 'Nam', 'R3', '0345551234', NULL, '1', '2022-05-24 03:30:55', '2022-05-24 03:30:55'),
(141, '001072', 'dtn@ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEaeCIiWdFJnuZuA4ETsR0tnW5JrVO9SGXq', 'Đỗ Thanh', 'Nghị', '2', 'Cần thơ', 'Nam', 'R3', '0345551234', NULL, '1', '2022-05-24 03:31:21', '2022-05-24 03:31:21'),
(142, '001043', 'nmt@ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEaeCIiWdFJnuZuA4ETsR0tnW5JrVO9SGXq', 'Nguyễn Minh', 'Trung', '2', 'Cần thơ', 'Nam', 'R3', '0345551234', NULL, '1', '2022-05-24 03:31:47', '2022-05-24 03:31:47'),
(143, '002297', 'bdht@ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEaeCIiWdFJnuZuA4ETsR0tnW5JrVO9SGXq', 'Bùi Đặng Hà', 'Phương', '2', 'Cần thơ', 'Nữ', 'R3', '0345551234', NULL, '1', '2022-05-24 03:32:40', '2022-05-24 03:32:40'),
(144, '002480', 'tttq@ctu.edu.vn', '$2a$10$pzjiwnlaCjMmQZACUOeEaeCIiWdFJnuZuA4ETsR0tnW5JrVO9SGXq', 'Trần Thị Tố', 'Quyên', '2', 'Cần thơ', 'Nữ', 'R3', '0345551234', NULL, '1', '2022-05-24 03:33:35', '2022-05-24 03:33:35'),
(175, 'B1706861', 'sangB1706861@student.ctu.edu.vn', '$2a$10$MEbKW60woHMZLra0dC9ud.zhtVnbjZhyWFlAEWGRYLo0t5JiU1c.6', 'Nguyen Quang', 'Sang', 'DI17V7A8', NULL, 'Nam', 'R5', NULL, NULL, 'Đã hoàn thành', '2022-05-24 15:09:58', '2022-05-25 02:13:16'),
(176, 'B1809722', 'thienB1809722@student.ctu.edu.vn', '$2a$10$vN1MPt.LTuyXFFOdIcCEo.TjJWtmLaUnIZFK2kh/u1R5a6aUqBPF6', 'Trần Toàn', 'Thiện', 'DI18V7F1', NULL, 'Nam', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-25 01:56:26', '2022-05-25 01:56:26'),
(177, 'B1901951', 'thinhB1901951@student.ctu.edu.vn', '$2a$10$vN1MPt.LTuyXFFOdIcCEo.Jh6DpNkoV7yfQw2QXXuL6nqNsHi0pxm', 'Lương Phúc', 'Thịnh', 'DI19V7F3', NULL, 'Nam', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-25 01:56:26', '2022-05-25 01:56:26'),
(178, 'B1903705', 'phuongB1903705@student.ctu.edu.vn', '$2a$10$vN1MPt.LTuyXFFOdIcCEo.YM6aurEkzjEkonn7dHjhLKzVguT1EiG', 'Nguyễn', 'Phương', 'DI19V7F3', NULL, 'Nam', 'R5', NULL, NULL, 'Đã hoàn thành', '2022-05-25 01:56:26', '2022-05-25 02:13:16'),
(179, 'B1910403', 'longB1910403@student.ctu.edu.vn', '$2a$10$vN1MPt.LTuyXFFOdIcCEo.9ipM07rArZRbT352W2EN1jR4QIrl2KG', 'Lâm Kim', 'Long', 'DI19V7F3', NULL, 'Nam', 'R5', NULL, NULL, 'Đã hoàn thành', '2022-05-25 01:56:26', '2022-05-25 02:13:16'),
(180, 'B1910482', 'vietB1910482@student.ctu.edu.vn', '$2a$10$vN1MPt.LTuyXFFOdIcCEo.JSHdXfWJ59HIw3gQZKmmMeA3wRuLDDC', 'Trần Hoàng', 'Việt', 'DI19V7F3', NULL, 'Nam', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-25 01:56:26', '2022-05-25 01:56:26'),
(181, 'B1910616', 'baoB1910616@student.ctu.edu.vn', '$2a$10$vN1MPt.LTuyXFFOdIcCEo.AK1Qq65GKWR7mBp/we2kE9DcHy2/naK', 'Lương Hoàng Quốc', 'Bảo', 'DI19V7F1', NULL, 'Nam', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-25 01:56:26', '2022-05-25 01:56:26'),
(182, 'B1910617', 'baoB1910617@student.ctu.edu.vn', '$2a$10$vN1MPt.LTuyXFFOdIcCEo.3kmaUn.b3s9O6Zc5F9I.pFzhXafDfI2', 'Nguyễn Phạm Minh', 'Bảo', 'DI19V7F3', NULL, 'Nam', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-25 01:56:26', '2022-05-25 01:56:26'),
(183, 'B1910622', 'congB1910622@student.ctu.edu.vn', '$2a$10$vN1MPt.LTuyXFFOdIcCEo.G6ohdmgTRWsxfePxAj9rafZgrU9DUKu', 'Dư Thành', 'Công', 'DI19V7F1', NULL, 'Nam', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-25 01:56:26', '2022-05-25 01:56:26'),
(184, 'B1910624', 'cuongB1910624@student.ctu.edu.vn', '$2a$10$vN1MPt.LTuyXFFOdIcCEo.xrw5zfk10bImhx/yvwA5B.w4QxVVtEa', 'Trầm Phúc', 'Cường', 'DI19V7F3', NULL, 'Nam', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-25 01:56:26', '2022-05-25 01:56:26'),
(185, 'B1910631', 'ducB1910631@student.ctu.edu.vn', '$2a$10$vN1MPt.LTuyXFFOdIcCEo.dyPb2bKAI/xREUAWaXi/VmibTxthNO6', 'Phạm Hữu', 'Đức', 'DI19V7F3', NULL, 'Nam', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-25 01:56:26', '2022-05-25 01:56:26'),
(186, 'B1910633', 'haoB1910633@student.ctu.edu.vn', '$2a$10$vN1MPt.LTuyXFFOdIcCEo.PHshOOKfXiQD/G6bDzxk8qWOwyYM1qy', 'Dương Huỳnh', 'Hào', 'DI19V7F1', NULL, 'Nam', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-25 01:56:26', '2022-05-25 01:56:26'),
(187, 'B1910644', 'huyB1910644@student.ctu.edu.vn', '$2a$10$vN1MPt.LTuyXFFOdIcCEo.Od0HAMuVNhu1RIoGGNgzM1QseW0jn4C', 'Lê Triều', 'Huy', 'DI19V7F3', NULL, 'Nam', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-25 01:56:26', '2022-05-25 01:56:26'),
(188, 'B1910647', 'huyB1910647@student.ctu.edu.vn', '$2a$10$vN1MPt.LTuyXFFOdIcCEo.QVKc1O.8F2zgbahxw9oW.DHgDH0Soy.', 'Phạm Thanh Gia', 'Huy', 'DI19V7F3', NULL, 'Nữ', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-25 01:56:26', '2022-05-25 01:56:26'),
(189, 'B1910658', 'khoaB1910658@student.ctu.edu.vn', '$2a$10$vN1MPt.LTuyXFFOdIcCEo.Kbk7yVIfE3DX5nnNCqtyLV5YiggHj72', 'Huỳnh Hữu Bảo', 'Khoa', 'DI19V7F3', NULL, 'Nam', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-25 01:56:26', '2022-05-25 01:56:26'),
(190, 'B1910661', 'kyB1910661@student.ctu.edu.vn', '$2a$10$vN1MPt.LTuyXFFOdIcCEo.fgN6Ha4Og8tdK4rbZWjeJrZItrtgNr2', 'Nguyễn Vỹ', 'Kỳ', 'DI19V7F3', NULL, 'Nam', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-25 01:56:26', '2022-05-25 01:56:26'),
(191, 'B1910665', 'locB1910665@student.ctu.edu.vn', '$2a$10$vN1MPt.LTuyXFFOdIcCEo.v54QjjxOgPffghQNIhBkfGgzwhQZ4ca', 'Trần Phúc', 'Lộc', 'DI19V7F3', NULL, 'Nam', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-25 01:56:26', '2022-05-25 01:56:26'),
(192, 'B1910670', 'nganB1910670@student.ctu.edu.vn', '$2a$10$vN1MPt.LTuyXFFOdIcCEo.sy6CNRvUqhU.JG7EqPQ.wlDSy4Tjif6', 'Hồ Kim', 'Ngân', 'DI19V7F3', NULL, 'Nữ', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-25 01:56:26', '2022-05-25 01:56:26'),
(193, 'B1910673', 'nghiaB1910673@student.ctu.edu.vn', '$2a$10$vN1MPt.LTuyXFFOdIcCEo.7HmmcJ4Qo0t3pJx81pMrhpPKOuBMvna', 'Nguyễn Thành', 'Nghĩa', 'DI19V7F3', NULL, 'Nam', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-25 01:56:26', '2022-05-25 01:56:26'),
(194, 'B1910676', 'nhanB1910676@student.ctu.edu.vn', '$2a$10$vN1MPt.LTuyXFFOdIcCEo.1byiWz7tlHVQFZiLX0nMXOJ6EvKoVi6', 'Dương Huỳnh', 'Nhân', 'DI19V7F3', NULL, 'Nữ', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-25 01:56:26', '2022-05-25 01:56:26'),
(195, 'B1910688', 'phucB1910688@student.ctu.edu.vn', '$2a$10$vN1MPt.LTuyXFFOdIcCEo.RfX.vIZ7aQWk7escktDe.P.cy6AjbMG', 'Phan Bá Đại', 'Phúc', 'DI19V7F1', NULL, 'Nữ', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-25 01:56:26', '2022-05-25 01:56:26'),
(196, 'B1910692', 'suB1910692@student.ctu.edu.vn', '$2a$10$vN1MPt.LTuyXFFOdIcCEo.GiOwB29XclaL/7I9X037N/wAIC/Grwm', 'Nguyễn Công', 'Sự', 'DI19V7F2', NULL, 'Nữ', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-25 01:56:26', '2022-05-25 01:56:26'),
(197, 'B1910695', 'taiB1910695@student.ctu.edu.vn', '$2a$10$vN1MPt.LTuyXFFOdIcCEo.pB0Izcm5ma6IGmG1zyw8errEPZ4jZ4O', 'Trần Phước', 'Tài', 'DI19V7F3', NULL, 'Nữ', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-25 01:56:26', '2022-05-25 01:56:26'),
(198, 'B1910702', 'thanhB1910702@student.ctu.edu.vn', '$2a$10$vN1MPt.LTuyXFFOdIcCEo.4Ft3C0t4HScbcEwUDS5AH.nAkLEv.ha', 'Nguyễn Đình', 'Thanh', 'DI19V7F3', NULL, 'Nữ', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-25 01:56:26', '2022-05-25 01:56:26'),
(199, 'B1910705', 'thanhB1910705@student.ctu.edu.vn', '$2a$10$vN1MPt.LTuyXFFOdIcCEo.fCPZr0pmqA.IQvj3sG05osL06MjTxB2', 'Lê Hoàng', 'Thành', 'DI19V7F1', NULL, 'Nữ', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-25 01:56:26', '2022-05-25 01:56:26'),
(200, 'B1910708', 'thienB1910708@student.ctu.edu.vn', '$2a$10$vN1MPt.LTuyXFFOdIcCEo.p/6.cRK4EMVORPQPJE5njR/P4cctNGq', 'Nguyễn Phan Nhật', 'Thiên', 'DI19V7F3', NULL, 'Nữ', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-25 01:56:26', '2022-05-25 01:56:26'),
(201, 'B1910712', 'thuyB1910712@student.ctu.edu.vn', '$2a$10$vN1MPt.LTuyXFFOdIcCEo.IsVJnposTkV9PY7DAQ3XBwJQxKsqPdG', 'Nguyễn Lê Đoan', 'Thùy', 'DI19V7F3', NULL, 'Nữ', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-25 01:56:26', '2022-05-25 01:56:26'),
(202, 'B1910721', 'trietB1910721@student.ctu.edu.vn', '$2a$10$vN1MPt.LTuyXFFOdIcCEo.w2QyhfWzeUAxtU8M.jjOUmYLNX.iSXC', 'Nguyễn Phong Minh', 'Triết', 'DI19V7F3', NULL, 'Nữ', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-25 01:56:26', '2022-05-25 01:56:26'),
(203, 'B1910729', 'vyB1910729@student.ctu.edu.vn', '$2a$10$vN1MPt.LTuyXFFOdIcCEo.POWvn6CzA8oivgWVYZcB..LEu0ksDR2', 'Nguyễn Thị Hạ', 'Vy', 'DI19V7F3', NULL, 'Nữ', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-25 01:56:26', '2022-05-25 01:56:26'),
(204, 'B1910730', 'vyB1910730@student.ctu.edu.vn', '$2a$10$vN1MPt.LTuyXFFOdIcCEo.7iKbMdBno1na4BF.W65g6j.FW3EPCdu', 'Võ Triệu', 'Vỹ', 'DI19V7F1', NULL, 'Nữ', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-25 01:56:26', '2022-05-25 01:56:26'),
(205, 'B1913024', 'hoangB1913024@student.ctu.edu.vn', '$2a$10$vN1MPt.LTuyXFFOdIcCEo.vYi96ITVbfzIov1r3WFjiK/ZjYVyt4.', 'Nguyễn Lê Huy', 'Hoàng', 'DI19V7F1', NULL, 'Nữ', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-25 01:56:26', '2022-05-25 01:56:26'),
(206, 'B2000001', 'aB2000001@student.ctu.edu.vn', '$2a$10$yS/yZuTJAUyCp3EvCZHqv.gz176TLbpyS4nuJwbayWTNCXn1xOvX2', 'Huynh van', 'A', 'DI17V7A6', NULL, 'Nam', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-26 01:58:30', '2022-05-26 01:58:30'),
(207, 'B2000002', 'bB2000002@student.ctu.edu.vn', '$2a$10$yS/yZuTJAUyCp3EvCZHqv.8fgWwQfW2GidSLxhNfpThOVBh1Na2Ea', 'Huynh van', 'B', 'DI17V7A6', NULL, 'Nữ', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-26 01:58:30', '2022-05-26 01:58:30'),
(208, 'B2000003', 'cB2000003@student.ctu.edu.vn', '$2a$10$yS/yZuTJAUyCp3EvCZHqv.rhDFSu4.MUhhvy2Xc5SUsxVzE7e9n2e', 'Huynh van', 'C', 'DI17V7A6', NULL, 'Nam', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-26 01:58:30', '2022-05-26 01:58:30'),
(209, 'B2000004', 'dB2000004@student.ctu.edu.vn', '$2a$10$yS/yZuTJAUyCp3EvCZHqv.oTdSwSo2yYCYDwRe4.DeCI63PmKTx.K', 'Huynh van', 'D', 'DI17V7A6', NULL, 'Nữ', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-26 01:58:30', '2022-05-26 01:58:30'),
(210, 'B2000005', 'eB2000005@student.ctu.edu.vn', '$2a$10$yS/yZuTJAUyCp3EvCZHqv.oS8.N2JlMIWzA/MSxDpfL4/KgwnUY1i', 'Huynh van', 'E', 'DI17V7A6', NULL, 'Nam', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-26 01:58:30', '2022-05-26 01:58:30'),
(211, 'B2000006', 'fB2000006@student.ctu.edu.vn', '$2a$10$yS/yZuTJAUyCp3EvCZHqv.mKeFRWLQ/xBkSttqxDG/qdNZ2N4ElZm', 'Huynh van', 'F', 'DI17V7A6', NULL, 'Nữ', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-26 01:58:30', '2022-05-26 01:58:30'),
(212, 'B2000007', 'gB2000007@student.ctu.edu.vn', '$2a$10$yS/yZuTJAUyCp3EvCZHqv.IZirIXt0/1ObXjMnZEuqGnzvuC7FClu', 'Huynh van', 'G', 'DI17V7A6', NULL, 'Nam', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-26 01:58:30', '2022-05-26 01:58:30'),
(213, 'B2000008', 'hB2000008@student.ctu.edu.vn', '$2a$10$yS/yZuTJAUyCp3EvCZHqv.O5DPSvRbdbc3ln5L4ds7JCLrPSJPyki', 'Huynh van', 'H', 'DI17V7A6', NULL, 'Nam', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-26 01:58:30', '2022-05-26 01:58:30'),
(214, 'B2000009', 'uB2000009@student.ctu.edu.vn', '$2a$10$yS/yZuTJAUyCp3EvCZHqv.rcVtx8HJZnU3k/Tw.7v/upFhNlRw3qK', 'Huynh van', 'U', 'DI17V7A7', NULL, 'Nữ', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-26 01:58:30', '2022-05-26 01:58:30'),
(215, 'B2000010', 'iB2000010@student.ctu.edu.vn', '$2a$10$yS/yZuTJAUyCp3EvCZHqv.ZmjAq93baFR0qi0RxU3gE7LqE9Jm1Nm', 'Huynh van', 'I', 'DI17V7A7', NULL, 'Nam', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-26 01:58:30', '2022-05-26 01:58:30'),
(216, 'B2000011', 'lB2000011@student.ctu.edu.vn', '$2a$10$yS/yZuTJAUyCp3EvCZHqv.6HjTHH6QP2MuK0W5/2tsfxgD6Ag/4wa', 'Huynh van', 'L', 'DI17V7A7', NULL, 'Nam', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-26 01:58:30', '2022-05-26 01:58:30'),
(217, 'B2000012', 'kB2000012@student.ctu.edu.vn', '$2a$10$yS/yZuTJAUyCp3EvCZHqv.Yf6rXqk257mmzBCdWv2kO0fQoSP5y4a', 'Huynh van', 'K', 'DI17V7A7', NULL, 'Nữ', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-26 01:58:30', '2022-05-26 01:58:30'),
(218, 'B2000013', 'nB2000013@student.ctu.edu.vn', '$2a$10$yS/yZuTJAUyCp3EvCZHqv.Z1.CFgCrcXX81kg6cOnIysN5Lbvlhae', 'Huynh van', 'N', 'DI17V7A7', NULL, 'Nam', 'R5', NULL, NULL, 'Chưa thực hiện', '2022-05-26 01:58:30', '2022-05-26 01:58:30'),
(219, 'B2000014', 'mB2000014@student.ctu.edu.vn', '$2a$10$yS/yZuTJAUyCp3EvCZHqv.37GsZKm/0AMuIa7fFlkrryS9c390Vyi', 'Huynh van', 'M', 'DI17V7A7', NULL, 'Nam', 'R5', NULL, NULL, 'Đã hoàn thành', '2022-05-26 01:58:30', '2022-05-26 02:35:43'),
(220, 'B2000015', 'wB2000015@student.ctu.edu.vn', '$2a$10$yS/yZuTJAUyCp3EvCZHqv.FcG6Y9Rd0JlG5WLxTbumgxCj3PlBHnq', 'Huynh van', 'W', 'DI17V7A7', NULL, 'Nam', 'R5', NULL, NULL, 'Đã hoàn thành', '2022-05-26 01:58:30', '2022-05-26 02:35:43'),
(221, 'B2000016', 'vuB2000016@student.ctu.edu.vn', '$2a$10$yS/yZuTJAUyCp3EvCZHqv./9s8YfIAM4chWnOvVKJp.yEaK6L0Udq', 'Huynh van', 'vu', 'DI17V7A8', NULL, 'Nam', 'R5', NULL, NULL, 'Đã hoàn thành', '2022-05-26 01:58:30', '2022-05-26 02:35:43');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `chamdiemdetais`
--
ALTER TABLE `chamdiemdetais`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `detais`
--
ALTER TABLE `detais`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `hoidongdetais`
--
ALTER TABLE `hoidongdetais`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `hoidongnghiemthus`
--
ALTER TABLE `hoidongnghiemthus`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `modangkydetais`
--
ALTER TABLE `modangkydetais`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `nghiemthudetais`
--
ALTER TABLE `nghiemthudetais`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `positions`
--
ALTER TABLE `positions`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Chỉ mục cho bảng `thongbaos`
--
ALTER TABLE `thongbaos`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `chamdiemdetais`
--
ALTER TABLE `chamdiemdetais`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT cho bảng `detais`
--
ALTER TABLE `detais`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT cho bảng `hoidongdetais`
--
ALTER TABLE `hoidongdetais`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT cho bảng `hoidongnghiemthus`
--
ALTER TABLE `hoidongnghiemthus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT cho bảng `modangkydetais`
--
ALTER TABLE `modangkydetais`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `nghiemthudetais`
--
ALTER TABLE `nghiemthudetais`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT cho bảng `positions`
--
ALTER TABLE `positions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `thongbaos`
--
ALTER TABLE `thongbaos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=222;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

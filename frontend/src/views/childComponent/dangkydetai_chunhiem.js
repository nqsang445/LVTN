import React, { useEffect, useState } from "react";
import axios from 'axios';
import './dangkydetai_chunhiem.scss';
import { useForm, Controller } from 'react-hook-form';
import { toast } from "react-toastify";
import { useStore, actions } from "../../store";
import NumberFormat from 'react-number-format';
// import {} from 'yup'
function DangKyDeTaiChuNhiem() {
    const [state, dispatch] = useStore();
    const { dangKyDeTai, tendetai, roleId, user } = state;
    // console.log(state);
    const { register, handleSubmit, control } = useForm({
        defaultValues: {
            NumberFormat: {}
        }
    });


    let chunhiem = user.account + ', ' + user.firstName + ' ' + user.lastName + ', ' + user.email;
    const [message, setMessage] = useState();
    const [infoUser, setInfoUser] = useState(chunhiem);
    const [infoUser2, setInfoUser2] = useState('Nhiệm vụ: Hướng dẫn nội dung khoa học và hướng dẫn lập dự toán kinh phí đề tài');
    const [kinhphidetai, setKinhphidetai] = useState(15000000);

    // user.account + ',' + user.firstName + user.lastName + ','
    // const handleChangeFile = (e) => {
    //     // const formData = new FormData();
    //     // formData.append("filethuyetminh", e.target.files[0]);
    //     // setformData(formData);
    // }
    const [trangthaimodangkydetai, setTrangthaimodangkydetai] = useState();
    const [DanhSachSinhVien, setDanhSachSinhVien] = useState();
    const [DanhSachGiaoVienHuongDan, setDanhSachGiaoVienHuongDan] = useState();

    const [filteredData, setFilteredData] = useState([]);
    const [msgv, setMsgv] = useState();
    const [infomsgv, setInfoMsgv] = useState();
    // const [filteredData1, setFilteredData1] = useState([]);
    const [filteredData2, setFilteredData2] = useState([]);
    const [filteredData3, setFilteredData3] = useState([]);
    const [filteredData4, setFilteredData4] = useState([]);
    const [filteredData5, setFilteredData5] = useState([]);
    const [mssv2, setMssv2] = useState();
    const [mssv3, setMssv3] = useState();
    const [mssv4, setMssv4] = useState();
    const [mssv5, setMssv5] = useState();

    const [htmssv2, setHtMssv2] = useState();
    const [htmssv3, setHtMssv3] = useState();
    const [htmssv4, setHtMssv4] = useState();
    const [htmssv5, setHtMssv5] = useState();
    const [thoigianketthuc, setThoigianketthuc] = useState();

    useEffect(() => {
        getTrangThaiMoDangKyDeTai();
    }, [])
    useEffect(() => {
        getListDSSV();
    }, [])
    let getTrangThaiMoDangKyDeTai = async () => {
        let trangthaimodangkydetai = await axios.get(`http://localhost:8080/api/get-trangthai-modangkydetai`);
        // console.log(trangthaimodangkydetai.data[0].trangthaidangky);
        setTrangthaimodangkydetai(trangthaimodangkydetai.data[0].trangthaidangky);
    }
    let getListDSSV = async () => {
        let DSSV = await axios.get(`http://localhost:8080/api/get-Danh-Sach-Sinh-Vien`);
        // console.log(trangthaimodangkydetai.data[0].trangthaidangky);
        // setTrangthaimodangkydetai(trangthaimodangkydetai.data[0].trangthaidangky);
        setDanhSachSinhVien(DSSV.data.DSSV);
        setDanhSachGiaoVienHuongDan(DSSV.data.DSGVHD);
        // console.log(DSSV);
    }
    const onSubmit = async (data) => {
        // console.log(data)
        const formData = new FormData();
        formData.append("filethuyetminh", data.filethuyetminh[0]);
        formData.append("tendetai", data.tendetai);
        formData.append("linhvucuutien", data.linhvucuutien);
        formData.append("linhvucnghiencuu", data.linhvucnghiencuu);
        formData.append("loaihinhnghiencuu", data.loaihinhnghiencuu);
        formData.append("thoigianbatdau", data.thoigianbatdau);
        formData.append("thoigianketthuc", data.thoigianketthuc);
        formData.append("thongtinchunhiemdetai", data.thongtinchunhiemdetai);
        formData.append("thongtingiangvienhuongdan", data.thongtingiangvienhuongdan);
        formData.append("nhiemvu", data.nhiemvu);
        formData.append("kinhphidetai", data.kinhphidetai);
        formData.append("masogiaovienhuongdan", data.masogiaovienhuongdan);
        formData.append("thongtinthanhvien1", data.thongtinthanhvien1);
        formData.append("thongtinthanhvien2", data.thongtinthanhvien2);
        formData.append("thongtinthanhvien3", data.thongtinthanhvien3);
        formData.append("thongtinthanhvien4", data.thongtinthanhvien4);
        formData.append("thongtinthanhvien5", data.thongtinthanhvien5);


        const res1 = await axios.post(`http://localhost:8080/api/post-formdata`, formData)
        const res2 = await axios.post(`http://localhost:8080/api/post-formdata`, data)

        toast.success('Đăng ký đề tài thành công!.');

    }
    // console.log('Danh sach sinh vien', DanhSachSinhVien);
    // console.log('Danh sach GVHD', DanhSachGiaoVienHuongDan);
    const handleFilter = (e) => {
        let searchWord = e.target.value;
        let newFilter = DanhSachGiaoVienHuongDan.filter((value) => {
            return value.account.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }

    }
    const handleClikAddMSGV = (item) => {
        // alert(JSON.stringify(item));
        setMsgv(item.account)
        setInfoMsgv(item.firstName + ' ' + item.lastName + ', ' + item.email);
        setFilteredData([]);
    }

    const handleFilter2 = (e) => {
        let searchWord = e.target.value;
        let newFilter = DanhSachSinhVien.filter((value) => {
            return value.account.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData2([]);
        } else {
            setFilteredData2(newFilter);
            // console.log(newFilter)
        }

    }
    const handleClikAddMSSV2 = async (item) => {
        // alert(JSON.stringify(item));
        await setMssv2(item.account);
        await setHtMssv2(item.firstName + " " + item.lastName);
        // console.log(item.account)
        // setInfoMsgv(item.firstName + ' ' + item.lastName + ', ' + item.email);
        setFilteredData2([]);
    }

    const handleFilter3 = (e) => {
        let searchWord = e.target.value;
        let newFilter = DanhSachSinhVien.filter((value) => {
            return value.account.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === "") {
            setFilteredData3([]);
        } else {
            setFilteredData3(newFilter);
        }

    }
    const handleClikAddMSSV3 = async (item) => {
        // alert(JSON.stringify(item));
        await setMssv3(item.account)
        await setHtMssv3(item.firstName + " " + item.lastName);
        // setInfoMsgv(item.firstName + ' ' + item.lastName + ', ' + item.email);
        setFilteredData3([]);
    }

    const handleFilter4 = (e) => {
        let searchWord = e.target.value;
        let newFilter = DanhSachSinhVien.filter((value) => {
            return value.account.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === "") {
            setFilteredData4([]);
        } else {
            setFilteredData4(newFilter);
        }

    }
    const handleClikAddMSSV4 = async (item) => {
        // alert(JSON.stringify(item));
        await setMssv4(item.account)
        await setHtMssv4(item.firstName + " " + item.lastName);
        // setInfoMsgv(item.firstName + ' ' + item.lastName + ', ' + item.email);
        setFilteredData4([]);
    }

    const handleFilter5 = (e) => {
        let searchWord = e.target.value;
        let newFilter = DanhSachSinhVien.filter((value) => {
            return value.account.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === "") {
            setFilteredData5([]);
        } else {
            setFilteredData5(newFilter);
        }

    }
    const handleClikAddMSSV5 = async (item) => {
        // alert(JSON.stringify(item));
        await setMssv5(item.account)
        await setHtMssv5(item.firstName + " " + item.lastName);
        // setInfoMsgv(item.firstName + ' ' + item.lastName + ', ' + item.email);
        setFilteredData5([]);
    }
    // handleClikAddMSSV5

    // handleChangeThoiGianKetThuc
    let handleChangeThoiGianKetThuc = (e) => {
        // console.log(e.target.value);
        if (e.target.value) {
            const inputDate = new Date(e.target.value);

            let date = new Date(inputDate.setMonth(inputDate.getMonth() + 6));

            const endDate = new Intl.DateTimeFormat("fr-CA", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit"
            }).format(date)

            setThoigianketthuc(endDate);
        }
    }
    return (
        <>
            {trangthaimodangkydetai === 'mo' ?

                <div>
                    <h1>Đăng ký đề tài</h1>
                    <hr />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-sm-4">
                                <label htmlFor="tendetai">Tên đề tài:</label>
                                <input
                                    type='text'
                                    className="form-control mt-1 mb-2"
                                    name="tendetai"
                                    id="tendetai"
                                    placeholder="Tên đề tài"
                                    {...register("tendetai", { required: true })}
                                />
                            </div>

                            <div className="col-sm-4">
                                <label htmlFor="kinhphidetai">Kinh phí đề tài: (VNĐ)</label>
                                {/* <input
                                    type='text'
                                    className="form-control mt-1 mb-2"
                                    name="kinhphidetai"
                                    id="kinhphidetai"
                                    placeholder="Nhập kinh phí đề tài: vd 15000000"
                                    {...register("kinhphidetai", { required: true, minLength: 8, pattern: [0 - 9] })}
                                    onChange={(e) => setKinhphidetai(e.target.value)}
                                    value={kinhphidetai}

                                /> */}
                                <Controller
                                    control={control}
                                    render={({ field }) =>
                                        <NumberFormat
                                            thousandSeparator {...field}
                                            // suffix={'(VNĐ)'}
                                            className="form-control mt-1 mb-2"
                                            placeholder=' Mặc định: 15,000,000 (VNĐ)'
                                        // {...register("kinhphidetai", { required: true, minLength: 8 })}

                                        />
                                    }
                                    name="kinhphidetai"
                                // {...register("kinhphidetai", { required: true, minLength: 8 })}

                                // {...register("kinhphidetai", { required: true, minLength: 8, pattern: [0 - 9] })}
                                // onChange={(e) => setKinhphidetai(e.target.value)}
                                // value={kinhphidetai}
                                />
                                {/* <section>
                                    <label>NumberFormat</label>
                                    <Controller
                                        render={({ field }) => (
                                            <NumberFormat thousandSeparator {...field} />
                                        )}
                                        name="numberFormat"
                                        className="input"
                                    // control={control}
                                    />
                                </section> */}
                                {/* <NumberFormat
                                    thousandSeparator={true}
                                    suffix={'(VNĐ)'}
                                    className="form-control mt-1 mb-2"
                                    name="kinhphidetai"
                                    id="kinhphidetai"
                                    placeholder="Nhập kinh phí đề tài: vd 15000000"
                                    {...register("kinhphidetai", { required: true, minLength: 8, pattern: [0 - 9] })}
                                    onChange={(e) => setKinhphidetai(e.target.value)}
                                    value={kinhphidetai}
                                /> */}
                            </div>


                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <label htmlFor="linhvucuutien" className="">Lĩnh vực ưu tiên: </label><br />
                                <select
                                    className="custom-select my-1 mr-sm-2 "
                                    id="linhvucuutien"
                                    name="linhvucuutien"
                                    {...register("linhvucuutien", { required: true })}
                                >
                                    <option selected value='Kỹ thuật công nghệ và công nghệ thông tin-truyền thông'>Kỹ thuật công nghệ và công nghệ thông tin-truyền thông</option>
                                    <option value="Ứng dụng công nghệ cao trong nông nghiệp, thủy sản và môi trường">Ứng dụng công nghệ cao trong nông nghiệp, thủy sản và môi trường</option>
                                    <option value="Quản lý và sử dụng bền vững tài nguyên thiên nhiên">Quản lý và sử dụng bền vững tài nguyên thiên nhiên</option>
                                    <option value="Khoa học Giáo dục, Luật và Xã hội Nhân văn">Khoa học Giáo dục, Luật và Xã hội Nhân văn</option>
                                    <option value="Phát triển kinh tế, thị trường">Phát triển kinh tế, thị trường</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-8">
                                <label htmlFor="linhvucnghiencuu">Lĩnh vực nghiên cứu: </label><br />
                                <select
                                    className="custom-select my-1 mr-sm-2 "
                                    id="linhvucnghiencuu"
                                    name="linhvucnghiencuu"
                                    {...register("linhvucnghiencuu", { required: true })}
                                >
                                    <option selected value='Khoa học Kỹ thuật và Công nghệ'>Khoa học Kỹ thuật và Công nghệ</option>
                                    <option value="Khoa học Tự nhiên">Khoa học Tự nhiên</option>
                                    <option value="Khoa học Y dược">Khoa học Y dược</option>
                                    <option value="Khoa học Nông nghiệp">Khoa học Nông nghiệp</option>
                                    <option value="Khoa học Xã hội">Khoa học Xã hội</option>
                                    <option value="Khoa học Nhân văn">Khoa học Nhân văn</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4">
                                <label htmlFor="loaihinhnghiencuu">Loại hình nghiên cứu: </label><br />
                                <select
                                    className="custom-select my-1 mr-sm-2 "
                                    id="loaihinhnghiencuu"
                                    name="loaihinhnghiencuu"
                                    {...register("loaihinhnghiencuu", { required: true })}
                                >
                                    <option selected value='Ứng dụng'>Ứng dụng</option>
                                    <option value="Cơ bản">Cơ bản</option>
                                    <option value="Triển khai">Triển khai</option>
                                </select>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-sm-4">
                                <label htmlFor="loaihinhnghiencuu">File thuyết minh:</label>
                                <input
                                    type='file'
                                    className="form-control mt-1 mb-2"
                                    name="filethuyetminh"
                                    id="filethuyetminh"
                                    {...register("filethuyetminh", { required: true })}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4">
                                <label htmlFor="thoigianbatdau">Thời gian bắt đầu:</label>
                                <input
                                    type='date'
                                    className="form-control mt-1 mb-2"
                                    name="thoigianbatdau"
                                    id="thoigianbatdau"
                                    {...register("thoigianbatdau", {
                                        required: true,
                                        onBlur: handleChangeThoiGianKetThuc
                                    })}
                                />
                            </div>
                            <div className="col-sm-4">
                                <label htmlFor="thoigianketthuc">Thời gian kết thúc:</label>
                                <input
                                    type='date'
                                    className="form-control mt-1 mb-2"
                                    name="thoigianketthuc"
                                    id="thoigianketthuc"
                                    {...register("thoigianketthuc", { required: true })}
                                    onChange={(e) => setThoigianketthuc(e.target.value)}
                                    value={thoigianketthuc}
                                />
                            </div>

                            {/* <div className="col-sm-4">
                            <label htmlFor="thoigianvadiadiembaovedecuong">Thời gian và địa điểm bảo vệ đề cương:</label>
                        </div> */}
                        </div>
                        <div className="row">
                            {/* <div className="col-sm-4">
                            <label htmlFor="filethuyetminh">File thuyết minh:</label>
                            <input
                                type='file'
                                className="form-control mt-1 mb-2 form-control"
                                name="filethuyetminh"
                                id="filethuyetminh"
                                {...register("filethuyetminh", { required: true })}
                                onChange={handleChangeFile}
                            // value={formData}
                            />
                        </div> */}
                            {/* <div className="col-sm-4">
                            <label htmlFor="phieugiaitrinh">Phiếu giải trình:</label>
                            <input
                                type='file'
                                className="form-control mt-1 mb-2 form-control"
                                name="phieugiaitrinh"
                                id="phieugiaitrinh"
                                {...register("phieugiaitrinh", { required: true })}
                            />
                        </div> */}
                        </div>
                        <div className="row">
                            <div className="col-sm-8">
                                <label htmlFor="thongtinchunhiemdetai">Thông tin chủ nhiệm đề tài:</label>
                                <input
                                    type='text'
                                    className="form-control mt-1 mb-2 form-control inputHeight"
                                    name="thongtinchunhiemdetai"
                                    id="thongtinchunhiemdetai"
                                    {...register("thongtinchunhiemdetai", { required: true })}
                                    onChange={(e) => setInfoUser(e.target.value)}
                                    value={infoUser}
                                // value={user.account + ',' + user.firstName + user.lastName + ','}
                                />
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-sm-4">
                                <label htmlFor="masogiaovienhuongdan ">Mã số cán bộ của Giáo viên hướng dẫn:</label>
                                <input
                                    type='text'
                                    className="form-control mt-1 mb-2 form-control "
                                    name="masogiaovienhuongdan"
                                    id="masogiaovienhuongdan"
                                    placeholder="Mã số cán bộ của Giáo viên hướng dẫn"
                                    {...register("masogiaovienhuongdan", { required: true })}
                                    onChange={(e) => handleFilter(e)}
                                    value={msgv}
                                />

                            </div>

                        </div>
                        {filteredData.length > 0 &&
                            <div className="dataResult">
                                {filteredData && filteredData.length > 0 &&
                                    filteredData.map((item, index) => {
                                        return (<>
                                            <a className="dataItem">
                                                <p onClick={() => handleClikAddMSGV(item)}>{item.account}, {item.firstName} {item.lastName}, {item.email} </p>
                                            </a>

                                        </>);
                                    })
                                }

                            </div>
                        }
                        <div className="row">
                            <div className="col-sm-8">
                                <label htmlFor="thongtingiangvienhuongdan ">Thông tin Giáo viên hướng dẫn:</label>
                                <input
                                    type='text'
                                    className="form-control mt-1 mb-2 form-control inputHeight"
                                    name="thongtingiangvienhuongdan"
                                    id="thongtingiangvienhuongdan"
                                    placeholder="Họ tên, email....."
                                    {...register("thongtingiangvienhuongdan", { required: true })}
                                    // onChange={(e) => setInfoUser2(e.target.value)}
                                    value={infomsgv}
                                />
                                <label></label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-8">
                                <label htmlFor="thongtingiangvienhuongdan ">Nhiệm vụ của giáo viên hướng đẫn:</label>
                                <input
                                    type='text'
                                    className="form-control mt-1 mb-2 form-control inputHeight"
                                    name="nhiemvu"
                                    id="nhiemvu"
                                    {...register("nhiemvu", { required: true })}
                                    onChange={(e) => setInfoUser2(e.target.value)}
                                    value={infoUser2}
                                />
                                {/* <label>( Họ tên, mã số cán bộ, đơn vị công tác, lĩnh vực chuyên môn, và nhiệm vụ )</label> */}
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-sm-4">
                                <label htmlFor="thongtinthanhvien1">Thành viên thứ 1 (Chủ nhiệm đề tài):</label>
                                <input
                                    type='text'
                                    className="form-control mt-1 mb-2 form-control"
                                    name="thongtinthanhvien1"
                                    id="thongtinthanhvien1"
                                    placeholder="MSSV"
                                    {...register("thongtinthanhvien1", { required: true })}
                                    value={user.account}
                                />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-sm-4">
                                <label htmlFor="thongtinthanhvien2">Thành viên thứ 2 :</label>
                                <input
                                    type='text'
                                    className="form-control mt-1 mb-2 form-control"
                                    name="thongtinthanhvien2"
                                    id="thongtinthanhvien2"
                                    placeholder="MSSV"
                                    {...register("thongtinthanhvien2")}
                                    onChange={(e) => handleFilter2(e)}
                                    value={mssv2}
                                />
                            </div>
                            <div className="col-sm-4">
                                <label htmlFor="hovatenthongtinthanhvien2">Họ và tên:</label>
                                <input
                                    type='text'
                                    className="form-control mt-1 mb-2 form-control"
                                    name="hovatenthongtinthanhvien2"
                                    id="hovatenthongtinthanhvien2"
                                    placeholder="Họ và tên"
                                    {...register("hovatenthongtinthanhvien2")}
                                    onChange={(e) => handleFilter2(e)}
                                    value={htmssv2}
                                />
                            </div>
                        </div>
                        {filteredData2.length > 0 &&
                            <div className="dataResult">
                                {filteredData2 && filteredData2.length > 0 &&
                                    filteredData2.map((item, index) => {
                                        return (<>
                                            <a className="dataItem">
                                                <p onClick={() => handleClikAddMSSV2(item)}>{item.account}, {item.firstName} {item.lastName}</p>
                                            </a>

                                        </>);
                                    })
                                }

                            </div>
                        }
                        <div className="row mt-2">
                            <div className="col-sm-4">
                                <label htmlFor="thongtinthanhvien3">Thành viên thứ 3 (nếu có):</label>
                                <input
                                    type='text'
                                    className="form-control mt-1 mb-2 form-control"
                                    name="thongtinthanhvien3"
                                    id="thongtinthanhvien3"
                                    placeholder="MSSV"
                                    {...register("thongtinthanhvien3")}
                                    onChange={(e) => handleFilter3(e)}

                                    value={mssv3}
                                />
                            </div>
                            <div className="col-sm-4">
                                <label htmlFor="hovatenthongtinthanhvien3">Họ và tên:</label>
                                <input
                                    type='text'
                                    className="form-control mt-1 mb-2 form-control"
                                    name="hovatenthongtinthanhvien3"
                                    id="hovatenthongtinthanhvien3"
                                    placeholder="Họ và tên"
                                    {...register("hovatenthongtinthanhvien3")}
                                    onChange={(e) => handleFilter2(e)}
                                    value={htmssv3}
                                />
                            </div>
                        </div>
                        {filteredData3.length > 0 &&
                            <div className="dataResult">
                                {filteredData3 && filteredData3.length > 0 &&
                                    filteredData3.map((item, index) => {
                                        return (<>
                                            <a className="dataItem">
                                                <p onClick={() => handleClikAddMSSV3(item)}>{item.account}, {item.firstName} {item.lastName}</p>
                                            </a>
                                            {/* onClick={() => handleClikAddMSGV(item)} */}
                                        </>);
                                    })
                                }

                            </div>
                        }
                        <div className="row mt-2">
                            <div className="col-sm-4">
                                <label htmlFor="thongtinthanhvien4">Thành viên thứ 4 (nếu có):</label>
                                <input
                                    type='text'
                                    className="form-control mt-1 mb-2 form-control"
                                    name="thongtinthanhvien4"
                                    id="thongtinthanhvien4"
                                    placeholder="MSSV"
                                    {...register("thongtinthanhvien4")}
                                    onChange={(e) => handleFilter4(e)}

                                    value={mssv4}
                                />
                            </div>
                            <div className="col-sm-4">
                                <label htmlFor="hovatenthongtinthanhvien4">Họ và tên:</label>
                                <input
                                    type='text'
                                    className="form-control mt-1 mb-2 form-control"
                                    name="hovatenthongtinthanhvien4"
                                    id="hovatenthongtinthanhvien4"
                                    placeholder="Họ và tên"
                                    {...register("hovatenthongtinthanhvien4")}
                                    onChange={(e) => handleFilter2(e)}
                                    value={htmssv4}
                                />
                            </div>
                        </div>
                        {filteredData4.length > 0 &&
                            <div className="dataResult">
                                {filteredData4 && filteredData4.length > 0 &&
                                    filteredData4.map((item, index) => {
                                        return (<>
                                            <a className="dataItem">
                                                <p onClick={() => handleClikAddMSSV4(item)}>{item.account}, {item.firstName} {item.lastName}</p>
                                            </a>
                                            {/* onClick={() => handleClikAddMSGV(item)} */}
                                        </>);
                                    })
                                }

                            </div>
                        }
                        <div className="row mt-2">
                            <div className="col-sm-4">
                                <label htmlFor="thongtinthanhvien5">Thành viên thứ 5 (nếu có):</label>
                                <input
                                    type='text'
                                    className="form-control mt-1 mb-2 form-control"
                                    name="thongtinthanhvien5"
                                    id="thongtinthanhvien5"
                                    placeholder="MSSV"
                                    {...register("thongtinthanhvien5")}
                                    onChange={(e) => handleFilter5(e)}

                                    value={mssv5}
                                />
                            </div>
                            <div className="col-sm-4">
                                <label htmlFor="hovatenthongtinthanhvien5">Họ và tên:</label>
                                <input
                                    type='text'
                                    className="form-control mt-1 mb-2 form-control"
                                    name="hovatenthongtinthanhvien5"
                                    id="hovatenthongtinthanhvien5"
                                    placeholder="Họ và tên"
                                    {...register("hovatenthongtinthanhvien5")}
                                    onChange={(e) => handleFilter2(e)}
                                    value={htmssv5}
                                />
                            </div>
                        </div>
                        {filteredData5.length > 0 &&
                            <div className="dataResult">
                                {filteredData5 && filteredData5.length > 0 &&
                                    filteredData5.map((item, index) => {
                                        return (<>
                                            <a className="dataItem">
                                                <p onClick={() => handleClikAddMSSV5(item)}>{item.account}, {item.firstName} {item.lastName}</p>
                                            </a>
                                            {/* onClick={() => handleClikAddMSGV(item)} */}
                                        </>);
                                    })
                                }

                            </div>
                        }
                        <div className="row">
                            <div className="col-sm-4">
                                <button className="btn btn-success mt-3 ">Đăng ký đề tài</button>
                            </div>
                        </div>
                    </form>
                </div>
                :
                <div>
                    <h2>Chưa đến thời gian đăng ký đề tài, vui lòng quay lại sau!.</h2>
                </div>
            }
        </>
    );
}
export default DangKyDeTaiChuNhiem;
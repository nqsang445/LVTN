import React, { useEffect, useState } from "react";
import axios from "axios";
import './ModalThemHoiDong.scss'
import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody, CardBody
} from "reactstrap";

import { useForm } from 'react-hook-form';

import { toast } from "react-toastify";

function ModalThemHoiDong({ setOpenModalThemDeTai, openModalThemDeTai, thongtindetai, goilai }) {
    //toggle chi danh cho toggle modal
    const toggle = () => setOpenModalThemDeTai(!openModalThemDeTai);
    const { register, handleSubmit } = useForm({
        // defaultValues: userEditCVHT
    });
    const [dshd, setDshd] = useState();

    const [filteredDataChuTich, setFilteredDataChuTich] = useState([]);
    const [chutich, setChutich] = useState();
    const [filteredDataThuKy, setFilteredDataThuKy] = useState([]);
    const [thuky, setThuky] = useState();
    const [filteredDataThanhVien1, setFilteredDataThanhVien1] = useState([]);
    const [thanhvien1, setThanhvien1] = useState();
    const [filteredDataThanhVien2, setFilteredDataThanhVien2] = useState([]);
    const [thanhvien2, setThanhvien2] = useState();
    const [filteredDataThanhVien3, setFilteredDataThanhVien3] = useState([]);
    const [thanhvien3, setThanhvien3] = useState();
    const [hvt1, setHvt1] = useState();
    const [hvt2, setHvt2] = useState();
    const [hvt3, setHvt3] = useState();
    const [hvt4, setHvt4] = useState();
    const [hvt5, setHvt5] = useState();
    useEffect(() => {
        getlistDanhSachHoiDong();
    }, [])
    let getlistDanhSachHoiDong = async () => {
        const res = await axios.get(`http://localhost:8080/api/get-list-danh-sach-hoi-dong`)
        setDshd(res.data);
    }
    const onSubmit = async (data) => {
        try {
            const res = await axios.post(`http://localhost:8080/api/post-them-hoidong-detai`, { data, thongtindetai })
            goilai();
            setOpenModalThemDeTai(!openModalThemDeTai);
            toast.success('Thêm hội đồng thành công');

        } catch (e) {
            console.log(e)
        }
    }
    // console.log(thongtindetai.id);
    // let deletUserId = async () => {
    //     try {
    //         await doDeleteUserId(deleteSVCL);
    //         setOpenModalDeleteUserSVCLC(!openModalDeleteUserSVCLC);
    //     } catch (e) {
    //         console.log(e)
    //     }

    // }
    let handleFilterChuTich = (e) => {
        let searchWord = e.target.value;
        let newFilter = dshd.filter((value) => {
            return value.account.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredDataChuTich([]);
        } else {
            setFilteredDataChuTich(newFilter);
            // console.log(newFilter)
        }

    }
    let handleClikAddChuTich = (item) => {
        setChutich(item.account);
        setHvt1(item.firstName + " " + item.lastName);
        setFilteredDataChuTich([]);
    }
    // handleFilterThuKy handleClikAddThuKy
    let handleFilterThuKy = (e) => {
        let searchWord = e.target.value;
        let newFilter = dshd.filter((value) => {
            return value.account.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredDataThuKy([]);
        } else {
            setFilteredDataThuKy(newFilter);
            // console.log(newFilter)
        }

    }
    let handleClikAddThuKy = (item) => {
        setThuky(item.account);
        setHvt2(item.firstName + " " + item.lastName);
        setFilteredDataThuKy([]);
    }
    // handleFilterThanhVien1 handleClikAddThanhVien1
    let handleFilterThanhVien1 = (e) => {
        let searchWord = e.target.value;
        let newFilter = dshd.filter((value) => {
            return value.account.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredDataThanhVien1([]);
        } else {
            setFilteredDataThanhVien1(newFilter);
            // console.log(newFilter)
        }

    }
    let handleClikAddThanhVien1 = (item) => {
        setThanhvien1(item.account);
        setHvt3(item.firstName + " " + item.lastName);
        setFilteredDataThanhVien1([]);
    }
    // handleFilterThanhVien2 handleClikAddThanhVien2
    let handleFilterThanhVien2 = (e) => {
        let searchWord = e.target.value;
        let newFilter = dshd.filter((value) => {
            return value.account.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredDataThanhVien2([]);
        } else {
            setFilteredDataThanhVien2(newFilter);
            // console.log(newFilter)
        }

    }
    let handleClikAddThanhVien2 = (item) => {
        setThanhvien2(item.account);
        setHvt4(item.firstName + " " + item.lastName);
        setFilteredDataThanhVien2([]);
    }
    // handleFilterThanhVien3 handleClikAddThanhVien3
    let handleFilterThanhVien3 = (e) => {
        let searchWord = e.target.value;
        let newFilter = dshd.filter((value) => {
            return value.account.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredDataThanhVien3([]);
        } else {
            setFilteredDataThanhVien3(newFilter);
            // console.log(newFilter)
        }

    }
    let handleClikAddThanhVien3 = (item) => {
        setThanhvien3(item.account);
        setHvt5(item.firstName + " " + item.lastName);
        setFilteredDataThanhVien3([]);
    }

    return (
        <Modal isOpen={openModalThemDeTai} toggle={toggle} className='modalchitiet'>
            <ModalHeader
                onClick={toggle} >Thêm hội đồng cho đề tài: {thongtindetai.tendetai}</ModalHeader>
            <ModalBody >
                <div className="row">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-sm-6">
                                <label htmlFor="chutich">Chủ Tịch:</label>
                                <input
                                    type='text'
                                    className="form-control mt-2 mb-2"
                                    name="chutich"
                                    id="chutich"
                                    placeholder="Mã số của giảng viên"
                                    {...register("chutich", { required: true })}
                                    onChange={(e) => handleFilterChuTich(e)}
                                    value={chutich}
                                />
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="hvtchutich">Họ và tên:</label>
                                <input
                                    type='text'
                                    className="form-control mt-2 mb-2"
                                    name="hvtchutich"
                                    id="hvtchutich"
                                    placeholder="Họ và tên"
                                    {...register("hvtchutich", { required: true })}
                                    onChange={(e) => handleFilterChuTich(e)}
                                    value={hvt1}
                                />
                            </div>
                        </div>
                        {filteredDataChuTich.length > 0 &&
                            <div className="dataResult">
                                {filteredDataChuTich && filteredDataChuTich.length > 0 &&
                                    filteredDataChuTich.map((item, index) => {
                                        return (<>
                                            <a className="dataItem">
                                                <p onClick={() => handleClikAddChuTich(item)}>{item.account}, {item.firstName} {item.lastName}</p>
                                            </a>
                                            {/* onClick={() => handleClikAddChuTich(item)} */}
                                        </>);
                                    })
                                }

                            </div>
                        }
                        <div className="row">
                            <div className="col-sm-6">
                                <label htmlFor="thuky">Thư ký:</label>
                                <input
                                    type='text'
                                    className="form-control mt-2 mb-2"
                                    name="thuky"
                                    id="thuky"
                                    placeholder="Mã số của giảng viên"
                                    {...register("thuky", { required: true })}
                                    onChange={(e) => handleFilterThuKy(e)}
                                    value={thuky}
                                />
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="hvtthuky">Họ và tên:</label>
                                <input
                                    type='text'
                                    className="form-control mt-2 mb-2"
                                    name="hvtthuky"
                                    id="hvtthuky"
                                    placeholder="Họ và tên"
                                    {...register("hvtthuky", { required: true })}
                                    onChange={(e) => handleFilterThuKy(e)}
                                    value={hvt2}
                                />
                            </div>
                        </div>

                        {filteredDataThuKy.length > 0 &&
                            <div className="dataResult">
                                {filteredDataThuKy && filteredDataThuKy.length > 0 &&
                                    filteredDataThuKy.map((item, index) => {
                                        return (<>
                                            <a className="dataItem">
                                                <p onClick={() => handleClikAddThuKy(item)}>{item.account}, {item.firstName} {item.lastName}</p>
                                            </a>
                                            {/* onClick={() => handleClikAddChuTich(item)} */}
                                        </>);
                                    })
                                }

                            </div>
                        }
                        <div className="row">
                            <div className="col-sm-6">
                                <label htmlFor="thanhvien1">Thành viên 1:</label>
                                <input
                                    type='text'
                                    className="form-control mt-2 mb-2"
                                    name="thanhvien1"
                                    id="thanhvien1"
                                    placeholder="Mã số của giảng viên"
                                    {...register("thanhvien1", { required: true })}
                                    onChange={(e) => handleFilterThanhVien1(e)}
                                    value={thanhvien1}
                                />
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="hvtthanhvien1">Họ và tên:</label>
                                <input
                                    type='text'
                                    className="form-control mt-2 mb-2"
                                    name="hvtthanhvien1"
                                    id="hvtthanhvien1"
                                    placeholder="Họ và tên"
                                    {...register("thanhvtthanhvien1hvien1", { required: true })}
                                    onChange={(e) => handleFilterThanhVien1(e)}
                                    value={hvt3}
                                />
                            </div>
                        </div>
                        {filteredDataThanhVien1.length > 0 &&
                            <div className="dataResult">
                                {filteredDataThanhVien1 && filteredDataThanhVien1.length > 0 &&
                                    filteredDataThanhVien1.map((item, index) => {
                                        return (<>
                                            <a className="dataItem">
                                                <p onClick={() => handleClikAddThanhVien1(item)}>{item.account}, {item.firstName} {item.lastName}</p>
                                            </a>
                                            {/* onClick={() => handleClikAddChuTich(item)} */}
                                        </>);
                                    })
                                }

                            </div>
                        }
                        <div className="row">
                            <div className="col-sm-6">
                                <label htmlFor="thanhvien2">Thành viên 2:</label>
                                <input
                                    type='text'
                                    className="form-control mt-2 mb-2"
                                    name="thanhvien2"
                                    id="thanhvien2"
                                    placeholder="Mã số của giảng viên"
                                    {...register("thanhvien2", { required: true })}
                                    onChange={(e) => handleFilterThanhVien2(e)}
                                    value={thanhvien2}
                                />
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="hvtthanhvien2">Họ và tên:</label>
                                <input
                                    type='text'
                                    className="form-control mt-2 mb-2"
                                    name="hvtthanhvien2"
                                    id="hvtthanhvien2"
                                    placeholder="Họ và tên"
                                    {...register("hvtthanhvien2", { required: true })}
                                    onChange={(e) => handleFilterThanhVien2(e)}
                                    value={hvt4}
                                />
                            </div>
                        </div>
                        {filteredDataThanhVien2.length > 0 &&
                            <div className="dataResult">
                                {filteredDataThanhVien2 && filteredDataThanhVien2.length > 0 &&
                                    filteredDataThanhVien2.map((item, index) => {
                                        return (<>
                                            <a className="dataItem">
                                                <p onClick={() => handleClikAddThanhVien2(item)}>{item.account}, {item.firstName} {item.lastName}</p>
                                            </a>
                                            {/* onClick={() => handleClikAddChuTich(item)} */}
                                        </>);
                                    })
                                }

                            </div>
                        }
                        <div className="row">
                            <div className="col-sm-6">
                                <label htmlFor="thanhvien3">Thành viên 3:</label>
                                <input
                                    type='text'
                                    className="form-control mt-2 mb-2"
                                    name="thanhvien3"
                                    id="thanhvien3"
                                    placeholder="Mã số của giảng viên"
                                    {...register("thanhvien3", { required: true })}
                                    onChange={(e) => handleFilterThanhVien3(e)}
                                    value={thanhvien3}
                                />
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="hvtthanhvien3">Họ và tên:</label>
                                <input
                                    type='text'
                                    className="form-control mt-2 mb-2"
                                    name="hvtthanhvien3"
                                    id="hvtthanhvien3"
                                    placeholder="Họ và tên"
                                    {...register("hvtthanhvien3", { required: true })}
                                    onChange={(e) => handleFilterThanhVien3(e)}
                                    value={hvt5}
                                />
                            </div>
                        </div>
                        {filteredDataThanhVien3.length > 0 &&
                            <div className="dataResult">
                                {filteredDataThanhVien3 && filteredDataThanhVien3.length > 0 &&
                                    filteredDataThanhVien3.map((item, index) => {
                                        return (<>
                                            <a className="dataItem">
                                                <p onClick={() => handleClikAddThanhVien3(item)}>{item.account}, {item.firstName} {item.lastName}</p>
                                            </a>
                                            {/* onClick={() => handleClikAddChuTich(item)} */}
                                        </>);
                                    })
                                }

                            </div>
                        }
                        <div >
                            <button type="submit" className="btn btn-primary"

                            >Thêm</button>
                        </div>
                    </form>
                </div>
            </ModalBody>
            <ModalFooter>

                <Button color="primary" onClick={toggle} >Cancel</Button>
            </ModalFooter>
        </Modal>
    );
}
export default ModalThemHoiDong;
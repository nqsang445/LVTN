import db from '../models/index';
import bcrypt from 'bcryptjs';
import _ from 'lodash';
const nodemailer = require("nodemailer");
require('dotenv').config();

const { Op } = require("sequelize");
// bien md5 password
const salt = bcrypt.genSaltSync(10);
let handleUserLogin = (account, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let isExist = await checkUserAccount(account);
            // console.log(isExist)
            if (isExist) {
                //user already exist

                let user = await db.User.findOne({
                    where: { account: account },
                    attributes: ['account', 'roleId', 'password', 'firstName', 'lastName', 'id', 'email'],
                    raw: true
                })
                if (user) {
                    let check = await bcrypt.compareSync(password, user.password);
                    if (check) {
                        userData.errCode = 0;
                        userData.errMessage = `Thành công`;
                        delete user.password;
                        userData.user = user;
                    } else {
                        userData.errCode = 3;
                        userData.errMessage = `Mật khẩu không chính xác`;
                    }
                    // userData.errCode = 0;
                    // userData.errMessage = `Thành công!.`;


                    // let userShow = await db.User.findOne({
                    //     where: { account: account },
                    //     attributes: {
                    //         exclude: ['password']
                    //     }

                    // })
                    // userData.errCode = 0;
                    // userData.errMessage = `Ok`;
                    // userData.user = userShow;
                } else {
                    userData.errCode = 2;
                    userData.errMessage = `Không tìm thấy tài khoản`;
                }


            } else {
                //return error
                userData.errCode = 1;
                userData.errMessage = `Tài khoản không tồn tại, vui lòng nhập tài khoản khác!.`;
            }
            resolve(userData)

        } catch (e) {
            reject(e)
        }
    })

}
let checkUserAccount = (userAccount) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { account: userAccount }
            })
            if (user) {
                resolve(true)
            } else {
                resolve(false)
            }
        } catch (e) {
            reject(e)
        }
    })

}
let hashUserPassWord = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword)
        } catch (e) {
            reject(e)
        }
    })
}
let getAllUser = () => {
    return new Promise((resolve, reject) => {
        try {
            let users = db.User.findAll({
                raw: true,
                attributes: {
                    exclude: ['password']
                }
            })
            resolve(users)
        } catch (e) {
            reject(e)
        }
    })
}
let createNewUser = (data) => {
    return new Promise(async (resole, reject) => {
        try {
            let check = await checkUserAccount(data.account);
            if (check === true) {
                resole({
                    errCode: 1,
                    errMessage: 'Tài khoản đã được sử dụng, vui lòng thử tài khoản khác!.'
                });
            } else {
                let hashPasswordFromBcrypt = await hashUserPassWord(data.password);
                await db.User.create({
                    account: data.account,
                    email: data.email,
                    password: hashPasswordFromBcrypt,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    code: '2',
                    address: data.address,
                    gender: data.gender,
                    roleId: data.roleId,
                    phonenumber: data.phonenumber,
                    condition: '1',
                })
                resole({
                    errCode: 0,
                    errMessage: 'Đăng ký thành công'
                });
            }

        } catch (e) {
            reject(e)
        }
    })
}
let getUserId = (userid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userInfo = await db.User.findAll({
                where: { id: userid }
            })
            resolve(userInfo)
        } catch (error) {
            reject(error)
        }
    })
}
let changePasswordUserId = (userId, passOld, passNew) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: userId }
            })
            if (user) {
                let check = await bcrypt.compareSync(passOld, user.password);
                if (check) {
                    let passNewHash = await hashUserPassWord(passNew);

                    user.password = passNewHash;
                    await user.save();
                    resolve({ errCode: 0, message: 'Đổi mật khẩu thành công!.' })
                } else {
                    resolve({ errCode: 1, message: 'Mật khẩu cũ không chính xác!.' })
                }
            } else {
                resolve({ errCode: 2, message: 'Tài khoản không tồn tại!.' })
            }
        } catch (error) {
            reject(error)
        }
    })
}

function nonAccentVietnamese(str) {
    str = str.toLowerCase();
    //     We can also use this instead of from line 11 to line 17
    //     str = str.replace(/\u00E0|\u00E1|\u1EA1|\u1EA3|\u00E3|\u00E2|\u1EA7|\u1EA5|\u1EAD|\u1EA9|\u1EAB|\u0103|\u1EB1|\u1EAF|\u1EB7|\u1EB3|\u1EB5/g, "a");
    //     str = str.replace(/\u00E8|\u00E9|\u1EB9|\u1EBB|\u1EBD|\u00EA|\u1EC1|\u1EBF|\u1EC7|\u1EC3|\u1EC5/g, "e");
    //     str = str.replace(/\u00EC|\u00ED|\u1ECB|\u1EC9|\u0129/g, "i");
    //     str = str.replace(/\u00F2|\u00F3|\u1ECD|\u1ECF|\u00F5|\u00F4|\u1ED3|\u1ED1|\u1ED9|\u1ED5|\u1ED7|\u01A1|\u1EDD|\u1EDB|\u1EE3|\u1EDF|\u1EE1/g, "o");
    //     str = str.replace(/\u00F9|\u00FA|\u1EE5|\u1EE7|\u0169|\u01B0|\u1EEB|\u1EE9|\u1EF1|\u1EED|\u1EEF/g, "u");
    //     str = str.replace(/\u1EF3|\u00FD|\u1EF5|\u1EF7|\u1EF9/g, "y");
    //     str = str.replace(/\u0111/g, "d");
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng 
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
    return str;
}
let createNewUserStudentArray = (data) => {
    return new Promise(async (resolve, reject) => {
        try {

            if (data.length < 0) {
                resolve({
                    errCode: 1,
                    message: 'Không có dữ liệu',
                })
            } else {
                let account = data;
                if (account && account.length > 0) {
                    account = account.map((item) => {
                        item.account = item.mssv;
                        item.email = nonAccentVietnamese(item.lastName) + item.mssv + '@student.ctu.edu.vn';
                        item.password = bcrypt.hashSync(item.mssv, salt);
                        item.firstName = item.firstName;
                        item.lastName = item.lastName;
                        item.code = item.malop;
                        // item.address = item.diachi;
                        item.gender = item.gioitinh;
                        item.roleId = 'R5';
                        // item.phonenumber = item.sdt;
                        // item.khoi = item.khoi;
                        item.condition = 'Chưa thực hiện';
                        return item;
                    })
                }
                let existing = await db.User.findAll({
                    attributes: ['account'],
                    raw: true
                })
                let tocreate = _.differenceWith(account, existing, (a, b) => {
                    return a.account === b.account;
                })

                // console.log(tocreate);
                if (tocreate && tocreate.length > 0) {
                    await db.User.bulkCreate(tocreate);
                    resolve({
                        errCode: 0,
                        message: 'Cập nhật thành công',
                    })
                } else {
                    resolve({
                        errCode: 2,
                        message: 'Cập nhật chưa thành công',
                    })
                }

            }
        } catch (e) {
            reject(e)
        }
    })
}
let getAllUserCVHT = () => {
    return new Promise((resolve, reject) => {
        try {
            let users = db.User.findAll({
                where: { roleId: 'R2' },
                raw: true,
                attributes: {
                    exclude: ['password']
                }
            })
            resolve(users)
        } catch (e) {
            reject(e)
        }
    })
}
let getAllUserChuNhiem = () => {
    return new Promise((resolve, reject) => {
        try {
            let users = db.User.findAll({
                where: { roleId: 'R3' },
                raw: true,
                attributes: {
                    exclude: ['password']
                }
            })
            resolve(users)
        } catch (e) {
            reject(e)
        }
    })
}
let getAllUserHoiDong = () => {
    return new Promise((resolve, reject) => {
        try {
            let users = db.User.findAll({
                where: { roleId: 'R4' },
                raw: true,
                attributes: {
                    exclude: ['password']
                }
            })
            resolve(users)
        } catch (e) {
            reject(e)
        }
    })
}
let getAllUserSVCLC = () => {
    return new Promise((resolve, reject) => {
        try {
            let users = db.User.findAll({
                where: { roleId: 'R5' },
                raw: true,
                attributes: {
                    exclude: ['password']
                }
            })
            resolve(users)
        } catch (e) {
            reject(e)
        }
    })
}
let editUserIdSVCLC = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: data.id }
            })
            if (user) {
                user.email = data.email;
                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.address = data.address;
                user.phonenumber = data.phonenumber;
                user.condition = data.condition;
                user.gender = data.gender;
                user.khoi = data.khoi;

                await user.save();
                // let allUsers = await db.User.findAll();

                resolve({ errCode: 0, message: 'Thanh cong' });
            } else {
                resolve();
            }

        } catch (e) {
            console.log(e)
        }
    })
}
let deleteUserId = async (userId) => {
    return new Promise(async (resole, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: userId }
            })
            if (user) {
                await user.destroy();

            }
            // let allUsers = await db.User.findAll();
            resole({ errCode: 0, message: 'Thanh cong' });
        } catch (e) {
            reject(e);
        }
    })
}
let editUserIdCVHT = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: data.id }
            })
            if (user) {
                user.email = data.email;
                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.address = data.address;
                user.phonenumber = data.phonenumber;
                user.gender = data.gender;

                await user.save();
                // let allUsers = await db.User.findAll();

                resolve({ errCode: 0, message: 'Thanh cong' });
            } else {
                resolve();
            }

        } catch (e) {
            console.log(e)
        }
    })
}
let editUserIdChuNhiem = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: data.id }
            })
            if (user) {
                user.email = data.email;
                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.address = data.address;
                user.phonenumber = data.phonenumber;
                user.gender = data.gender;

                await user.save();
                // let allUsers = await db.User.findAll();

                resolve({ errCode: 0, message: 'Thanh cong' });
            } else {
                resolve();
            }

        } catch (e) {
            console.log(e)
        }
    })
}
let editUserIdHoiDong = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: data.id }
            })
            if (user) {
                user.email = data.email;
                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.address = data.address;
                user.phonenumber = data.phonenumber;
                user.gender = data.gender;

                await user.save();
                // let allUsers = await db.User.findAll();

                resolve({ errCode: 0, message: 'Thanh cong' });
            } else {
                resolve();
            }

        } catch (e) {
            console.log(e)
        }
    })
}
let searchUserSVCLC = (data) => {
    return new Promise(async (resolve, reject) => {
        try {

            let search = data;
            let listSearchUserSVCLC = await db.User.findAll({
                where: { roleId: 'R5' },
                raw: true,
                attributes: {
                    exclude: ['password']
                }
            })
            if (search.mssv === '' && search.code === '' && search.condition === '' && search.khoi === '') {

                resolve(listSearchUserSVCLC);
            }
            // let listSearchUserSVCLC = await db.User.findAll({
            //     where: {
            //         [Op.and]: [{ roleId: 'R5' }, {
            //             [Op.or]: [
            //                 { account: search.mssv },
            //                 { condition: search.condition },
            //                 { code: search.code },
            //                 { khoi: search.khoi }
            //             ]
            //         }],


            //     },
            //     raw: true,
            //     attributes: {
            //         exclude: ['password']
            //     }
            // })
            // // account: search.mssv, condition: search.condition, code: search.code khoi: search.khoi
            // resolve(listSearchUserSVCLC);
            if (search.mssv === '' && search.code === '' && search.condition === '') {
                let listSearchUserSVCLC = await db.User.findAll({
                    where: { roleId: 'R5', khoi: search.khoi },
                    raw: true,
                    attributes: {
                        exclude: ['password']
                    }
                })
                resolve(listSearchUserSVCLC);
            }
            if (search.mssv === '' && search.code === '' && search.khoi === '') {
                let listSearchUserSVCLC = await db.User.findAll({
                    where: { roleId: 'R5', condition: search.condition },
                    raw: true,
                    attributes: {
                        exclude: ['password']
                    }
                })
                resolve(listSearchUserSVCLC);
            }
            if (search.mssv === '' && search.condition === '' && search.khoi === '') {
                let listSearchUserSVCLC = await db.User.findAll({
                    where: { roleId: 'R5', code: search.code },
                    raw: true,
                    attributes: {
                        exclude: ['password']
                    }
                })
                resolve(listSearchUserSVCLC);
            }
            if (search.code === '' && search.condition === '' && search.khoi === '') {
                let listSearchUserSVCLC = await db.User.findAll({
                    where: { roleId: 'R5', account: search.mssv },
                    raw: true,
                    attributes: {
                        exclude: ['password']
                    }
                })
                resolve(listSearchUserSVCLC);
            }
            if (search.mssv === '' && search.code === '') {
                let listSearchUserSVCLC = await db.User.findAll({
                    where: { roleId: 'R5', condition: search.condition, khoi: search.khoi },
                    raw: true,
                    attributes: {
                        exclude: ['password']
                    }
                })
                resolve(listSearchUserSVCLC);
            }
            if (search.mssv === '' && search.condition === '') {
                let listSearchUserSVCLC = await db.User.findAll({
                    where: { roleId: 'R5', code: search.code, khoi: search.khoi },
                    raw: true,
                    attributes: {
                        exclude: ['password']
                    }
                })
                resolve(listSearchUserSVCLC);
            }
            if (search.mssv === '' && search.khoi === '') {
                let listSearchUserSVCLC = await db.User.findAll({
                    where: { roleId: 'R5', code: search.code, condition: search.condition },
                    raw: true,
                    attributes: {
                        exclude: ['password']
                    }
                })
                resolve(listSearchUserSVCLC);
            }
            if (search.code === '' && search.khoi === '') {
                let listSearchUserSVCLC = await db.User.findAll({
                    where: { roleId: 'R5', account: search.mssv, condition: search.condition },
                    raw: true,
                    attributes: {
                        exclude: ['password']
                    }
                })
                resolve(listSearchUserSVCLC);
            }
            if (search.code === '' && search.condition === '') {
                let listSearchUserSVCLC = await db.User.findAll({
                    where: { roleId: 'R5', account: search.mssv, khoi: search.khoi },
                    raw: true,
                    attributes: {
                        exclude: ['password']
                    }
                })
                resolve(listSearchUserSVCLC);
            }
            if (search.khoi === '' && search.condition === '') {
                let listSearchUserSVCLC = await db.User.findAll({
                    where: { roleId: 'R5', account: search.mssv, code: search.code },
                    raw: true,
                    attributes: {
                        exclude: ['password']
                    }
                })
                resolve(listSearchUserSVCLC);
            }
            if (search.mssv === '') {
                let listSearchUserSVCLC = await db.User.findAll({
                    where: { roleId: 'R5', condition: search.condition, code: search.code, khoi: search.khoi },
                    raw: true,
                    attributes: {
                        exclude: ['password']
                    }
                })
                resolve(listSearchUserSVCLC);
            }
            if (search.condition === '') {
                let listSearchUserSVCLC = await db.User.findAll({
                    where: { roleId: 'R5', account: search.mssv, code: search.code, khoi: search.khoi },
                    raw: true,
                    attributes: {
                        exclude: ['password']
                    }
                })
                resolve(listSearchUserSVCLC);
            }
            if (search.code === '') {
                let listSearchUserSVCLC = await db.User.findAll({
                    where: { roleId: 'R5', account: search.mssv, condition: search.condition, khoi: search.khoi },
                    raw: true,
                    attributes: {
                        exclude: ['password']
                    }
                })
                resolve(listSearchUserSVCLC);
            }
            if (search.khoi === '') {
                let listSearchUserSVCLC = await db.User.findAll({
                    where: { roleId: 'R5', account: search.mssv, condition: search.condition, code: search.code },
                    raw: true,
                    attributes: {
                        exclude: ['password']
                    }
                })
                resolve(listSearchUserSVCLC);
            }
            resolve(listSearchUserSVCLC);
            // console.log('danh sach user search', listSearchUserSVCLC);
        } catch (e) {
            console.log(e)
        }
    })
}
let searchUserCVHT = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let search = data;
            let listSearchUserCVHT = await db.User.findAll({
                where: { account: search.account, roleId: 'R2' },
                raw: true,
                attributes: {
                    exclude: ['password']
                }
            })
            resolve(listSearchUserCVHT);
            // console.log('danh sach user search', listSearchUserSVCLC);
        } catch (e) {
            console.log(e)
        }
    })
}
let searchUserChuNhiem = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let search = data;
            let listSearchUserChuNhiem = await db.User.findAll({
                where: { account: search.account, roleId: 'R3' },
                raw: true,
                attributes: {
                    exclude: ['password']
                }
            })
            resolve(listSearchUserChuNhiem);
            // console.log('danh sach user search', listSearchUserSVCLC);
        } catch (e) {
            console.log(e)
        }
    })
}
let searchUserHoiDong = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let search = data;
            let listSearchUserHoiDong = await db.User.findAll({
                where: { account: search.account, roleId: 'R4' },
                raw: true,
                attributes: {
                    exclude: ['password']
                }
            })
            resolve(listSearchUserHoiDong);
            // console.log('danh sach user search', listSearchUserSVCLC);
        } catch (e) {
            console.log(e)
        }
    })
}
let DangKyDeTai = (filesthuyetminh, dataDKDT) => {
    return new Promise(async (resolve, reject) => {
        try {
            // console.log(data)
            // console.log(filesthuyetminh);
            // console.log(dataDKDT);
            if (!filesthuyetminh) {
                resolve({
                    status: false,
                    message: "no file"
                })
            } else {
                const { filethuyetminh } = filesthuyetminh
                filethuyetminh.mv("./uploadFileThuyetMinh/" + filethuyetminh.name)
                await db.DeTai.create({
                    tendetai: dataDKDT.tendetai,
                    linhvucuutien: dataDKDT.linhvucuutien,
                    linhvucnghiencuu: dataDKDT.linhvucnghiencuu,
                    loaihinhnghiencuu: dataDKDT.loaihinhnghiencuu,
                    thoigianbatdau: dataDKDT.thoigianbatdau,
                    thoigianketthuc: dataDKDT.thoigianketthuc,
                    thongtinchunhiemdetai: dataDKDT.thongtinchunhiemdetai,
                    thongtingianvienhuongdan: dataDKDT.thongtingiangvienhuongdan,
                    nhiemvu: dataDKDT.nhiemvu,
                    kinhphidetai: dataDKDT.kinhphidetai,
                    masogiaovienhuongdan: dataDKDT.masogiaovienhuongdan,
                    filethuyetminh: "./uploadFileThuyetMinh/" + filethuyetminh.name,
                    thongtinthanhvien1: dataDKDT.thongtinthanhvien1,
                    thongtinthanhvien2: dataDKDT.thongtinthanhvien2,
                    thongtinthanhvien3: dataDKDT.thongtinthanhvien3,
                    thongtinthanhvien4: dataDKDT.thongtinthanhvien4,
                    thongtinthanhvien5: dataDKDT.thongtinthanhvien5,
                    trangthaidetai: 'dangky',
                })
                resolve({ errCode: 0, message: 'Đăng ký đề tài thành công!.' })

                // await db.ThongBao.create({
                //     tenthongbao: b,
                //     filethongbao: "./uploadFileThuyetMinh/" + picture.name,
                // })

                // resolve({
                //     status: true,
                //     message: "file is upload"
                // })
            }
            // tendetai	
            // masodetai	
            // linhvucuutien	
            // linhvucnghiencuu	
            // thoigianbatdau	
            // thoigianketthuc	
            // thongtinchunhiemdetai	
            // thongtingianvienhuongdan	
            // thongtinthanhvien1	
            // thongtinthanhvien2	
            // thongtinthanhvien3	
            // thongtinthanhvien4	
            // thongtinthanhvien5	
            // filethuyetminh	
            // thoigianvadiadiembaovedecuong	
            // phieugiaitrinh	
            // trangthaidetai

        } catch (e) {
            reject(e)
        }
    })
}
let getDeTaiDangky = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let listDeTaiDangKy = await db.DeTai.findAll({
                where: { trangthaidetai: 'dangky' }
            })
            resolve(listDeTaiDangKy);
        } catch (e) {
            console.log(e)
        }
    })
}
let postMoDangKyDeTai = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let position = 'mo';
            let listdata = await db.MODANGKYDETAI.findOne({ id: 1 });
            if (listdata) {
                listdata.trangthaidangky = position;
                await listdata.save();
                resolve({ errCode: 0, message: 'Mở đăng ký thành công' })
            }
            // resolve(listDeTaiDangKy);
        } catch (e) {
            reject(e)
        }
    })
}
let postDongDangKyDeTai = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let position = 'dong';
            let listdata = await db.MODANGKYDETAI.findOne({ id: 1 });
            if (listdata) {
                listdata.trangthaidangky = position;
                await listdata.save();
                resolve({ errCode: 0, message: 'Đóng đăng ký thành công' })

            }
            // resolve(listDeTaiDangKy);
        } catch (e) {
            reject(e)
        }
    })
}
let getTrangThaiDangKyDeTai = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let trangthai = await db.MODANGKYDETAI.findAll({
                where: { id: 1 }
            })
            resolve(trangthai)
        } catch (error) {
            reject(error)
        }
    })
}
let deleteDeTaiDangKy = (idDeTai) => {
    return new Promise(async (resolve, reject) => {
        try {
            let Detai = await db.DeTai.findOne({
                where: { id: idDeTai }
            })
            if (Detai) {


                let user = await db.User.findOne({
                    where: {
                        account: Detai.thongtinchunhiemdetai
                    }
                })

                let transporter = nodemailer.createTransport({
                    host: 'smtp.gmail.com',
                    port: 465,
                    secure: true,// true for 465, false for other ports
                    auth: {
                        user: process.env.EMAIL_APP, // generated ethereal user
                        pass: process.env.EMAIL_APP_PASSWORD, // generated ethereal password
                    },
                });
                let info = await transporter.sendMail({
                    from: '"Nghiên Cứu Khoa Học 👻" <ln0961142@gmail.com>', // sender address
                    to: `${user?.email}`, // list of receivers
                    subject: "Thông báo xóa đề tài đăng ký NCKH ", // Subject line
                    text: "Vui lòng đăng nhập vào hệ thống quản lý để xem thông tin chi tiết", // plain text body
                    html: `<b>Đề tài: ${Detai.tendetai},chủ nhiệm đề tài: ${Detai.thongtinchunhiemdetai}, vui lòng đăng ký đề tài mới!.</b>`, // html body
                }, (err) => {
                    if (err) {
                        // return reject.json({
                        //     message: 'Lỗi gửi mail',
                        //     err,
                        // });
                        console.log('Gửi mail thất bại');
                    } else {
                        // return reject.json({
                        //     message: 'Gửi mail Thành công',
                        // });
                        console.log('Gửi mail Thành công');
                    }
                });
                await Detai.destroy();
                resolve({ errCode: 0, message: 'Thanh cong' });
            }

        } catch (e) {
            reject(e)
        }
    })
}
let duyetDetaiDangKy = (idDeTai) => {
    return new Promise(async (resolve, reject) => {
        try {
            // console.log(idDeTai);
            // console.log("***************************");
            let Detai = await db.DeTai.findOne({
                where: { id: idDeTai.id }
            })
            let userSv1 = await db.User.findOne({
                where: { account: idDeTai.thongtinthanhvien1 },
            })
            let userSv2 = await db.User.findOne({
                where: { account: idDeTai.thongtinthanhvien2 },
            })
            let userSv3 = await db.User.findOne({
                where: { account: idDeTai.thongtinthanhvien3 },
            })
            let userSv4 = await db.User.findOne({
                where: { account: idDeTai.thongtinthanhvien4 },
            })
            let userSv5 = await db.User.findOne({
                where: { account: idDeTai.thongtinthanhvien5 },
            })

            if (Detai) {
                Detai.trangthaidetai = 'duyet';
                await Detai.save();
            }
            // if (userSv1) {
            //     userSv1.condition = 'Đang thực hiện';
            //     await userSv1.save();
            // }
            // if (userSv2) {
            //     userSv2.condition = 'Đang thực hiện';
            //     await userSv2.save();
            // }
            // if (userSv3) {
            //     userSv3.condition = 'Đang thực hiện';
            //     await userSv3.save();
            // }
            // if (userSv4) {
            //     userSv4.condition = 'Đang thực hiện';
            //     await userSv4.save();
            // }
            // if (userSv5) {
            //     userSv5.condition = 'Đang thực hiện';
            //     await userSv5.save();
            // }


            resolve({ errCode: 0, message: 'Thanh cong' });
        } catch (e) {
            reject(e)
        }
    })
}
let getDeTaiDaDuyet = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let Detai = await db.DeTai.findAll({
                where: { trangthaidetai: 'duyet' }
            })

            resolve(Detai);
        } catch (e) {
            reject(e)
        }
    })
}

let getTrangThaiMoDangKyDeTaiAdmin = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let trangthaimodangky = await db.MODANGKYDETAI.findAll({
                where: { id: 1 },
                raw: true
            })
            resolve(trangthaimodangky);
        } catch (e) {
            reject(e)
        }
    })
}
let getInfoDetaiUserSinhVien = (idSinhVien) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: idSinhVien }

            })
            if (user) {
                const mssv = await user.account;
                let infoDetaiSinhVien = await db.DeTai.findAll({
                    where: {
                        [Op.and]: [
                            { masogiaovienhuongdan: mssv },
                            {
                                [Op.or]: [
                                    { trangthaidetai: 'duyet' },
                                    { trangthaidetai: 'giaodetai' },
                                    { trangthaidetai: 'nhandetai' },
                                    { trangthaidetai: 'xinnghiemthu' },
                                ]
                            }
                        ]
                    }

                })
                resolve(infoDetaiSinhVien);
            }


            // console.log('de tai sv: ', infoDetaiSinhVien);

        } catch (e) {
            reject(e)
        }
    })
}
let getInfoDeTaiUserChuNhiem = (idChuNhiem) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: idChuNhiem }

            })
            if (user) {
                const msgv = await user.account;
                let infoDetaiChuNhiem = await db.DeTai.findAll({
                    where: {
                        [Op.and]: [{ trangthaidetai: 'duyet' },

                        { [Op.or]: [{ thongtinthanhvien1: msgv }, { thongtinthanhvien2: msgv }, { thongtinthanhvien3: msgv }, { thongtinthanhvien4: msgv }, { thongtinthanhvien5: msgv }] }
                        ]
                    }
                    , raw: true
                })
                resolve(infoDetaiChuNhiem);
            }


            // console.log('de tai sv: ', infoDetaiSinhVien);

        } catch (e) {
            reject(e)
        }
    })
}
let UploadFileThuyetMinh = (a, b) => {

    return new Promise(async (resolve, reject) => {
        try {
            if (!a) {
                resolve({
                    status: false,
                    message: "no file"
                })
            } else {
                const { picture } = a
                picture.mv("./uploadFileThuyetMinh/" + picture.name)

                // console.log('b', b);
                let saveLink = await db.DeTai.findOne({
                    where: {
                        id: b
                    }
                })
                // console.log('saveLink', saveLink);
                if (saveLink) {
                    saveLink.filethuyetminh = "./uploadFileThuyetMinh/" + picture.name;
                    // console.log(saveLink.filethuyetminh);
                    await saveLink.save();
                }
                resolve({
                    status: true,
                    message: "file is upload"
                })
            }

        } catch (e) {
            reject(e)
        }
    })
}
let DownLoadFileThuyetMinh = (idDT) => {
    return new Promise(async (resolve, reject) => {
        try {
            let detai = await db.DeTai.findOne({
                where: {
                    id: idDT
                }, raw: true
            })
            // console.log(detai.filethuyetminh)
            resolve(detai.filethuyetminh);
        } catch (e) {
            reject(e)
        }
    })
}
//UpLoadPhieuGiaiTrinh

let UpLoadPhieuGiaiTrinh = (a, b) => {

    return new Promise(async (resolve, reject) => {
        try {
            if (!a) {
                resolve({
                    status: false,
                    message: "no file"
                })
            } else {
                const { picture } = a
                picture.mv("./uploads2/" + picture.name)

                // console.log('b', b);
                let saveLink = await db.DeTai.findOne({
                    where: {
                        id: b
                    }
                })
                // console.log('saveLink', saveLink);
                if (saveLink) {
                    saveLink.phieugiaitrinh = "./uploads2/" + picture.name;
                    // console.log(saveLink.phieugiaitrinh);
                    await saveLink.save();
                }
                resolve({
                    status: true,
                    message: "file is upload"
                })
            }

        } catch (e) {
            reject(e)
        }
    })
}
let DownLoadPhieuGiaiTrinh = (idDT) => {
    return new Promise(async (resolve, reject) => {
        try {
            let detai = await db.DeTai.findOne({
                where: {
                    id: idDT
                }, raw: true
            })
            // console.log(detai.filethuyetminh)
            resolve(detai.phieugiaitrinh);
        } catch (e) {
            reject(e)
        }
    })
}
let themThoiGianVaDiaDiemBaoVeDC = (data) => {
    return new Promise(async (resolve, reject) => {
        try {

            // console.log(data.data.thoigianvadiadiem);
            // console.log(data.thongtindetai.id);

            let detai = await db.DeTai.findOne({
                where: {
                    id: data.thongtindetai.id
                }
            })
            // console.log('saveLink', saveLink);
            if (detai) {
                detai.thoigianvadiadiembaovedecuong = data.data.thoigianvadiadiem;
                // console.log(saveLink.phieugiaitrinh);
                await detai.save();
            }
            resolve({ errCode: 0, message: 'Thành Công' });

        } catch (e) {
            reject(e)
        }
    })
}
let ThemHoiDongDeTai = (data) => {
    return new Promise(async (resolve, reject) => {
        try {

            // console.log('data: ', data.data);
            // console.log('thong tin de tai: ', data.thongtindetai);
            let kiemtrahoidongdacochua = await db.HOIDONGDETAI.findOne({
                where: {
                    id_detai: data.thongtindetai.id
                }
            })
            // let timdetai = await db.DeTai.findOne({
            //     where: {
            //         id: data.thongtindetai.id
            //     },
            //     raw: true
            // })
            let emailChuTichHD = await db.User.findOne({
                where: {
                    account: data.data.chutich
                },
                attributes: ['email']
                ,
                raw: true
            })
            let emailThuKyHD = await db.User.findOne({
                where: {
                    account: data.data.thuky
                },
                attributes: ['email']
                ,
                raw: true
            })
            let emailThanhVien1HD = await db.User.findOne({
                where: {
                    account: data.data.thanhvien1
                },
                attributes: ['email']
                ,
                raw: true
            })
            let emailThanhVien2HD = await db.User.findOne({
                where: {
                    account: data.data.thanhvien2
                },
                attributes: ['email']
                ,
                raw: true
            })
            let emailThanhVien3HD = await db.User.findOne({
                where: {
                    account: data.data.thanhvien3
                },
                attributes: ['email']
                ,
                raw: true
            })
            let emailSV1 = await db.User.findOne({
                where: {
                    account: data.thongtindetai.thongtinthanhvien1
                },
                attributes: ['email']
                ,
                raw: true
            })
            let emailSV2 = await db.User.findOne({
                where: {
                    account: data.thongtindetai.thongtinthanhvien2
                },
                attributes: ['email']
                ,
                raw: true
            })
            let emailSV3 = await db.User.findOne({
                where: {
                    account: data.thongtindetai.thongtinthanhvien3
                },
                attributes: ['email']
                ,
                raw: true
            })
            let emailSV4 = await db.User.findOne({
                where: {
                    account: data.thongtindetai.thongtinthanhvien4
                },
                attributes: ['email']
                ,
                raw: true
            })
            let emailSV5 = await db.User.findOne({
                where: {
                    account: data.thongtindetai.thongtinthanhvien5
                },
                attributes: ['email']
                ,
                raw: true
            })
            // console.log('chu tich: ', emailChuTichHD.email);
            // console.log('thu ky : ', emailThuKyHD.email);
            // console.log('thanh vien 1: ', emailThanhVien1HD.email);
            // console.log('thanh vien 2: ', emailThanhVien2HD.email);
            // console.log('thanh vien 3: ', emailThanhVien3HD.email);
            // console.log('sinh vien 1: ', emailSV1.email);
            // console.log('sinh vien 2: ', emailSV2.email);
            // console.log('sinh vien 3: ', emailSV3.email);
            // console.log('sinh vien 4: ', emailSV4.email);
            // console.log('sinh vien 5: ', emailSV5.email);
            // create reusable transporter object using the default SMTP transport
            // let transporter = nodemailer.createTransport({
            //     service: "gmail",
            //     auth: {
            //         user: "ln0961142@gmail.com", // generated ethereal user
            //         pass: "0345617864sang", // generated ethereal password
            //     },
            // });

            if (kiemtrahoidongdacochua) {
                kiemtrahoidongdacochua.id_detai = data.thongtindetai.id;
                kiemtrahoidongdacochua.chutich = data.data.chutich;
                kiemtrahoidongdacochua.thuky = data.data.thuky;
                kiemtrahoidongdacochua.thanhvien1 = data.data.thanhvien1;
                kiemtrahoidongdacochua.thanhvien2 = data.data.thanhvien2;
                kiemtrahoidongdacochua.thanhvien3 = data.data.thanhvien3;

                await kiemtrahoidongdacochua.save();

                let transporter = nodemailer.createTransport({
                    host: 'smtp.gmail.com',
                    port: 465,
                    secure: true,// true for 465, false for other ports
                    auth: {
                        user: process.env.EMAIL_APP, // generated ethereal user
                        pass: process.env.EMAIL_APP_PASSWORD, // generated ethereal password
                    },
                });
                // send mail with defined transport object
                let info = await transporter.sendMail({
                    from: '"Nghiên Cứu Khoa Học 👻" <ln0961142@gmail.com>', // sender address
                    to: `${emailChuTichHD.email},${emailThuKyHD.email},${emailThanhVien1HD.email},${emailThanhVien2HD.email},${emailThanhVien3HD.email},${emailSV1.email},${emailSV2.email},${emailSV3?.email},${emailSV4?.email},${emailSV5?.email}`, // list of receivers
                    subject: "Thông báo thời gian và địa điểm bảo vệ đề cương NCKH", // Subject line
                    text: "Vui lòng đăng nhập vào hệ thống quản lý để xem thông tin thời gian và địa điểm bảo vệ đề cương đề tài NCKH ", // plain text body
                    html: `<span>
                            Họp hội đồng xét chọn đề tài NCKH:
                            Tên đề tài: ${data.thongtindetai.tendetai},
                            Thời gian và địa điểm: ${data.thongtindetai.thoigianvadiadiembaovedecuong},
                            Vui lòng đăng nhập vào hệ thống quản lý để xem chi tiết về đề tài!.
                           </span>`, // html body
                }, (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Gửi mail Thành công');
                    }
                });

                resolve({ errCode: 0, message: 'Thành Công' })
            } else {
                let hoidong = await db.HOIDONGDETAI.create({
                    id_detai: data.thongtindetai.id,
                    chutich: data.data.chutich,
                    thuky: data.data.thuky,
                    thanhvien1: data.data.thanhvien1,
                    thanhvien2: data.data.thanhvien2,
                    thanhvien3: data.data.thanhvien3,
                })

                let transporter = nodemailer.createTransport({
                    host: 'smtp.gmail.com',
                    port: 465,
                    secure: true,// true for 465, false for other ports
                    auth: {
                        user: process.env.EMAIL_APP, // generated ethereal user
                        pass: process.env.EMAIL_APP_PASSWORD, // generated ethereal password
                    },
                });
                // send mail with defined transport object
                let info = await transporter.sendMail({
                    from: '"Nghiên Cứu Khoa Học 👻" <ln0961142@gmail.com>', // sender address
                    to: `${emailChuTichHD.email},${emailThuKyHD.email},${emailThanhVien1HD.email},${emailThanhVien2HD.email},${emailThanhVien3HD.email},${emailSV1.email},${emailSV2.email},${emailSV3?.email},${emailSV4?.email},${emailSV5?.email}`, // list of receivers
                    subject: "Thông báo thời gian và địa điểm bảo vệ đề cương NCKH", // Subject line
                    text: "Vui lòng đăng nhập vào hệ thống quản lý để xem thông tin thời gian và địa điểm bảo vệ đề cương đề tài NCKH ", // plain text body
                    html: `<span>
                            Họp hội đồng xét chọn đề tài NCKH:
                            Tên đề tài: ${data.thongtindetai.tendetai},
                            Thời gian và địa điểm: ${data.thongtindetai.thoigianvadiadiembaovedecuong},
                            Vui lòng đăng nhập vào hệ thống quản lý để xem chi tiết về đề tài!.
                           </span>`, // html body
                }, (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Gửi mail Thành công');
                    }
                });

                resolve({ errCode: 0, message: 'Thành Công' })
            }

        } catch (e) {
            reject(e)
        }
    })
}
let getInfoHoiDongDeTai = (idDeTai) => {
    return new Promise(async (resolve, reject) => {
        try {

            let hoidong = await db.HOIDONGDETAI.findAll({
                where: {
                    id_detai: idDeTai
                }, raw: true
            })

            if (hoidong) {



                let chutich = await db.User.findOne({
                    where: { account: hoidong[0].chutich },
                    attributes: ['firstName', 'lastName']
                })

                let thuky = await db.User.findOne({
                    where: { account: hoidong[0].thuky },
                    attributes: ['firstName', 'lastName']
                })

                let thanhvien1 = await db.User.findOne({
                    where: { account: hoidong[0].thanhvien1 },
                    attributes: ['firstName', 'lastName']
                })

                let thanhvien2 = await db.User.findOne({
                    where: { account: hoidong[0].thanhvien2 },
                    attributes: ['firstName', 'lastName']
                })

                let thanhvien3 = await db.User.findOne({
                    where: { account: hoidong[0].thanhvien3 },
                    attributes: ['firstName', 'lastName']
                })
                // console.log(chutich);

                resolve({ hoidong, chutich, thuky, thanhvien1, thanhvien2, thanhvien3 });
            }
            // console.log(hoidong) 
            // let hoidong = await db.HOIDONGDETAI.create({
            //     id_detai: data.thongtindetai.id,
            //     chutich: data.data.chutich,
            //     thuky: data.data.thuky,
            //     thanhvien1: data.data.thanhvien1,
            //     thanhvien2: data.data.thanhvien2,
            //     thanhvien3: data.data.thanhvien3,
            // })


        } catch (e) {
            reject(e)
        }
    })
}
let editDeTaiChuNhiemDangThucHien = (infoEditDeTaiChuNhiem) => {
    // console.log(infoEditDeTaiChuNhiem);
    return new Promise(async (resolve, reject) => {
        try {
            let detai = await db.DeTai.findOne({
                where: {
                    id: infoEditDeTaiChuNhiem.id
                }
            })
            if (detai) {
                detai.tendetai = infoEditDeTaiChuNhiem.tendetai;
                detai.masodetai = infoEditDeTaiChuNhiem.masodetai;
                detai.linhvucuutien = infoEditDeTaiChuNhiem.linhvucuutien;
                detai.linhvucnghiencuu = infoEditDeTaiChuNhiem.linhvucnghiencuu;
                detai.loaihinhnghiencuu = infoEditDeTaiChuNhiem.loaihinhnghiencuu;
                detai.thoigianbatdau = infoEditDeTaiChuNhiem.thoigianbatdau;
                detai.thoigianketthuc = infoEditDeTaiChuNhiem.thoigianketthuc;
                detai.thongtinchunhiemdetai = infoEditDeTaiChuNhiem.thongtinchunhiemdetai;
                detai.thongtingianvienhuongdan = infoEditDeTaiChuNhiem.thongtingianvienhuongdan;

                await detai.save();
                resolve({ errCode: 0, message: 'Thành Công' });
            } else {
                resolve({ errCode: 1, message: 'Thất bại' });
            }


        } catch (e) {
            reject(e)
        }
    })
}
let getlistDeTaiHoiDongDuocPhanCong = (idTVHoiDong) => {
    // console.log(idTVHoiDong);
    return new Promise(async (resolve, reject) => {
        try {

            let tvHoiDong = await db.User.findOne({
                where: {
                    id: idTVHoiDong
                }, raw: true
            })
            let AccountHD = tvHoiDong.account;

            let dsHD = await db.HOIDONGDETAI.findAll({
                where: {
                    [Op.or]: [{ chutich: AccountHD }, { thuky: AccountHD }, { thanhvien1: AccountHD }, { thanhvien2: AccountHD }, { thanhvien3: AccountHD }]
                }, raw: true
            })

            if (dsHD) {

                let infoDeTai = await db.DeTai.findAll({
                    where: { trangthaidetai: 'duyet' },
                    raw: true
                })
                // console.log(infoDeTai);

                const data = [];
                const dsHDDeTai = [];
                dsHD.forEach(function myFunction(item) {
                    const temp = infoDeTai.filter((item2) => item2.id == item.id_detai);
                    if (temp[0] != null) {
                        // console.log(temp[0]);
                        data.push(temp[0])
                    }
                    // if (temp !== undefined) {
                    //     data.push(temp[0])
                    // }

                })
                infoDeTai.forEach(function myFunction(item) {
                    const temp = dsHD.filter((item2) => item2.id_detai == item.id);
                    if (temp[0] != null) {
                        // console.log(temp[0]);
                        dsHDDeTai.push(temp[0])
                    }
                    // if (temp !== undefined) {
                    //     data.push(temp[0])
                    // }

                })
                // console.log(dsHDDeTai);

                // dsHD.forEach(function myFunction(item) {
                //     const temp = infoDeTai.filter((item2) => item2.id == item.id_detai)
                //     data.push(temp[0])
                // })
                // // console.log(data);
                resolve({ data, dsHDDeTai })
            }


        } catch (e) {
            reject(e)
        }
    })
}
let getlistHD = (idTVHD) => {
    return new Promise(async (resolve, reject) => {
        try {
            let idTV = await db.User.findOne({
                where: {
                    id: idTVHD
                }, raw: true
            })
            let AccountHD = idTV.account;
            let listHD = await db.HOIDONGDETAI.findOne({
                where: {
                    [Op.or]: [{ chutich: AccountHD }, { thuky: AccountHD }, { thanhvien1: AccountHD }, { thanhvien2: AccountHD }, { thanhvien3: AccountHD }]
                },
                attributes: ['thuky']
            })
            // console.log(listHD);
            // console.log(AccountHD);
            resolve({ listHD, AccountHD });
        } catch (e) {
            reject(e)
        }
    })
}
let NhapKinhPhiThucHienDeTaiChuNhiem = (data) => {
    // console.log(data.data.kinhphidetai);
    // console.log(data.infoDetai.id);
    return new Promise(async (resolve, reject) => {
        try {
            let nhapkinhphiChuNhiem = await db.CHAMDIEMDETAI.findOne({
                where: { id_detai: data.infoDetai.id }
            })
            if (!nhapkinhphiChuNhiem) {
                await db.CHAMDIEMDETAI.create({
                    id_detai: data.infoDetai.id,
                    kinhphidetai: data.data.kinhphidetai
                })
                resolve({ errCode: 0, message: 'Thanh Cong' })
            } else {
                nhapkinhphiChuNhiem.kinhphidetai = data.data.kinhphidetai;
                nhapkinhphiChuNhiem.id_detai = data.infoDetai.id;
                await nhapkinhphiChuNhiem.save();
                resolve({ errCode: 0, message: 'Thanh Cong' })

            }


        } catch (e) {
            reject(e)
        }
    })
}
let getNhanXetCuaHoiDongDeTaiChuNHiem = (idDETAI) => {
    // console.log(idDETAI)
    return new Promise(async (resolve, reject) => {
        try {
            let nhanxet = await db.CHAMDIEMDETAI.findAll({
                where: {
                    id_detai: idDETAI
                }
            })

            resolve(nhanxet)
        } catch (e) {
            reject(e)
        }
    })

}

let NhapKinhPhiThucHienDeTaiThuKy = (data) => {
    // console.log(data.data.kinhphidetai);
    // console.log(data.infoDetai.id);
    return new Promise(async (resolve, reject) => {
        try {
            let nhapkinhphiThuKy = await db.CHAMDIEMDETAI.findOne({
                where: { id_detai: data.idDeTai.id }
            })
            if (!nhapkinhphiThuKy) {
                await db.CHAMDIEMDETAI.create({
                    id_detai: data.idDeTai.id,
                    kinhphidetaidothukynhap: data.data.kinhphidetaidothukynhap
                })
                resolve({ errCode: 0, message: 'Thanh Cong' })
            } else {
                nhapkinhphiThuKy.kinhphidetaidothukynhap = data.data.kinhphidetaidothukynhap;
                nhapkinhphiThuKy.id_detai = data.idDeTai.id;
                await nhapkinhphiThuKy.save();
                resolve({ errCode: 0, message: 'Thanh Cong' })

            }


        } catch (e) {
            reject(e)
        }
    })
}
// UpLoadPhieuDanhGia
let UpLoadPhieuDanhGia = (a, b) => {

    return new Promise(async (resolve, reject) => {
        try {
            // console.log(b);
            if (!a) {
                resolve({
                    status: false,
                    message: "no file"
                })
            } else {
                const { picture } = a
                picture.mv("./uploads3/" + picture.name)

                // console.log('b', b);
                let saveLink = await db.CHAMDIEMDETAI.findOne({
                    where: {
                        id_detai: b
                    }
                })
                // console.log('saveLink', saveLink);
                if (saveLink) {
                    saveLink.filedanhgia = "./uploads3/" + picture.name;
                    // console.log(saveLink.phieugiaitrinh);
                    await saveLink.save();
                    resolve({
                        status: true,
                        message: "file is upload"
                    })
                } else {
                    await db.CHAMDIEMDETAI.create({
                        id_detai: b,
                        filedanhgia: "./uploads3/" + picture.name
                    });
                    resolve({
                        status: true,
                        message: "file is upload"
                    })
                }

            }

        } catch (e) {
            reject(e)
        }
    })
}
// UpLoadBienBanHopHoiDongXetDuyet
let UpLoadBienBanHopHoiDongXetDuyet = (a, b) => {

    return new Promise(async (resolve, reject) => {
        try {
            // console.log(b);
            if (!a) {
                resolve({
                    status: false,
                    message: "no file"
                })
            } else {
                const { picture } = a
                picture.mv("./uploads4/" + picture.name)

                // console.log('b', b);
                let saveLink = await db.CHAMDIEMDETAI.findOne({
                    where: {
                        id_detai: b
                    }
                })
                // console.log('saveLink', saveLink);
                if (saveLink) {
                    saveLink.bienbanhophoidongxetduyet = "./uploads4/" + picture.name;
                    // console.log(saveLink.phieugiaitrinh);
                    await saveLink.save();
                    resolve({
                        status: true,
                        message: "file is upload"
                    })
                } else {
                    await db.CHAMDIEMDETAI.create({
                        id_detai: b,
                        filedanhgia: "./uploads3/" + picture.name
                    });
                    resolve({
                        status: true,
                        message: "file is upload"
                    })
                }
            }

        } catch (e) {
            reject(e)
        }
    })
}
// UpLoadBienBanHopHoiDongDeCuong
let UpLoadBienBanHopHoiDongDeCuong = (a, b) => {

    return new Promise(async (resolve, reject) => {
        try {
            // console.log(b);
            if (!a) {
                resolve({
                    status: false,
                    message: "no file"
                })
            } else {
                const { picture } = a
                picture.mv("./uploads5/" + picture.name)

                // console.log('b', b);
                let saveLink = await db.CHAMDIEMDETAI.findOne({
                    where: {
                        id_detai: b
                    }
                })
                // console.log('saveLink', saveLink);
                if (saveLink) {
                    saveLink.bienbanhophoidongdecuong = "./uploads5/" + picture.name;
                    // console.log(saveLink.phieugiaitrinh);
                    await saveLink.save();
                    resolve({
                        status: true,
                        message: "file is upload"
                    })
                } else {
                    await db.CHAMDIEMDETAI.create({
                        id_detai: b,
                        filedanhgia: "./uploads3/" + picture.name
                    });
                    resolve({
                        status: true,
                        message: "file is upload"
                    })
                }
            }

        } catch (e) {
            reject(e)
        }
    })
}
// DownLoadPhieuDanhGia
let DownLoadPhieuDanhGia = (idDT) => {
    return new Promise(async (resolve, reject) => {
        try {
            let detai = await db.CHAMDIEMDETAI.findOne({
                where: {
                    id_detai: idDT
                }, raw: true
            })
            // console.log(detai.filedanhgia);
            resolve(detai.filedanhgia);
        } catch (e) {
            reject(e)
        }
    })
}
// DownLoadBienBanHopHoiDongXetDuyet
let DownLoadBienBanHopHoiDongXetDuyet = (idDT) => {
    return new Promise(async (resolve, reject) => {
        try {
            let detai = await db.CHAMDIEMDETAI.findOne({
                where: {
                    id_detai: idDT
                }, raw: true
            })
            // console.log(detai.bienbanhophoidongxetduyet)
            resolve(detai.bienbanhophoidongxetduyet);
        } catch (e) {
            reject(e)
        }
    })
}
// DownLoadBienBanHopHoiDongDeCuong
let DownLoadBienBanHopHoiDongDeCuong = (idDT) => {
    return new Promise(async (resolve, reject) => {
        try {
            let detai = await db.CHAMDIEMDETAI.findOne({
                where: {
                    id_detai: idDT
                }, raw: true
            })
            // console.log(detai.bienbanhophoidongdecuong)
            resolve(detai.bienbanhophoidongdecuong);
        } catch (e) {
            reject(e)
        }
    })
}
// XacNhanHoanThanhDeTai
let XacNhanHoanThanhDeTai = (idDT) => {
    return new Promise(async (resolve, reject) => {
        try {

            let detai = await db.DeTai.findOne({
                where: {
                    id: idDT.id
                }
            })
            let userSv1 = await db.User.findOne({
                where: { account: idDT.thongtinthanhvien1 },
                attributes: ['email'],
                raw: true
            })
            // console.log(userSv1.email);
            let userSv2 = await db.User.findOne({
                where: { account: idDT.thongtinthanhvien2 },
            })
            let userSv3 = await db.User.findOne({
                where: { account: idDT.thongtinthanhvien3 },
            })
            let userSv4 = await db.User.findOne({
                where: { account: idDT.thongtinthanhvien4 },
            })
            let userSv5 = await db.User.findOne({
                where: { account: idDT.thongtinthanhvien5 },
            })
            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,// true for 465, false for other ports
                auth: {
                    user: process.env.EMAIL_APP, // generated ethereal user
                    pass: process.env.EMAIL_APP_PASSWORD, // generated ethereal password
                },
            });
            let info = await transporter.sendMail({
                from: '"Nghiên Cứu Khoa Học 👻" <ln0961142@gmail.com>', // sender address
                to: `${userSv1.email},${userSv2?.email},${userSv3?.email},${userSv4?.email},${userSv5?.email}`, // list of receivers
                subject: "Thông báo giao đề tài NCKH", // Subject line
                text: "Vui lòng đăng nhập vào hệ thống quản lý để xem thông tin chi tiết", // plain text body
                html: "<b>Đề tài nghiên cứu khoa học đã được giao, vui lòng vào hệ thống quản lý để xem chi tiết!.</b>", // html body
            }, (err) => {
                if (err) {
                    // return reject.json({
                    //     message: 'Lỗi gửi mail',
                    //     err,
                    // });
                    console.log('Gửi mail thất bại');
                } else {
                    // return reject.json({
                    //     message: 'Gửi mail Thành công',
                    // });
                    console.log('Gửi mail Thành công');
                }
            });
            if (detai) {
                detai.trangthaidetai = 'giaodetai';
                await detai.save();

            }
            // if (userSv2) {
            //     userSv2.condition = 'Đang bàn giao';
            //     await userSv2.save();
            // }
            // if (userSv3) {
            //     userSv3.condition = 'Đang bàn giao';
            //     await userSv3.save();
            // }
            // if (userSv4) {
            //     userSv4.condition = 'Đang bàn giao';
            //     await userSv4.save();
            // }
            // if (userSv5) {
            //     userSv5.condition = 'Đang bàn giao';
            //     await userSv5.save();
            // }

            resolve({ errCode: 0, message: 'Thanh cong' })

        } catch (e) {
            reject(e)
        }
    })
}
// getDeTaiDaHoanThanh
let getDeTaiDaHoanThanh = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let Detai = await db.DeTai.findAll({
                where: { trangthaidetai: 'hoanthanh' }
            })

            resolve(Detai);
        } catch (e) {
            reject(e)
        }
    })
}
// DeTaiSinhVienDaHoanThanh
let DeTaiSinhVienDaHoanThanh = (idUser) => {
    return new Promise(async (resolve, reject) => {
        try {
            let accountUser = await db.User.findOne({
                where: {
                    id: idUser
                }, raw: true
            })
            let DeTaiDaHoanThanh = await db.DeTai.findAll({
                where: {
                    [Op.and]: [{ trangthaidetai: 'hoanthanh' }, {
                        masogiaovienhuongdan: accountUser.account
                    }]

                }, raw: true
            })
            resolve(DeTaiDaHoanThanh);
            // console.log(DeTaiDaHoanThanh);
        } catch (e) {
            reject(e)
        }
    })
}
// DeTaiChuNhiemDaHoanThanh
let DeTaiChuNhiemDaHoanThanh = (idUser) => {
    return new Promise(async (resolve, reject) => {
        try {
            let accountUser = await db.User.findOne({
                where: {
                    id: idUser
                }, raw: true
            })

            let DeTaiDaHoanThanh = await db.DeTai.findAll({
                where: {
                    [Op.and]: [{ trangthaidetai: 'hoanthanh' }, {
                        [Op.or]: [{ thongtinthanhvien1: accountUser.account },
                        { thongtinthanhvien2: accountUser.account },
                        { thongtinthanhvien3: accountUser.account },
                        { thongtinthanhvien4: accountUser.account },
                        { thongtinthanhvien5: accountUser.account }
                        ]
                    }]

                }, raw: true
            })
            resolve(DeTaiDaHoanThanh);
            // console.log(DeTaiDaHoanThanh);
        } catch (e) {
            reject(e)
        }
    })
}
// DSDTDaHoanThanhHome
let DSDTDaHoanThanhHome = (idUser) => {
    return new Promise(async (resolve, reject) => {
        try {
            let DeTaiDaHoanThanh = await db.DeTai.findAll({
                where: {
                    trangthaidetai: 'hoanthanh',
                }
            })
            resolve(DeTaiDaHoanThanh);
            // console.log(DeTaiDaHoanThanh);
        } catch (e) {
            reject(e)
        }
    })
}
// UpLoadThoiGianVaDiaDiemBaoVeDC
let UpLoadThoiGianVaDiaDiemBaoVeDC = (data) => {

    return new Promise(async (resolve, reject) => {
        try {
            // console.log(data.idDeTai.id);
            // console.log(data.data.gio);
            // console.log(data.data.ngay);
            // console.log(data.data.diadiem);
            let detai = await db.DeTai.findOne({
                where: {
                    id: data.idDeTai.id
                }
            })
            // console.log(detai);
            if (detai) {
                detai.thoigianvadiadiembaovedecuong = data.data.gio + ', ' + data.data.ngay + ', ' + data.data.diadiem;

                await detai.save();
                resolve({
                    errCode: 0,
                    message: "Them thoi gian va dia diem bao cao de cuong thanh cong !. "
                })
            } else {
                resolve({
                    errCode: 0,
                    message: "Them thoi gian va dia diem bao cao de cuong that bai !., Loi backend "
                })
            }
            // if (!a) {
            //     resolve({
            //         status: false,
            //         message: "no file"
            //     })
            // } else {
            //     const { picture } = a
            //     picture.mv("./uploads6/" + picture.name)

            //     // console.log('b', b);
            //     let saveLink = await db.DeTai.findOne({
            //         where: {
            //             id: b
            //         }
            //     })
            //     // console.log('saveLink', saveLink);
            //     if (saveLink) {
            //         saveLink.thoigianvadiadiembaovedecuong = "./uploads6/" + picture.name;
            //         // console.log(saveLink.phieugiaitrinh);
            //         await saveLink.save();
            //     }
            //     resolve({
            //         status: true,
            //         message: "file is upload"
            //     })
            // }

        } catch (e) {
            reject(e)
        }
    })
}
// DownLoadThoiGianVaDiaDiemBaoVeDeCuong
let DownLoadThoiGianVaDiaDiemBaoVeDeCuong = (idDT) => {
    return new Promise(async (resolve, reject) => {
        try {
            let detai = await db.DeTai.findOne({
                where: {
                    id: idDT
                }, raw: true
            })
            // console.log(detai.filedanhgia);
            resolve(detai.thoigianvadiadiembaovedecuong);
        } catch (e) {
            reject(e)
        }
    })
}
// UpLoadThongBaoDangKyDeTai
let UpLoadThongBaoDangKyDeTai = (a, b) => {

    return new Promise(async (resolve, reject) => {
        try {
            // console.log(b);
            if (!a) {
                resolve({
                    status: false,
                    message: "no file"
                })
            } else {
                const { picture } = a
                picture.mv("./uploads7/" + picture.name)


                await db.ThongBao.create({
                    tenthongbao: b,
                    filethongbao: "./uploads7/" + picture.name,
                })

                resolve({
                    status: true,
                    message: "file is upload"
                })
            }

        } catch (e) {
            reject(e)
        }
    })
}
// getAllThongbaoDKDT
let getAllThongbaoDKDT = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let listThongbao = await db.ThongBao.findAll({
                order: [
                    ['id', 'DESC']
                ]
            })
            // console.log(listThongbao)
            resolve(listThongbao);
        } catch (e) {
            reject(e)
        }
    })
}
// XoaThongbaoDKDT
let XoaThongbaoDKDT = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let deleteThongbao = await db.ThongBao.findOne({
                where: {
                    id: id
                }
            })
            if (deleteThongbao) {
                await deleteThongbao.destroy();
            }
            // console.log(deleteThongbao)
            resolve({ errCode: 0, message: 'Thanh Cong' });
        } catch (e) {
            reject(e)
        }
    })
}
// DownloadThongbaoDKDT
let DownloadThongbaoDKDT = (idThongbao) => {
    return new Promise(async (resolve, reject) => {
        try {
            let thongbao = await db.ThongBao.findOne({
                where: {
                    id: idThongbao
                }, raw: true
            })
            // console.log(thongbao.filethongbao);
            resolve(thongbao.filethongbao);
        } catch (e) {
            reject(e)
        }
    })
}
// SearchTenThongbaoDKDT
let SearchTenThongbaoDKDT = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const search = data.tenthongbao;
            // console.log(search);

            let searchThongBao = await db.ThongBao.findAll({
                where: {
                    tenthongbao: search
                }
            })
            resolve(searchThongBao);
        } catch (e) {
            reject(e)
        }
    })
}
// SearchDeTaiDaHoanThanh
let SearchDeTaiDaHoanThanh = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            // console.log(data);
            if (data.tendetai === '' && data.masodetai === '' && data.thongtinthanhvien1 === '') {
                let search = await db.DeTai.findAll();
                resolve(search);
            }
            let search = await db.DeTai.findAll({
                where: {
                    [Op.or]: [{ tendetai: data.tendetai }, { masodetai: data.masodetai }, { thongtinthanhvien1: data.thongtinthanhvien1 }]
                }
            })

            resolve(search);
        } catch (e) {
            reject(e)
        }
    })
}
// KhoaQuyenCuaHoiDong
let KhoaQuyenCuaHoiDong = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let khoaquyen = await db.User.findOne({
                where: {
                    id: id
                }
            })
            if (khoaquyen) {
                khoaquyen.condition = '0';
                // console.log(khoaquyen.conditon);
                await khoaquyen.save();
            }
            // console.log(khoaquyen)

            resolve({ errCode: 0, message: 'Thanh Cong' });
        } catch (e) {
            reject(e)
        }
    })
}
// MoKhoaQuyenCuaHoiDong
let MoKhoaQuyenCuaHoiDong = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let mokhoaquyen = await db.User.findOne({
                where: {
                    id: id
                }
            })
            if (mokhoaquyen) {
                mokhoaquyen.condition = '1';
                // console.log(khoaquyen.conditon);
                await mokhoaquyen.save();
            }
            // console.log(mokhoaquyen);


            resolve({ errCode: 0, message: 'Thanh Cong' });
        } catch (e) {
            reject(e)
        }
    })
}
// TrangThaiQuyenCuaHoiDong
let TrangThaiQuyenCuaHoiDong = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let trangthai = await db.User.findOne({
                where: {
                    id: id
                },
                attributes: ['condition']
            })
            // console.log(trangthai);
            resolve(trangthai);
        } catch (e) {
            reject(e)
        }
    })
}
// DeTaiDaBanGiao
let DeTaiDaBanGiao = (data) => {
    return new Promise(async (resolve, reject) => {
        try {

            let accountUser = await db.User.findOne({
                where: {
                    id: data.id
                }, raw: true
            })
            // console.log(accountUser)
            let Detai = await db.DeTai.findAll({
                where: {
                    [Op.and]: [{ trangthaidetai: 'giaodetai' }, {
                        [Op.or]: [{ thongtinthanhvien1: accountUser.account },
                        { thongtinthanhvien2: accountUser.account },
                        { thongtinthanhvien3: accountUser.account },
                        { thongtinthanhvien4: accountUser.account },
                        { thongtinthanhvien5: accountUser.account }
                        ]
                    }]

                }
            })

            resolve(Detai);
        } catch (e) {
            reject(e)
        }
    })
}
// NhapMaSoDeTaiDaBanGiao
let NhapMaSoDeTaiDaBanGiao = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            // console.log(data);
            let detai = await db.DeTai.findOne({
                where: {
                    id: data.infoDetai.id
                }
            })
            if (detai) {
                detai.masodetai = data.data.masodetai;
                await detai.save();
                resolve({ errCode: 0, message: 'Thanh Cong' })
            }
        } catch (e) {
            reject(e)
        }
    })
}
// XacNhanHoanThanhDeTaiDaNghiemThu
let XacNhanHoanThanhDeTaiDaNghiemThu = (idDT) => {
    return new Promise(async (resolve, reject) => {
        try {
            // console.log(idDT)
            let detai = await db.DeTai.findOne({
                where: {
                    id: idDT.id
                }
            })
            let userSv1 = await db.User.findOne({
                where: { account: idDT.thongtinthanhvien1 },
            })
            let userSv2 = await db.User.findOne({
                where: { account: idDT.thongtinthanhvien2 },
            })
            let userSv3 = await db.User.findOne({
                where: { account: idDT.thongtinthanhvien3 },
            })
            let userSv4 = await db.User.findOne({
                where: { account: idDT.thongtinthanhvien4 },
            })
            let userSv5 = await db.User.findOne({
                where: { account: idDT.thongtinthanhvien5 },
            })

            if (detai) {
                detai.trangthaidetai = 'nhandetai';
                await detai.save();

            }
            if (userSv1) {
                userSv1.condition = 'Đang thực hiện';
                await userSv1.save();
            }
            if (userSv2) {
                userSv2.condition = 'Đang thực hiện';
                await userSv2.save();
            }
            if (userSv3) {
                userSv3.condition = 'Đang thực hiện';
                await userSv3.save();
            }
            if (userSv4) {
                userSv4.condition = 'Đang thực hiện';
                await userSv4.save();
            }
            if (userSv5) {
                userSv5.condition = 'Đang thực hiện';
                await userSv5.save();
            }

            resolve({ errCode: 0, message: 'Thanh cong' })

        } catch (e) {
            reject(e)
        }
    })
}
// getListDanhSachSinhVien
let getListDanhSachSinhVien = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let DSSV = await db.User.findAll({
                where: { roleId: 'R5', condition: 'Chưa thực hiện' }
            })
            let DSGVHD = await db.User.findAll({
                where: { roleId: 'R3' }
            })
            // console.log(DSGVHD);
            resolve({ DSSV, DSGVHD })
        } catch (e) {
            reject(e)
        }
    })
}
// HuyDeTaiDaDuyet
let HuyDeTaiDaDuyet = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let detai = await db.DeTai.findOne({
                where: {
                    id: data.id
                }
            })
            // console.log(detai);
            if (detai) {
                detai.trangthaidetai = 'dangky';
                await detai.save();
                resolve({ errCode: 0, message: 'Thanh Cong' });
            }
        } catch (e) {
            reject(e)
        }
    })
}
// getListDeTaiCuaSinhVienCLCDangLam
let getListDeTaiCuaSinhVienCLCDangLam = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let detai = await db.DeTai.findAll({
                where: {
                    [Op.or]: [
                        { thongtinthanhvien1: data.account },
                        { thongtinthanhvien2: data.account },
                        { thongtinthanhvien3: data.account },
                        { thongtinthanhvien4: data.account },
                        { thongtinthanhvien5: data.account },
                    ]
                }
            })
            // console.log(data.email);
            resolve(detai)
        } catch (e) {
            reject(e)
        }
    })
}
// LichSuDeTaiDuocPhanCongHD
let LichSuDeTaiDuocPhanCongHD = (data) => {
    return new Promise(async (resolve, reject) => {
        try {

            // let user = await db.User.findOne({
            //     where: {
            //         id: data.id
            //     }, raw: true
            // })

            let tvHoiDong = await db.User.findOne({
                where: {
                    id: data.id
                }, raw: true
            })
            let AccountHD = tvHoiDong.account;

            let dsHD = await db.HOIDONGDETAI.findAll({
                where: {
                    [Op.or]: [{ chutich: AccountHD }, { thuky: AccountHD }, { thanhvien1: AccountHD }, { thanhvien2: AccountHD }, { thanhvien3: AccountHD }]
                }, raw: true
            })
            if (dsHD) {

                let infoDeTai = await db.DeTai.findAll({

                    raw: true
                })
                // console.log(infoDeTai);

                const data = [];
                const dsHDDeTai = [];
                dsHD.forEach(function myFunction(item) {
                    const temp = infoDeTai.filter((item2) => item2.id == item.id_detai);
                    if (temp[0] != null) {
                        // console.log(temp[0]);
                        data.push(temp[0])
                    }
                    // if (temp !== undefined) {
                    //     data.push(temp[0])
                    // }

                })
                infoDeTai.forEach(function myFunction(item) {
                    const temp = dsHD.filter((item2) => item2.id_detai == item.id);
                    if (temp[0] != null) {
                        // console.log(temp[0]);
                        dsHDDeTai.push(temp[0])
                    }
                    // if (temp !== undefined) {
                    //     data.push(temp[0])
                    // }

                })
                // console.log(data);

                // dsHD.forEach(function myFunction(item) {
                //     const temp = infoDeTai.filter((item2) => item2.id == item.id_detai)
                //     data.push(temp[0])
                // })
                // // console.log(data);
                resolve(data);
            }
            // console.log(detai);
            // resolve(detai)
        } catch (e) {
            reject(e)
        }
    })
}
// DeTaiDaNhanChuNhiem
let DeTaiDaNhanChuNhiem = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: data.id },
                raw: true
            })
            let detai = await db.DeTai.findAll({
                where: {
                    [Op.and]: [
                        { trangthaidetai: 'nhandetai' },
                        {
                            [Op.or]: [
                                { thongtinthanhvien1: user.account },
                                { thongtinthanhvien2: user.account },
                                { thongtinthanhvien3: user.account },
                                { thongtinthanhvien4: user.account },
                                { thongtinthanhvien5: user.account }
                            ]
                        }
                    ]
                }
            })
            // console.log(detai);
            resolve(detai)
        } catch (e) {
            reject(e)
        }
    })
}
// getListDanhSachHoiDong
let getListDanhSachHoiDong = () => {
    return new Promise(async (resolve, reject) => {
        try {
            // let DSSV = await db.User.findAll({
            //     where: { roleId: 'R5', condition: 'Chưa thực hiện' }
            // })
            let DSHD = await db.User.findAll({
                where: { roleId: 'R4' }
            })
            // console.log(DSHD);
            resolve(DSHD);
        } catch (e) {
            reject(e)
        }
    })
}
// DonXinNghiemThuDeTai
let DonXinNghiemThuDeTai = (file, idDeTai) => {
    return new Promise(async (resolve, reject) => {
        try {
            // console.log('file: ', file.dondangkybaocao);
            // console.log('file: ', file.filebaocaonghiemthu:);

            // console.log('id de tai: ', idDeTai);

            let detai = await db.DeTai.findOne({
                where: {
                    id: idDeTai
                }
            })

            if (detai) {
                // console.log(detai.trangthaidetai);
                if (!file) {
                    // console.log('file: ', file.dondangkybaocao);
                    // console.log('file: ', file.filebaocaonghiemthu:);
                    resolve({ errCode: 1, message: 'Không có file!.' })
                } else {
                    const { dondangkybaocao, filebaocaonghiemthu } = file
                    dondangkybaocao.mv("./uploadDonDangKyBaoCao/" + dondangkybaocao.name)
                    filebaocaonghiemthu.mv("./uploadFileBaoCaoNghiemThu/" + filebaocaonghiemthu.name)

                    detai.dondangkybaocao = "./uploadDonDangKyBaoCao/" + dondangkybaocao.name;
                    detai.filebaocaonghiemthu = "./uploadFileBaoCaoNghiemThu/" + filebaocaonghiemthu.name;
                    detai.trangthaidetai = 'xinnghiemthu';

                    await detai.save();
                    // let admin = await db.User.findAll({
                    //     where: { roleId: 'R1' }
                    // })
                    // let fileAdmin = admin.filter(item=>{

                    // })
                    // console.log(admin);
                    // create reusable transporter object using the default SMTP transport
                    let transporter = nodemailer.createTransport({
                        host: 'smtp.gmail.com',
                        port: 465,
                        secure: true,// true for 465, false for other ports
                        auth: {
                            user: process.env.EMAIL_APP, // generated ethereal user
                            pass: process.env.EMAIL_APP_PASSWORD, // generated ethereal password
                        },
                    });
                    let info = await transporter.sendMail({
                        from: '"Nghiên Cứu Khoa Học 👻" <ln0961142@gmail.com>', // sender address
                        to: `nqsang33@gmail.com`, // list of receivers
                        subject: "Thông báo Đăng ký nghiệm thu đề tài ", // Subject line
                        text: "Vui lòng đăng nhập vào hệ thống quản lý để xem thông tin chi tiết", // plain text body
                        html: `<b>Đề tài: ${detai.tendetai},${detai.masodetai},chủ nhiệm đề tài: ${detai.thongtinchunhiemdetai}, đăng ký nghiệm thu đề tài, vui lòng vào hệ thống quản lý để xem chi tiết!.</b>`, // html body
                    }, (err) => {
                        if (err) {
                            // return reject.json({
                            //     message: 'Lỗi gửi mail',
                            //     err,
                            // });
                            console.log('Gửi mail thất bại');
                        } else {
                            // return reject.json({
                            //     message: 'Gửi mail Thành công',
                            // });
                            console.log('Gửi mail Thành công');
                        }
                    });
                    // console.log(filebaocaonghiemthu);
                    resolve({ errCode: 0, message: 'Đăng ký nghiệm thu thành công' });
                }
            }
            // resolve(DSHD);
        } catch (e) {
            reject(e)
        }
    })
}
// getListDanhSachDeTaiDangKyNghiemThu
let getListDanhSachDeTaiDangKyNghiemThu = () => {
    return new Promise(async (resolve, reject) => {
        try {

            let DSDeTaiDangKyNghiemThu = await db.DeTai.findAll({
                where: { trangthaidetai: 'xinnghiemthu' }
            })
            // console.log(DSDeTaiDangKyNghiemThu);
            resolve(DSDeTaiDangKyNghiemThu);
        } catch (e) {
            reject(e)
        }
    })
}
// DownloadDonDangKyBaoCao
let DownloadDonDangKyBaoCao = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let detai = await db.DeTai.findOne({
                where: {
                    id: id
                }, raw: true
            })
            // console.log(detai.dondangkybaocao);
            resolve(detai.dondangkybaocao);
        } catch (e) {
            reject(e)
        }
    })
}
// DownloadFileBaoCaoNghiemThu
let DownloadFileBaoCaoNghiemThu = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let detai = await db.DeTai.findOne({
                where: {
                    id: id
                }, raw: true
            })
            // console.log(detai.filebaocaonghiemthu);
            resolve(detai.filebaocaonghiemthu);
        } catch (e) {
            reject(e)
        }
    })
}
// UpLoadThoiGianVaDiaDiemNghiemThuDeTai
let UpLoadThoiGianVaDiaDiemNghiemThuDeTai = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            // console.log(data.data.gio);
            // console.log(data.data.ngay);
            // console.log(data.data.diadiem);
            // console.log(data.infoDetai.id);

            let detai = await db.DeTai.findOne({
                where: {
                    id: data.infoDetai.id
                }
            })
            // console.log(detai);
            if (detai) {
                // if (file) {
                //     const { thoigianvadiadiemnghiemthudetai } = file
                //     thoigianvadiadiemnghiemthudetai.mv("./uploadThoiGianVaDiaDiemNghiemThuDeTai/" + thoigianvadiadiemnghiemthudetai.name);
                //     detai.thoigianvadiadiemnghiemthudetai = "./uploadThoiGianVaDiaDiemNghiemThuDeTai/" + thoigianvadiadiemnghiemthudetai.name;
                //     await detai.save();
                //     resolve({ errCode: 0, message: 'Upload Thanh Cong' });
                // }
                detai.thoigianvadiadiemnghiemthudetai = data.data.gio + ', ' + data.data.ngay + ', ' + data.data.diadiem;

                await detai.save();
                resolve({ errCode: 0, message: 'Them thoi gian va dia diem nghiem thu de tai thanh cong!.' });

            } else {
                resolve({ errCode: 1, message: 'Them thoi gian va dia diem nghiem thu de tai that bai!., Loi backend' });
            }


        } catch (e) {
            reject(e)
        }
    })
}
// DownLoadThoiGianVaDiaDiemNghiemThuDeTai
let DownLoadThoiGianVaDiaDiemNghiemThuDeTai = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let detai = await db.DeTai.findOne({
                where: {
                    id: id
                }, raw: true
            })
            // console.log(detai);
            // console.log(detai.thoigianvadiadiemnghiemthudetai);
            resolve(detai.thoigianvadiadiemnghiemthudetai);
        } catch (e) {
            reject(e)
        }
    })
}
// ThemHoiDongNghiemThuDeTai
let ThemHoiDongNghiemThuDeTai = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            // console.log( data.infoDetai);  // thong tin de tai nghiem thu
            // console.log( data.data); //  thong tin hoi dong nghiem thu

            let hoidongnghiemthu = await db.HOIDONGNGHIEMTHU.findOne({
                where: {
                    id_detai: data.infoDetai.id
                }
            })
            let timdetai = await db.DeTai.findOne({
                where: {
                    id: data.infoDetai.id
                },
                raw: true
            })
            let emailChuTichHD = await db.User.findOne({
                where: {
                    account: data.data.chutich
                },
                attributes: ['email']
                ,
                raw: true
            })
            let emailThuKyHD = await db.User.findOne({
                where: {
                    account: data.data.thuky
                },
                attributes: ['email']
                ,
                raw: true
            })
            let emailThanhVien1HD = await db.User.findOne({
                where: {
                    account: data.data.thanhvien1
                },
                attributes: ['email']
                ,
                raw: true
            })
            let emailThanhVien2HD = await db.User.findOne({
                where: {
                    account: data.data.thanhvien2
                },
                attributes: ['email']
                ,
                raw: true
            })
            let emailThanhVien3HD = await db.User.findOne({
                where: {
                    account: data.data.thanhvien3
                },
                attributes: ['email']
                ,
                raw: true
            })
            let emailSV1 = await db.User.findOne({
                where: {
                    account: data.infoDetai.thongtinthanhvien1
                },
                attributes: ['email']
                ,
                raw: true
            })
            let emailSV2 = await db.User.findOne({
                where: {
                    account: data.infoDetai.thongtinthanhvien2
                },
                attributes: ['email']
                ,
                raw: true
            })
            let emailSV3 = await db.User.findOne({
                where: {
                    account: data.infoDetai.thongtinthanhvien3
                },
                attributes: ['email']
                ,
                raw: true
            })
            let emailSV4 = await db.User.findOne({
                where: {
                    account: data.infoDetai.thongtinthanhvien4
                },
                attributes: ['email']
                ,
                raw: true
            })
            let emailSV5 = await db.User.findOne({
                where: {
                    account: data.infoDetai.thongtinthanhvien5
                },
                attributes: ['email']
                ,
                raw: true
            })
            if (!hoidongnghiemthu) {
                await db.HOIDONGNGHIEMTHU.create({
                    id_detai: data.infoDetai.id,
                    chutich: data.data.chutich,
                    thuky: data.data.thuky,
                    thanhvien1: data.data.thanhvien1,
                    thanhvien2: data.data.thanhvien2,
                    thanhvien3: data.data.thanhvien3
                });
                let transporter = nodemailer.createTransport({
                    host: 'smtp.gmail.com',
                    port: 465,
                    secure: true,// true for 465, false for other ports
                    auth: {
                        user: process.env.EMAIL_APP, // generated ethereal user
                        pass: process.env.EMAIL_APP_PASSWORD, // generated ethereal password
                    },
                });
                // send mail with defined transport object
                let info = await transporter.sendMail({
                    from: '"Nghiên Cứu Khoa Học 👻" <ln0961142@gmail.com>', // sender address
                    to: `${emailChuTichHD.email},${emailThuKyHD.email},${emailThanhVien1HD.email},${emailThanhVien2HD.email},${emailThanhVien3HD.email},${emailSV1.email},${emailSV2?.email},${emailSV3?.email},${emailSV4?.email},${emailSV5?.email}`, // list of receivers
                    subject: "Thông báo thời gian và địa điểm nghiệm thu đề tài", // Subject line
                    text: "Vui lòng đăng nhập vào hệ thống quản lý để xem thông tin thời gian và địa điểm nghiệm thu đề tài NCKH ", // plain text body
                    html: `<span>
                            Hội đồng nghiệm thu đề tài: 
                            Tên đề tài:  ${timdetai.tendetai},
                            Mã số đề tài:  ${timdetai.masodetai},
                            Thòi gian và địa điểm nghiệm thu: ${timdetai.thoigianvadiadiemnghiemthudetai},
                            Vui lòng đăng nhập vào hệ thống để xem chi tiết!.
                          </span>`, // html body
                }, (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Gửi mail Thành công');
                    }
                });
                resolve({ errCode: 0, message: 'Tạo hội dồng nghiệm thu đề tài thành công' })

            } else {
                hoidongnghiemthu.id_detai = data.infoDetai.id;
                hoidongnghiemthu.chutich = data.data.chutich;
                hoidongnghiemthu.thuky = data.data.thuky;
                hoidongnghiemthu.thanhvien1 = data.data.thanhvien1;
                hoidongnghiemthu.thanhvien2 = data.data.thanhvien2;
                hoidongnghiemthu.thanhvien3 = data.data.thanhvien3;

                await hoidongnghiemthu.save();

                let transporter = nodemailer.createTransport({
                    host: 'smtp.gmail.com',
                    port: 465,
                    secure: true,// true for 465, false for other ports
                    auth: {
                        user: process.env.EMAIL_APP, // generated ethereal user
                        pass: process.env.EMAIL_APP_PASSWORD, // generated ethereal password
                    },
                });
                // send mail with defined transport object
                let info = await transporter.sendMail({
                    from: '"Nghiên Cứu Khoa Học 👻" <ln0961142@gmail.com>', // sender address
                    to: `${emailChuTichHD.email},${emailThuKyHD.email},${emailThanhVien1HD.email},${emailThanhVien2HD.email},${emailThanhVien3HD.email},${emailSV1.email},${emailSV2?.email},${emailSV3?.email},${emailSV4?.email},${emailSV5?.email}`, // list of receivers
                    subject: "Thông báo thời gian và địa điểm nghiệm thu đề tài", // Subject line
                    text: "Vui lòng đăng nhập vào hệ thống quản lý để xem thông tin thời gian và địa điểm nghiệm thu đề tài NCKH ", // plain text body
                    html: `<span>
                                Hội đồng nghiệm thu đề tài: 
                                Tên đề tài:  ${timdetai.tendetai},
                                Mã số đề tài:  ${timdetai.masodetai},
                                Thòi gian và địa điểm nghiệm thu: ${timdetai.thoigianvadiadiemnghiemthudetai},
                                Vui lòng đăng nhập vào hệ thống để xem chi tiết!.
                           </span>`, // html body
                }, (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Gửi mail Thành công');
                    }
                });
                resolve({ errCode: 0, message: 'Cập nhật hội dồng nghiệm thu đề tài thành công' })
            }
        } catch (e) {
            reject(e)
        }
    })
}
// getListHoiDongNghiemThuDeTai
let getListHoiDongNghiemThuDeTai = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let listHoidongnghiemthu = await db.HOIDONGNGHIEMTHU.findAll({
                where: {
                    id_detai: id
                }, raw: true
            });

            let chutich = await db.User.findOne({
                where: { account: listHoidongnghiemthu[0].chutich },
                attributes: ['firstName', 'lastName']
            })

            let thuky = await db.User.findOne({
                where: { account: listHoidongnghiemthu[0].thuky },
                attributes: ['firstName', 'lastName']
            })

            let thanhvien1 = await db.User.findOne({
                where: { account: listHoidongnghiemthu[0].thanhvien1 },
                attributes: ['firstName', 'lastName']
            })

            let thanhvien2 = await db.User.findOne({
                where: { account: listHoidongnghiemthu[0].thanhvien2 },
                attributes: ['firstName', 'lastName']
            })

            let thanhvien3 = await db.User.findOne({
                where: { account: listHoidongnghiemthu[0].thanhvien3 },
                attributes: ['firstName', 'lastName']
            })
            // console.log(chutich);
            resolve({ listHoidongnghiemthu, chutich, thuky, thanhvien1, thanhvien2, thanhvien3 });


        } catch (e) {
            reject(e)
        }
    })
}
// getListDeTaiDangNghiemThuChuNhiem
let getListDeTaiDangNghiemThuChuNhiem = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let chunhiem = await db.User.findOne({
                where: {
                    id: data.id
                },
                raw: true
            })
            // console.log(chunhiem.account);
            let detai = await db.DeTai.findAll({
                where: {
                    [Op.and]: [
                        { trangthaidetai: 'xinnghiemthu' },
                        {
                            [Op.or]: [
                                { thongtinthanhvien1: chunhiem.account },
                                { thongtinthanhvien2: chunhiem.account },
                                { thongtinthanhvien3: chunhiem.account },
                                { thongtinthanhvien4: chunhiem.account },
                                { thongtinthanhvien5: chunhiem.account },
                            ]
                        }
                    ]
                }
            })
            resolve(detai);

        } catch (e) {
            reject(e)
        }
    })
}
// UpLoadPhieuGiaiTrinhSauNghiemThu
let UpLoadPhieuGiaiTrinhSauNghiemThu = (file, id) => {
    return new Promise(async (resolve, reject) => {
        try {
            // console.log(file);
            // console.log(id);
            let NghiemThuDeTai = await db.NghiemThuDeTai.findOne({
                where: {
                    id_detai: id
                }
            })
            // // console.log(NghiemThuDeTai);
            if (NghiemThuDeTai) {
                if (file) {
                    const { phieugiaitrinh } = file
                    phieugiaitrinh.mv("./uploadPhieuGiaiTrinhSauNghiemThu/" + phieugiaitrinh.name);
                    NghiemThuDeTai.phieugiaitrinh = "./uploadPhieuGiaiTrinhSauNghiemThu/" + phieugiaitrinh.name;
                    await NghiemThuDeTai.save();
                    resolve({ errCode: 0, message: 'Upload Thanh Cong' });
                } else {
                    resolve({ errCode: 1, message: 'Khong co file' });
                }

            } else {
                if (file) {
                    const { phieugiaitrinh } = file
                    phieugiaitrinh.mv("./uploadPhieuGiaiTrinhSauNghiemThu/" + phieugiaitrinh.name);
                    await db.NghiemThuDeTai.create({
                        id_detai: id,
                        phieugiaitrinh: "./uploadPhieuGiaiTrinhSauNghiemThu/" + phieugiaitrinh.name,
                    })
                } else {
                    resolve({ errCode: 1, message: 'Khong co file' });
                }
            }


        } catch (e) {
            reject(e)
        }
    })
}
// UpLoadFileBaoCaoSauChinhSua
let UpLoadFileBaoCaoSauChinhSua = (file, id) => {
    return new Promise(async (resolve, reject) => {
        try {

            let NghiemThuDeTai = await db.NghiemThuDeTai.findOne({
                where: {
                    id_detai: id
                }
            })
            // // console.log(NghiemThuDeTai);
            if (NghiemThuDeTai) {
                if (file) {
                    const { filebaocaosauchinhsua } = file
                    filebaocaosauchinhsua.mv("./uploadFileBaoCaoSauChinhSua/" + filebaocaosauchinhsua.name);
                    NghiemThuDeTai.filebaocaosauchinhsua = "./uploadFileBaoCaoSauChinhSua/" + filebaocaosauchinhsua.name;
                    await NghiemThuDeTai.save();
                    resolve({ errCode: 0, message: 'Upload Thanh Cong' });
                } else {
                    resolve({ errCode: 1, message: 'Khong co file' });
                }

            } else {
                if (file) {
                    const { filebaocaosauchinhsua } = file
                    filebaocaosauchinhsua.mv("./uploadFileBaoCaoSauChinhSua/" + filebaocaosauchinhsua.name);
                    await db.NghiemThuDeTai.create({
                        id_detai: id,
                        filebaocaosauchinhsua: "./uploadFileBaoCaoSauChinhSua/" + filebaocaosauchinhsua.name,
                    })
                } else {
                    resolve({ errCode: 1, message: 'Khong co file' });
                }
            }


        } catch (e) {
            reject(e)
        }
    })
}
// getListDeTaiDuocPhanCongNghiemThu
let getListDeTaiDuocPhanCongNghiemThu = (idTVHoiDong) => {
    // console.log(idTVHoiDong);
    return new Promise(async (resolve, reject) => {
        try {
            // console.log(idTVHoiDong);
            let tvHoiDong = await db.User.findOne({
                where: {
                    id: idTVHoiDong
                }, raw: true
            })
            let AccountHD = tvHoiDong.account;

            let dsHD = await db.HOIDONGNGHIEMTHU.findAll({
                where: {
                    [Op.or]: [{ chutich: AccountHD }, { thuky: AccountHD }, { thanhvien1: AccountHD }, { thanhvien2: AccountHD }, { thanhvien3: AccountHD }]
                }, raw: true
            })

            if (dsHD) {

                let infoDeTai = await db.DeTai.findAll({
                    where: { trangthaidetai: 'xinnghiemthu' },
                    raw: true
                })
                // console.log(infoDeTai);

                const data = [];
                const dsHDDeTai = [];
                dsHD.forEach(function myFunction(item) {
                    const temp = infoDeTai.filter((item2) => item2.id == item.id_detai);
                    if (temp[0] != null) {
                        // console.log(temp[0]);
                        data.push(temp[0])
                    }
                    // if (temp !== undefined) {
                    //     data.push(temp[0])
                    // }

                })
                infoDeTai.forEach(function myFunction(item) {
                    const temp = dsHD.filter((item2) => item2.id_detai == item.id);
                    if (temp[0] != null) {
                        // console.log(temp[0]);
                        dsHDDeTai.push(temp[0])
                    }
                    // if (temp !== undefined) {
                    //     data.push(temp[0])
                    // }

                })
                // console.log(dsHDDeTai);

                // dsHD.forEach(function myFunction(item) {
                //     const temp = infoDeTai.filter((item2) => item2.id == item.id_detai)
                //     data.push(temp[0])
                // })
                // // console.log(data);
                resolve({ data, dsHDDeTai })
            }


        } catch (e) {
            reject(e)
        }
    })
}
// UpLoadPhieuDanhGiaSauNghiemThu
let UpLoadPhieuDanhGiaSauNghiemThu = (file, id) => {
    return new Promise(async (resolve, reject) => {
        try {

            let NghiemThuDeTai = await db.NghiemThuDeTai.findOne({
                where: {
                    id_detai: id
                }
            })
            // // console.log(NghiemThuDeTai);
            if (NghiemThuDeTai) {
                if (file) {
                    const { phieudanhgia } = file
                    phieudanhgia.mv("./uploadPhieuDanhGiaSauNghiemThu/" + phieudanhgia.name);
                    NghiemThuDeTai.phieudanhgia = "./uploadPhieuDanhGiaSauNghiemThu/" + phieudanhgia.name;
                    await NghiemThuDeTai.save();
                    resolve({ errCode: 0, message: 'Upload Thanh Cong' });
                } else {
                    resolve({ errCode: 1, message: 'Khong co file' });
                }

            } else {
                if (file) {
                    const { phieudanhgia } = file
                    phieudanhgia.mv("./uploadPhieuDanhGiaSauNghiemThu/" + phieudanhgia.name);
                    await db.NghiemThuDeTai.create({
                        id_detai: id,
                        phieudanhgia: "./uploadPhieuDanhGiaSauNghiemThu/" + phieudanhgia.name,
                    })
                } else {
                    resolve({ errCode: 1, message: 'Khong co file' });
                }
            }


        } catch (e) {
            reject(e)
        }
    })
}
// UpLoadPhieuNhanXetDanhGiaSauNghiemThu
let UpLoadPhieuNhanXetDanhGiaSauNghiemThu = (file, id) => {
    return new Promise(async (resolve, reject) => {
        try {

            let NghiemThuDeTai = await db.NghiemThuDeTai.findOne({
                where: {
                    id_detai: id
                }
            })
            // // console.log(NghiemThuDeTai);
            if (NghiemThuDeTai) {
                if (file) {
                    const { phieunhanxetdanhgia } = file
                    phieunhanxetdanhgia.mv("./uploadPhieuNhanXetDanhGiaSauNghiemThu/" + phieunhanxetdanhgia.name);
                    NghiemThuDeTai.phieunhanxetdanhgia = "./uploadPhieuNhanXetDanhGiaSauNghiemThu/" + phieunhanxetdanhgia.name;
                    await NghiemThuDeTai.save();
                    resolve({ errCode: 0, message: 'Upload Thanh Cong' });
                } else {
                    resolve({ errCode: 1, message: 'Khong co file' });
                }

            } else {
                if (file) {
                    const { phieunhanxetdanhgia } = file
                    phieunhanxetdanhgia.mv("./uploadPhieuNhanXetDanhGiaSauNghiemThu/" + phieunhanxetdanhgia.name);
                    await db.NghiemThuDeTai.create({
                        id_detai: id,
                        phieunhanxetdanhgia: "./uploadPhieuNhanXetDanhGiaSauNghiemThu/" + phieunhanxetdanhgia.name,
                    })
                } else {
                    resolve({ errCode: 1, message: 'Khong co file' });
                }
            }


        } catch (e) {
            reject(e)
        }
    })
}
// UpLoadBienBanHopHoiDongNghiemThuDeTai
let UpLoadBienBanHopHoiDongNghiemThuDeTai = (file, id) => {
    return new Promise(async (resolve, reject) => {
        try {

            let NghiemThuDeTai = await db.NghiemThuDeTai.findOne({
                where: {
                    id_detai: id
                }
            })
            // // console.log(NghiemThuDeTai);
            if (NghiemThuDeTai) {
                if (file) {
                    const { bienbanhopnghiemthudetai } = file
                    bienbanhopnghiemthudetai.mv("./uploadBienBanHopHoiDongNghiemThuDeTai/" + bienbanhopnghiemthudetai.name);
                    NghiemThuDeTai.bienbanhopnghiemthudetai = "./uploadBienBanHopHoiDongNghiemThuDeTai/" + bienbanhopnghiemthudetai.name;
                    await NghiemThuDeTai.save();
                    resolve({ errCode: 0, message: 'Upload Thanh Cong' });
                } else {
                    resolve({ errCode: 1, message: 'Khong co file' });
                }

            } else {
                if (file) {
                    const { bienbanhopnghiemthudetai } = file
                    bienbanhopnghiemthudetai.mv("./uploadBienBanHopHoiDongNghiemThuDeTai/" + bienbanhopnghiemthudetai.name);
                    await db.NghiemThuDeTai.create({
                        id_detai: id,
                        bienbanhopnghiemthudetai: "./uploadBienBanHopHoiDongNghiemThuDeTai/" + bienbanhopnghiemthudetai.name,
                    })
                } else {
                    resolve({ errCode: 1, message: 'Khong co file' });
                }
            }


        } catch (e) {
            reject(e)
        }
    })
}
// getAllKetQuaNghiemThuDeTai
let getAllKetQuaNghiemThuDeTai = (id) => {
    return new Promise(async (resolve, reject) => {
        try {

            let NghiemThuDeTai = await db.NghiemThuDeTai.findAll({
                where: {
                    id_detai: id
                }
            })
            // // console.log(NghiemThuDeTai);
            if (NghiemThuDeTai) {
                resolve(NghiemThuDeTai);

            }


        } catch (e) {
            reject(e)
        }
    })
}
// DownLoadPhieuDanhGiaSauNghiemThu
let DownLoadPhieuDanhGiaSauNghiemThu = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let NghiemThuDeTai = await db.NghiemThuDeTai.findOne({
                where: {
                    id_detai: id
                }, raw: true
            })
            // console.log(NghiemThuDeTai);
            if (NghiemThuDeTai) {
                resolve(NghiemThuDeTai.phieudanhgia);

            }

            // console.log(detai.thoigianvadiadiemnghiemthudetai);
        } catch (e) {
            reject(e)
        }
    })
}
// DownLoadPhieuNhanXetDanhGia
let DownLoadPhieuNhanXetDanhGia = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let NghiemThuDeTai = await db.NghiemThuDeTai.findOne({
                where: {
                    id_detai: id
                }, raw: true
            })
            if (NghiemThuDeTai) {
                resolve(NghiemThuDeTai.phieunhanxetdanhgia);
            }
        } catch (e) {
            reject(e)
        }
    })
}
// DownLoadBienBanHopHoiDongNghiemThu
let DownLoadBienBanHopHoiDongNghiemThu = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let NghiemThuDeTai = await db.NghiemThuDeTai.findOne({
                where: {
                    id_detai: id
                }, raw: true
            })
            if (NghiemThuDeTai) {
                resolve(NghiemThuDeTai.bienbanhopnghiemthudetai);
            }
        } catch (e) {
            reject(e)
        }
    })
}
// DownLoadPhieuGiaiTrinhSauNghiemThu
let DownLoadPhieuGiaiTrinhSauNghiemThu = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let NghiemThuDeTai = await db.NghiemThuDeTai.findOne({
                where: {
                    id_detai: id
                }, raw: true
            })
            if (NghiemThuDeTai) {
                resolve(NghiemThuDeTai.phieugiaitrinh);
            }
        } catch (e) {
            reject(e)
        }
    })
}
// DownLoadFileBaoCaoSauChinhSua
let DownLoadFileBaoCaoSauChinhSua = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let NghiemThuDeTai = await db.NghiemThuDeTai.findOne({
                where: {
                    id_detai: id
                }, raw: true
            })
            if (NghiemThuDeTai) {
                resolve(NghiemThuDeTai.filebaocaosauchinhsua);
            }
        } catch (e) {
            reject(e)
        }
    })
}
// XacNhanHoanThanhDeTaiTuAdmin
let XacNhanHoanThanhDeTaiTuAdmin = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let detai = await db.DeTai.findOne({
                where: {
                    id: id
                }
            })
            if (detai) {
                detai.trangthaidetai = 'hoanthanh';
                await detai.save();

                let userSv1 = await db.User.findOne({
                    where: {
                        account: detai.thongtinthanhvien1
                    }
                })
                let userSv2 = await db.User.findOne({
                    where: {
                        account: detai.thongtinthanhvien2
                    }
                })
                let userSv3 = await db.User.findOne({
                    where: {
                        account: detai.thongtinthanhvien3
                    }
                })
                let userSv4 = await db.User.findOne({
                    where: {
                        account: detai.thongtinthanhvien4
                    }
                })
                let userSv5 = await db.User.findOne({
                    where: {
                        account: detai.thongtinthanhvien5
                    }
                })
                if (userSv1) {
                    userSv1.condition = 'Đã hoàn thành';
                    await userSv1.save();
                }
                if (userSv2) {
                    userSv2.condition = 'Đã hoàn thành';
                    await userSv2.save();
                }
                if (userSv3) {
                    userSv3.condition = 'Đã hoàn thành';
                    await userSv3.save();
                }
                if (userSv4) {
                    userSv4.condition = 'Đã hoàn thành';
                    await userSv4.save();
                }
                if (userSv5) {
                    userSv5.condition = 'Đã hoàn thành';
                    await userSv5.save();
                }
                let transporter = nodemailer.createTransport({
                    host: 'smtp.gmail.com',
                    port: 465,
                    secure: true,// true for 465, false for other ports
                    auth: {
                        user: process.env.EMAIL_APP, // generated ethereal user
                        pass: process.env.EMAIL_APP_PASSWORD, // generated ethereal password
                    },
                });
                // send mail with defined transport object
                let info = await transporter.sendMail({
                    from: '"Nghiên Cứu Khoa Học 👻" <ln0961142@gmail.com>', // sender address
                    to: `${userSv1.email},${userSv2?.email},${userSv3?.email},${userSv4?.email},${userSv5?.email}`, // list of receivers
                    subject: "Thông báo hoàn thành đề tài", // Subject line
                    text: "Đã hoàn thành đề tài NCKH, Vui lòng đăng nhập vào hệ thống quản lý để xem chi tiết!. ", // plain text body
                    html: `<b>Tên đề tài:  ${detai.tendetai}, Mã số đề tài: ${detai.masodetai}, Đề tài đã hoàn thành, Vui lòng đăng nhập vào hệ thống quản lý để xem chi tiết!.</b>`, // html body
                }, (err) => {
                    if (err) {
                        // return reject.json({
                        //     message: 'Lỗi gửi mail',
                        //     err,
                        // });
                        console.log(err);
                    } else {
                        // return reject.json({
                        //     message: 'Gửi mail Thành công',
                        // });
                        console.log('Gửi mail Thành công');
                    }
                });
                // console.log(userSv4);


                resolve({ errCode: 0, message: 'Xac nhan hoan thanh de tai thanh cong' });

            }

            // console.log(detai.thoigianvadiadiemnghiemthudetai);
        } catch (e) {
            reject(e)
        }
    })
}
// EditThongTinCaNhan
let EditThongTinCaNhan = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: {
                    id: data.id
                }
            })
            // console.log(user);
            if (user) {
                user.email = data.email;
                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.gender = data.gender;

                await user.save();
                resolve({ errCode: 0, message: 'Edit Thong tin ca nhan thanh cong!.' });
            } else {
                resolve({ errCode: 1, message: 'Edit Thong tin ca nhan that bai!.' });
            }
        } catch (e) {
            reject(e)
        }
    })
}
// GetDeTaiHuongDanGVHD
let GetDeTaiHuongDanGVHD = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            // console.log(data.data.thoigian);
            // console.log(data.infoGVHD.account);
            let listDeTai = await db.DeTai.findAll({
                where: {
                    [Op.and]: [{ masogiaovienhuongdan: data.infoGVHD.account },
                    {
                        thoigianbatdau: {
                            [Op.lte]: data.data.thoigian
                        }
                    },
                    {
                        thoigianketthuc: {
                            [Op.gte]: data.data.thoigian
                        }
                    }
                    ]
                }
            });
            resolve(listDeTai);

        } catch (e) {
            reject(e)
        }
    })
}
// GetListDeTaiThongKe
let GetListDeTaiThongKe = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let detaidangthuchien = await db.DeTai.findAll({
                where: {
                    [Op.or]: [{ trangthaidetai: 'nhandetai' },
                    { trangthaidetai: 'xinnghiemthu' }
                    ]
                }
            })
            let detaihoanthanh = await db.DeTai.findAll({
                where: {
                    trangthaidetai: 'hoanthanh'
                }
            })
            // console.log(data.data.thoigian);
            // console.log(data.infoGVHD.account);
            resolve({ detaidangthuchien, detaihoanthanh });
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    handleUserLogin: handleUserLogin,
    getAllUser: getAllUser,
    createNewUser: createNewUser,
    getUserId: getUserId,
    changePasswordUserId: changePasswordUserId,
    createNewUserStudentArray: createNewUserStudentArray,
    getAllUserCVHT: getAllUserCVHT,
    getAllUserChuNhiem: getAllUserChuNhiem,
    getAllUserHoiDong: getAllUserHoiDong,
    getAllUserSVCLC: getAllUserSVCLC,
    editUserIdSVCLC: editUserIdSVCLC,
    deleteUserId: deleteUserId,
    editUserIdCVHT: editUserIdCVHT,
    editUserIdChuNhiem: editUserIdChuNhiem,
    editUserIdHoiDong: editUserIdHoiDong,
    searchUserSVCLC: searchUserSVCLC,
    searchUserChuNhiem: searchUserChuNhiem,
    searchUserHoiDong: searchUserHoiDong,
    searchUserCVHT: searchUserCVHT,
    DangKyDeTai: DangKyDeTai,
    getDeTaiDangky: getDeTaiDangky,
    postMoDangKyDeTai: postMoDangKyDeTai,
    postDongDangKyDeTai: postDongDangKyDeTai,
    getTrangThaiDangKyDeTai: getTrangThaiDangKyDeTai,
    deleteDeTaiDangKy: deleteDeTaiDangKy,
    duyetDetaiDangKy: duyetDetaiDangKy,
    getDeTaiDaDuyet: getDeTaiDaDuyet,
    getTrangThaiMoDangKyDeTaiAdmin: getTrangThaiMoDangKyDeTaiAdmin,
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
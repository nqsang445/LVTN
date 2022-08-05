'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DeTai extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  DeTai.init({
    tendetai: DataTypes.STRING,
    masodetai: DataTypes.STRING,
    linhvucuutien: DataTypes.STRING,
    linhvucnghiencuu: DataTypes.STRING,
    loaihinhnghiencuu: DataTypes.STRING,
    thoigianbatdau: DataTypes.DATE,
    thoigianketthuc: DataTypes.DATE,
    thongtinchunhiemdetai: DataTypes.STRING,
    thongtingianvienhuongdan: DataTypes.STRING,
    thongtinthanhvien1: DataTypes.STRING,
    thongtinthanhvien2: DataTypes.STRING,
    thongtinthanhvien3: DataTypes.STRING,
    thongtinthanhvien4: DataTypes.STRING,
    thongtinthanhvien5: DataTypes.STRING,
    nhiemvu: DataTypes.STRING,
    kinhphidetai: DataTypes.STRING,
    masogiaovienhuongdan: DataTypes.STRING,
    filethuyetminh: DataTypes.STRING,
    thoigianvadiadiembaovedecuong: DataTypes.STRING,
    phieugiaitrinh: DataTypes.STRING,
    trangthaidetai: DataTypes.STRING,
    dondangkybaocao: DataTypes.STRING,
    filebaocaonghiemthu: DataTypes.STRING,
    thoigianvadiadiemnghiemthudetai: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'DeTai',
  });
  return DeTai;
};
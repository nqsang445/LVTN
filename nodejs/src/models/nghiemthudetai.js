'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NghiemThuDeTai extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  NghiemThuDeTai.init({
    id_detai: DataTypes.STRING,
    phieudanhgia: DataTypes.STRING,
    phieunhanxetdanhgia: DataTypes.STRING,
    bienbanhopnghiemthudetai: DataTypes.STRING,
    phieugiaitrinh: DataTypes.STRING,
    filebaocaosauchinhsua: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'NghiemThuDeTai',
  });
  return NghiemThuDeTai;
};
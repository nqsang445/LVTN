'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HOIDONGNGHIEMTHU extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  HOIDONGNGHIEMTHU.init({
    id_detai: DataTypes.STRING,
    chutich: DataTypes.STRING,
    thuky: DataTypes.STRING,
    thanhvien1: DataTypes.STRING,
    thanhvien2: DataTypes.STRING,
    thanhvien3: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'HOIDONGNGHIEMTHU',
  });
  return HOIDONGNGHIEMTHU;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CHAMDIEMDETAI extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CHAMDIEMDETAI.init({
    id_detai: DataTypes.STRING,
    filedanhgia: DataTypes.STRING,
    bienbanhophoidongxetduyet: DataTypes.STRING,
    kinhphidetai: DataTypes.STRING,
    kinhphidetaidothukynhap: DataTypes.STRING,
    bienbanhophoidongdecuong: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'CHAMDIEMDETAI',
  });
  return CHAMDIEMDETAI;
};
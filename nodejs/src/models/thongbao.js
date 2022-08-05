'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ThongBao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ThongBao.init({
    tenthongbao: DataTypes.STRING,
    filethongbao: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'ThongBao', // can khi goi model ben ngoai
  });
  return ThongBao;
};
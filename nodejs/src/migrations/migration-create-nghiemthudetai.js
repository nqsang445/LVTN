'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('NghiemThuDeTais', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_detai: {
        type: Sequelize.STRING
      },
      phieudanhgia: {
        type: Sequelize.STRING
      },
      phieunhanxetdanhgia: {
        type: Sequelize.STRING
      },
      bienbanhopnghiemthudetai: {
        type: Sequelize.STRING
      },
      phieugiaitrinh: {
        type: Sequelize.STRING
      },
      filebaocaosauchinhsua: {
        type: Sequelize.STRING
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('NghiemThuDeTais');
  }
};
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ChamDiemDeTais', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_detai: {
        type: Sequelize.STRING
      },
      filedanhgia: {
        type: Sequelize.STRING
      },
      bienbanhophoidongxetduyet: {
        type: Sequelize.STRING
      },
      kinhphidetai: {
        type: Sequelize.STRING
      },
      kinhphidetaidothukynhap: {
        type: Sequelize.STRING
      },
      bienbanhophoidongdecuong: {
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
    await queryInterface.dropTable('ChamDiemDeTais');
  }
};
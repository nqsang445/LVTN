'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('HoiDongDeTais', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_detai: {
        type: Sequelize.STRING
      },
      chutich: {
        type: Sequelize.STRING
      },
      thuky: {
        type: Sequelize.STRING
      },
      thanhvien1: {
        type: Sequelize.STRING
      },
      thanhvien2: {
        type: Sequelize.STRING
      },
      thanhvien3: {
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
    await queryInterface.dropTable('HoiDongDeTais');
  }
};
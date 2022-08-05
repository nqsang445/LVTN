'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DeTais', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tendetai: {
        type: Sequelize.STRING
      },
      masodetai: {
        type: Sequelize.STRING
      },
      linhvucuutien: {
        type: Sequelize.STRING
      },
      linhvucnghiencuu: {
        type: Sequelize.STRING
      },
      loaihinhnghiencuu: {
        type: Sequelize.STRING
      },

      thoigianbatdau: {
        type: Sequelize.DATE
      },
      thoigianketthuc: {
        type: Sequelize.DATE
      },
      thongtinchunhiemdetai: {
        type: Sequelize.STRING
      },
      thongtingianvienhuongdan: {
        type: Sequelize.STRING
      },
      thongtinthanhvien1: {
        type: Sequelize.STRING
      },
      thongtinthanhvien2: {
        type: Sequelize.STRING
      },
      thongtinthanhvien3: {
        type: Sequelize.STRING
      },
      thongtinthanhvien4: {
        type: Sequelize.STRING
      },
      thongtinthanhvien5: {
        type: Sequelize.STRING
      },
      nhiemvu: {
        type: Sequelize.STRING
      },
      kinhphidetai: {
        type: Sequelize.STRING
      },
      masogiaovienhuongdan: {
        type: Sequelize.STRING
      },
      filethuyetminh: {
        type: Sequelize.STRING
      },
      thoigianvadiadiembaovedecuong: {
        type: Sequelize.STRING
      },
      phieugiaitrinh: {
        type: Sequelize.STRING
      },
      trangthaidetai: {
        type: Sequelize.STRING
      },
      dondangkybaocao: {
        type: Sequelize.STRING
      },
      filebaocaonghiemthu: {
        type: Sequelize.STRING
      },
      thoigianvadiadiemnghiemthudetai: {
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
    await queryInterface.dropTable('DeTais');
  }
};
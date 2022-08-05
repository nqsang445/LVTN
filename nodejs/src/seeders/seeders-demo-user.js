'use strict';

module.exports = {
  // email: DataTypes.STRING,
  // password: DataTypes.STRING,
  // firstName: DataTypes.STRING,
  // lastName: DataTypes.STRING,

  // address: DataTypes.STRING,
  // gender: DataTypes.BOOLEAN,
  // typeRole: DataTypes.STRING,
  // keyRole: DataTypes.STRING
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Positions', [{
      roleId: 'R1',
      position: 'Quản trị viên',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      roleId: 'R2',
      position: 'Cố vấn học tập',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      roleId: 'R3',
      position: 'Chủ nhiệm',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      roleId: 'R4',
      position: 'Hội đồng',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      roleId: 'R5',
      position: 'Sinh viên chất lượng cao',
      createdAt: new Date(),
      updatedAt: new Date()
    },

    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("pedido",{
      id:{
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      }, 
      cliente_id:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      total:{
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0
      },
      propina: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      metodo_pago:{
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "Efectivo"
      },
      total_propina:{
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defautlValue: 0.0,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("pedido");
  }
};

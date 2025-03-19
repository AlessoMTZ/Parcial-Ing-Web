'use strict';
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');


module.exports = (sequelize) => {
  class Pedido extends Model {
    static associate(models) {
    }
  }
  Pedido.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      cliente_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      total: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
        defaultValue: 0.0,
      },
      propina: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      metodo_pago: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Efectivo"
      },
      total_propina: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
        defaultValue: 0.0
      }
    },
    {
      sequelize,
      modelName: "Pedido",
      tableName: "pedido",
      timestamps: true,

     
    }
  );

  return Pedido;
};
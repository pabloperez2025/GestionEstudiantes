const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function(sequelize, DataTypes) {
  const students = sequelize.define(
    'students',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

first_name: {
        type: DataTypes.TEXT,

      },

last_name: {
        type: DataTypes.TEXT,

      },

email: {
        type: DataTypes.TEXT,

      },

birth_date: {
        type: DataTypes.DATE,

      },

      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
      },
    },
    {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
    },
  );

  students.associate = (db) => {

    db.students.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.students.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return students;
};


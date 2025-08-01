const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function(sequelize, DataTypes) {
  const enrollments = sequelize.define(
    'enrollments',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

enrollment_date: {
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

  enrollments.associate = (db) => {

    db.enrollments.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.enrollments.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return enrollments;
};


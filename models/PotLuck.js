
'use strict';
// the User type table is a pre genderated table that is used as a reference on other tables
module.exports = function(sequelize, DataTypes) {
  var Potluck = sequelize.define('potluck', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    date: {
      type: sequelize.DATEONLY,
      allowNull: false
    },
    startTime: {
      type: sequelize.TIME
    },
    endTime: {
      type: sequelize.TIME
    },
    location: {
      type: sequelize.STRING,
      allowNull: false
    },
    eventURL: {
      type: sequelize.STRING,
      allowNull: false
    },
    phone: {
      type: sequelize.INTEGER,
      allowNull: false
    },
    email: {
      type: sequelize.STRING,
      allowNull: false
    },
    details: {
      type: sequelize.TEXT,
      allowNull: false
    }
  },
  {
    classMethods: {
      associate: function(models) {
        // Each of the burgers has one of the devourers associated with it (key is stored on the devourer)
        PotLuck.hasMany(models.UserPotluck)
        PotLuck.hasMany(models.Item)
      }
    }
  });
  return PotLuck;
};

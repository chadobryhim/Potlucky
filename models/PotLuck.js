
'use strict';
// the User type table is a pre genderated table that is used as a reference on other tables
module.exports = function(sequelize, DataTypes) {
  var PotLuck = sequelize.define('potluck', {
    potLuckId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    startTime: {
      type: DataTypes.TIME
    },
    endTime: {
      type: DataTypes.TIME
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    eventURL: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    details: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    staticURL: {
      type: DataTypes.STRONG,
      allowNull : false
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

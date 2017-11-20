
'use strict';

// the User type table is a pre genderated table that is used as a reference on other tables
module.exports = function(sequelize, DataTypes) {
  var User = connection.define('user', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userToken: {
      type:sequelize.STRING,
      allowNull: false
    },
    name: {
      type:sequelize.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // Each of the burgers has one of the devourers associated with it (key is stored on the devourer)
        User.hasMany(models.userPotluck)
      }
    }
  });
  return User;
};


'use strict';

// the User type table is a pre genderated table that is used as a reference on other tables
module.exports = function(sequelize, DataTypes){
  var UserType = sequelize.define('userType', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userType: {
      type: sequelize.STRING,
      allowNull: false
    }
  }, {
    timestamps: false
  },
  {
    classMethods: {
      associate: function(models) {
        // Each of the burgers has one of the devourers associated with it (key is stored on the devourer)
        UserType.hasMany(models.UserPotluck)
      }
    }
  });
  return UserType;
};

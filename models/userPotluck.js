
'use strict';

// the User type table is a pre genderated table that is used as a reference on other tables
module.exports = function(sequelize, DataTypes) {
  var UserPotluck = sequelize.define('userPotluck', {
    userPotluckID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    timestamps: false
  },
  {
    classMethods: {
      associate: function(models) {
        // Each of the burgers has one of the devourers associated with it (key is stored on the devourer)
        UserPotluck.belongsTo(models.UserType);
        UserPotluck.belongsTo(models.User);
        UserPotluck.belongsTo(models.Potluck);
      }
    }
  });
  return UserPotluck;
};

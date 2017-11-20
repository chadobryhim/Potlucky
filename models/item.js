
'use strict';

// the User type table is a pre genderated table that is used as a reference on other tables
module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define('item', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    assigned: {
      type:sequelize.STRING,
      allowNull: true
    },
    item_name: {
      type:sequelize.STRING,
      allowNull: false
    },
    notes: {
      type:sequelize.TEXT
    }
  }, {
    classMethods: {
      associate: function(models) {
        // Each of the burgers has one of the devourers associated with it (key is stored on the devourer)
        Item.belongsTo(models.category);
        Item.BelongsTo(models.PotLuck);
      }
    }
  });
  return Category;
};

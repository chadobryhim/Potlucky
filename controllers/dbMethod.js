var db = require('../models');

var methods = {
    //creates the assocations necessary to conenct all the tables in the db
    associate : function () {
      //user table has many in the potluck users
      db.user.hasMany(db.userPotluck, {as: 'UserPotluck', foreignKey: 'userId', sourceKey: 'userId'});
      db.userPotluck.belongsTo(db.user,{as: 'UserPotluck', foreignKey: 'userId', sourceKey: 'userId'});

      //user types to userPotluck
      db.userType.hasMany(db.userPotluck, {as: 'UserType', foreignKey: 'userTypeId', sourceKey: 'userTypeId'});
      db.userPotluck.belongsTo(db.userType, {as: 'UserType', foreignKey: 'userTypeId', sourceKey: 'userTypeId'});

      //potluck to user potlucks
      db.potluck.hasMany(db.userPotluck, {foreignKey: 'potLuckId', sourceKey: 'potLuckId'});
      db.userPotluck.belongsTo(db.potluck, {foreignKey: 'potLuckId', sourceKey: 'potLuckId'});

      //potlucks to potLuckItems
      db.potluck.hasMany(db.item, {foreignKey: 'potLuckId', sourceKey: 'potLuckId'});
      db.item.belongsTo(db.potluck, {foreignKey: 'potLuckId', sourceKey: 'potLuckId'});

      //category to potLuckItems
      db.category.hasMany(db.item, {foreignKey: 'categoryId', sourceKey: 'categoryId'});
      db.item.belongsTo(db.category, {foreignKey: 'categoryId', sourceKey: 'categoryId'});
    },


    initTables : function(){
      //makes the initial table and makes sure it is the only stuff for it for both User type and categories

      db.userType.build({userType: "User"});
      db.userType.build({userType: "Admin"});
      db.userType.build({userType: "SuperAdmin"});

      db.category.build({category: "Appetizers"});
      db.category.build({category: "Entrees"});
      db.category.build({category: "Desserts"});
      db.category.build({category: "Drinks"});
      db.category.build({category: "Other"});
    },

    //createss a random string to make as the id for the the evnts
    makeid : function() {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    },


    //takes the User token from the Facebook Oath, tests the token in the db, and if it does not exist it creates an entry in our database
    loginNTest : function(userID, thisName) {
      var test = db.user.count({ where: { userToken: userID } })
      if (test === 0) {
        db.user.create({
          userToken: userID,
          name: thisName
        });
      }
    },

    //creates an event based on a sumbission object that gets posted from the front
    createEvent : function(submission, id) {
      var  text,
            test;
      do {

        text = makeid();
        test = db.potluck.count({ where: { staticURL: text } })
      } while (test != 0);
      db.Potluck.create({
        date : submission.date,
        startTime:submission.startTime,
        endTime: submission.endTime,
        location: submission.location,
        phone: submission.Phone,
        email: submission.email,
        details: submission.details,
        staticURL: text
      });
      db.UserPotluck.create({
        userType: 1
      });
    },

    //adds an item to the table.
    addItem : function(submission, potluckID) {
      db.Item.create({
        assigned: submission.assigned,
        item_name: submission.item_name,
        notes: sumbission.notes
      });
    },

    userEvents: function(userToken){

      // Sequelize Query to get all burgers from database (and join them to their devourers, if applicable)
      db.UserPotluck.findAll({
        where : {
          userToken: userToken
        },
        include: [{model: models.PotLuck}]
      }).then(function(data){
        var userObject = { potluck: data };
        console.log(data);
        return userObject;

      });
    },

    potLuckItems: function(potLuckId){
      db.items.finalAll({
        where :{
          potLuckId:potLuckId
        }.then(function(data){
          var potluckItem = {items: data};
          return potluckItem
        })
      })
    }
};

module.exports = methods;

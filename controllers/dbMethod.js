'use strict';

module.exports = function() {
  var methods = {
    //creates the assocations necessary to conenct all the tables in the db
    associate : function () {
      //user table has many in the potluck users
      db.user.hasMany(db.userPotluck);
      db.userPotluck.belongsTo(db.user);

      //user types to userPotluck
      db.userType.hasMany(db.userPotluck);
      db.userPotluck.belongsTo(db.userType);

      //potluck to user potlucks
      db.potluck.hasMany(db.userPotluck);
      db.userPotluck.belongsTo(db.potluck);

      //potlucks to potLuckItems
      db.potluck.hasMany(db.item);
      db.item.belongsTo(db.potluck);

      //category to potLuckItems
      db.category.hasMany(db.item);
      db.item.belongsTo(db.category);
    },


    initTables : function(){
      //makes the initial table and makes sure it is the only stuff for it for both User type and categories
      models.userType.create({userType: "User"});
      models.userType.create({userType: "Admin"});
      models.userType.create({userType: "SuperAdmin"});

      models.category.create({category: "Appetizers"});
      models.category.create({category: "Entrees"});
      models.category.create({category: "Desserts"});
      models.category.create({category: "Drinks"});
      models.category.create({category: "Other"});
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
        models.user.create({
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
      models.UserPotluck.findAll({
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
      models.items.finalAll({
        where :{
          potLuckId:potLuckId
        }.then(function(data){
          var potluckItem = {items: data};
          return potluckItem
        })
      })
    }
  }

  return methods;
};

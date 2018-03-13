// / Requiring bcrypt for password hashing
var bcrypt = require("bcrypt-nodejs");
//module export
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {

    UserId: {
      primaryKey: true,
      type: DataTypes.TINYINT, autoIncrement: true,
      allowNull: false

    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Giving the User model a name of type STRING
    name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1]
            }
    }
  });

  User.associate = function(models) {
    // Associating User with Posts
    // When an User is deleted, also delete any associated Posts
    User.hasMany(models.Post, {
      onDelete: "cascade"
    });
    User.hasMany(models.Beer, {
      onDelete: "cascade"
    });
  };
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.hook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });

  return User;
};

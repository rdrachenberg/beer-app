module.exports = function(sequelize, DataTypes) {
  var Author = sequelize.define("Author", {
    // Giving the Author model a name of type STRING
    name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1]
            }
    },
  });

  Author.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Author.hasMany(models.Post, {
      onDelete: "cascade"
    });
    Author.belongsTo(models.Beer, {
      foreignKey: {
        allowNull: false,

        // type: sequelize.INTEGER, autoIncrement: true 
      }

    });
    
  };

  return Author;
};

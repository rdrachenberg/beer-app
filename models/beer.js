module.exports = function (sequelize, DataTypes) {
    var Beer = sequelize.define("Beer", {
        // Giving the Beer model a name of type STRING
        beer_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        user_rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        comments: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    Beer.associate = function (models) {
        // Associating Beer with Posts
        // When an Beer is deleted, also delete any associated Posts
        Beer.belongsTo(models.User, {
            foreignKey: "user_id",
            onDelete: "cascade"
        });
        Beer.hasMany(models.Post, {
            foreignKey: "user_id",
            onDelete: "cascade"
        });

    };

    return Beer;
};

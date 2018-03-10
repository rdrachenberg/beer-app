module.exports = function (sequelize, DataTypes) {
    var Beer = sequelize.define("Beer", {
        // Giving the Beer model a name of type STRING
        name: {
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
        Beer.hasMany(models.Post, {
            onDelete: "cascade"
        });
        Beer.hasMany(models.Author, {
            onDelete: "cascade"
        });
    };

    return Beer;
};

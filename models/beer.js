module.exports = function (sequelize, DataTypes) {
    var Beer = sequelize.define("Beer", {
        // Giving the Beer model a name of type STRING
        name: DataTypes.STRING
    });

    Beer.associate = function (models) {
        // Associating Beer with Posts
        // When an Beer is deleted, also delete any associated Posts
        Beer.hasMany(models.Post, {
            onDelete: "cascade"
        });
    };

    return Beer;
};

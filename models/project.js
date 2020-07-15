module.exports = function( sequelize, DataTypes ){
    var Project = sequelize.define('Project',{
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                // At least one character long
                len: [1]
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate:{
                // At least one character long
                len: [1]
            }
        },
        startDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        dueDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        warningDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        estimatedDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        
    });

    Project.associate = function ( models ){
        Project.belongsTo(
            models.User,
            {
                foreignKey:{
                    allowNull: false
                }
            }
        );
    };

    return Project;
};
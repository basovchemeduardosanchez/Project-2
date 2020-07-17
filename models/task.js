module.exports = function( sequelize, DataTypes ){
    var Task = sequelize.define('Task',{
        shortname: {
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
        category: {
            type: DataTypes.STRING,
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
        completedDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        completedDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        completed: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
    });

    Task.associate = function ( models ){
        Task.belongsTo(
            models.User,
            {
                foreignKey:{
                    allowNull: false
                }
            }
        );
        Task.belongsTo(
            models.Project,
            {
                foreignKey:{
                    allowNull: false
                }
            }
        );
    };

    return Task;
};
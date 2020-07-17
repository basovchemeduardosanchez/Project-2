module.exports = function( sequelize, DataTypes ){
    var User = sequelize.define('User',{
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                // At least one character long
                len: [1]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                // At least one character long
                len: [1]
                // TODO: Research how to validate e-mails
            }
        }
    });
    User.associate = function( models ) {
        User.hasMany( models.Project, {
            // TODO: Check if we need anything else here
            onDelete: 'cascade'
        } );
    
        User.hasMany( models.Task, {
            // TODO: Check if we need anything else here
            onDelete: 'cascade'
        } );
    };
    return User;
};
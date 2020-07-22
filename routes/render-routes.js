
const db = require('../models');
const hoursRemaining = require("../public/js/moment")

// !! Sequelize results have a lot of extra attributes, the solution according to https://stackoverflow.com/a/42007460 is to use the .get function as below
function getPlainResults( pResults ){
    return pResults.map( function( pItem ){
        return pItem.get( { plain: true } );
    } );
}

module.exports = function( app ){ 
    // SECTION Routes
    // TODO: Create your routes here
    app.get( '/', function( req, res ){
        // TODO: Implement route logic
        // !! Don't forget to send a response
        // !! This requires Express to have a view engine set
        res.render( 'index', {title: 'Homepage'} );
    } );
    // 
    app.get( '/userDashboard', function( req, res ){
        db.Project.findAll({
            where: {

            }
        }).then((result) =>{ 
            const projects = result.map(project => project.dataValues)
            res.render( 'userDashboard', {projects});
        })
    } );

    app.get( '/projectDetails', function( req, res ){

        
        res.render( 'projectDetails', {} );
    } );

    app.get( '/projectReport', function( req, res ){
        db.Project.findAll({
            where: {

            }
        }).then((result) =>{ 
            const projects = result.map(project => project.dataValues)
            res.render( 'projectReport', {projects});
        })
        // .catch(res, err){
        //     throw err
        // })
    
    } );

    app.get( '/taskReport', function( req, res ){

        db.Task.findAll({
            where: {

            }
        }).then((result) =>{ 
            // const tasks = result.map(task => task.dataValues);
            // task.dataValues.overdue;
            let tasks = [];
            result.map(task => {
                var hours = hoursRemaining(task.dueDate);
                if(hours <= 0){
                task.setDataValue("overdue", true);
                }
                else if (hours <= 72 && hours > 0){
                task.setDataValue("lessThan3", true);
                }
                else if (hours <= 168 && hours > 72){
                    task.setDataValue("lessThan7", true);
                    }
                else{
                    task.setDataValue("oneWeek", true);
                }
                tasks.push(task.dataValues);
        console.log(hours);
            })
            
            res.render( 'taskReport', {tasks});
        })
    } );

    app.get( '/projectCreate', function( req, res ){
        db.User.findAll( {
            where: {}
        } )
            .then( function( pResults ){
                res.render( 'projectCreate', {
                    // users: getPlainResults( lPlainResults )
                    users: getPlainResults(pResults)
                } );
            } );
    } );

    app.get( '/login', function( req, res ){

        res.render( 'login', {} );
    } );

    app.get( '/register', function( req, res ){

        res.render( 'register', {} );
    } );

    app.get( '/projectSubmitted', function( req, res ){

        res.render( 'projectSubmitted', {} );
    } );

    app.get( '/taskCreatenew', function( req, res ){
        var lUsers,
            lProjects;

        db.User.findAll()
            .then( function( pResults ){
                lUsers = getPlainResults( pResults );
                return db.Project.findAll();
            } )
            .then( function( pResults ){
                lProjects = getPlainResults( pResults );

                res.render( 'taskCreatenew', {
                    users: lUsers,
                    projects: lProjects
                } );
            } );
    } );

    app.get( '/taskSubmitted', function( req, res ){

        res.render( 'taskSubmitted', {} );
    } );

    app.get( '/welcome', function( req, res ){

        res.render( 'welcome', {} );
    } );
    
}


const moment = require( 'moment' );
const db = require('../models');
const hoursRemaining = require("../public/js/moment")

// !! Sequelize results have a lot of extra attributes, the solution according to https://stackoverflow.com/a/42007460 is to use the .get function as below
function getPlainResults( pResults ){
    return pResults.map( function( pItem ){
        return pItem.get( { plain: true } );
    } );
}
function formatDate( pDate ){
    return moment( pDate ).format( 'ddd MMM Mo YYYY HH:mm' );
}

module.exports = function( app ){ 
    // SECTION Routes
    // TODO: Create your routes here
    app.get( '/', function( req, res ){
        // TODO: Implement route logic
        // !! Don't forget to send a response
        // !! This requires Express to have a view engine set
        res.render( 'index', {title: 'Homepage', layout: 'not-accessed'} );
    } );
    // :id
    app.get( '/userDashboard', function( req, res ){
        var lTasks;
        var lProjects;

        db.Project.findAll({
            where: {
                //UserId: req.params.id
            },
            include:[db.Task]
        }).then((result) =>{ 
            lProjects = result.map(project => project.dataValues);
            lProjects = lProjects.map( function( pProject ){
                var lTotalTasks = pProject.Tasks.length;
                var lCompletedTasks = 0;
                pProject.Tasks.forEach( function( pTask ){
                    if( pTask.completed ){
                        lCompletedTasks++;
                    }
                } );
                var lCompletedPercent = 0;
                if (lTotalTasks > 0){
                    lCompletedPercent = lCompletedTasks / lTotalTasks * 100;
                }
                console.log( lCompletedPercent );

                pProject.completedPercent = lCompletedPercent;
                return pProject;
            } );

            return db.Task.findAll();
        }).then (function (pResults){
            lTasks = [];
            pResults.map(task => {
                
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
                lTasks.push(task.dataValues);
                // console.log(hours);
                
            });
            // console.log("line56", lProjects)
            res.render( 'userDashboard', {projects:lProjects, tasks: lTasks});
        });
    });

    app.get( '/projectDetails', function( req, res ){

        
        res.render( 'projectDetails', {} );
    } );

    app.get( '/projectReport', function( req, res ){
        db.Project.findAll({
            where: {

            }
        }).then( (result) =>{ 
            const lProjects = getPlainResults( result ).map( function( pProject ){
                pProject.dueDate = formatDate( pProject.dueDate );
                return pProject;
            } );
            res.render( 'projectReport', { projects: lProjects } );
        })
        // .catch(res, err){
        //     throw err
        // })
    
    } );
    app.get( '/projects/:id', function( req, res ){
        // TODO: Implement route logic
        // !! Don't forget to send a response
        db.Project.findOne({
            where: {
                id: req.params.id
            },
            include: [ db.Task, db.User ],
            // See https://sequelize.org/master/manual/model-querying-basics.html#ordering
            order: [
                // Sort by the ones that are due first
                [ db.Task, 'dueDate', 'ASC' ],
            ]
        }).then(function( pResult ){
            const lProject = pResult.get( { plain: true } );
            lProject.dueDate = formatDate( lProject.dueDate );
            lProject.warningDate = formatDate( lProject.warningDate );
            lProject.completedDate = formatDate( lProject.completedDate );
            lProject.Tasks = lProject.Tasks.map ( function( pTask ){
                pTask.dueDate = formatDate ( pTask.dueDate);
                pTask.warningDate = formatDate ( pTask.warningDate);
                pTask.completedDate = formatDate ( pTask.completedDate);
                return pTask;
            });

            console.log( lProject );

            res.render( 'project', lProject );
        });
    } );
    app.get( '/tasks/:id', function( req, res ){
        // TODO: Implement route logic
        // !! Don't forget to send a response
        db.Task.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function( pResult ){
                var lTask = pResult.get( {  plain: true } );
                lTask.dueDate = formatDate( lTask.dueDate );
                lTask.warningDate = formatDate( lTask.warningDate );
                lTask.completedDate = formatDate( lTask.completedDate );
                console.log( lTask );
                res.render('task',lTask);
            });

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

        res.render( 'login', {layout: 'not-accessed'} );
    } );

    app.get( '/register', function( req, res ){

        res.render( 'register', {layout: 'not-accessed'} );
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

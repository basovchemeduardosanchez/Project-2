
const db = require('../models');

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
      
        res.render( 'userDashboard', {title: 'User Dashbord - Roadmap Planner'} );
    } );

    app.get( '/projectReport', function( req, res ){
        db.Project.findAll({
            where: {

            }
        }).then((result) =>{ 

            res.render( 'projectReport', {projects:result});
        })
        // .catch(res, err){
        //     throw err
        // })
    
    } );

    app.get( '/taskReport', function( req, res ){

        res.render( 'taskReport', {} );
    } );

    app.get( '/projectCreate', function( req, res ){

        res.render( 'projectCreate', {} );
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

        res.render( 'taskCreatenew', {} );
    } );

    app.get( '/taskSubmitted', function( req, res ){

        res.render( 'taskSubmitted', {} );
    } );

    app.get( '/welcome', function( req, res ){

        res.render( 'welcome', {} );
    } );
    
}

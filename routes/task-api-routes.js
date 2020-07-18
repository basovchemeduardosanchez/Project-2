const db = require( '../models' );

module.exports = function ( app ){
    console.log( app );
    app.get( '/api/tasks/', function( req, res ){
        // TODO: Implement route logic
        // !! Don't forget to send a response
        db.Task.findAll({
            where: {},
            include: [ db.User, db.Project ]

        })
        .then(function(pResults){
            res.json( pResults);
        });
    } );

    app.post( '/api/tasks/', function( req, res ){
        // TODO: Implement route logic
        // !! Don't forget to send a response
        db.Task.create( req.body ).then(function(pTask){
            res.json( pTask );
        });
    } );

    app.put( '/api/tasks/:id', function( req, res ){
        // TODO: Implement route logic
        // !! Don't forget to send a response
        db.Task.update(
            req.body,
            {
                where:{
                    id: req.params.id
                }
            }
        )
        .then( function( pTask ){
            res.json( pTask );
        });
    } );
    app.delete( '/api/tasks/:id', function( req, res ){
        // TODO: Implement route logic
        // !! Don't forget to send a response
        db.Task.destroy(
            {
                where:{
                    id: req.params.id
                }
            }
        ).then( function( pTask ){
            res.json( pTask );
        });
    } );
}
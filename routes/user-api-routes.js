const db = require( '../models' );

module.exports = function ( app ){
    app.get( '/api/users/', function( req, res ){
        // TODO: Implement route logic
        // !! Don't forget to send a response
        db.User.findAll({
            where: {},
            include: [ db.Project, db.Task ]

        })
        .then(function(pResults){
            res.json( pResults);
        });
    } );
    app.get( '/api/users/:id/projects/', function( req, res ){
        // TODO: Implement route logic
        // !! Don't forget to send a response
        db.Project.findAll({
            where: {
                UserId: req.params.id
            },
            include: [ db.User, db.Task ]

        })
        .then(function(pResults){
            res.json( pResults);
        });
    } );

    app.post( '/api/users/', function( req, res ){
        // TODO: Implement route logic
        // !! Don't forget to send a response
        db.User.create( req.body ).then(function(pUser){
            res.json( pUser );
        });
    } );

    app.put( '/api/users/:id', function( req, res ){
        // TODO: Implement route logic
        // !! Don't forget to send a response
        db.User.update(
            req.body,
            {
                where:{
                    id: req.params.id
                }
            }
        )
        .then( function( pUser ){
            res.json( pUser );
        });
    } );
    app.delete( '/api/users/:id', function( req, res ){
        // TODO: Implement route logic
        // !! Don't forget to send a response
        db.User.destroy(
            {
                where:{
                    id: req.params.id
                }
            }
        ).then( function( pUser ){
            res.json( pUser );
        });
    } );
}
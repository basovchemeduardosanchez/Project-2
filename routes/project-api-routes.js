const db = require( '../models' );

module.exports = function ( app ){
    app.get( '/api/projects/', function( req, res ){
        // TODO: Implement route logic
        // !! Don't forget to send a response
        db.Project.findAll({
            where: {},
            include: [ db.User, db.Task ]

        })
        .then(function(pResults){
            res.json( pResults);
        });
    } );

    app.post( '/api/projects/', function( req, res ){
        // TODO: Implement route logic
        // !! Don't forget to send a response
        db.Project.create( req.body ).then(function(pProject){
            res.json( pProject );
        });
    } );

    app.put( '/api/projects/:id', function( req, res ){
        // TODO: Implement route logic
        // !! Don't forget to send a response
        db.Project.update(
            req.body,
            {
                where:{
                    id: req.params.id
                }
            }
        )
        .then( function( pProject ){
            res.json( pProject );
        });
    } );
    app.delete( '/api/projects/:id', function( req, res ){
        // TODO: Implement route logic
        // !! Don't forget to send a response
        db.Project.destroy(
            {
                where:{
                    id: req.params.id
                }
            }
        ).then( function( pProject ){
            res.json( pProject );
        });
    } );
}
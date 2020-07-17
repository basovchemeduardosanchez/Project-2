module.exports = function( app ){ 
    // SECTION Routes
    // TODO: Create your routes here
    app.get( '/', function( req, res ){
        // TODO: Implement route logic
        // !! Don't forget to send a response
        // !! This requires Express to have a view engine set
        res.render( 'index', {} );
    } );
    // !SECTION Routes
}

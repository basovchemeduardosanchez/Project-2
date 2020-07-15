const express = require( 'express' );

// SECTION Express Setup
const app = express();
// Use the PORT environment variable if available, otherwise use 8080
const PORT = process.env.PORT || 8080;
// Serve all the static files requested from the public folder
app.use( express.static( "public" ) );
// Enable parsing of URL-Encoded request bodies (Standard HTML forms)
app.use( express.urlencoded( { extended: true } ) );
// Enable parsing of JSON request
app.use( express.json() );
// !SECTION Express Setup

const db = require( './models' );

db.sequelize.sync( { force:true }).then( function( ){
    // SECTION Express Start
    // !! The PORT variable must be declared above
    app.listen( PORT, function(){
        console.log( `INFO: Listening on port ${PORT}` );
        console.log( `INFO: Visit http://localhost:${PORT}` );
    } );
    // !SECTION Express Start

} )
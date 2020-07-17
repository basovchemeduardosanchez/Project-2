const express = require( 'express' );
const exphbs = require( 'express-handlebars' );

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

// SECTION Express Handlebars Setup
// Define the `handlebars` engine in express as the express-handlebars package's main function
app.engine( 'handlebars', exphbs( { defaultLayout: 'main' } ) );
// Tell express to use the `handlebars`engine as as its view engine
app.set( 'view engine', 'handlebars' );
// !SECTION Express Handlebars Setup


const db = require( './models' );
// Import Render Routes
require( './routes/render-routes.js' )(app);
// Import User Routes
require( './routes/user-api-routes.js' )(app);
// Import Project Routes
require( './routes/project-api-routes.js' )(app);
// Import Task Routes
// require( './routes/task-api-routes.js' )(app);
db.sequelize.sync( { force:false }).then( function( ){
    // SECTION Express Start
    // !! The PORT variable must be declared above
    app.listen( PORT, function(){
        console.log( `INFO: Listening on port ${PORT}` );
        console.log( `INFO: Visit http://localhost:${PORT}` );
    } );
    // !SECTION Express Start
    
} )
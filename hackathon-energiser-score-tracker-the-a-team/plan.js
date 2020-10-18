// - Must use a Database for persistent storage
// Database: id, name, points, energiser, date

// 2 tables, name of energiser as link,

// unique table of energisers: (BRAINY | CREATIVE | PHYSICAL | ...)
// unique table of people/participants
// joined table of energisers, participants: AND THEN extra stuff, specifics for that day/instance of energiser

// id, name of person, energiser_points, energiser, energiser_date, extra columns: energiser categories
// ...

// - Must use the model pattern to allow easy interaction with the data
// create models folder, 1 model

// - Must use an REST API server to manage requests and serve back data
// Don't muddle up columns.
// Show all of data in table.
// Have searchable fields: e.g. search by name. (IF WE HAVE TIME)
// - getAllData
// - getAllEnergisers (all the different energisers that have been done/available)
// - updateTable (users can submit scores) -- input validation, SQL injection sanitisation
// - deleteSomeData ?

// - Must have a front end which allows users to at least view the data
// How table will actually look
//  Views:
//      getAllData -- display the "main" table verbatum
//      getAllEnergisers -- display "energisers" table verbatum
//      getAllParticipants -- display "participants" table verbatum

// Model
//     create database + app in Heroku
//      put credentials in .env file
//      configure scripts to use -r dotenv/config ....
//      .gitignore: .gitignore, node_modules, .env

// Add one-off scripts to package.json

// Folder layout

// # DB DONE
//  db
//     one-off scripts
//          createTable && dropTable && maybeSeedData? && reinitialiseTable
//      index.js (where we instantiate the Pool) to connect to DB

// # MODELS DONE
//  models
//      participants
//      energisers
//      sessions

// # ROUTES DONE
//  routes
//      GET /energisers
//      POST /energisers (to create an energiser)
//
//      GET /participants
//      POST /participants (to add a new participant)
//      PUT/PATCH /participants (to update a participant) ?
//
//      GET /sessions (don't know what to call this)
//      POST /sessions (add a new session (for a particular date/instance))
//      PUT/PATCH /sessions (to update a participant) ?

// # CONTROLLERS DONE
//  controllers
//      linking route handlers

//  views/HTML
//      getAllData -- display the "main" table verbatum
//      getAllEnergisers -- display "energisers" table verbatum
//      getAllParticipants -- display "participants" table verbatum

//  # DONE
//  public
//      main.js
//      css
//      index.html

//  # APP DONE
//  app.js
//      export app into bin/www.js
//      start listening on some port

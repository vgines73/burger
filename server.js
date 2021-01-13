const express = require('express');

const PORT = process.env.PORT || 7999;

const app = express();

// server static content for the app from the public directory
app.use(express.static('public'));

// Parse application
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set handlebars
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// import routes and give the server access to them
const routes = require('./controllers/burgers_controller');

app.use(routes);

// Start Server
app.listen(PORT, function () {
  console.log(`Listening on Server: http://localhost:${PORT}`);
});

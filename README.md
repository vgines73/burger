# burger

## Description:
    In this assignment, I needed to create a burger app where the user can create a burger, eats the burger and then delete it. I will be using MySQL, Node, Express, Handlebars, and ORM. I will also be deploying the app to Heroku as well. I needed to design my database table as so: 

    CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(300) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)

    I also created my own values for the burgers in my seeds.sql and ran the database on workbench. Once I was able to see it working, I worked on connecting the backend and front end using mySQL, Express, Node, Handlebars, and ORM. For the front end I created also some styling using Bootstrap, and created a javascript file for the button functionality. 

    so pretty much I needed to setup the app by creating a package.json file by running 'npm init' in the terminal. Then install the Express npm package 'npm install express' and created a server.js file. I then installed two more dependencies: handlebars 'npm install express-handlebars' and mySQL 'npm install mysql and made sure to require express inside the server.js file.

    Then I created the database 'burgers_db' and used the table above. Next thing I needed to do was run these SQL files and log in and so in my terminal I typed: 'mysql -u root -p', then 'source /db/schema.sql', then 'source /db/seeds.sql', then exited the program.

    Next I need to do my config setup by creating a connection.js file to set up the code to connect Node to MySQL, export the connection, create an orm.js file, where this file will execute the necessary MySQL commands in the controllers. So methods used are 'selectALL()', 'insertOne()', 'updateOne()', and 'delete()'. After that was setup, I exported the ORM object in 'module.exports'.

    So next I needed to setup my model. In here, I created another js file called burger.js and imported orm.js into it. I created ORM functions using burger specific input for the ORM and then exported the file.

    Then I needed to setup up the controllers. Created another js file named 'burger_controllers.js'.  In here I imported Express and the burger.js file. I then created a router for the app and exported the router at the end of the file.

    I then needed to setup my views. This is where I needed to create handlebars for the HTML layout. 

    Then I created a public folder containing my css, the image of the burger, and another js file for the button functionality. Once everything was working, I tried to deploy to heroku but had issues so will need to deploy it once I am able to get help with it. 

## Table of Contents:

* [Installation](#Installation)

* [Usage](#Usage)

* [License](#License)

* [Contributing](#Contributing)

* [Test Instructions](#Test-Instructions)

* [Demo](#Demo)

* [Questions](#Questions)

* [Challenges](#Challenges)

## Installation:
Must install: mySQL, Express, Handlebars
    npm install mysql
    npm install express
    npm install express-handlebars
## Usage:
    Javascript, HTML, Node, MySQL, Express, Handlebars, CSS, Bootstrap, Workbench, Postman, 
## License: 
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Contributing: 
Vincent Gines. Ask for a Pull Request from my Github profile below in the questions section if you would like to contribute to my burger app.

## Test Instructions:
    First, go to my Github Profile and clone my burger repository onto your computer using gitbash. Then open up your terminal and install the dependencies by typing: npm install. In my connection.js file in the config folder, on line 21, make sure you change the password to whatever password you have on workbench  Once installed, copy the schema and seed files onto your workbench and load it. Once good, go back to your terminal run app by typing: node server.js. You can also use heroku too but having issues deploying that bad boy so will need a pass on it for now until I can get some help. 
## Demo:

## Challenges: 
    This started off just fine. I was able to get majority of it on. However, once I got into the button functionality, I hit so many roadblocks. So my MySQL syntax issues, but was able to figure it out in the end. However, my main one was deploying the application to Heroku.  I only deployed to heroku once, and had problems with it and still had issues so wasn't able to turn in my deployment. I will turn it in once I am able to get some help tomorrow to deploy it.

---
## Questions:

Link to my Github profile: https://github.com/vgines73

Link to my burger app: https://github.com/vgines73/burger

You can reach me by email at: vgines73@gmail.com

© 2021 Vincent Gines. All rights reserved. 

<h1 align="center">
  <a name="logo" href="https://aa-listen-up.herokuapp.com/"><img src="https://i.ibb.co/GvTQmVt/3302a83c84141d31265b51c683e2c0ba-removebg-preview.png" alt="Listenuplogo" width="300"></a>
  <br>
  Listenup Documentation
</h1>

<h4 align="center">Listenup is a cataloging website that allows users to interact with a database of podcasts. Users can sign up and register to create and edit playlists.</h4>
<h1 align="center">
  <a name="logo" href="https://aa-listen-up.herokuapp.com/"><img src="https://i.ibb.co/wMYVZYS/icons8-javascript-96.png" alt="js-logo" width="50"></a>
  <a name="logo" href="https://aa-listen-up.herokuapp.com/"><img src="https://i.ibb.co/xMxSMkw/icons8-pug-96.png" alt="pug-logo" width="50"></a>
  <a name="logo" href="https://aa-listen-up.herokuapp.com/"><img src="https://i.ibb.co/VLYp5m1/icons8-css3-96.png" alt="css-logo" width="50"></a>
  <a name="logo" href="https://i.ibb.co/VpGfh8w/icons8-postgresql-96-1.png"><img src="https://i.ibb.co/VpGfh8w/icons8-postgresql-96-1.png" alt="psql-logo" width="50"></a>
</h1>

 ![](https://img.shields.io/badge/Tools-Nodemon-informational?style=flat&logo=Nodemon&logoColor=white&color=ff8300) ![](https://img.shields.io/badge/Tools-Node.js-informational?style=flat&logo=Node.js&logoColor=white&color=ff8300) ![](https://img.shields.io/badge/Tools-Git-informational?style=flat&logo=Git&logoColor=white&color=ff8300) ![](https://img.shields.io/badge/Tools-Postman-informational?style=flat&logo=Postman&logoColor=white&color=ff8300) ![](https://img.shields.io/badge/Tools-PostgreSQL-informational?style=flat&logo=PostgreSQL&logoColor=white&color=ff8300) ![](https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=JavaScript&logoColor=white&color=ff0000) ![](https://img.shields.io/badge/Code-HTML-informational?style=flat&logo=HTML5&logoColor=white&color=ff0000) ![](https://img.shields.io/badge/Code-CSS-informational?style=flat&logo=CSS3&logoColor=white&color=ff0000) 
 ![](https://img.shields.io/badge/Tools-npm-informational?style=flat&logo=NPM&logoColor=white&color=ff8300)
 
 <div align="center">
  <sub>Built with ❤︎ by
  <a href="https://github.com/julia-richards">Julia Richards</a>, 
  <a href="https://github.com/Cmolerov">Carlos Molero</a>, 
  <a href="https://github.com/jamestlee513">James Lee</a> and
  <a href="https://github.com/miguelcoria94">Miguel Coria.</a>
</div>

A live version of our application can be found [here](https://aa-listen-up.herokuapp.com/).

<h1 align="center">
  <a name="logo" href="https://aa-listen-up.herokuapp.com/"><img src="https://i.ibb.co/RvbxMX6/d143e1526e431e9668ad77077c6d4eae.png" alt="Listenup-home" width="80%"></a>
</h1>

## Overview

Listenup is podcast cataloging web application inspired by Goodreads. As a logged out user, you only have the ability to browse the front page. As a logged in user you have the ability to rate and review podcasts. As a logged in user you also have the ability to create, update and edit playlist. Listenup is built with Express JS, The Pug Template Engine, and Vanilla CSS.

![home gif](https://github.com/miguelcoria94/readme-for-listenup/blob/main/ezgif.com-gif-maker.gif)

<br>

<h1 align="center">
  Features
</h1>

## User Authenication

Users can securely create an account using our login and logout feature. Listenup uses bcrypt to securely hash passwords so that no plain text passwords are ever stored in the database. listenup also uses various middleware functions when processing request and responses so that we know a user is who they say they are. Certain routes also require user authenication for pages to be accessed. [CHECK IT OUT](https://github.com/jamestlee513/listen-up/blob/main/routes/users.js)

![user auth gif](https://github.com/miguelcoria94/readme-for-listenup/blob/main/b4e89c9ab44e6ba8c4d53650b21ce3e0%20(1).png)

Listenup's register and login forms have input validations to enforce clean data submission and protect the integrity of the data submitted.

![user register gif](https://github.com/miguelcoria94/readme-for-listenup/blob/main/ezgif.com-gif-maker%20(2).gif)

When a user trys to access a page that they are not authorized to access

<h1 >
  <a name="logo" href="https://aa-listen-up.herokuapp.com/"><img src="https://github.com/miguelcoria94/readme-for-listenup/blob/main/e80fa4add8b232f9e2b2db2f21364ac9.png" alt="js-logo" width="63%"></a>
 </h1>
 
 ## Podcasts
 
 Listenup's entire purpose is to allow users to catalog and organize podcasts. Each podcast has a title, hostname, publisher, cover image, and description attached to it.
 Users are able to add/remove these podcasts to premade playlist, leave a rating and leave a review. Each podcast page also has a link that takes them directly to spotify or apple. [CHECK IT OUT](https://github.com/jamestlee513/listen-up/blob/main/routes/podcasts.js)
 
 ![user auth gif](https://github.com/miguelcoria94/readme-for-listenup/blob/main/ezgif.com-gif-maker%20(3).gif)
 
 Each route to a podcast uses a regex expression to make sure a valid string is being pased into the url. The req.param is used to retrieve the podcast Id from the database. The Id is also used to retrive the podcast rating. If the user has not submitted a review then the review is set to 0. 
 
 ![user auth gif](https://github.com/miguelcoria94/readme-for-listenup/blob/main/d737524ea38cb46c30ac4741763f8cb0.png)
 
 There are several components working together to get the rating feature to work. Many helper functions are being imported to help with the POST, PUT, DELETE functionality.
 An event listener is set up to listen for user input when a star is clicked. Each star is being compared to an array of five elements. The index of the star is used to set the rating in the database. That index is then being used to render the number of stars to be colored in. [CHECK IT OUT](https://github.com/jamestlee513/listen-up/blob/main/public/javascripts/formInputs.js)
 
 ![user auth gif](https://github.com/miguelcoria94/readme-for-listenup/blob/main/2d1424a5ed4d10dfbb5483fe89661219.png)
 
 ## Playlists
 
  Goodreads has bookshelves, Listenup has playlists. There are 4 premade playlists (My First Playlist, Currently Listening, Want to Listen, Listened). Each playlist has a title, datecreated, and a link to all of the podcast associated with it. Users are only able to update there playlist from the podcast page right now.
 
 ![user auth gif](https://github.com/miguelcoria94/readme-for-listenup/blob/main/ezgif.com-gif-maker%20(4).gif)
 
 When a user logs in they are immediately taking to the playlists page. There is an event listener set up on the sidebar container listening for user input. When a user clicks the name of a playlist the page is not refreshed there are several function working together to render the playlist. One of the functions makes one of the playlist active and loops to make all of the other playlist inactive. Another funciton is then used to populate the main container with playlist data. Because some of the podcasts have large descriptions there is a function to shorten the description and let the user know to click the podcast to read the full description.  [CHECK IT OUT](https://github.com/jamestlee513/listen-up/blob/main/public/javascripts/playlist.js)
 
 
 ![user auth gif](https://github.com/miguelcoria94/readme-for-listenup/blob/main/c579e00a92ba1a2930e5e848d4dbe5a2.png)
 
 ![user auth gif](https://github.com/miguelcoria94/readme-for-listenup/blob/main/59a235718c62e875cd1c6d6b66872bed.png)
 
 ## Reviews
 
 Users are able to leave reviews for each podcasts! Each review is able to be deleted and edited. Each review has a podcast Id asscociated with it and can be viewed by other users. [CHECK IT OUT](https://github.com/jamestlee513/listen-up/blob/main/routes/podcasts.js)
 
 ![user auth gif](https://github.com/miguelcoria94/readme-for-listenup/blob/main/ezgif.com-gif-maker%20(5).gif)
 
  ![user auth gif](https://github.com/miguelcoria94/readme-for-listenup/blob/main/fc49012b919d54ddce109c357a676d33.png)
  
  ![user auth gif](https://github.com/miguelcoria94/readme-for-listenup/blob/main/16dd11eca7e24ce1f93a95bbcd657532.png)
  
  ## Listen Status
  
  Users are able to to update the status of a podcast via a drop down menu on the selected podcast name. When a user updates the status on a podcast a request is made in the background to update the playlist associated with the users selection. [CHECK IT OUT](https://github.com/jamestlee513/listen-up/blob/main/public/javascripts/playlist.js)
  
  ![user auth gif](https://github.com/miguelcoria94/readme-for-listenup/blob/main/ezgif.com-gif-maker%20(6).gif)
  
  
  ![user auth gif](https://github.com/miguelcoria94/readme-for-listenup/blob/main/74185595068382b0ea0db3e5cd7d2a51.png)
  
  
 


<h1 align="center">
🛍️ Ecommerce store Sid Surf Store
<h1>

<h3 align="center">
Backend of the project created from scratch to insert a physical store in the digital market
<h3>

<p align="center">
  <img src="https://img.shields.io/badge/Nodejs-10.16.0-blue.svg?colorB=90c53f">
  <img src="https://img.shields.io/badge/Express-4.17.1-blue.svg?colorB=90c53f">
  <img src="https://img.shields.io/badge/Sequelize-5.21.1-blue.svg?colorB=3f76c5">
  <img src="https://img.shields.io/badge/Postgres-7.12.1-blue.svg?colorB=59add9">
</p>

<hr>

 #### PostgreSQL and MongoDB

 database chosen for use in this project with <br />
 separate containers created in docker

 #### Folder structure end environment setting

 eslint was configured following the airbnb standard

 - eslint
 - prettier

 #### Sequelize e sequelize-cli configuration

 - sequelize is a database orm, that's where I communicate with the database by writing <br />
 in javascript and sequelize is responsible for translating this language to sql
 - sequelize-cli is a command interface that helps you create migrations

 #### Product table creation in database

 I created a table of the description and price of products <br />
 that will use json to integrate with the frontend.

 #### MVC

 Model and controller creation for products

 #### Uploads image

 I decided to create a table just to save the ID of the images that will be stored on the server.
 This will use multer to work with multipart/form-data and create a tmp to store as images.

 #### Technologies used

 - [docker](https://www.docker.com/)
 - [postgresql](https://www.postgresql.org/)
 - [mongodb](https://www.mongodb.com/)
 - [postbird](https://electronjs.org/apps/postbird/)
 - [mongocompass](https://www.mongodb.com/products/compass)

 - [express](https://expressjs.com/)
 - [sequelize](https://sequelize.org/)
 - [sequelize-cli](https://github.com/sequelize/cli)

 - [multer](https://www.npmjs.com/package/multer)

## License

MIT © [Thiago Carvalho](https://thiagocarvalho.com.br/license)

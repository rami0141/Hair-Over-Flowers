
# Hair Over Flowers

![alt text](public/assets/images/hairoverflowers.PNG)

Hairs Over Flowers is a hair salon appointment setter application. The app consists of both a user and an admin side. On the user side, the app displays a calendar with open time slots for hair appointment. The users can click on the available slots and enter in their contact information to make an appointment. The user will receive a confirmation email when an appointment has been scheduled. On the admin side, the owner can login with his/her login info to view all customer appointments. Admin can delete appointments when a client calls to cancel.

## Video Demo
https://vimeo.com/268649613

## Deployed
http://hairoverflowers.com/

## Built With
- [Node.js](https://nodejs.org/en/download/) Open source server framework for using JavaScript
- [Express](https://www.npmjs.com/package/express) Web server framework for Node.js
- [Body-parser](https://www.npmjs.com/package/body-parser) Request body parsing middleware for Node.js
- [Dotenv](https://www.npmjs.com/package/dotenv) Used to obscure passwords and keys
- [Sequelize](http://docs.sequelizejs.com/) An Orm that supports MySQL
- [React](https://reactjs.org/) A JavaScript Library for building UIs
- [Passport](https://www.npmjs.com/package/passport) Used for authentication requests
- [Passport-local](https://www.npmjs.com/package/passport-local) User authentication
- [Express-session](https://www.npmjs.com/package/express-session) Stores session data in the server side
- [Nodemailer](https://nodemailer.com/about/) Used for sending confirmation emails
- [CLNDR.js](http://kylestetz.github.io/CLNDR/) jQuery plugin for creating calendars

## Installing Hair-Over-Flowers

1) From git bash, Terminal or Command Prompt, clone this repository to a directory on your computer.


git clone https://github.com/rami0141/hair-over-flowers.git

## change to the application directory

```
cd hair-over-flowers
```

## install the required packages
```
npm install
```

Users will need to add a file named '.env' to the project folder.
Add these lines to the file:
```
MYSQL_PASSWORD=?????????
MYSQL_USERNAME=?????????
```

Replace the question marks with your MySQL password and username.

Use the schema and seeds file to create the database.

## Authors
* [Maiyer Thao](https://github.com/jaethao) - Front End (Graphic Design, UI, CLNDR.js, Logic)
* [Cristina Zhang](https://github.com/rami0141) - Back End (Database, Logic, Nodemailer, Passport.js)

## Copyright

All code (C) laBellaMafia();

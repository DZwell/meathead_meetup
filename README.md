###Meathead Meet-up

####How to start

First, create a database directory.

`mkdir db`

Next, run `npm install`.

Start the mongo server with `mongod --dbpath=./db --smallfiles`, and then the express server with `node server.js`.

Finally, head to `localhost:3000` to use the app.

#####Creating users

Go to `localhost:3000` (or whatever port you've specified), and use the sign-up form at the bottom.

If you want to check to see if your new user has been created and your password is hashed, use the `mongo` shell's `db.users.find()` command to see the list of users.

#####Checking auth

Using `superagent-cli`, type:

`superagent localhost:3000/api/sign-in -u <USERNAME>:<PASSWORD>`

####Bug-fixes
* Unique tokens [Watch this video](https://www.youtube.com/watch?v=6JrecqJhv4A&index=28&list=PLZshpIn7Zx06gSq--u7Sl70owX3cahriS)
*

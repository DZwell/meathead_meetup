###Meathead Meet-up

####How to start

First, create a database directory.

`mkdir db`

Next, run `npm install`.

Start the mongo server with `mongod --dbpath=./db --smallfiles`, and then the express server with `node server.js`.

Finally, head to `localhost:3000` to use the app.

####Performing get/post/put/delete

In Meathead Meet-up's current version, requests can only be done via the backend.

#####For get/post

Using `superagent cli` and the command line:

`superagent localhost:3000/api/users post '{"username":"buffdude471"}'`

#####For put/delete

Once again using `superagent cli` and the command line:

`superagent localhost:3000/api/users/<UNIQUE MONGO ID> delete`

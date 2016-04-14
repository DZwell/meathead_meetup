###Meathead Meet-up

####How to start

First, create a database directory.

`mkdir db`

Next, run `npm install`.

Start the mongo server with `mongod --dbpath=./db --smallfiles`, the gulp tasks with `gulp && gulp watch`, and then the express server with `node server.js`.

Finally, head to `localhost:3000` to use the app.

####To-do
* Add response for server errors on front end


#####Front-end
* Generate gyms based on searched address (result.name & result.address)
* When a gym is clicked on, modal should show asking the user if they'd like this to be set as their gym
* Users populated based on gym selection
* Top bar search needs to do all map searches
* Top bar user button needs to display user info modally
* Bottom panel needs to overlap map

[Good Example Readme](https://github.com/yang70/secret-spot-saver)

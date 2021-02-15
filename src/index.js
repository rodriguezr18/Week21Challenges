// This is the actual API file


// loaded express into project
const express = require('express');
const bodyParser = require('body-parser')


// set up of API
// create a variable called API
// run the Express method
//  call back: () => {}
// once the server is set up, that callback function is going to run 
// and then you can console log "API up and running"

const api = express();
// full path to whichever script you're writing on, on local machine
// allows to serve index.html
api.use(express.static(__dirname + '/public'));
// sending JSON data back and forth because it is very standardized
// going to parse the data you get and add it to the requested body parameter
api.use(bodyParser.json)

api.listen(3000, () => {
    console.log('API up and running!')
});



api.post('/add', (req,res) => {
    console.log(req.body);
    res.send('It works');
});
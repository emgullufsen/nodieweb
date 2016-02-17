var porty = 1337;

var expressy = require('express');
app = expressy();

var cunt = require('./controllers/indexcontroller.js');

app.use(expressy.static('./public'))

// get controller goin tomorrow for now just a static site
// app.get('/', cunt.rendery);

app.listen(porty);

module.exports = expressy;
console.log('servie fun run runnin at porty num num ' + porty);

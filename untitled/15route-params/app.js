var express = require('express');

var app = express();


app.get('/', function(req, res){
    res.send('this is the home page');
});


app.get('/contact', function(req, res){
    res.send('this is the contact page');
});

//dynamic responces
/*
 app.get('/profile/:name', function(req, res){
 res.send('you requested to see profile with id of ' + req.params.name);
 });
 */

app.get('/profile/:name', function (req, res) {
    res.send('you requested to see profile with name '+ req.params.name);//problem cannot find GET /profile/:name need to change port it helped
});


app.listen(4000);

///http methods GET POST DELETE PUT

//GET -app.get('route', fn)
//POST-ap.post('route', fn)
//DELETE-ap.delete('route', fn)




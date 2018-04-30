var express = require('express');
var app = express();
app.set('view engine', 'ejs');

//now sending template index.html
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});


app.get('/contact', function(req, res){
    res.send(__dirname + '/index.html');
});

//dynamic responces
/*
 app.get('/profile/:name', function(req, res){
 res.send('you requested to see profile with id of ' + req.params.name);
 });
 */
//for template use method render don`t use send
app.get('/profile/:name', function (req, res) {
    var data = {age: 23, job: "ninja", hobbies: ['eating', 'fighting', 'fishing']};
    res.render('profile', {person: req.params.name, data: data});//pass properties to view
});


app.listen(4000);

///http methods GET POST DELETE PUT

//GET -app.get('route', fn)
//POST-ap.post('route', fn)
//DELETE-ap.delete('route', fn)




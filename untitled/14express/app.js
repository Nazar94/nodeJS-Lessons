var express = require('express');

var app = express();


app.get('/', function(req, res){
    res.send('this is the home page');
});


app.get('/contact', function(req, res){
    res.send('this is the contact page');
});


app.listen(3000);

///http methods GET POST DELETE PUT

//GET -app.get('route', fn)
//POST-ap.post('route', fn)
//DELETE-ap.delete('route', fn)




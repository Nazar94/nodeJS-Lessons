var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));//static middleware using express
/*
app.use('/assets', function (req, res, next) {//next-middleware-the thing between req and res
    console.log(req.url);
    next();
});
*/
//now sending template index.html
app.get('/', function(req, res){
    res.render('index');
});


app.get('/contact', function(req, res){
    res.render('contact');//dont needed __dirname because it defaultly knows about views folder
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




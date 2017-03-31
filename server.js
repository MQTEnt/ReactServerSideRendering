import express from 'express';
var app = express();
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './public/App.jsx';


app.use(express.static('public'));

app.get('/', function(request, response) {
	var pokedex = [
    'pichu', 'ivysaur', 'horsea', 'pikachu',
    'kingdra', 'mew', 'mewtwo', 'charmeleon',
    'bulbasaur', 'venusaur', 'charizard', 'squirtle'
    ]
    var html = ReactDOMServer.renderToString(<App pokedex={pokedex} />);
    response.send(html);
});

var PORT = 3001;
app.listen(PORT, function() {
    console.log('http://localhost:' + PORT);
});

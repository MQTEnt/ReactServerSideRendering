import React from 'react';
import ReactDOM from 'react-dom';
import './public/index.css';
import './public/PokeCard.css';
import './public/Search.css';
import './public/Title.css';
import App from './public/App.jsx';
var pokedex = [
'pichu', 'ivysaur', 'horsea', 'pikachu',
'kingdra', 'mew', 'mewtwo', 'charmeleon',
'bulbasaur', 'venusaur', 'charizard', 'squirtle'
]
ReactDOM.render(
    <App pokedex = {pokedex}/>, document
);


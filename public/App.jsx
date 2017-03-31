import React, { Component } from 'react';
import Title from './Title.jsx';
import Search from './Search.jsx';
import PokeCard from './PokeCard.jsx';
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      pokedex: this.props.pokedex
    }
    this.onUpdate = this.onUpdate.bind(this)
  }
  onUpdate(word){
    let newPokedex = this.props.pokedex.filter(p => p.indexOf(word.toLowerCase()) > -1);
    this.setState({pokedex: newPokedex})
  }
  render() {
    return (
      	<html>
		  <head>
		  </head>
		  <body>
		      <div>
		        <Title text='Pokedia' />
		        <Search filter={this.onUpdate} />
		        <section className='Content'>
		        {
		          this.state.pokedex.map((p)=> <PokeCard name={p} />)
		        }
		        </section>
		      </div>
		      <script src='/bundle.js' />
		  </body>
  		</html>
      );
  }
}
export default App;

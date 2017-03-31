import React from 'react';
const PokeCard = ({name}) => (
	<article className='PokeCard'>
		<h3>{name}</h3>
		<img src={'https://img.pokemondb.net/artwork/' + name + '.jpg'} />
	</article>
)

export default PokeCard
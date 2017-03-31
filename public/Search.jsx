import React from 'react';
class Search extends React.Component{
	constructor(props){
		super(props)

		this.onChanged = this.onChanged.bind(this)
	}
	onChanged(e){
		this.props.filter(e.target.value)
	}
	render(){
		return (
			<div className='Search'>
				<input type='text' onChange={this.onChanged} placeholder='Type pokemon name...'/>
			</div>
		)
	};
}

export default Search
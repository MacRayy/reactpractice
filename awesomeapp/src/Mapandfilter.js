'use strict'

import React from 'react'

class Starwars extends React.Component {
	constructor() {
		super()
		this.state = {items: []}
	}

	componentWillMount() {
		fetch( 'https://swapi.co/api/planets/?format=json' )
			.then( response => response.json() )
			.then( ({results: items}) => this.setState({items}) )
	}

	filter(event) {
		this.setState({filter: event.target.value})
	}

	render() {
		let items = this.state.items
		if (this.state.filter) {
			items = items.filter( item =>
				item.name.toLowerCase().includes(this.state.filter.toLowerCase())
			)
		}
		return (
			<div>
				<input type="text" onChange={this.filter.bind(this)}/>
				{items.map(item =>
					<Planet key={item.name} planet={item}/>)}
			</div>
		)
	}
}

const Planet = (props) => <h4>{props.planet.name}</h4>

export default Starwars

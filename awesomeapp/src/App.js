'use strict'

import React from 'react'

// class App extends React.Component {
// 	render() {
// 		return React.createElement ('h1', null, 'hello world')
// 	}
// }

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			newText: 'this is the state text'
		}
	}

	update(event) {
		this.setState({newText: event.target.value})
	}

	render() {
		let txt = this.props.txt
		let cat = this.props.cat

		return (
			<div>
				<h1>{txt}</h1>
				<p>{cat}</p>
				<p>{this.props.fruit}</p>
				<div>
					<input type="text"
						onChange={this.update.bind(this)}/>
					<h2>{this.state.newText}</h2>
				</div>
			</div>
		)
	}
}

App.defaultProps = {
	txt: 'this is the default text'
}

export default App

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
					<h2>{this.state.newText}</h2>
					<InputWidget update={this.update.bind(this)}/>
				</div>
				<Button>I <Heart/> React</Button>
				<Title text="The title"/>
			</div>
		)
	}
}

const InputWidget = (props) =>
	<input type="text" onChange={props.update}/>

const Button = (props) =>
	<button>{props.children}</button>

class Heart extends React.Component {
	render() {
		return <span>&hearts;</span>
	}
}

const Title = (props) => <h2>Title: {props.text}</h2>

Title.propTypes = {
	text(props, propName, component) {
		if (!(propName in props)) {
			return new Error (`missign ${propName}`)
		}
		if (props[propName].length < 6) {
			return new Error (`${propName} was too short`)
		}
	}
}

App.defaultProps = {
	txt: 'this is the default text'
}

export default App

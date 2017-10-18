'use strict'

import React from 'react'
import Wrapper from './Wrapper'

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
		},
		this.state = {
			a: '',
			b: ''
		}
	}

	update(event) {
		this.setState({newText: event.target.value})
	}

	updateInput() {
		this.setState({
			a: this.a.refs.input.value,
			b: this.refs.b.value
		})
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
				<div>
					<Input
						ref={component => this.a = component}
						updateInput={this.updateInput.bind(this)}
					/> {this.state.a}
					<hr/>
					<input type="text"
						ref="b"
						onChange={this.updateInput.bind(this)}
					/> {this.state.b}
				</div>
				<Wrapper/>
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

class Input extends React.Component {
	render() {
		return <input ref="input" type="text" onChange={this.props.update}/>
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

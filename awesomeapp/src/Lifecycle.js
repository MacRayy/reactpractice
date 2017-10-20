'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

class Lifecycle extends React.Component {
	constructor() {
		super()
		this.state = {increasing: false}
	}

	update() {
		ReactDOM.render(<Lifecycle val={this.props.val + 1}/>, document.getElementById('life'))
	}

	componentWillReceiveProps(nextProps) {
		this.setState({increasing: nextProps.val >this.props.val})
	}

	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.val % 5 === 0
	}

	render() {
		console.log(this.state.increasing)
		return (
			<button onClick={this.update.bind(this)}>
				{this.props.val}
			</button>
		)
	}

	componentDidUpdate(prevProps, prevState) {
		console.log(`prevProps: ${prevProps.val}`)
	}
}

Lifecycle.defaultProps = {val: 0}

export default Lifecycle

// Node modules
import React, { Component } from 'react';
import Navigation from './src/navigation/Index';

export default class App extends Component {
	constructor(props: object) {
		super(props);
		this.state = {};
	}

	render() {
		return <Navigation />;
	}
}

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './header/Header';

class Layout extends Component {
	render(){
		return(
			<div>
			<Header />
				{ this.props.children }
			</div>
		);
	}
}

export default Layout;
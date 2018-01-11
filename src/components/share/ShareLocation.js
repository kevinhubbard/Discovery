import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';

class ShareLocation extends Component{
	render(){
		return(
			<div className="container">
				<div className="row">
					<div className="col-md-12 text-center">
						<h1 className="text-danger">Share your Location Here</h1>
					</div>
				</div>
			</div>
		);
	}
}

export default ShareLocation;


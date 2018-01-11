import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';


class Header extends Component {
	render(){
		return(
			 <nav className="navbar navbar-inverse">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <Link to='/' className="navbar-brand"><span className="glyphicon glyphicon-globe">&nbsp;</span>Discover</Link>
			    </div>
			    <Link to='/login'><button className="btn btn-warning navbar-btn pull-right">Login</button></Link>
			  </div>
			</nav> 
		);
	}
}

export default Header;
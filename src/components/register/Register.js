import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';


class Register extends Component{
	render(){
		return(
			<div className="container">
			<div className="row">
				<div className="col-md-6">
					<div className="panel-group">
						<div className="panel panel-success">
							<div className="panel-heading text-center"><h1>Login</h1></div>
							<div className="panel-body">
								<form>
								  <div className="form-group">
								    <label for="email">Email address:</label>
								    <input type="email" className="form-control" id="email" />
								  </div>
								  <div className="form-group">
								    <label for="pwd">Password:</label>
								    <input type="password" className="form-control" id="pwd" />
								  </div>
								  <div className="checkbox">
								    <label><input type="checkbox" /> Remember me</label>
								  </div>
								  <Link to='/'><button type="submit" className="btn btn-primary">Login</button></Link>
								</form> 	
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-6">
					<div className="panel-group">
						<div className="panel panel-primary">
							<div className="panel-heading text-center"><h1>Register</h1></div>
							<div className="panel-body">
								<form>
								  <div className="form-group">
								    <label for="email">Email address:</label>
								    <input type="email" className="form-control" id="email" />
								  </div>
								  <div className="form-group">
								    <label for="pwd">Password:</label>
								    <input type="password" className="form-control" id="pwd" />
								  </div>
								   <div className="form-group">
								    <label for="pwd">Confirm Password:</label>
								    <input type="password" className="form-control" id="pwd" />
								  </div>
								  <Link to='/'><button type="submit" className="btn btn-success">Register</button></Link>
								</form> 
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
			
			 
		);
	}
}

export default Register;
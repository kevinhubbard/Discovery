import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import firebase, { auth, provider } from './firebase.js';


class App extends Component {
constructor() {
    super();
    this.state = {
      user: null  
    }

    this.login = this.login.bind(this); 
    this.logout = this.logout.bind(this); 
}
	
  
	logout() {
	  auth.signOut()
	    .then(() => {
	      this.setState({
	        user: null
	      });
	    });
	}
	login(){
	  auth.signInWithPopup(provider) 
	    .then((result) => {
	      const user = result.user;
	      this.setState({
	        user
	      });
	    });
	}

	componentDidMount() {
		  auth.onAuthStateChanged((user) => {
		    if (user) {
		      this.setState({ user });
		    } 
		  });
	}

	
	render(){
		return(
			<div className="container">
				{ this.state.user ?
				<div className="row">
				<div className="col-md-4">
					<div className="panel-group">
						<div className="panel panel-primary">
					      <div className="panel-heading"><h1 className="text-center">Discover a New Place</h1></div>
					      <div className="panel-body text-center">
					      	<Link to='/discover'><button className="btn btn-success">Discover</button></Link>
					      </div>
					    </div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="panel-group">
						<div className="panel panel-success">
					      <div className="panel-heading text-center"><h1>Share a new Discovery</h1></div>
					      <div className="panel-body text-center">
					      	<Link to='/share'><button className="btn btn-info">Share</button></Link>
					      </div>
					    </div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="panel-group">
						<div className="panel panel-info">
					      <div className="panel-heading"><h1>Search Categories</h1></div>
					      <div className="panel-body">
					      	<div className="form-group">
							  <label htmlFor="sel1">Select a Category</label>
							  <select className="form-control" id="sel1">
							    <option>Parks</option>
							    <option>Nightlife</option>
							    <option>Sports</option>
							    <option>Concerts</option>
							  </select>
							</div>
					      </div>
					    </div>
					</div>
				</div>
				</div>

				:
				
				<div className='jumbotron'>
					<h1 className='text-center'>Please Login with your Gmail account to use Discovery</h1>
				</div>
			}
			</div>
			
			);
	
	}
}

export default App;
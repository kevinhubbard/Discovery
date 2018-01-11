import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';


class App extends Component {
	render(){
		return(
			<div className="container">
				<div className="row">
				<div className="col-md-4">
					<div className="panel-group">
						<div className="panel panel-primary">
					      <div className="panel-heading"><h1 className="text-center">Discover a New Place</h1></div>
					      <div className="panel-body text-center">
					      	<button className="btn btn-success">Discover</button>
					      </div>
					    </div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="panel-group">
						<div className="panel panel-success">
					      <div className="panel-heading text-center"><h1>Share a new Discovery</h1></div>
					      <div className="panel-body text-center">
					      	<button className="btn btn-info">Share</button>
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
							    <option>Speakeasies</option>
							  </select>
							</div>
					      </div>
					    </div>
					</div>
				</div>
				</div>
			</div>
			
			);
	}
}

export default App;
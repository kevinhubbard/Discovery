import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';
import firebase from '../../firebase.js';


class Discover extends Component{
	constructor() {
    super();
    this.state = {
      currentItem: '',
      username: '',
      items: []
    }
    this.handleChange = this.handleChange.bind(this);
    
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
      title: this.state.currentItem,
      user: this.state.username
    }
    itemsRef.push(item);
    this.setState({
      currentItem: '',
      username: ''
    });
  }
  componentDidMount() {
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          user: items[item].user
        });
      }
      this.setState({
        items: newState
      });
    });
  }
	render(){
		return(
			<div className='container'>
			<div className='row'>
			 <div className='col-md-6 col-md-offset-3 text-center'>
		      <div className='display-item panel-group'>
		        <div className="panel panel-info">
		          <div className="panel-heading"><h1>Discovery Feed</h1></div>
		          <div className="panel-body">
		            <ul className='list-group'>
		            {this.state.items.map((item) => {
		            return (
		              <li className='list-unstyled' key={item.id}>
		                <h3>{item.title}</h3>
		                <p>Visited by: {item.user}</p>
		              </li>
		              )
		              })}
		            </ul>
		          </div>
		        </div>
		      </div>
		    </div>
		    </div>
		    </div>

		);
	}
}

export default Discover;


import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';
import firebase, { auth, provider } from '../../firebase.js';


class Discover extends Component {
  constructor() {
    super();
    this.state = {
      currentItem: '',
      username: '',
      items: [],
      user: null
    }
    this.login = this.login.bind(this); 
    this.logout = this.logout.bind(this); 
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  logout() {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null
        });
      });
  }

  login() {
    auth.signInWithPopup(provider) 
      .then((result) => {
        const user = result.user;
        this.setState({
          user
        });
      });
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
    user: this.state.user.displayName || this.state.user.email
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

    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } 
    });
}



	render(){
		return(
			<div className='container'>
      {this.state.user ?
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
                    <img style={{with:100, height:100}} className='img-responsive img-circle profile-pic center-block' src={this.state.user.photoURL} />
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
        :
        <div className='jumbotron'>
          <h1 className='text-center'>Please Login with your Gmail account to use Discovery</h1>
        </div>
        }
		    </div>

		);
	}
}

export default Discover;


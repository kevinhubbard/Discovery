import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import firebase, { auth, provider } from '../../firebase.js';


class Header extends Component {
	constructor() {
    super();
    this.state = {
      
      user: null
    }
    this.login = this.login.bind(this); 
    this.logout = this.logout.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  logout() {
	    auth.signOut()
	      .then(() => {
	        this.setState({
	          user: null
	        });
	        window.location.reload();
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
			 <nav className="navbar navbar-inverse">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <Link to='/' className="navbar-brand"><span className="glyphicon glyphicon-globe">&nbsp;</span>Discover</Link>
			    </div>

			    {this.state.user ?
			    <button className="btn btn-danger navbar-btn pull-right" onClick={this.logout}>Logout</button>
			    :	
			    <button className="btn btn-warning navbar-btn pull-right" onClick={this.login}>Login</button>
				}
			  </div>
			</nav> 
		);
	}
}



export default Header;
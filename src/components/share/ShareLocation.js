import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';
import firebase, { auth, provider } from '../../firebase.js';

class ShareLocation extends Component {
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
  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }


  render() {
    return (
<div className='container center-block'>
  {this.state.user ?
  <div className="row text-center">
    <div className='col-md-6'>
      <div className="panel-group">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h1>Share your Location</h1>
          </div>           
          <div className="panel-body">
            <section className='add-item'>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input className='form-control input-lg' type="text" name="username" placeholder="What's your name?" value={this.state.user.displayName || this.state.user.email} />
                </div>
                <div className="form-group">
                  <input className='form-control input-lg' type="text" name="currentItem" placeholder="What are you bringing?" onChange={this.handleChange} value={this.state.currentItem} />
                </div>
                <button className="btn btn-warning">Add Location</button>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
    <div className='col-md-6 text-center'>
      <div className='display-item panel-group'>
        <div className="panel panel-info">
          <div className="panel-heading"><h1>Your Shared Locations</h1></div>
          <div className="panel-body">
            <ul className='list-group'>
            {this.state.items.map((item) => {
            return (
              <li className='list-unstyled' key={item.id}>
                <h3>{item.title}</h3>
                <p>Visited by: {item.user}</p>

                {item.user === this.state.user.displayName || item.user === this.state.user.email ?
                <button className="btn btn-danger" onClick={() => this.removeItem(item.id)}>Remove Location</button> : null}
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
export default ShareLocation;

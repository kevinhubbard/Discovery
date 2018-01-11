import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Header from './components/header/Header';
import Layout from './components/Layout';
import Register from './components/register/Register';

ReactDOM.render(

	  <Router>
	      <Layout >
	        <Route exact path='/' component={App} />
	        <Route path='/login' component={Register} />
	      </Layout>
	  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
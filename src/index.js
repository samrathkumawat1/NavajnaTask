import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';

import LogInPage from './LogInPage';
import Admin from './Admin';
import CustomCard from './Card';
import App from './App';
import CustomChart from './Chart';
import 'bootstrap/dist/css/bootstrap.min.css';

import SimpleTable from "./SimpleTable";

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


import Dashboard1 from './Dashboard';
import USerProfile from './USerProfile';
import Tables from './Tables';

ReactDOM.render(
    <Router >
    <Switch>
    <Route exact path="/" component={LogInPage} />
    <Route  path="/Dashboard" component={Admin} />
    <Route path="/Dashboard/TableList" component={Tables}/>
    <Route path="/Dashboard//USerProfile" component={USerProfile}/>
    
    
    
    </Switch>
  </Router>,
  document.getElementById('root')
);

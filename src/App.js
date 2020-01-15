import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import About from './components/pages/About'
import Alert from './components/layout/Alert'
import GithubState from './context/github/GithubState'
const App = () => {

  const [loading, setLoading] = useState(true)
  const [alerts, setAlerts] = useState({})

  const setAlert = (msg, type) => {
    setAlerts({msg, type})
    setTimeout(() => setAlerts({}), 5000)
  }

  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar title="Minder"/>
          <div className="container">
            <Alert alert={alerts} />
            <Switch>
              <Route exact path='/' render={props => (
                  <Fragment>
                    <Search setAlert={setAlert}
                      />
                    <Users loading={loading}/>
                  </Fragment>
                )} />
              <Route path='/about' component={About}/>
              <Route exact path='/user/:login' component={User}/>
            </Switch>
            
          </div>
        </div>
      </Router>
    </GithubState>
  );
}

export default App;

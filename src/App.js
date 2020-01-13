import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import axios from 'axios';
import Search from './components/users/Search';
import About from './components/pages/About'
import Alert from './components/layout/Alert'
import GithubState from './context/github/GithubState'
const App = () => {

  // const [github, setGithub] = useState({
  //   users: [],
  //   user: {},
  //   loading: true,
  //   alert: null,
  //   repos: []
  // })
  // const [users, setUsers] = useState([])
  // const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [alerts, setAlerts] = useState({})

  useEffect(() => {
    // const fetchData = async () => {
    //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    //   // setGithub({...github, users: res.data, loading: false})
    //   setUsers(res.data)
    //   setLoading(false)
    //   console.log('State Set')
    // }
    // fetchData()
  }, [])


  // Get a single github user
  // const getUser = async username => {
  //   const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)    
  //   // setGithub({...github, user: res.data, loading: false})
  //   setUser(res.data)
  //   setLoading(false)
  //   console.log('getUser called')
  // }

  // Get Users Repos
  const getUserRepos = async username => {
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)    
    // setGithub({...github, repos: res.data, loading: false})
    setRepos(res.data)
    setLoading(false)
    console.log('get user repos called')
  }

  // Clear User From State
  // const clearUsers = () => {
  //   // setGithub({...github, users: [], loading: false})
  //   setUsers([])
  // }

  const setAlert = (msg, type) => {
    // setGithub({...github, alert: {msg, type}, loading: false })
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
              <Route exact path='/user/:login' render={props => (
                <User {...props} getUserRepos={getUserRepos} repos={repos}/>)}/>
            </Switch>
            
          </div>
        </div>
      </Router>
    </GithubState>
  );
}

export default App;

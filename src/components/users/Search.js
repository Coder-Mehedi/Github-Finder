import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext'

const Search = ({ setAlert }) => {
    const githubContext = useContext(GithubContext)
    const { users, searchUser, clearUsers } = githubContext;
    console.log(githubContext)

    const [text, setText] = useState('')


    const handleSubmit = e => {
        e.preventDefault()
        if(text === ''){
            setAlert('Please enter something', 'light')
        } else {
            searchUser(text)
            setText('')
        }
    }

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" name="text" placeholder="Search User..."
                    value={text} onChange={e => setText(e.target.value)}/>
                <input type="submit" value="Search" className="btn btn-dark btn-block"/>
            </form>
            {users.length && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}
            
        </div>
    )
}
Search.propTypes = {
    setAlert: PropTypes.func.isRequired,
}

export default Search

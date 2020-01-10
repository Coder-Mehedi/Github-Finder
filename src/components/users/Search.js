import React, { useState } from 'react'
import PropTypes from 'prop-types';

const Search = ({searchUser, clearUsers, users, setAlert}) => {
    const [input, setInput] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if(input === ''){
            setAlert('Please enter something', 'light')
        } else {
            searchUser(input)
            setInput('')
        }
    }

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" name="text" placeholder="Search User..."
                    value={input} onChange={e => setInput(e.target.value)}/>
                <input type="submit" value="Search" className="btn btn-dark btn-block"/>
            </form>
            {users.length && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}
            
        </div>
    )
}
Search.propTypes = {
    searchUser: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
    setAlert: PropTypes.func.isRequired,
}

export default Search

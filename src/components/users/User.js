import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'


const User = props => {
	useEffect(() => {
		props.getUser(props.match.params.login)
	}, [])
	const { name, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable} = props.user
	const { getUser, user, loading } = props

	if(loading) {
		return <Spinner/>
	} else {
		return (
			<Fragment>
				<Link to='/' className="btn btn-light">Back To Search</Link>
				Hireable: {' '}
				{hireable ? <i className="fas fa-check text-success"></i> : <i className="fas fa-times-circle text-danger"></i>}
				<div className="card grid-2">
					<div className="all-center">
						<img src={avatar_url} className="round-img" style={{ width: '150px'}}/>
						<h1>{name}</h1>
						<p>Location: {location}</p>
					</div>
				</div>
			</Fragment>
		)
	}
	
}

User.propTypes = {
  getUser: PropTypes.bool,
  user: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired
}

export default User;
import React from 'react';

const Alert = ({ alert }) => {
	return (
		Object.entries(alert).length !== 0 && (
			<div className={`alert alert-${alert.type}`}>
				<i className="fas fa-info-circle"></i> {alert.msg}
			</div>
		)
	)
}

export default Alert;

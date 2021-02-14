//import logo from './logo.png'
import './App.css';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { accountSelector } from '../store/selectors'


class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<a className="navbar-brand" href="#/"><img src={require('./logo.png')} alt='Solida Logo' width='30' height='30' />  Solidex SLD Token Exchange</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-targets="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<a
							className="nav-link small"
							href={`https://etherscan.io/address/${this.props.account}`}
							target="_blank"
							rel="noopener noreferrer"
							>
								{this.props.account}
						</a>
					</li>
				</ul>
			</nav>
		)
	}
}

function mapStateToProps(state) {
	return {
		account: accountSelector(state)
	}
}

export default connect(mapStateToProps)(Navbar)
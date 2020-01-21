import React from 'react';
import logo from './assets/img/noun_face.svg';
import './assets/style/Header.css';

function Header() {
	return (
		<div className="Header">
			<img src={logo} className="Header-logo" alt="logo" />
			<ul className="menu">
				<li>
					Home
				</li>
				<li>
					Page 2
				</li>
				<li>
					Page 3
				</li>
			</ul>
		</div>
	)
}

export default Header;
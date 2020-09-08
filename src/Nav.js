import React from 'react';
import logo from './img/logo.png';
import { NavLogo, StyleNav } from './styles/NavStyle';
import { useState } from 'react';
import { useEffect } from 'react';

function Nav () {
	const [ show, setShow ] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				setShow(true);
			}
			else {
				setShow(false);
			}
		});
		return () => {
			window.removeEventListener('scroll');
		};
	}, []);

	return (
		<StyleNav className={`nav ${show && 'nav-black'}`}>
			<NavLogo className="nav-logo" src={logo} alt="" />
		</StyleNav>
	);
}

export default Nav;

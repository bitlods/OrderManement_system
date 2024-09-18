import React from 'react';
import {
Nav,
NavLink,
NavMenu,
NavBtn,
NavBtnLink,
} from '../components/NavbarElement';

const Bar = () => {
return (
	<>
	<u><h1>laef disease detection system using machine learning</h1></u>
	
	<Nav>

		<NavMenu>
		<NavLink to='/about' activeStyle>
			About
		</NavLink>
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/' activeStyle>
			Home
		</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Bar;

			

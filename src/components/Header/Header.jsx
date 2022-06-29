import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import shoppingCartImage from '../../assets/shopping-cart.png';

const Header = () => {
	const result = useSelector(state => state.cartData);
	return (
		<div className='header'>
			<Link to='/' className='logo'>
				<span>E-Comm</span>
			</Link>
			<Link to='/cart'>
				<div className='cart-div'>
					<span>{result.length}</span>
					<img src={shoppingCartImage} alt='Shopping Cart' />
				</div>
			</Link>
		</div>
	);
};

export default Header;

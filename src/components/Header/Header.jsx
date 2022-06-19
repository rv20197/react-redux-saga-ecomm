import React from 'react';
import { useSelector } from 'react-redux';

import shoppingCartImage from '../../assets/shopping-cart.png';

const Header = () => {
	const result = useSelector(state => state.cartData);
	return (
		<div className='header'>
			<div className='cart-div'>
				<span>{result.length}</span>
				<img src={shoppingCartImage} alt='Shopping Cart' />
			</div>
		</div>
	);
};

export default Header;

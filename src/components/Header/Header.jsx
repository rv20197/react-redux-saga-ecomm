import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { productSearch } from '../../redux/Product/productAction';
import shoppingCartImage from '../../assets/shopping-cart.png';

const Header = () => {
	const result = useSelector(state => state.cartData);
	const dispatch = useDispatch();

	return (
		<div className='header'>
			<Link to='/' className='logo'>
				<span>E-Comm</span>
			</Link>
			<div className='search-bar'>
				<input
					type='text'
					placeholder='Search Product'
					onChange={e => dispatch(productSearch(e.target.value))}
				/>
			</div>
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

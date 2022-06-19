import React from 'react';

import { addToCart } from '../../redux/action';
import { useDispatch } from 'react-redux';

const Main = () => {
	const dispatch = useDispatch();
	const product = {
		name: 'iPhone 13',
		type: 'Mobile',
		color: 'Black',
		price: 65000
	};
	const addToCartHandler = () => {
		dispatch(addToCart(product));
	};
	return (
		<div>
			<button onClick={addToCartHandler}>Add To Cart</button>
		</div>
	);
};

export default Main;

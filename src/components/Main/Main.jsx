import React from 'react';

import { addToCart, removeFromCart, emptyCart } from '../../redux/action';
import { useDispatch } from 'react-redux';

const Main = () => {
	const dispatch = useDispatch();
	const product = {
		name: 'iPhone 13',
		type: 'Mobile',
		color: 'Black',
		price: 65000
	};
	const addToCartHandler = () => dispatch(addToCart(product));
	const removeFromCartHandler = () => dispatch(removeFromCart(product.name));
	const emptyCartHandler = () => dispatch(emptyCart());

	return (
		<>
			<div>
				<button onClick={addToCartHandler}>Add to Cart</button>
			</div>
			<div>
				<button onClick={removeFromCartHandler}>Remove from Cart</button>
			</div>
			<div>
				<button onClick={emptyCartHandler}>Empty Cart</button>
			</div>
		</>
	);
};

export default Main;

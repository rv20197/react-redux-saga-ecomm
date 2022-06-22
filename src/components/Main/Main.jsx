import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addToCart, removeFromCart, emptyCart } from '../../redux/cartAction';
import { productListing } from '../../redux/productAction';

const Main = () => {
	const dispatch = useDispatch();

	// const cartData = useSelector(state => state.cartData);

	// const cartData = useSelector(state => state.cartData);
	// console.log(cartData);

	// const productData = useSelector(state => state.productData);
	// console.log(productData);

	const product = {
		name: 'iPhone 13',
		type: 'Mobile',
		color: 'Black',
		price: 65000
	};

	const addToCartHandler = () => dispatch(addToCart(product));
	const removeFromCartHandler = () => dispatch(removeFromCart(product.name));
	const emptyCartHandler = () => dispatch(emptyCart());

	const productListingHandler = () => dispatch(productListing('Hello'));

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
			<div>
				<button onClick={productListingHandler}>Get Product List</button>
			</div>
		</>
	);
};

export default Main;

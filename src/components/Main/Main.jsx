import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	addToCart,
	removeFromCart,
	emptyCart
} from '../../redux/Cart/cartAction';
import { productListing } from '../../redux/Product/productAction';

import './Main.css';

const Main = () => {
	const dispatch = useDispatch();

	const productData = useSelector(state => state.productData);

	const productListingHandler = useCallback(() => {
		dispatch(productListing());
	}, [dispatch]);

	const emptyCartHandler = () => dispatch(emptyCart());

	useEffect(() => {
		productListingHandler();
	}, [productListingHandler]);

	return (
		<>
			<div>
				<button onClick={emptyCartHandler}>Empty Cart</button>
			</div>
			<div className='product-container'>
				{productData.map(item => (
					<div className='product-item' key={item.id}>
						<img
							src={item.image}
							alt={item.productName}
							width='200px'
							height='200px'
						/>
						<div>Name: {item.productName}</div>
						<div>Color: {item.color}</div>
						<div>Price: {item.price}</div>
						<div>Category: {item.category}</div>
						<div>Brand: {item.brand}</div>
						<div>
							<button className='btn' onClick={() => dispatch(addToCart(item))}>
								Add to Cart
							</button>
							<button
								className='btn'
								onClick={() => dispatch(removeFromCart(item.id))}>
								Remove from Cart
							</button>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Main;

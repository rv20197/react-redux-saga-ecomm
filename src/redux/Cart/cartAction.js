import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from '../constant';

export const addToCart = payload => {
	return {
		type: ADD_TO_CART,
		payload
	};
};

export const removeFromCart = payload => ({
	type: REMOVE_FROM_CART,
	payload
});

export const emptyCart = payload => ({
	type: EMPTY_CART,
	payload
});

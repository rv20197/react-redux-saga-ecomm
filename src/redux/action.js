import { ADD_TO_CART } from './constant';

export const addToCart = payload => {
	console.log(payload);
	return {
		type: ADD_TO_CART,
		payload
	};
};

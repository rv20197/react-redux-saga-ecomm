import { ADD_TO_CART, REMOVE_FROM_CART } from './constant';

const initialData = [];

export const cartData = (data = initialData, { type, payload }) => {
	switch (type) {
		case ADD_TO_CART:
			console.log(`From Add To Cart Reducer: ${type}`);
			return { ...data, ...payload };

		case REMOVE_FROM_CART:
			console.log('From REMOVE_FROM_CART');
			return 'REMOVE_FROM_CART';

		default:
			return data;
	}
};

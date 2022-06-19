import { ADD_TO_CART } from './constant';

const initialData = [];

export const cartData = (data = initialData, { type, payload }) => {
	switch (type) {
		case ADD_TO_CART:
			return [...data, payload];

		default:
			return data;
	}
};

import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from './constant';

const initialData = [];

export const cartData = (data = initialData, { type, payload }) => {
	switch (type) {
		case ADD_TO_CART:
			return [...data, payload];
		case REMOVE_FROM_CART:
			const newData = data.map(value => ({ ...value }));
			newData.length = newData.length ? newData.length - 1 : initialData;
			return [...newData];
		case EMPTY_CART:
			data = initialData;
			return [...data];
		default:
			return data;
	}
};

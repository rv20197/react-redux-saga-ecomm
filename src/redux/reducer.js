import { ADD_TO_CART } from './constant';

const initialData = [];

export const cartData = (data = initialData, { type, payload }) => {
	switch (type) {
		case ADD_TO_CART:
			console.log(`From Reducer: ${type}`);
			
			return { ...data, ...payload };

		default:
			return data;
	}
};

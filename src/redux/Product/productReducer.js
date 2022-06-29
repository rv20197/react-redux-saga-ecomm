import { SET_PRODUCT_LIST } from '../constant';
const initialData = [];

export const productData = (data = initialData, { type, payload }) => {
	switch (type) {
		case SET_PRODUCT_LIST:
			return [...payload];
		default:
			return data;
	}
};

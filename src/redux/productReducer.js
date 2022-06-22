import { PRODUCT_LIST } from './constant';
const initialData = {};

export const productData = (data = initialData, { type, payload }) => {
	switch (type) {
		case PRODUCT_LIST:
			return { ...data, ...payload };

		default:
			return data;
	}
};

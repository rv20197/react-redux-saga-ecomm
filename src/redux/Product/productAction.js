import { PRODUCT_LIST, SEARCH_PRODUCT } from '../constant';

export const productListing = () => {
	return { type: PRODUCT_LIST };
};

export const productSearch = payload => {
	return {
		type: SEARCH_PRODUCT,
		payload
	};
};

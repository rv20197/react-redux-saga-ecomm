import { combineReducers } from 'redux';

import { cartData } from './Cart/cartReducer';
import { productData } from './Product/productReducer';

export default combineReducers({
	cartData,
	productData
});

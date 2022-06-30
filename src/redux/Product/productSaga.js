// Generator Function (It's used to handle async operations)
import { takeEvery, put } from 'redux-saga/effects';
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from '../constant';

function* getProducts() {
	let data = yield fetch('http://localhost:3500/product');
	data = yield data.json();
	yield put({ type: SET_PRODUCT_LIST, payload: data });
}

function* searchProduct(params) {
	let productData = yield fetch(
		`http://localhost:3500/product?q=${params.payload}`
	);
	productData = yield productData.json();
	yield put({ type: SET_PRODUCT_LIST, payload: productData });
}

function* productSaga() {
	yield takeEvery(PRODUCT_LIST, getProducts);
	yield takeEvery(SEARCH_PRODUCT, searchProduct);
}

export default productSaga;

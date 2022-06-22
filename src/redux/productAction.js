import { PRODUCT_LIST } from './constant';

export const productListing = async payload => {
	let data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
	data = await data.json();
	console.log(data);
	return { type: PRODUCT_LIST, payload };
};

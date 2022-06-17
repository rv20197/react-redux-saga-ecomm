import { addToCart, removeFromCart } from './redux/action';
import { useDispatch } from 'react-redux';
function App() {
	const dispatch = useDispatch();
	const product = {
		name: 'iPhone 13',
		type: 'Mobile',
		color: 'Black',
		price: 65000
	};
	const addToCartHandler = () => {
		dispatch(addToCart(product));
		dispatch(removeFromCart(product));
	};
	return (
		<div className='App'>
			<button onClick={addToCartHandler}>Add To Cart</button>
		</div>
	);
}

export default App;

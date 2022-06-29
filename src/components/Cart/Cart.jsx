import { useSelector } from 'react-redux';

const Cart = () => {
	const cartData = useSelector(state => state.cartData);
	let amount =
		cartData.length &&
		cartData.map(item => item.price).reduce((prev, next) => prev + next);
	return (
		<div>
			{cartData.length > 0 ? (
				<>
					<h1>Cart</h1>
					<div className='cart-page-container'>
						<table className='cart-page-container__table'>
							<tr>
								<td>Name</td>
								<td>Color</td>
								<td>Price</td>
								<td>Brand</td>
								<td>Category</td>
							</tr>
							{cartData.map(item => (
								<tr key={item.id}>
									<td>{item.productName}</td>
									<td>{item.color}</td>
									<td>{item.price}</td>
									<td>{item.brand}</td>
									<td>{item.category}</td>
								</tr>
							))}
						</table>
						<div className='price-details'>
							<div className='adjust-price'>
								<span>Amount</span>
								<span>{amount}</span>
							</div>

							<div className='adjust-price'>
								<span>Discount</span>
								<span>{amount / 10}</span>
							</div>

							<div className='adjust-price'>
								<span>Tax</span>
								<span>{amount * (18 / 100)}</span>
							</div>

							<div className='adjust-price'>
								<span>Total</span>
								<span>{amount - amount / 10 + amount * (18 / 100)}</span>
							</div>
						</div>
					</div>
				</>
			) : (
				<h3>No Item Added in Cart</h3>
			)}
		</div>
	);
};

export default Cart;

import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Cart from './components/Cart/Cart';

import './App.css';

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='cart' element={<Cart />} />
			</Routes>
		</div>
	);
}

export default App;

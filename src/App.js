import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Coin from './pages/Coin';

function App() {
	return (
		<div className='bg-[#17171A] text-white p-10 min-h-screen'>
			<div className='min-h-[70vh] '>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/news' element={<News />} />
					<Route path='/coin/:id' element={<Coin />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;

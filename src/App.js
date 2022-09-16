import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
	return (
		<div className='bg-[#17171A] text-white p-10'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/news' element={<News />} />
			</Routes>
			<Footer/>
		</div>
	);
}

export default App;

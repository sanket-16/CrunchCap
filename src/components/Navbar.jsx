import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
	return (
		<div className='m-6 flex justify-between'>
			<div className='font-semibold  text-4xl'>
				<h1>CrunchCap</h1>
			</div>
			<div>
				<ul className='flex text-xl'>
					<li className='p-4 font-semibold hover:text-[#3861FB] '>
						<NavLink to='/'>Home</NavLink>
					</li>
					<li className='p-4 font-semibold hover:text-[#3861FB] '>
						<NavLink to='/news'>News</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Navbar;

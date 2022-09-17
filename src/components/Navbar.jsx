import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaList, FaRegWindowClose } from 'react-icons/fa';

function Navbar() {
	const [navbar, setNavbar] = useState(false);

	return (
		<nav className='w-full shadow'>
			<div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
				<div>
					<div className='flex items-center justify-between py-3 md:py-5 md:block'>
						<Link href='./'>
							<h2 className='text-2xl md:text-4xl font-bold'>CryptoCrunch</h2>
						</Link>
						<div className='md:hidden'>
							<button
								className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
								onClick={() => setNavbar(!navbar)}
							>
								{navbar ? (
									<FaRegWindowClose  size={25} color='#fff'/>
								) : (
									<FaList  size={25} color='#fff'/>
								)}
							</button>
						</div>
					</div>
				</div>
				<div>
					<div
						className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
							navbar ? 'block' : 'hidden'
						}`}
					>
						<ul className='font-bold items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
							<li className='hover:text-[#3861FB]'>
								<Link to='./'>Home</Link>
							</li>
							<li className='hover:text-[#3861FB] '>
								<Link to='./news'>News</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}


export default Navbar;
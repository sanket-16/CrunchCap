import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
	return (
		<div className=' static bottom-0 text-center'>
			<p className='font-bold'>Made by Sanket</p>
			<div className='flex items-center justify-center p-2'>
				<a className='pr-2 hover:text-[#3861FB]' href='https://github.com/sanket-16'>
					<FaGithub size={30} />
				</a>
                <a className='pl-2 hover:text-[#3861FB]' href="https://www.linkedin.com/in/sanket-patil-1b3299205/">
				<FaLinkedin size={30} />
                </a>
			</div>
			<p>
				Data from
				<a className='text-[#3861FB] px-1' href='https://coinstats.app/'>
					CoinStats
				</a>
			</p>
		</div>
	);
}

export default Footer;

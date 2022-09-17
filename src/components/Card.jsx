import React from 'react';

function Card({ bulletin }) {
	return (
		<a  href={bulletin.link} target='_blank' rel='noreferrer'>
			<div className='md:m-10 rounded-md h-full transition hover:scale-110'>
				<div>
					<img
						className='w-full rounded-md'
						src={bulletin.hasOwnProperty('imgURL') ? bulletin.imgURL : 'crypto_default.svg'}
						alt='bulletin_img'
					/>
				</div>
				<div className='p-2'>
					<h1 className='text-2xl font-bold'>{bulletin.title}</h1>
					<p className='text-white/50'>{bulletin.description}</p>
					<p className='text-[#3861FB] py-4'>
						Source: <span>{bulletin.source}</span>
					</p>
				</div>
			</div>
		</a>
	);
}

export default Card;

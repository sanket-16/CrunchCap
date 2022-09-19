import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IoMdArrowDropupCircle, IoMdArrowDropdownCircle } from 'react-icons/io';

import { fetchCoin } from '../components/api';
import Loading from '../components/Loading';

function Coin() {
	const { id } = useParams();
	const [coin, setCoin] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		fetchCoin(id, setCoin);
		setTimeout(() => {
			setLoading(false);
		}, 200);
	}, [id]);

	return (
		<div>
			{loading ? (
				<div className='flex items-center justify-center'>
					<Loading loading={loading} />
				</div>
			) : (
				<div className='m-6 md:p-12'>
					<div className='flex flex-col md:flex-row md:justify-between'>
						<div className=' md:flex-col flex justify-between'>
							<div className='flex md:justify-center items-center'>
								<h1 className=' flex items-center gap-2 text-xl md:text-4xl font-bold'>
									<img className='w-10' src={coin.icon} alt='icon' />
									{coin.name}
								</h1>
								<p className='m-2 p-1  bg-white/50 rounded text-xs'>
									{coin.symbol}
								</p>
							</div>
							<p className='w-fit my-2 p-2 rounded-md bg-white/50 text-xs'>
								Rank #{coin.rank}
							</p>
						</div>
						<div className='flex md:flex-col items-center md:items-start justify-between'>
							<h1 className='md:text-3xl text-xl font-bold'>
								$ {parseFloat(coin.price).toFixed(2)}
							</h1>
							<h2
								className={`flex items-center gap-2 w-fit mt-4 md:m-2 p-2 md:text-md text-xs rounded-md ${
									coin.priceChange1d > 0
										? 'bg-green-700'
										: 'bg-red-700'
								}`}
							>
								{coin.priceChange1d > 0 ? (
									<IoMdArrowDropupCircle size={25} />
								) : (
									<IoMdArrowDropdownCircle size={25} />
								)}
								{parseFloat(coin.priceChange1d).toFixed(2)} %
							</h2>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Coin;

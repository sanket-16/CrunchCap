import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
	IoMdArrowDropupCircle,
	IoMdArrowDropdownCircle,
	IoIosLink,
	IoLogoTwitter,
	IoMdSearch
} from 'react-icons/io';

import { fetchCoin } from '../components/api';
import Loading from '../components/Loading';
import Badge from '../components/Badge';

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
									<img
										className='w-10'
										src={coin.icon}
										alt='icon'
									/>
									{coin.name}
								</h1>
								<Badge content={coin.symbol}></Badge>
							</div>
							<Badge content={`Rank # ${coin.rank}`} />
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
					<div>
						<div>
							<div className='flex'>
								<Link to={coin.websiteUrl}>
									<Badge
										content='Website'
										icon={<IoIosLink />}
									/>
								</Link>
								<Link to={coin.twitterUrl}>
									<Badge
										content='Twitter'
										icon={<IoLogoTwitter />}
									/>
								</Link>
							</div>
							<button className='peer flex items-center gap-2 px-5 py-2 bg-white/50 hover:white/80 text-white rounded-md m-2'>
							<IoMdSearch/> Explorers
							</button>
							<div className='hidden peer-hover:flex hover:flex w-[200px] flex-col bg-white/50 rounded-md'>
								{coin.exp.map(explorer => {
									return(
									<Link className='px-5 py-3 bg-white/50' to='#'>
										{explorer}
									</Link>
									)
								})}
							</div>
						</div>
						<div></div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Coin;

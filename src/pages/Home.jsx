import React, { useEffect, useState } from 'react';

import Table from '../components/Table';
import { fetchCoins } from '../components/api';
import Loading from '../components/Loading';
function Home() {
	const [coins, setCoins] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		fetchCoins(setCoins);
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);
	return (
		<>
			{loading ? (
				<div className='flex items-center justify-center'>
					<Loading loading={loading} />
				</div>
			) : (
				<div>
					<div className='flex justify-center mt-20 mb-10'>
						<div className=' font-semibold text-2xl'>
							Today's Cryptocurrency Prices
						</div>
					</div>
					<div className=' flex items-center md:justify-center overflow-x-scroll overflow-y-hidden'>
						<Table data={coins} />
					</div>
				</div>
			)}
		</>
	);
}

export default Home;

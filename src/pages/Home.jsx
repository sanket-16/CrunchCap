import React, { useEffect, useState } from 'react';
import Table from '../components/Table';
import { fetchCoins } from '../components/api';

function Home() {
	const [coins, setCoins] = useState([]);
	useEffect(() => {
		fetchCoins(setCoins);
	}, []);
	return (
		<>
			<div className='flex justify-center mt-20 mb-10'>
				<div className=' font-semibold text-2xl'>
					Today's Cryptocurrency Prices
				</div>
			</div>
			<div className=' flex items-center md:justify-center overflow-y-scroll md:overflow-hidden'>
				<Table data={coins} />
			</div>
		</>
	);
}

export default Home;

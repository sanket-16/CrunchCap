import React from 'react';

function Row({ coin }) {
	return (
		<tr className='hover:bg-[#171924] font-semibold'>
			<td className='py-6'>{coin.rank}</td>
			<td className='py-6 pl-10 flex  items-center'>
				<img className='w-10 p-2' src={coin.icon} alt='icon' />
				<span className='flex justify-start'>
					{coin.name + ' (' + coin.symbol + ')'}
				</span>
			</td>
			<td className='py-6 min-w-full'>
				$ {parseFloat(coin.price).toLocaleString()}
			</td>
			<td
				className={`py-6 ${
					coin.priceChange1d > 0 ? 'text-green-700' : 'text-red-700'
				} `}
			>
				{parseFloat(coin.priceChange1d).toFixed(2)} %
			</td>
			<td className='py-6'>
				 ${ parseFloat(coin.marketCap).toLocaleString()}
			</td>
			<td className='py-6'>
				${parseFloat(coin.totalSupply).toLocaleString()}
			</td>
			<td className='py-6'>
				${parseFloat(coin.volume).toLocaleString()}
			</td>
		</tr>
	);
}

export default Row;

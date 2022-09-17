import React from 'react';
import Row from './Row';

function Table({ data }) {
	return (
		<table className='md:m-10  md:p-6 text-center md:w-full'>
			<thead className='border-b border-slate-400/[.24] sticky top-0 bg-[#17171A] '>
				<tr >
					<th className='p-6'>Rank</th>
					<th className='p-6'>Name</th>
					<th className='p-6'>Rate (USD)</th>
					<th className='p-6'>Change (24h)</th>
					<th className='p-6'>Market Cap</th>
					<th className='p-6'>Supply</th>
					<th className='p-6'>Volume (24h)</th>
				</tr>
			</thead>
			<tbody className=' divide-y divide-slate-400/[.24] border-collapse'>
				{data.map((coin) => {
					return <Row key={coin.id} coin={coin} />;
				})}
			</tbody>
		</table>
	);
}

export default Table;

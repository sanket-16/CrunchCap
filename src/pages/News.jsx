import React, { useState, useEffect } from 'react';

import { fetchNews } from '../components/api';
import Card from '../components/Card';
import Loading from '../components/Loading';

function News() {
	const [news, setNews] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		fetchNews(setNews);
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	return (
		<div className='md:p-10 min-h-9/12'>
			{loading ? (
				<div className='flex items-center justify-center'>
					<Loading loading={loading} />
				</div>
			) : (
				<div>
					<h1 className='font-bold text-4xl py-5'>News</h1>
					<div className='grid md:grid-cols-3 gap-y-8'>
						{news.map((bulletin) => {
							return (
								<Card key={bulletin.id} bulletin={bulletin} />
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
}

export default News;

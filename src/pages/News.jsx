import React, { useState, useEffect } from 'react';
import { fetchNews } from '../components/api';
import Card from '../components/Card';

function News() {
	const [news, setNews] = useState([]);

	useEffect(() => {
		fetchNews(setNews);
	}, []);

	return (
		<div className='p-10'>
			<h1 className='font-bold text-4xl'>News</h1>
			<div className='grid grid-cols-3 gap-y-8'>
				{news.map((bulletin) => {
					return (
						<Card key={bulletin.id} bulletin={bulletin}/>
                    );
				})}
			</div>
		</div>
	);
}

export default News;

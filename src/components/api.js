import axios from 'axios';

export function fetchCoins(setData) {
	let config = {
		method: 'get',
		url: 'https://api.coinstats.app/public/v1/coins?skip=0',
		headers: {},
	};

	axios(config)
		.then((response) => {
			console.log(response.data.coins);
			setData(response.data.coins);
		})
		.catch((error) => {
			console.log(error);
		});
}

export function fetchNews(setNews) {
	let config = {
		method: 'get',
		url: 'https://api.coinstats.app/public/v1/news/trending?skip=0&limit=20',
		headers: {},
	};

	axios(config)
		.then((response) => {
			console.log(response.data.news);
			setNews(response.data.news);
		})
		.catch((error) => {
			console.log(error);
		});
}

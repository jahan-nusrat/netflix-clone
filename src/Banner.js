import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import instances from './axios';
import requests from './api';

function Banner () {
	const [ movies, setMovies ] = useState([]);

	useEffect(() => {
		async function fetchData () {
			const req = await instances.get(requests.fetchTopRated);
			setMovies(req.data.results[Math.floor(Math.random() * req.data.results.length - 1)]);
			return req;
		}
		fetchData();
	}, []);
	console.log(movies);

	return (
		<header
			className="banner"
			style={{
				backgroundSize     : 'cover',
				backgroundPosition : 'center center',
				backgroundImage    : `url("https://image.tmdb.org/t/p/original/${movies.backdrop_path}")`
			}}
		>
			<div className="banner-content">
				<h2>{movies.title || movies.original_title}</h2>
				<div className="banner-btn">
					<button className="btn">Play</button>
					<button className="btn">My List</button>
				</div>
				<h1 className="banner-description">{movies.overview}</h1>
			</div>
		</header>
	);
}

export default Banner;

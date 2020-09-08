import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import instances from './axios';
import requests from './api';
import { BannerStyle, BannerContent, BannerTitle, BannerDes, BannerBtn, BannerFade } from './styles/BannerStyle';

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

	function truncate (str, n) {
		return str?.length > n ? str.substr(0, n - 1) + '....' : str;
	}

	return (
		<BannerStyle
			className="banner"
			style={{
				backgroundSize     : 'cover',
				backgroundPosition : 'center center',
				backgroundImage    : `url("https://image.tmdb.org/t/p/original/${movies.backdrop_path}")`
			}}
		>
			<BannerContent className="banner-content">
				<BannerTitle className="banner-title">{movies.title || movies.original_title}</BannerTitle>
				<div className="banner-btn">
					<BannerBtn className="btn">Play</BannerBtn>
					<BannerBtn className="btn">My List</BannerBtn>
				</div>
				<BannerDes className="banner-description">{truncate(movies.overview, 150)}</BannerDes>
				
			</BannerContent>
			<BannerFade className="banner-fade" />
		</BannerStyle>
	);
}

export default Banner;

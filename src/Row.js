import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import instances from './axios';
import { ImgPoster, RowPosters, StyleRow } from './styles/RowStyle';
import './styles/App.css';

const baseUrl = 'https://image.tmdb.org/t/p/original/';
function Row ({ title, fetchUrl, isLargeRow }) {
	const [ movies, setMovies ] = useState([]);
	useEffect(
		() => {
			async function fetchData () {
				const request = await instances.get(fetchUrl);
				setMovies(request.data.results);
				return request;
			}
			fetchData();
		},
		[ fetchUrl ]
	);
	console.info(movies);
	return (
		<StyleRow className="row">
			<h2>{title}</h2>
			<RowPosters className="row-posters">
				{movies.map((movie) => (
					<ImgPoster
						className={`image-poster ${isLargeRow && 'large-row'}`}
						key={movie.id}
						src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
						alt=""
					/>
				))}
			</RowPosters>
		</StyleRow>
	);
}

export default Row;

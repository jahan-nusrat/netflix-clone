import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import instances from './axios';
import { ImgPoster, RowPosters, StyleRow } from './styles/RowStyle';
import './styles/App.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const baseUrl = 'https://image.tmdb.org/t/p/original/';
function Row ({ title, fetchUrl, isLargeRow }) {
	const [ movies, setMovies ] = useState([]);
	const [trailerUrl, setTrailerUrl] = useState("")

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

	const opts = {
		height: "390",
		width: "100%",
		playerVars: {
			autoplay: 1,
		},
	};
	
	const handleClick = (movies) => {
		if (trailerUrl) {
			setTrailerUrl("");
		} else {
			movieTrailer(movies?.title || "")
			.then((url) => {
			const urlParams = new URLSearchParams(new URL(url).search);
			setTrailerUrl(urlParams.get("v"));
			})
			.catch((err) => console.log(err));
		}
	};

	return (
		<StyleRow className={`row ${isLargeRow && 'mt-top'}`}>
			<h2>{title}</h2>
			<RowPosters className="row-posters">
				{movies.map((movie) => (
					<ImgPoster
					onClick={()=>handleClick(movies)}
						className={`image-poster ${isLargeRow && 'large-row'}`}
						key={movie.id}
						src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
						alt=""
					/>
				))}
			</RowPosters>
			{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
		</StyleRow>
	);
}

export default Row;

const API_KEY = 'AIzaSyBRDVaS10_qVJ2IhdzxU02UtAN1gVIKgLg';
const fetchApi = {
	fetchTrending        : `/trending/all/week?api_key=${API_KEY}$language=en-US`,
	fetchNetflixOriginal : `/discover/tv?api_key=${API_KEY}$with_networks=213`,
	fetchTopRated        : `/movie/top_rated?api_key=${API_KEY}$language=en-US`,
	fetchAction          : `/movie/top_rated?api_key=${API_KEY}$with_genres=28`,
	fetchComedy          : `/movie/top_rated?api_key=${API_KEY}$with_genres=35`,
	fetchHorror          : `/movie/top_rated?api_key=${API_KEY}$with_genres=27`,
	fetchRomance         : `/movie/top_rated?api_key=${API_KEY}$with_genres=10749`,
	fetchDocumentaries   : `/movie/top_rated?api_key=${API_KEY}$with_genres=99`
};

export default fetchApi;

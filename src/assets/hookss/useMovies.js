import whitResults from "../mocks/whit-results.json";
// import notWhitResults from "../assets/mocks/not-whit-results.json";

export function useMovies() {
	const movies = whitResults.Search;

	const mappedMovies = movies?.map((movie) => ({
		id: movie.imdbID,
		title: movie.Title,
		year: movie.Year,
		poster: movie.Poster,
	}));

	return { movies: mappedMovies };
}

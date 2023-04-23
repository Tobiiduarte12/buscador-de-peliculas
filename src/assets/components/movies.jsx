/* eslint-disable react/prop-types */
function ListOfMovies({ movies }) {
	return (
		<ul className="movies">
			{movies.map((movie) => (
				<li key={movie.id}>
					<h3>Película: {movie.title}</h3>
					<p>Año: {movie.year}</p>
					<img src={movie.poster} alt={movie.title} />
				</li>
			))}
		</ul>
	);
}

function NoMoviesResult() {
	return <p>No se encontraron resultados</p>;
}

export function Movies({ movies }) {
	const hasMovies = movies?.length > 0;

	return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResult />;
}

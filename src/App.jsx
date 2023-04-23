import "./App.css";
import { useMovies } from "./assets/hookss/useMovies.js";
import { Movies } from "./assets/components/movies.jsx";

function App() {
	const { movies: mappedMovies } = useMovies();

	return (
		<>
			<div id="hero">
				<header>
					<h1 className="title">Buscador de películas</h1>
					<form action="" className="form">
						<input type="text" placeholder="Avengers, Stars wars..." />
						<button type="submit">Buscar</button>
					</form>
				</header>

				<main>
					<Movies movies={mappedMovies} />
				</main>
			</div>
		</>
	);
}

export default App;

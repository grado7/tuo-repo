// App.js
import React, { useState, useEffect } from "react";
import "./App.css";

const movies = [
  {
    title: "Inception",
    image: "https://m.media-amazon.com/images/I/51zUbui+gbL._AC_SY679_.jpg",
    plot: "Un ladro che ruba segreti attraverso la tecnologia del sogno viene incaricato di un compito impossibile: l'inception.",
    trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0"
  },
  {
    title: "Interstellar",
    image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    plot: "Un gruppo di esploratori viaggia attraverso un wormhole nel tentativo di salvare l'umanità.",
    trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E"
  },
  {
    title: "The Matrix",
    image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    plot: "Un hacker scopre la verità sulla sua realtà e il ruolo che gioca nella guerra contro i suoi controllori.",
    trailer: "https://www.youtube.com/watch?v=vKQi3bBA1y8"
  },
  {
    title: "Fight Club",
    image: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
    plot: "Un impiegato depresso forma un club di lotta con uno strano venditore di sapone.",
    trailer: "https://www.youtube.com/watch?v=SUXWAEX2jlg"
  },
  {
    title: "The Dark Knight",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    plot: "Batman affronta il Joker, un genio criminale deciso a portare caos a Gotham City.",
    trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY"
  },
  {
    title: "Pulp Fiction",
    image: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    plot: "Le storie di due gangster, un pugile, la moglie di un gangster e due rapinatori si intrecciano a Los Angeles.",
    trailer: "https://www.youtube.com/watch?v=s7EdQ4FqbhY"
  },
  {
    title: "The Godfather",
    image: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    plot: "La saga della famiglia mafiosa Corleone nel periodo postbellico in America.",
    trailer: "https://www.youtube.com/watch?v=sY1S34973zA"
  }
];

const getMoviesForToday = () => {
  const today = new Date().getDate();
  const shuffled = [...movies].sort(() => 0.5 - Math.random());
  const seed = today % (movies.length - 2);
  return shuffled.slice(seed, seed + 3);
};

function App() {
  const [dailyMovies, setDailyMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    setDailyMovies(getMoviesForToday());
  }, []);

  return (
    <div className="App" style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>🎬 Film Consigliati di Oggi</h1>

      <div className="movie-grid">
        {dailyMovies.map((movie, index) => (
          <div
            key={index}
            className="movie-card"
            onClick={() => setSelectedMovie(movie)}
          >
            <img src={movie.image} alt={movie.title} />
            <h2>{movie.title}</h2>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <div className="movie-detail">
          <h2>{selectedMovie.title}</h2>
          <p>{selectedMovie.plot}</p>
          <a
            href={selectedMovie.trailer}
            target="_blank"
            rel="noopener noreferrer"
            className="trailer-button"
          >
            ▶ Guarda il Trailer
          </a>
        </div>
      )}
    </div>
  );
}

export default App;

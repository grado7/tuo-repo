import React, { useEffect, useState } from "react";
import "./App.css"; // opzionale per stili extra

const movies = [
  {
    title: "Inception",
    image: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg"
  },
  {
    title: "Interstellar",
    image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
  },
  {
    title: "The Matrix",
    image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
  },
  {
    title: "Fight Club",
    image: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg"
  },
  {
    title: "Pulp Fiction",
    image: "https://image.tmdb.org/t/p/w500/dM2w364MScsjFf8pfMbaWUcWrR.jpg"
  },
  {
    title: "The Godfather",
    image: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"
  },
  {
    title: "Gladiator",
    image: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg"
  }
];

function getTodayMovies() {
  const today = new Date().toISOString().split("T")[0];
  const seed = parseInt(today.replaceAll("-", ""));
  const rng = mulberry32(seed);
  return [...movies].sort(() => rng() - 0.5).slice(0, 2);
}

function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function App() {
  const [dailyMovies, setDailyMovies] = useState([]);

  useEffect(() => {
    setDailyMovies(getTodayMovies());
  }, []);

  return (
    <div style={{
      backgroundColor: "#0f0f0f",
      color: "#fff",
      minHeight: "100vh",
      padding: "30px 20px",
      fontFamily: "'Poppins', sans-serif"
    }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px", fontSize: "2.5rem" }}>
        🎬 Film consigliati di oggi
      </h1>

      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        maxWidth: "600px",
        margin: "0 auto"
      }}>
        {dailyMovies.map((movie, index) => (
          <div key={index} style={{
            backgroundColor: "#1e1e1e",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 0 10px rgba(255,255,255,0.05)"
          }}>
            <img src={movie.image} alt={movie.title} style={{ width: "100%", height: "auto" }} />
            <div style={{ padding: "20px" }}>
              <h2 style={{ margin: 0, fontSize: "1.5rem" }}>{movie.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

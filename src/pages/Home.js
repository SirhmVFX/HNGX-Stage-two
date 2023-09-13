import React, { useEffect, useState } from "react";
import { AiFillPlayCircle, AiOutlineRight } from "react-icons/ai";
import MovieCard from "../components/MovieCard";

function Home() {
  const [search, setSearch] = useState("");

  const [movieList, setmovieList] = useState([]);
  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=4cdd2e1f7231ffd4a85a7809ba912c5b"
    )
      .then((res) => res.json())
      .then((json) => setmovieList(json.results));
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.log(movieList);

  return (
    <>
      <section className="herosection">
        <div className="container">
          <div>
            <input
              className="search"
              type="text"
              name="search"
              id="search"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="What do you want to watch?"
            />
          </div>
          <div className="hero-details">
            <h1 className="hero-text">John Wick 3 : Parabellum</h1>
            <div className="movie-ratings">
              <div className="movie-ratings">
                <img className="imdb" src="images/imdb.png" alt="" />
                <p>86.0 / 100</p>
              </div>
              <div className="movie-ratings">
                <img
                  className="rate"
                  src="images/PngItem_1381056 1.png"
                  alt=""
                />
                <p>97%</p>
              </div>
            </div>
            <div>
              <p>
                John Wick is on the run after killing a member of the
                international assassins' guild, and with a $14 million price tag
                on his head, he is the target of hit men and women everywhere.
              </p>
            </div>
            <button className="button-1">
              <AiFillPlayCircle /> Watch Trailer
            </button>
          </div>
        </div>
      </section>

      <section className="wrapper">
        <div className="container">
          <div className="body-content">
            <div className="section-heading">
              <h1>Featured Movie</h1>
              <div className="see-more">
                <p> See More </p> <AiOutlineRight />
              </div>
            </div>

            <div className="movie-list">
              {movieList
                .slice(0, 10)
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.original_title.toLowerCase().includes(search);
                })
                .map((movie) => (
                  <MovieCard
                    key={movie.id}
                    id={movie.id}
                    title={movie.original_title}
                    poster={movie.poster_path}
                    releaseDate={movie.release_date}
                    language={movie.original_language}
                    vote={movie.vote_average}
                    voteCount={movie.vote_count}
                  />
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

function MovieCard({
  id,
  title,
  poster,
  releaseDate,
  genre,
  language,
  vote,
  voteCount,
}) {
  return (
    <>
      <Link
        to={`/movies/${id}`}
        className="movie-card"
        data-testid="movie-card"
      >
        <div className="tags">
          <p className="tvseries">TV-SERIES</p>
          <AiFillHeart className="bookmark" />
        </div>
        <img
          data-testid="movie-poster"
          className="movie-image"
          src={`https://image.tmdb.org/t/p/w500${poster}`}
          alt="movieimage"
        />
        <div className="movie-details">
          <div className="mv">
            <p className="date">{language}</p>
            <p className="date" data-testid="movie-release-date">
              {releaseDate}
            </p>
          </div>
          <h3 className="movie-title" data-testid="movie-title">
            {title}
          </h3>
          <div className="movie-ratings-22">
            <div className="movie-ratings-2">
              <img className="imdb" src="images/imdb.png" alt="" />
              <p>{vote} / 10</p>
            </div>
            <div className="movie-ratings-2">
              <img className="rate" src="images/PngItem_1381056 1.png" alt="" />
              <p>{voteCount}</p>
            </div>
          </div>
          <p className="genre">Action, Adventure, Horror</p>
        </div>
      </Link>
    </>
  );
}

export default MovieCard;

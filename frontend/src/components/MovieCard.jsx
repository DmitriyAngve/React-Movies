import PropTypes from "prop-types";

function MovieCard({ movie }) {
  function onFavoriteClick() {}

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title} />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={onFavoriteClick}>
            Text
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

MovieCard.propsType = {
  movie: PropTypes.shape({
    release_date: PropTypes.shape.isRequired,
  }).isRequired,
};

export default MovieCard;

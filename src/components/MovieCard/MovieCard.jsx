import { PropTypes } from "prop-types";

export const MovieCard = ({movie}) => {
    const {
        poster,
        title,
        name,
        release,
        vote_average,
        overview,
        genres,
    } = movie;

    return(
        <div>
            <div>
                <img
                    srs ={
                        poster
                        ? `https://image.tmdb.org/t/p/w500${poster}`
                        : 'https://image.tmdb.org/t/p/w500/4XlgNK3hLcw5yemwZYMkBvvyf1A.jpg'
                    }
                    alt={title ? title : name}
                />
            </div>
            <div>
                <h2>
                    {title ? title : name} ({release.splite(0, 4)})
                </h2>
                <p>Use Score: {Math.round((vote_average / 10) * 100)}%</p>
                <h3>Overwiew</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                <p>{genres.map(item => item.name).join(' ,')}</p>
            </div>
        </div>
    )
}


MovieCard.propTypes = {
    movie: PropTypes.shape({
      poster: PropTypes.string.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
      release: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
      overview: PropTypes.string.isRequired,
      genres: PropTypes.array.isRequired,
    }),
  };
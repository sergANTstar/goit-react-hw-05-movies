import { PropTypes } from "prop-types";

export const CastItem = ({cast}) => {
    const {character, name, profilePath } = cast;
    return(
        <div>
            <img
                srs={ profilePath
                    ? `https://image.tmdb.org/t/p/w500${profilePath}`
                    : 'https://image.tmdb.org/t/p/w500/dBoOporkAEgZvRFz2h1Qi3ZozId.jpg'}
                alt={name}
            />
            <h3>{name}</h3>
            <p>Character: {character}</p>
        </div>
    )
}

CastItem.propTypes = {
    cast: PropTypes.shape({
      character: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      profilePath: PropTypes.string,
    }),
  };
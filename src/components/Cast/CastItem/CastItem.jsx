import { PropTypes } from "prop-types";

export const CastItem = ({cast}) => {
    const {id, name, profile_path } = cast;
    return(
        <div>
            <img
                srs={ profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : 'https://image.tmdb.org/t/p/w500/dBoOporkAEgZvRFz2h1Qi3ZozId.jpg'}
                alt={name}
            />
            <h3>{name}</h3>
            <p>Character: {id}</p>
        </div>
    )
}


CastItem.propTypes = {
    cast: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
    }),
  };
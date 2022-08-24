import { PropTypes } from "prop-types";

export const RevieItems = ({reviews}) => {
    const {
        authorDetails: {name, avatar},
        content,
    }= reviews;

    return(
        <div>
            <img
                src={avatar.slice(1)}
                 alt={name}
            />
            <h3> Authore: {name ? name : 'anonimuse'}</h3>
            <p>{content}</p>
        </div>
    )
}

RevieItems.propTypes = {
    reviews: PropTypes.shape({
      avatarPath: PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
      }),
      content: PropTypes.string.isRequired,
    }),
  };
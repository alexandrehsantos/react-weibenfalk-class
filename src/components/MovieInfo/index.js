import React, { useContext } from "react";
import PropTypes from "prop-types";

import API from "./../../API";
// Components
import Thumb from "../Thumb";
import Rate from "../Rate";
import AnchorLink from 'react-anchor-link-smooth-scroll'

// Config
import { API_KEY, IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
// Image
import NoImage from "../../images/no_image.jpg";
// Styles
import { Wrapper, Content, Text, Arrow } from "./MovieInfo.styles";
//Context
import { Context } from "../../context";
import { FaAngleDoubleDown, FaAngleUp } from "react-icons/fa";

const MovieInfo = ({ movie }) => {
  const [user] = useContext(Context);
  const handleRating = async (value) => {
    const rate = await API.rateMovie(user.sessionId, movie.id, value);
    console.log(rate);
  };

  return (
    <Wrapper backdrop={movie.backdrop_path}>
      <Content>
        <Thumb
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
          alt="movie-thumb"
        />
        <Text>
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>

          <div className="rating-directors">
            <div>
              <h3>RATING</h3>
              <div className="score">{movie.vote_average}</div>
            </div>
            <div className="director">
              <h3>DIRECTOR{movie.directors.length > 1 ? "S" : ""}</h3>
              {movie.directors.map((director) => (
                <p key={director.credit_id}>{director.name}</p>
              ))}
            </div>
          </div>

          {user && (
            <div>
              <p>Rate Movie</p>
              <Rate callback={handleRating} />
            </div>
          )}
          <AnchorLink  href="#movie_info_bar">
          <Arrow>
            <div className="top-to-btm">
              <FaAngleDoubleDown className="icon-position icon-style" />
            </div>
          </Arrow>
          </AnchorLink>
        </Text>
      </Content>
    </Wrapper>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object,
};

export default MovieInfo;

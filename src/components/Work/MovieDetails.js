import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { MovieData } from '../../utils/movieData';
import Award from './Award';

const MovieDetails = () => {
  const location = useLocation();
  const url = location.pathname;

  const [movies, setMovies] = useState(MovieData);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((movieState) => movieState.url === url);

    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <StyledMovieDetails>
          <Headline>
            <h2 style={{ color: 'white' }}>{movie.title}</h2>
            <img src={movie.mainImg} alt='' />
          </Headline>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                key={award.title}
                title={award.title}
                description={award.description}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt='' />
          </ImageDisplay>
        </StyledMovieDetails>
      )}
    </>
  );
};

const StyledMovieDetails = styled.div`
  width: 100%;
  min-height: 90vh;
`;

const Headline = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;

  h2 {
    position: absolute;
    top: 50%;
    transform: translate(0%);
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  min-height: 50vh;
  display: flex;
  min-width: 50vh;
  padding: 96px;
`;

const ImageDisplay = styled.div`
  max-height: 50vh;

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default MovieDetails;

// .src/containers/MoviesPage.js
import MoviesList from '../components/MoviesList';
import MovieShow from '../components/MovieShow';
import React from 'react';
import { Route } from 'react-router-dom';
import MoviesList from '../components/MoviesList';

const MoviesPage = ({ match, movies }) => (
  <div>
    <MoviesList movies={movies} />
  </div>
)

export default MoviesPage

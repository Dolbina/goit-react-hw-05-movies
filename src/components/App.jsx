import { Routes, Route } from 'react-router-dom';

import  Home  from '../pages/Home';
import  Movies  from '../pages/Movies';
import  MoviesDetails  from '../pages/MoviesDatails';
import Cast from './Cast';
import  Reviews  from './Reviews';
import {NotFound} from '../pages/NotFound';
import { SharedLayout } from './SharedLayout';



export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

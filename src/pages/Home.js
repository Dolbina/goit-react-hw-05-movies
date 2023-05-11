import { Link, useLocation } from 'react-router-dom';
import {  CardWrapper, ProductName } from '../components/ProductList.styled';
import { fetchMovies } from 'services/api';

const Home = () => {
  const location = useLocation();
  const movies = fetchMovies();
  console.log(movies);
  return (
    <main>
      <h1>Trending today</h1>

      {movies.map(movie => (
        <CardWrapper key={movie.id}>
          <Link to={`${movie.id}`} state={{ from: location }}>
            <ProductName>{movie.original_title}</ProductName>
          </Link>
        </CardWrapper>
      ))}
    </main>
  );
};

export default Home;

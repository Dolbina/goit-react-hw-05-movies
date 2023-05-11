import axios from "axios";

export const fetchMovies = async () => {
    const API_URL = 'https://api.themoviedb.org/3/trending/movie/week';
    const options = {
      params: {
        api_key: '48fb147532276641d9f1a55b83b3113d',
      },
    };
    const response = await axios.get(API_URL, options);
    return response;
}
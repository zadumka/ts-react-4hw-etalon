import axios from 'axios';
import { Movie } from '../types/movie';

interface TMDBResponse {
    results: Movie[];
    total_pages: number;
}

export const fetchMovies = async (
    query: string,
    page: number,
): Promise<TMDBResponse> => {
    const response = await axios.get<TMDBResponse>(
        'https://api.themoviedb.org/3/search/movie',
        {
            params: {
                query,
                page,
            },
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
            },
        },
    );

    return response.data;
};

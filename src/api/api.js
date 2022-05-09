import axios from 'axios'

const api = axios.create ({
    baseURL:'https://api.themoviedb.org/3/trending/movie/'
});

export default api;
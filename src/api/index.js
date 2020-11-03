const APIBASE = "http://www.omdbapi.com?apiKey=";

const loadMovies = () => {
    const movieList = await fetch(APIBASE+'&s=');
    return await movieList.json();
};


const searchMovies = () => {

};

export default {
    loadMovies,
    searchMovies
}
import API from './api';


document.addEventListener('DOMContentLoaded', async() => {
    
    const movieList = await API.loadMovies();
    const output = movieList.reduce((acc,movie)=>{
        return acc + `
        <div class="movieClass">
          <div>
            <img class="object-fit-cover" src="${movie.Poster}">
            <h4 class="movieTitle" >${movie.Title}</h4>
            <a class="viewDetails" onclick="movieSelected('${movie.imdbID}')" target="_blank" >Movie Details</a>
          </div>
        </div>
      `;
    })
    
    document.getElementById('movies').innerHTML = output;
  
  });
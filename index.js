console.log('hello world')
function addMovie(event){
    event.preventDefault()
const message = document.querySelector('#message')
const inputField = document.querySelector('input');
const movie = document.createElement('li');
const movieTitle = document.createElement('span');
movieTitle.textContent = inputField.value;
function crossOffMovie(event){
    event.target.classList.toggle('checked');
    if (event.target.classList.contains("checked")){
        message.textContent = "Movie watched!";
    } else {
        message.textContent = "Movie added back!";
    }
}
movieTitle.addEventListener('click',crossOffMovie);

const deleteBtn = document.createElement('button');
deleteBtn.textContent = 'x';
deleteBtn.addEventListener('click', deleteMovie);
movie.appendChild(movieTitle);
movie.appendChild(deleteBtn);
const movieList = document.querySelector('ul');
movieList.appendChild(movie);
}
function deleteMovie(event){
    event.target.parentNode.remove();
    message.textContent = "Movie deleted!";
}
const form = document.querySelector('form');
form.addEventListener('submit', addMovie)


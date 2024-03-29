import { showSection } from "./util.js";
import { detailsPage } from "./details.js";

const sec = document.getElementById("home-page");
const catalog = sec.querySelector(
  "#movie .card-deck.d-flex.justify-content-center"
);
catalog.addEventListener("click", (event) => {
  if (event.target.tagName == "BUTTON") {
    event.preventDefault();
    const id = event.target.dataset.id;
    detailsPage(id);
  }
});

export function homePage() {
  showSection(sec);
  displayMovies()
}

async function displayMovies() {
  // catalog.replaceChildren(spinner());

  const movies = await getMovies();

  catalog.replaceChildren(...movies.map(createMoviePreview));
}

function createMoviePreview(movie) {
    const element = document.createElement('div');
    element.className = 'card mb-4';
    element.innerHTML = `
    <img class="card-img-top" src="${movie.img}"
        alt="Card image cap" width="400">
    <div class="card-body">
        <h4 class="card-title">${movie.title}</h4>
    </div>
    <div class="card-footer">
        <a href="/details/${movie._id}">
            <button data-id="${movie._id}" type="button" class="btn btn-info">Details</button>
        </a>
    </div>`;

    return element;
}
async function getMovies() {
    const res = await fetch('http://localhost:3030/data/movies');
    const data = await res.json();

    return data;
}

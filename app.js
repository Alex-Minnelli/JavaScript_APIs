console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

let searchButton = document.querySelector('#submitSearch');
let searchInput = document.querySelector('#searchWord');
let image = document.getElementsByTagName('img');
let feedback = document.querySelector('#feedback');

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

const MY_API_KEY = 'JIGgvBBZaRSIkkP3X77aUaFSYutFXDUs';

function gif() {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${MY_API_KEY}&s=${searchInput.value}`)
    .then((res) => {return res.json()})
    .then((res) => {
        image[0].src = res.data.images.original.url;
        //searchInput.value = '';
        feedback.textContent = 'Gif successfully found';
    })
    .catch((err) => {
        console.error(err);
        feedback.textContent = err.message;
    })
}

searchButton.addEventListener('click', gif);
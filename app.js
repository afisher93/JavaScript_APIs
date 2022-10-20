const API_KEY = "FOCtqZ2A99ybZjVa4ttRLPKG8NymcrOE";

let form = document.querySelector("#searchform");
let searchInput = document.querySelector("#gifTerm");
let img = document.querySelector("img");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  getGif();
});

function getGif() {}
fetch(`https://api.giphy.com/v1/gifs/translate`)
  .then((res) => {
    return res.json();
  })
  .then((body) => {
    img.src = body.data.images.original.url;
    img.alt = `${body.data.title} by ${body.data.user.username}`;
    img.title = `${body.data.title} by ${body.data.user.username}`;
  })
  .catch((err) => {});

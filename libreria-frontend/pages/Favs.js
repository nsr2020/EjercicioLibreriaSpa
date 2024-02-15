import Books from "./Books";

Books

const template = () => `
<section id="favs">
  <ul id="bookscontainer">
  </ul>
</section>
`;

const getFavs = async () => {
  const userId = JSON.parse(localStorage.getItem("user")).user._id;
  const booksData = await fetch(`http://localhost:3000/api/v1/users/${userId}`);
  const data = await booksData.json();
  const books = data.favoritos;
  const booksContainer = document.querySelector("#bookscontainer");
  for (const book of books) {
    const li = document.createElement("li");
    li.innerHTML = `
    <img src=${book.caratula} alt=${book.titulo}/>
    <h3>${book.titulo}</h3>
    <h4>${book.autor}</h4>
    <h5>${book.valoracion}</h5>
    <h5>${book.precio}€</h5>
    `;
    booksContainer.appendChild(li);
  }
};

const Favs = () => {
  document.querySelector("main").innerHTML = template();
  getFavs();
};

export default Favs;
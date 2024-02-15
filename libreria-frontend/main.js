import Books from './pages/Books'
import Favs from './pages/Favs'
import Login from './pages/Login'
import Register from './pages/Register'
import './style.css'



const bookslink = document.querySelector("#bookslink")
bookslink.addEventListener("click",Books)

const loginlink = document.querySelector("#loginlink")
loginlink.addEventListener("click",Login)

const registerlink = document.querySelector("#registerlink")
registerlink.addEventListener("click", Register)

const favslink = document.querySelector("#favslink")
favslink.addEventListener("click", Favs)

document.querySelector("#logoutlink").addEventListener("click", () => {
  localStorage.removeItem("user");
  alert("See you soon!");
  Login();
});

Books()
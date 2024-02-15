const mongoose = require("mongoose");
const Libro = require("../api/models/libros");



const books = [
    {
        titulo: "Sin miedo",
        precio: 19,
        caratula: "https://i.pinimg.com/236x/04/83/97/04839708e819cb04eff4cdc9e8e14e55.jpg",
        valoracion: 4.5,
        autor: "Rafael Santandreu"
    },
    {
        titulo: "Ser Feliz en Alaska",
        precio: 29,
        caratula: "https://i.pinimg.com/236x/91/e1/e1/91e1e150eae739b8d666271c612419c9.jpg",
        valoracion: 3.8,
        autor: "Rafael Santandreu"
    },
    {
        titulo: "Nada es tan terrible",
        precio: 24,
        caratula: "https://i.pinimg.com/236x/0d/9b/02/0d9b02c93c47ad6b6ebba601a67db839.jpg",
        valoracion: 4.2,
        autor: "Rafael Santandreu"
    },
    {
        titulo: "El arte de no amargarse la vida",
        precio: 14,
        caratula: "https://i.pinimg.com/236x/f8/1f/00/f81f007d294cc9cc1485caa51ab6c322.jpg",
        valoracion: 4.8,
        autor: "Rafael Santandreu"
    },
    {
        titulo: "Las gafas de la felicidad",
        precio: 39,
        caratula: "https://i.pinimg.com/236x/08/3d/d0/083dd0eae089e03f7c06b653b1637b6f.jpg",
        valoracion: 4.0,
        autor: "Rafael Santandreu"
    },
    {
        titulo: "El curso de milagros",
        precio: 22,
        caratula: "https://i.pinimg.com/236x/92/d6/05/92d6053a15c423226b1201b530ea0abf.jpg",
        valoracion: 4.1,
        autor: "Fundación de la paz interior"
    },
    {
        titulo: "Manual de supervivencia",
        precio: 17,
        caratula: "https://m.media-amazon.com/images/I/31Hr-Or3mbL.jpg",
        valoracion: 4.7,
        autor: "Marta Salvat"
    },
    {
        titulo: "Decide de nuevo",
        precio: 32,
        caratula: "https://i.pinimg.com/236x/ed/7e/2b/ed7e2b95ea3dc3941a5097812107dc15.jpg",
        valoracion: 3.5,
        autor: "Marta Salvat"
    },
    {
        titulo: "Aprendiendo a amar",
        precio: 27,
        caratula: "https://m.media-amazon.com/images/I/71mjkqtcBSL._AC_UY218_.jpg",
        valoracion: 4.3,
        autor: "Covadonga Perez Lozana"
    },
    {
        titulo: "La voz del Ser",
        precio: 19.99,
        caratula: "https://m.media-amazon.com/images/I/71e5C6cSNnL._AC_UY218_.jpg",
        valoracion: 4.6,
        autor: "Covadonga Perez Lozana"
    }
];

mongoose
.connect("mongodb+srv://nsr2020:Caribe@cluster0.gdwerr7.mongodb.net/?retryWrites=true&w=majority")
.then(async () =>{

const allBooks = await Libro.find()

if(allBooks.length) {
    await Libro.collection.drop()
}

})
.catch((err) => console.log(`Error deleting data ${err}`))
.then(async () =>{
    await Libro.insertMany(books)
})
.catch((err) => console.log(`Error creating data: ${err}`))
.finally(() => mongoose.disconnect())
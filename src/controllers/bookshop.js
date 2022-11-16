const books = require('../database/bookshopDB')

// Mostra todos os livros
const getBooks = (req, res) => {
    res.send(books)
}

// Seleciona um livro especifico
const getBookById = (req, res) => {
    const { book } = req

    res.send(book)
}

// Adiciona um livro na lista
const addBook = (req, res) => {
    const { title, writer, year, pagesNum } = req.body

    const { recentId } = req

    books.push({
        id: recentId,
        title,
        writer,
        year,
        pagesNum
    })

    res.status(201).send()
}

// Sobrescreve um livro
const overwritingBook = (req, res) => {
    res.send({ message: "Livro substituido!" })
}

// Modifica um livro parcialmente
const changeBook = (req, res) => {
    res.send({ message: "Livro alterado!" })
}

// Deleta um livro
const deleteBook = (req, res) => {
    const { book } = req

    const index = books.indexOf(book)

    books.splice(index, 1)

    res.send({ message: "Livro removido!" })
}

module.exports = {
    getBooks, getBookById,
    addBook, overwritingBook,
    changeBook, deleteBook
}
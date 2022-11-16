const { Router } = require('express')

const { getBooks, getBookById,
    addBook, overwritingBook,
    changeBook, deleteBook } = require('../controllers/bookshop')

const router = Router()

const { idIsValid, bookExists, hasChangesToDo, getRecentId } = require('../middlewares/middlares')

// Mostra todos os livros
router.get('/livros', getBooks)

// Mostra um livro especifico escolhido pelo ID
router.get('/livros/:id', idIsValid, bookExists, getBookById)

// Adiciona um livro na lista
router.post('/livros', getRecentId, addBook)

// Sobrescreve um livro
router.put('/livros/:id', idIsValid, bookExists, hasChangesToDo, overwritingBook)

// Modifica um livro parcialmente
router.patch('/livros/:id', idIsValid, bookExists, hasChangesToDo, changeBook)

// Deleta um livro
router.delete('/livros/:id', idIsValid, bookExists, deleteBook)

module.exports = router
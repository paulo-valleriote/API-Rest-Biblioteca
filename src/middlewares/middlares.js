const books = require('../database/bookshopDB')

// Verifica se o ID é válido
const idIsValid = (req, res, next) => {
    const { id } = req.params
    const convertedId = parseInt(id)

    if (!convertedId) return res.status(400).send({ message: "O ID não é válido ou não foi informado" })

    req.id = convertedId

    next()
}

// Verifica se existe livro com o ID informado
const bookExists = (req, res, next) => {
    const { id } = req

    const foundBook = books.find((book) => book.id === id)

    if (!foundBook) return res.status(404).send({ message: "Livro não encontrado! O ID não existe." })

    req.book = foundBook

    next()
}

// Pega o ID mais recente e incrementa, para usar no livro que será adicionado.
const getRecentId = (req, res, next) => {
    const ids = books.map((book) => book.id)

    if (!ids[0]) return res.status(404).send({ message: "Não existem IDs cadastrados" })

    const mostRecent = Math.max(...ids) + 1

    req.recentId = mostRecent

    next()
}

// Verifica se o usuário passou as informações e através do metodo, 
//faz a verificação se informou tudo que deveria
const hasChangesToDo = (req, res, next) => {
    const { book } = req
    const method = req.method
    const { title, writer, year, pagesNum } = req.body

    if (!title && !writer && !year && !pagesNum) return res.status(400).send({ message: "Faça ao menos uma modificação!" })

    if (method === 'PUT') {
        if (!title || !writer || !year || !pagesNum) {
            return res.status(400).send({ message: "Modifique todas as informações." })
        }
        book.title = title
        book.writer = writer
        book.year = year
        book.pagesNum = pagesNum

    } else if (method === 'PATCH') {
        if (title) book.title = title
        if (writer) book.writer = writer
        if (year) book.year = year
        if (pagesNum) book.pagesNum = pagesNum
    }

    next()
}

module.exports = { idIsValid, bookExists, getRecentId, hasChangesToDo }

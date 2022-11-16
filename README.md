# API Rest - Biblioteca Online
## Resumo
Este foi um dos exercícios que realizei durante o aprendizado de `API` da Cubos Academy.

Esta aplicação foi contruída para possibilitar o usuário a gerenciar livros, suas funcionalidades são:
```
- Ter acesso a todos os livros listados.
- Ter acesso a um livro com ID especificado.
- Criar um livro e inserir ele na lista.
- Modificar as informações de um Livro inteiro ou apenas algumas partes.
- Tirar um livro da lista.
```

## Como iniciar a aplicação

Tenha certeza que o `npm` está instalado; use o comando `npm -v`

Com o `npm` instalado, use os comandos
```
- `npm i`
- `npm run dev`
```
#### Versão do node
Esse projeto foi feito usando a versão `v18.12.1` do Node.js
#### Dependências do projeto
- Express `v4.18.2`
- DevDependencies
  - Nodemon `v2.0.20`

---

## Testando a aplicação

### Buscar todos os alunos
#### GET /livros
Este endpoint vai retornar um objeto com `todos` os livros cadastrados.

cUrl: `curl --request GET \
  --url http://localhost:3000/livros`

  ---

### Encontrar um livro específico
#### GET /livros/:id
Este endpoint vai retornar um objeto do livro desejado através do `ID` passado como parâmetro

cUrl: `curl --request GET \
  --url http://localhost:3000/livros/id`

  ---

### Adicionar um novo livro
#### POST /livros
Este endpoint vai cadastrar um novo livro no sistema

cUrl: `curl --request POST \
  --url http://localhost:3000/livros \
  --header 'Content-Type: application/json' \
  --data '{
	"title": "book title",
	"writer": "book writer",
	"year": 0000,
	"pagesNum": 0
}`

---

### Substituir um livro
#### Put /livros/:id
Este endpoint vai substituir todas as informação de um livro especificado pelo `ID`
- As informações são `obrigatórias`, caso queira atualizar uma ou mais use o `PATCH`

cUrl: `curl --request PUT \
  --url http://localhost:3000/livros/1 \
  --header 'Content-Type: application/json' \
  --data '{
	"title": "new book title",
	"writer": "new book writer",
	"year": 0000,
	"pagesNum": 00

---

### Atualizar as informações de um livro
#### Patch /livros/:id
Este endpoint vai atualizar uma ou mais informações de um livro especificado pelo `ID`
- É `obrigatório` atualizar apenas uma informação, as restantes são opcionais

cUrl: `curl --request PATCH \
  --url http://localhost:3000/livros/1 \
  --header 'Content-Type: application/json' \
  --data '{
	"title": "new book title",
	"writer": "new book writer",
	"year": 0000,
	"pagesNum": 00
}`

---

### Remover um livro
#### Delete /livros/:id
Este endpoint vai remover um livro do sistema através do `ID` especifícado.

cUrl: `curl --request DELETE \
  --url http://localhost:3000/livros/2`
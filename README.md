Esta é uma API simples de gerenciamento de livros criada utilizando Node.js com Express. A API permite realizar operações CRUD (Create, Read, Update, Delete) em uma lista de livros armazenada em um arquivo JSON.

Tecnologias Utilizadas 

- Node.js    
- Express      
- Postman (para testes)    
- File System (fs) (para manipulação do arquivo JSON)  

Funcionalidades 

1. Adicionar um livro  
2. Listar todos os livros    
3. Buscar um livro por ID  
4. Atualizar informações de um livro  
5. Deletar um livro   

Instalação e Execução 💻

Clone o repositório:

git clone https://github.com/seu-usuario/nome-do-repositorio.git

Acesse a pasta do projeto:

cd nome-do-repositorio

Instale as dependências:

npm install

Inicie o servidor:

npm start

A API rodará em http://localhost:3000 (ou na porta definida no seu projeto).

Rotas Disponíveis 

1. Listar todos os livros

GET /livros

Retorna todos os livros cadastrados.

2. Buscar um livro por ID

GET /livros/:id

:id é o identificador do livro.

Retorna os detalhes do livro correspondente.

3. Adicionar um novo livro

POST /livros

Body (JSON):

{
  "id": 1,
  "nome": "Nome do Livro",
}

Adiciona um novo livro à lista.

4. Atualizar um livro existente

PATCH /livros/:id

:id é o identificador do livro.

Body (JSON):

{
  "id": 1,
  "nome": "Novo Nome do Livro",
}

Atualiza as informações de um livro.

5. Deletar um livro

DELETE /livros/:id

:id é o identificador do livro.

Remove um livro da lista.

Testando com Postman 🛠️

Abra o Postman

Utilize as rotas mencionadas para fazer requisições HTTP e testar a API.

Licença 

Este projeto está sob a licença MIT. Sinta-se livre para utilizá-lo e modificá-lo conforme necessário. 

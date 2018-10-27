A URL para acessar a API é http://localhost:3009

Os recursos disponíveis são:
* GET: /tarefas => para listar todas as tarefas
* GET: /tarefas/:id => para listar uma tarefa informando seu ID
* GET: /tarefas/filtrar/:filtro => para listar tarefas filtrando pela descrição
* POST: /tarefas => para inserir uma nova tarefa
* PUT: /tarefas/:id => para alterar uma tarefa
* DELETE: /tarefas/:id => para deletar uma tarefa a partir de um ID

Crie e popule o banco de dados:
mysql -u root -p < database.sql

Antes de rodar o servidor instale as dependências:
npm install

Para rodar o servidor utilize o comando:
npm run dev

const express = require('express');
const app = express();
const port = '3009';
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

// Configurando
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(morgan('combined'));
app.use(cors());

// Rotas
const index = require('./routes/index');
app.use('/', index);
const tarefasRouter = require('./routes/tarefaRouter');
app.use('/tarefas', tarefasRouter);

// Subindo o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
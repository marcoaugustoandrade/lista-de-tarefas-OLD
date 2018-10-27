const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'suporte',
    password: 'Suporte99',
    database: 'db_tarefas'
});

module.exports = conexao;
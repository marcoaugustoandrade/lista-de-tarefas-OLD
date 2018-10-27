const conexao = require('../config/conexao');

exports.filtrar = (req, res) => {
    
    let filtro = req.params.filtro;
    if (filtro === undefined) filtro = "";  
    console.log(filtro);
    const query = `select * from tarefas where descricao like '%${filtro}%' order by data asc`;
    conexao.query(query, (err, rows) => {
        if (err) throw err;
        res.status(200);
        res.json(rows);
    });    
}

exports.listarTodos = (req, res) => {
    
    const query = 'select * from tarefas';
    conexao.query(query, (err, rows) => {
        if (err) throw err;
        res.status(200);
        res.json(rows);
    });
}

exports.listarPorId = (req, res) => {
    
    const id = req.params.id;
    const query = 'select * from tarefas where id = ?';
    conexao.query(query, [id], (err, rows) => {
        if (err) throw err;
        res.status(200);
        res.json(rows);
    });
}

exports.inserir = (req, res) => {
    
    const descricao = req.body.descricao;
    const data = req.body.data;

    const query = 'insert into tarefas (descricao, data) values (?,?)';
    conexao.query(query, [descricao, data], (err, rows) => {
        if (err) throw err;
        res.status(201);
        res.json({
            "message": "Tarefa inserida"
        });
    });
}

exports.alterar = (req, res) => {
    
    const id = req.params.id;
    const descricao = req.body.descricao;
    const data = req.body.data;

    const query = 'update tarefas set descricao = ?, data = ? where id = ?';
    conexao.query(query, [descricao, data, id], (err, rows) => {
        if (err) throw err;
        res.status(200);
        res.json({
            "message": "Tarefa alterada"
        })
    });
}

exports.deletar = (req, res) => {
    
    const id = req.params.id;

    const query = 'delete from tarefas where id = ?';
    conexao.query(query, [id], (err, rows) => {
        if (err) throw err;
        res.status(200);
        res.json({
            "message": "Tarefa deletada"
        });
    });
}
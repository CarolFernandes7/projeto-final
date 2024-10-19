const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/cpf', (req, res) => {
    res.json([
        { id: 1, nome: 'João Silva', filiacao: ['Marina Silva', 'Carla Santos'] },
        { id: 2, nome: 'Pedro Sampaio', filiacao: ['Carlos Sampaio', 'Roger Bueno'] },
        { id: 3, nome: 'Lais Sousa', filiacao: ['Maia Sousa', 'João Silva'] },
        { id: 4, nome: 'Lucas Pereira', filiacao: ['Roberto Pereira', 'Eduardo Pereira'] },
    ]);
});

app.post('/cpf', (req, res) => {
    const { cpf, nome, filiacao } = req.body;

    if (!Array.isArray(filiacao) || filiacao.length < 1) {
        return res.status(400).json({ message: 'A filiação deve conter pelo menos um responsável.' });
    }

    if (filiacao.includes(nome)) {
        return res.status(400).json({ message: 'O nome do usuário não pode ser o mesmo que o da filiação.' });
    }

    res.status(201).json({ message: 'CPF adicionado com sucesso', cpf, nome, filiacao });
});

app.get('/cpf/search', (req, res) => {
    const { nome } = req.query;
    const cpfs = [
        { cpf: '123.456.789-00', nome: 'João Silva', filiacao: ['Marina Silva', 'Carla Santos'] },
        { cpf: '234.567.890-11', nome: 'Pedro Sampaio', filiacao: ['Carlos Sampaio', 'Roger Bueno'] },
        { cpf: '345.678.901-22', nome: 'Lais Sousa', filiacao: ['Maia Sousa', 'João Silva'] },
        { cpf: '456.789.012-34', nome: 'Lucas Pereira', filiacao: ['Roberto Pereira', 'Eduardo Pereira'] },
    ];

    const result = cpfs.find(person => person.filiacao.includes(nome));
    
    if (result) {
        return res.json({ cpf: result.cpf, nome: result.nome, filiacao: result.filiacao });
    } else {
        return res.status(404).json({ message: 'CPF não encontrado para o nome informado.' });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota para servir o arquivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Dados dos CPFs
const cpfs = [
    { cpf: '123.456.789-00', nome: 'Olivia Sousa Fernandes', filiacao: ['Caroline Fernandes', 'Pamela Sousa'] },
    { cpf: '234.567.890-11', nome: 'João Silva', filiacao: ['Marina Silva', 'Carla Santos'] },
    { cpf: '345.678.901-22', nome: 'Lais Sousa', filiacao: ['Maia Sousa', 'João Silva'] },
    { cpf: '456.789.012-34', nome: 'Lucas Pereira', filiacao: ['Roberto Pereira', 'Eduardo Pereira'] }
];

// Rota para buscar CPF por nome e filiação
app.post('/consultar', (req, res) => {
    const { cpf, nome, filiacao } = req.body;

    const result = cpfs.find(person =>
        person.cpf === cpf &&
        person.nome === nome &&
        person.filiacao.includes(filiacao)
    );

    if (result) {
        return res.json({
            message: `CPF: ${result.cpf}, Nome: ${result.nome}, Filiacao: ${result.filiacao.join(', ')}. Situação: Regular.`
        });
    } else {
        return res.json({ message: 'Erro ao consultar CPF.' });
    }
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
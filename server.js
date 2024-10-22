const express = require('express');
const path = require('path');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuração do Swagger
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'CPF Consultation API',
            version: '1.0.0',
            description: 'API para consulta de CPF e informações de filiação'
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Servidor local'
            }
        ]
    },
    apis: ['./server.js'], // Caminho correto para os comentários das rotas
};

// Inicializa a documentação do Swagger
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

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

/**
 * @swagger
 * /consultar:
 *   post:
 *     summary: Consulta CPF por nome e filiação
 *     description: Retorna informações de CPF, nome e filiação se os dados forem válidos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cpf:
 *                 type: string
 *                 example: '123.456.789-00'
 *               nome:
 *                 type: string
 *                 example: 'Olivia Sousa Fernandes'
 *               filiacao:
 *                 type: string
 *                 example: 'Caroline Fernandes'
 *     responses:
 *       200:
 *         description: Consulta realizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'CPF: 123.456.789-00, Nome: Olivia Sousa Fernandes, Filiacao: Caroline Fernandes, Pamela Sousa. Situação: Regular.'
 *       400:
 *         description: Erro ao consultar CPF
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Erro ao consultar CPF.'
 */
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
            message: `CPF: ${result.cpf}, Nome: ${result.nome}, Filiação: ${result.filiacao.join(', ')}. Situação: Regular.`
        });
    } else {
        return res.json({ message: 'Erro ao consultar CPF.' });
    }
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
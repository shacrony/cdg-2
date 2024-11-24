// Importar dependências
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

// Criar a aplicação Express
const app = express();

// Configurar porta dinâmica
const PORT = process.env.PORT || 3000;

// Configurar CORS para permitir requisições de hosts diferentes
app.use(cors({
    origin: '*', // Permite qualquer domínio; substitua por um domínio específico, se necessário.
    methods: ['GET', 'POST'], // Métodos HTTP permitidos
    allowedHeaders: ['Content-Type'], // Cabeçalhos permitidos
}));

// Middleware para processar dados enviados no body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Endpoint para receber os dados do formulário
app.post('/submit', (req, res) => {
    const { USERNAME } = req.body; // Captura o campo USERNAME enviado no formulário

    // Salvar os dados em um arquivo (opcional)
    const log = `Dado recebido: ${USERNAME}\n`;
    fs.appendFileSync('dados_recebidos.txt', log, 'utf8');

    console.log('Dado recebido:', USERNAME); // Exibir no console para debug
    res.status(200).send('Dados capturados com sucesso!');
});

// Inicializar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em backend-production-962b.up.railway.app:${PORT}`);
});

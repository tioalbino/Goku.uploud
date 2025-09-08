const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3000

// Rota para servir o arquivo money.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})
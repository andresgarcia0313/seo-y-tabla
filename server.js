const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Configura Express para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta de contacto
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/contact.html'));
});

// Ruta para el sitemap
app.get('/sitemap.xml', (req, res) => {
    res.sendFile(path.join(__dirname, 'sitemaps/sitemap.xml'));
});

// Ruta para el robots.txt
app.get('/robots.txt', (req, res) => {
    res.sendFile(path.join(__dirname, 'robots.txt'));
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

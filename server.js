import fs from 'fs';   
import http from 'http';
import https from 'https';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';


const app = express();

app.use(express.static('dist'));

// 1. Usar el certificado local durante el desarrollo y Let's Encrypt en producción
const projectDirectory = path.dirname(fileURLToPath(import.meta.url));
const isDevelopment = process.env.NODE_ENV === 'development';
const localKeyPath = path.join(projectDirectory, 'certs', 'localhost-key.pem');
const localCertificatePath = path.join(projectDirectory, 'certs', 'localhost.pem');
const productionKeyPath = '/etc/letsencrypt/live/jamjardineria.com/privkey.pem';
const productionCertificatePath = '/etc/letsencrypt/live/jamjardineria.com/fullchain.pem';
const keyPath = isDevelopment ? localKeyPath : productionKeyPath;
const certificatePath = isDevelopment ? localCertificatePath : productionCertificatePath;

if (!fs.existsSync(keyPath) || !fs.existsSync(certificatePath)) {
    throw new Error(`No se encontraron los certificados en ${keyPath} y ${certificatePath}`);
}

const privateKey = fs.readFileSync(keyPath, 'utf8');
const certificate = fs.readFileSync(certificatePath, 'utf8');

const credentials = { key: privateKey, cert: certificate };

// 2. Crear el servidor HTTP (Puerto 80) para redirigir a HTTPS
const httpServer = http.createServer((req, res) => {
    res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
    res.end();
});

// 3. Crear el servidor HTTPS (Puerto 443) con tu aplicación
const httpsServer = https.createServer(credentials, app);

// 4. Iniciar ambos servidores
httpServer.listen(80, () => {
    console.log('Servidor HTTP (80) redirigiendo a HTTPS...');
});

httpsServer.listen(443, () => {
    console.log('Servidor HTTPS (443) activo y seguro.');
});
import http from 'http';
import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
// C:\Users\Blood\Documents\git-repos\nodejs_intro\app.js
const __dirname = path.dirname(__filename);
// C:\Users\Blood\Documents\git-repos\nodejs_intro\
const configPath = path.join(__dirname, 'config.json');
// C:\Users\Blood\Documents\git-repos\nodejs_intro\config.json
const config = JSON.parse(readFileSync(configPath, 'utf-8'));
// { port: 3000, hostname: '}
const { port, hostname } = config;


const server = http.createServer((req, res) => {
    console.log(`Anfrage erhalten: ${req.method} ${req.url}`);

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hallo Welt vom Node.js Server.');
});

server.listen(port, hostname, () => {
    console.log(`Server läuft unter http://${hostname}:${port}/`)
});

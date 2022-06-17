import express from 'express'
import dotenv from 'dotenv/config'
import os from 'os';

const app = express();
const PORT=process.env.PORT || 8000;
const numCpus = os.cpus().length;
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req,res)=>{
    res.status(200).send("<h1>Hola heroku</h1>")
})

app.get('/info', (req,res)=>{
    const obj = {
        Puerto:PORT,
        SO: process.platform,
        NodeV: process.version,
        Rss: process.memoryUsage(),
        PathEjecucion: process.execPath,
        ProcessId: process.pid,
        CarpetaProyecto: process.cwd(),
        procesadores: numCpus,
      };
      res.status(200).json({obj});
})

const server = app.listen(PORT, () => {
console.log(` 🚀🔥server is runing at http://localhost:${PORT} 🚀🔥`);
});

server.on('error', (err) => {
console.log(err);
});
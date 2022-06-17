import express from 'express'
import dotenv from 'dotenv/config'

const app = express();
const PORT=process.env.PORT || 8000;
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req,res)=>{
    res.status(200).send("<h1>Hola heroku</h1>")
})

const server = app.listen(PORT, () => {
console.log(` 🚀🔥server is runing at http://localhost:${PORT} 🚀🔥`);
});

server.on('error', (err) => {
console.log(err);
});
import express from "express";
import path from "path"
import serverRoutes from './routes/servers.js'

const __dirname = path.resolve()


const PORT = process.env.PORT ?? 5000

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(serverRoutes)

app.get('/',(req, res) => {
    res.send('<h1> Hello express </h1>')
})


app.listen(PORT, (req, res) => {
    console.log(`has been started ${PORT}`);
})











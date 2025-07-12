import express from 'express';
import { mongoDb } from './db/db.js';
import router from "./routes/route.js"

const app = express();
app.use(express.json())
const PORT = 3000

app.use('/', router)

mongoDb()
.then(() =>{
    console.log("mongo db connected")
    app.listen(PORT, () =>{
    console.log(`Your app run on ${PORT}`)
})
}).catch(() =>{
    console.log("Mongodb error")
})


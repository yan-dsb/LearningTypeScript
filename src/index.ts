import express from "express";
import { helloWorld } from './routes'
const app = express();

app.get('/', helloWorld)

app.get('*', (req, res)=>{
    return res.status(404).json({ message: 'PAGE NOT FOUND'});
})

app.listen(3333, ()=>{
    console.log('Server started listening on port 3333');
    
})
import express from 'express';
import userRoutes from './routes/userRoutes.js'
const app = express();

app.use(express.json());
app.use('/',userRoutes);

app.get('/api/greet',(req,res)=>{
    res.status(200).json({message : "Success!"});
});
const PORT = 8080;
app.listen(PORT,()=>console.log(`Server is Started On Port : ${PORT}`));
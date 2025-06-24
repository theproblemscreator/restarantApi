import express from 'express';
import userRoutes from './routes/userRoutes.js'
import dotenv from 'dotenv'
dotenv.config();
const app = express();
app.use(express.json());


app.use('/',userRoutes);

app.listen(process.env.PORT,()=>console.log(`Server is Startd on Port : ${process.env.PORT}`));
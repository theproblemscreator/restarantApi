import express from 'express';
import dotenv from 'dotenv';
import LoginRoutes from './routes/LoginRoutes.js'
import ProfileRoutes from './routes/ProfileRoutes.js'
import AdminRoutes from './routes/AdminRoutes.js'
dotenv.config();
const app = express();

app.use(express.json());

app.use('/api' , LoginRoutes);
app.use('/api' ,ProfileRoutes);
app.use('/api' ,AdminRoutes);

const PORT = process.env.PORT;

app.listen(PORT,()=>console.log(` Server is started on Port : ${PORT}`));


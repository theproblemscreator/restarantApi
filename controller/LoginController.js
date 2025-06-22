import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config();
export const LoginController = (req, res) => {

    const {email,password} = req.body;

    const users = [
        { id: 1, name: "Ajay", email: "ajay@gmail.com" , password : "12345",role:"USER"},
        { id: 1, name: "Sumit", email: "sumit@gmail.com" , password : "12345",role:"ADMIN"},
        { id: 1, name: "Amol", email: "amol@gmail.com" , password : "12345",role:"USER"},
        { id: 1, name: "Anil", email: "anil@gmail.com" , password : "12345",role:"USER"}

    ];

    const user = users.find(item => item.email == email && item.password == password );

    if(!user) res.status(401).json({message : "User Is Not Found"});

     const token = jwt.sign({id:user.id , email : user.email, name  : user.name, role:user.role}, process.env.SECRET_KEY, {expiresIn : '1h'}) ;

     res.json({
        name : user.name,
        email : user.email,
        token
     });

}

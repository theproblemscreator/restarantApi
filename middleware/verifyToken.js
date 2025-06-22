import jwt from 'jsonwebtoken';

const VerifyToken = (req,res,next)=>{
    const token = req.headers['authorization'].split(' ')[1];
   
    if(!token){
        res.status(401).json({message : "Token is missing"});
    }

    jwt.verify(token , process.env.SECRET_KEY , {expiresIn : '1h'} , (err,user)=>{
       
        if(err) res.status(403).json({message  : "In-Valid Token"});
        
            req.user = user;
        next(); 
    });

}

export default VerifyToken;
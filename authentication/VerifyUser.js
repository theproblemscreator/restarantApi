import jwt from 'jsonwebtoken';

const VerifyUser = (req, res, next) => {
  const token = req.headers['authorization']?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Token is Required" });

  jwt.verify(token, 'secrete-key', (err, user) => {
    if (err) return res.status(403).json({ message: "Unauthorized User" }); // 403 is better for unauthorized access
    req.user = user;
    next();
  });
};

export default VerifyUser;

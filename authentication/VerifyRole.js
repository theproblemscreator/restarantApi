export const VerifyRole = (requiredRole) => {
  return (req, res, next) => {
    if (req.user.role !== requiredRole) {
      return res.status(403).json({ message: "Access denied: insufficient permissions" });
    }
    next();
  };
};

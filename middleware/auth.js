const jwt = require('jsonwebtoken');

// Middleware to verify JWT from cookie
exports.verifyToken = (req, res, next) => {

  const token = req.cookies.token

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, 'please_give_A_grade__:((');
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

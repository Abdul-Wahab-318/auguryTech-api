const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../schema/UserSchema.js');

// Register a new user
exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username, password });
    const savedUser = await user.save();

    const token = jwt.sign({ userId: savedUser._id }, 'ghbw$erjo;gewgw#reu35', { expiresIn: '1h' });
    res.status(200).cookie('token' , token , { maxAge : 3456000000 , httpOnly : true }).json({message : 'logged in'})

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign({ userId: user._id }, 'please_give_A_grade__:((', { expiresIn: '1h' });
    res.status(200).cookie('token' , token , { maxAge : 3456000000 , httpOnly : true }).json({message : 'logged in'})

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

import jwt from 'jsonwebtoken';

const generateToken = (id) => {
    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: '10d',
  });
}

export default generateToken
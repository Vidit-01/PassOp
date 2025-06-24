import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  console.log(email,password)

  return res.status(200).json({ message: 'Login successful' });
});


app.listen(5000, () => {
  console.log('Server running on port 5000');
});
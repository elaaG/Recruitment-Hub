import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import chatRouter from './routes/chat';
import candidatesRouter from './routes/candidates';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.use('/api/chat', chatRouter);
app.use('/api/candidates', candidatesRouter);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Gestion Interns API' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
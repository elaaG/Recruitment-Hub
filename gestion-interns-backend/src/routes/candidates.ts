import { Router } from 'express';
import { mockCandidates } from '../data/candidates';

const router = Router();

router.get('/', (req, res) => {
  res.json(mockCandidates);
});

router.get('/:id', (req, res) => {
  const candidate = mockCandidates.find(c => c.id === req.params.id);
  candidate ? res.json(candidate) : res.status(404).json({ error: 'Not found' });
});

export default router;
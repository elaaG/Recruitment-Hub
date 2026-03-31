import { Router } from 'express';
import { prisma } from '../prisma_config';

const router = Router();

router.get('/', async (req, res) => {
  const candidates = await prisma.candidate.findMany({ include: { projects: true } });
  res.json(candidates);
});

router.get('/:id', async (req, res) => {
  const candidate = await prisma.candidate.findUnique({
    where: { id: req.params.id },
    include: { projects: true }
  });
  candidate ? res.json(candidate) : res.status(404).json({ error: 'Not found' });
});

export default router;
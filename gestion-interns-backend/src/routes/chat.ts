import { Router } from 'express';
import { askGemini } from '../services/geminiApi';
import { RECRUITMENT_SYSTEM_PROMPT } from '../services/systemPrompt';

const router = Router();

router.post('/', async (req, res) => {
  const { message, history } = req.body;
  try {
    const reply = await askGemini(RECRUITMENT_SYSTEM_PROMPT, message, history);
    res.json({ reply });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

export default router;
import { Router, Request, Response } from 'express';

const test = Router();

test.get('/', (req: Request, res: Response) => {
  console.log('this route has been hit');
  res.json({ message: 'If you see this, i set up webpack correctly' });
});

export default test;

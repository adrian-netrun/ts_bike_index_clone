import { Router } from 'express';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../database/entity/User';
import { AppDataSource } from '../../database/data-source';

const users = Router();
const entityManager = AppDataSource.createEntityManager();

async function pHashed(pt: string): Promise<string> {
  const hash = await bcrypt.hash(pt, 12);
  return hash;
}

users.post('/user/register', async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const hp = await pHashed(password);
    await entityManager.insert(User, {
      username: username,
      hashedPassword: hp,
    });
    res.status(200).send('new user written to database');
  } catch (error) {
    res.send(error).status(500);
  }
});

users.delete('/user/delete', async (req: Request, res: Response) => {
  const username = req.body;

  try {
    await entityManager.delete(User, username);
    res.send('user deleted').status(200);
  } catch (error) {
    res.send('An error ocurred').status(400);
  }
});

export default users;

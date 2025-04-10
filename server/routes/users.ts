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
  if (!req.body) {
    res.status(400).send('No data received');
  }

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
  if (!req.body) {
    res.status(400).send('No data received');
  }

  const username = req.body;

  try {
    await entityManager.delete(User, username);
    res.send('user deleted').status(200);
  } catch (error) {
    res.send('An error ocurred').status(400);
  }
});

users.post('/user/login', async (req: Request, res: Response) => {
  if (!req.body) {
    res.status(400).send('No data received');
  }
  const { username, password } = req.body;
  try {
    const user = await entityManager.findOne(User, {
      where: {
        username: username,
      },
    });

    if (user == null) {
      throw Error('No user found, create user?');
    }

    const compare = await bcrypt.compare(
      password,
      user.hashedPassword.toString(),
    );

    if (!compare) {
      throw Error('password incorrect');
    }

    res.status(200).send('user logged in');
  } catch (error) {
    console.log(error);
    res.status(400).send('Error happened');
  }
});

users.put('/user/change-password', async (req: Request, res: Response) => {
  if (!req.body) {
    res.status(400).send('No data received');
  }

  const { username, password } = req.body;

  try {
    const user = await entityManager.findOne(User, {
      where: {
        username: username,
      },
    });

    if (user === null) {
      throw Error('no user found');
    }

    await entityManager.update(User, username, {
      hashedPassword: password,
    });

    res.status(200).send('passord changed');
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

export default users;

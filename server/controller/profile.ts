import { Router } from 'express';
import { AppDataSource } from 'database/data-source';
import { UserProfile } from 'database/entity/UserProfile';
import { ProfilePicture } from 'database/entity/ProfilePicture';
import { Request, Response } from 'express';
import * as fs from 'fs';

const profile = Router();

profile.post('/profile/picture', (req: Request, res: Response) => {
  console.log('this route does nothing');
  res.status(200);
});

export default profile;

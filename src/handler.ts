import { Request, Response } from 'express';

export const welcomeHandler = (req: Request, res: Response) => {
    res.send('welocome from ........');
};
import { Request, Response } from 'express';

export const HomepageGetHandler = (_: Request, res: Response) => {
    res.render('index');
};

export const LandingGetHandler = (_: Request, res: Response) => {
  res.render('landing');
};




import { Request, Response } from 'express';
import { getallproducts } from './Database/Dao/products';

// export const HomepageGetHandler = (_: Request, res: Response) => {
//     res.render('index');
// };

export const LandingGetHandler = (_: Request, res: Response) => {
  res.render('landing');
};

export const HomepageGetHandler = async (req: Request, res: Response) => {
 try {
  const products = await getallproducts();
  res.render('index', {products});
 }
 catch(error) {
  console.error ('no products left', error);
  res.status(500).send ('internal server error');
 }
};



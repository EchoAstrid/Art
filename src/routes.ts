import { Router } from 'express';
import { HomepageGetHandler, LandingGetHandler } from './handler';

const router = Router();
router.get('/', LandingGetHandler);
router.get('/home', HomepageGetHandler);



export default router;
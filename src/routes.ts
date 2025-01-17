import { Router } from 'express';
import { welcomeHandler } from './handler';

const router = Router();

router.get('/', welcomeHandler);
router.post('/', (req, res) => {
    res.send('Hello, World!');
});

export default router;
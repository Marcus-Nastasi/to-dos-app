import express from 'express';
import { renderHome } from '../controllers/homeController';
import { renderLogin } from '../controllers/loginController';

const router = express.Router();

router.get('/', renderHome);

// login
router.get('/login', renderLogin);

// dash
router.get('/dashboard', (req: any, res: any) => res.json({ status: 'soon' })); 

export default router;


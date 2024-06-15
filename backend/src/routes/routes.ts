import express from 'express';
import { renderHome } from '../controllers/homeController';
import { renderLogin } from '../controllers/loginController';

const router = express.Router();

router.get('/', renderHome);

// login
router.get('/login', renderLogin);

export default router;


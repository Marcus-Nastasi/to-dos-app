import express from 'express';
import { renderHome } from '../controllers/homeController';
import { renderLogin } from '../controllers/loginController';
import { updateTodo } from '../controllers/updateTodoCntr';

const router = express.Router();

router.get('/', renderHome);

// login
router.get('/login', renderLogin);

// dash
router.get('/dashboard', (req: any, res: any) => res.json({ status: 'soon' })); 

// update todo
router.get('/update/todo/:id', updateTodo);

export default router;


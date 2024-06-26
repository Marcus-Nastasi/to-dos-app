import express from 'express';
import { renderHome } from '../controllers/homeController';
import { renderLogin } from '../controllers/loginController';
import { updateTodo } from '../controllers/updateTodoCntr';
import { handleAccountPage } from '../controllers/accountController';
import { handleConfigPage } from '../controllers/configController';

const router = express.Router();

router.get('/', renderHome);

// login
router.get('/login', renderLogin);

// dash
router.get('/dashboard', (req: any, res: any) => res.json({ status: 'soon' })); 

// update todo
router.get('/update/todo/:id', updateTodo);

// config
router.get('/user/configurations', handleConfigPage);

// account
router.get('/user/account', handleAccountPage);

export default router;


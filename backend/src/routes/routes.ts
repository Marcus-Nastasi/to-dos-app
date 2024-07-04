import express from 'express';

import { renderHome } from '../controllers/homeController';
import { renderLogin } from '../controllers/loginController';
import { updateTodo } from '../controllers/updateTodoCntr';
import { handleAccountPage } from '../controllers/accountController';
import { handleConfigPage } from '../controllers/configController';
import { aboutPage } from '../controllers/about';

const router = express.Router();

router.get('/', renderHome);

// login
router.get('/login', renderLogin);

// dash
router.get('/dashboard', (req: any, res: any) => res.status(200).json({ status: 'soon' }).end()); 

// update todo
router.get('/update/todo/:id', updateTodo);

// config
router.get('/user/configurations', handleConfigPage);

// account
router.get('/user/account', handleAccountPage);

// about
router.get('/about', aboutPage);

export default router;


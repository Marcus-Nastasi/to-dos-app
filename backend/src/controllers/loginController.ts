import { Request, Response } from "express";

export const renderLogin = (req: Request, res: Response) => res.render('pages/login');


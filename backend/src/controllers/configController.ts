import { Request, Response } from "express"

export const handleConfigPage = (req: Request, res: Response) => res.render('pages/config');




import { Request, Response } from "express";
import httpStatus from "http-status";

export const routeNotFound = (req: Request, res: Response) => {
    const path = req.baseUrl + req.path;

    res.status(httpStatus.NOT_FOUND).send(`ROUTE ${path} NOT FOUND`);
}

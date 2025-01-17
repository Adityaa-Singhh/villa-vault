import express from "express";

import { Route } from "../common/interfaces/Route";
import authRouter from "./auth.routes";

const router = express.Router();

const routes: Array<Route> = [
    {
        path: "/auth",
        router: authRouter,
    },
];

routes.forEach((route) => {
    router.use(route.path, route.router);
});

export default router;

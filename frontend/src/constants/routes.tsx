import { RouteObject } from "react-router";
import Homepage from '../pages/Homepage';

export const routes: Array<RouteObject> = [
    {
        path: '/',
        element: <Homepage />,
    },
];

import { RouteObject } from "react-router";
import Homepage from '../pages/Homepage';
import Dashboard from "@/pages/Dashboard";

export const routes: Array<RouteObject> = [
    {
        path: '/',
        element: <Homepage />,
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
    },
];

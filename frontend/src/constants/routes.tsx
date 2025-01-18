import { RouteObject } from "react-router";

import Homepage from '../pages/Homepage';
import Dashboard from "@/pages/Dashboard";
import UpdatePassword from "@/pages/UpdatePassword";

export const routes: Array<RouteObject> = [
    {
        path: '/',
        element: <Homepage />,
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
    },
    {
        path: '/update-password',
        element: <UpdatePassword />,
    },
];

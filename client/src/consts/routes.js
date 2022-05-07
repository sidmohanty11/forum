import Login from "../pages/login";
import Register from "../pages/register";

export const AUTH_ROUTES = [
  {
    route: "/login",
    component: <Login />,
  },
  {
    route: "/register",
    component: <Register />,
  },
];

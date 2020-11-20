import LoginScreen from 'Pages/Login/Index';
import { Routes } from 'Routes/settings/Routes';

export const PublicRoutes = [
  Routes('Login', LoginScreen, { initialRoute: true }),
];

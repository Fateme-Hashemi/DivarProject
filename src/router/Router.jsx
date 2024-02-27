import { Route, Routes } from "react-router-dom"
import AuthPage from "pages/AuthPage";
import HomePage from "pages/HomePage";
import AdminPage from "pages/AdminPage";
import Dashboard from "pages/Dashboard";
import NotFound from "pages/404";

function Router() {
    return (
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage/>} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default Router
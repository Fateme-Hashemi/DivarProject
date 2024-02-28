import { Route, Routes } from "react-router-dom"
import AuthPage from "pages/AuthPage";
import HomePage from "pages/HomePage";
import AdminPage from "pages/AdminPage";
import Dashboard from "pages/Dashboard";
import NotFound from "pages/404";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "services/user";

function Router() {
    const {data, isLoading, error} = useQuery(['profile'], getProfile);
    console.log(data, isLoading, error);
    if(isLoading) {
        return <h1>Loading ...</h1>
    }
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
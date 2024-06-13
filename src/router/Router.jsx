import { Navigate, Route, Routes } from "react-router-dom"
import AuthPage from "pages/AuthPage";
import HomePage from "pages/HomePage";
import AdminPage from "pages/AdminPage";
import Dashboard from "pages/Dashboard";
import NotFound from "pages/404";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "services/user";
import Loader from "components/modules/Loader";

function Router() {
    const {data, isLoading} = useQuery(['profile'], getProfile);
    if(isLoading) {
        return <Loader />
    }
    console.log(data)
    return (
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={data && data.data.role === "ADMIN" ? <AdminPage/> : <Navigate to="/" /> } />
        <Route path="/auth" element={data ? <Navigate to="/dashboard" /> : <AuthPage />} />
        <Route path="/dashboard" element={data ? <Dashboard /> : <Navigate to="/auth" />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default Router
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { ScrollRestoration } from "react-router-dom";

export default function Base() {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
            <ScrollRestoration />
        </>
    )
}

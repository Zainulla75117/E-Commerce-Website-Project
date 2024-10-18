import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

function App() {
    return (
    <>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/category" element={<Category/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/orders" element={<Orders/>} />
            <Route path="/wishlist" element={<Wishlist/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Register/>} />
            <Route path="*" element={<PageNotFound/>} />
        </Routes>
        
        </>
    );
}



export default App;

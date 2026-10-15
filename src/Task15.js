import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <h1>React Router Example</h1>

            <Link to="/">Home</Link> |{" "}
            <Link to="/product">Product</Link> |{" "}
            <Link to="/about">About</Link> |{" "}
            <Link to="/contact">Contact</Link>

            <Routes>
                <Route path="/" element={<h2>Home Page</h2>} />
                <Route path="/product" element={<h2>Product Page</h2>} />
                <Route path="/about" element={<h2>About Page</h2>} />
                <Route path="/contact" element={<h2>Contact Page</h2>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
//npm install react-router-dom
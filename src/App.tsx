import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home page/Home";
import Header from "./components/Header/Header";
import Checkout from "./pages/Checkout Page/Checkout";
import Contact from "./pages/Contact page/Contact";
import About from "./pages/About page/About";
import LogIn from "./pages/Log-in page/LogIn";
import SignIn from "./pages/Sign-in page/SignIn";
import ProductDetails from "./pages/Product Details page/ProductDetails";
import Products from "./pages/Products page/Products";
import Profile from "./pages/Profile page/Profile";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about-us" element={<About />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="log-in" element={<LogIn />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="details" element={<ProductDetails />} />
        <Route path="products" element={<Products />} />
        <Route path="user-profile" element={<Profile />} />
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

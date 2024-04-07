import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayOut from "./layouts/MainLayOut";
import Home from "./pages/HomePage/Home";
import About from "./pages/AboutPage/About";
import Checkout from "./pages/CheckoutPage/Checkout";
import Contact from "./pages/ContactPage/Contact";
import LogIn from "./pages/Log-inPage/LogIn";
import ProductDetails from "./pages/ProductDetailsPage/ProductDetails";
import Products from "./pages/ProductsPage/Products";
import Profile from "./pages/ProfilePage/Profile";
import SignIn from "./pages/Sign-inPage/SignIn";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayOut />}>
      <Route index element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="contact-us" element={<Contact />} />
      <Route path="log-in" element={<LogIn />} />
      <Route path="sign-in" element={<SignIn />} />
      <Route path="details" element={<ProductDetails />} />
      <Route path="products" element={<Products />} />
      <Route path="user-profile" element={<Profile />} />
      <Route path="*" element={<p>Not found</p>} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

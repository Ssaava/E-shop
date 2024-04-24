import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayOut from "./layouts/MainLayOut";
import About from "./pages/AboutPage/About";
import Checkout from "./pages/CheckoutPage/Checkout";
import Contact from "./pages/ContactPage/Contact";
import Home from "./pages/HomePage/Home";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import ProductDetails from "./pages/ProductDetailsPage/ProductDetails";
import Products from "./pages/ProductsPage/Products";
import Profile from "./pages/ProfilePage/Profile";
import SignIn from "./pages/SignInPage/SignIn";
import SignUp from "./pages/SignUpPage/SignUp";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayOut />}>
      <Route index element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="contact-us" element={<Contact />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="details" element={<ProductDetails />} />
      <Route path="products" element={<Products />} />
      <Route path="user-profile" element={<Profile />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

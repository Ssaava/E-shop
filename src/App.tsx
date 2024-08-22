import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayOut from "./layouts/MainLayOut";
import About from "./pages/About.tsx";
import Checkout from "./pages/Checkout.tsx";
import Contact from "./pages/Contact.tsx";
import Home from "./pages/Home.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";
import ProductDetails from "./pages/ProductDetails.tsx";
import Products from "./pages/Products.tsx";
import Profile from "./pages/Profile.tsx";
import SignIn from "./pages/SignIn.tsx";
import SignUp from "./pages/SignUp.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayOut />}>
      <Route index element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="contact-us" element={<Contact />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/product" element={<ProductDetails />} />
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

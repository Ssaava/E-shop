import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayOut from "./layouts/MainLayOut";
import About from "./pages/AboutPage/About";
import Home from "./pages/HomePage/Home";
// const routes = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayOut />,
//     children: [
//       {
//         path: "/about-us",
//         element: <About />,
//       },
//       {
//         path: "/about-us",
//         element: <About />,
//       },
//       {
//         path: "/about-us",
//         element: <About />,
//       },
//       {
//         path: "/about-us",
//         element: <About />,
//       },
//       {
//         path: "/about-us",
//         element: <About />,
//       },
//       {
//         path: "/about-us",
//         element: <About />,
//       },
//       {
//         path: "/about-us",
//         element: <About />,
//       },
//       {
//         path: "/about-us",
//         element: <About />,
//       },
//       {
//         path: "/about-us",
//         element: <About />,
//       },
//       {
//         path: "*",
//         element: <p>Page not found</p>,
//       },
//     ],
//   },
// ]);
// function App() {
//   return (
//     <RouterProvider router={routes} />

//     // <BrowserRouter>
//     //   <Header />
//     //   <Routes>
//     //     <Route path="/" element={<Home />} />
//     //     <Route path="/about-us" element={<About />} />
//     //     <Route path="/checkout" element={<Checkout />} />
//     //     <Route path="/contact-us" element={<Contact />} />
//     //     <Route path="/log-in" element={<LogIn />} />
//     //     <Route path="/sign-in" element={<SignIn />} />
//     //     <Route path="/details" element={<ProductDetails />} />
//     //     <Route path="/products" element={<Products />} />
//     //     <Route path="/user-profile" element={<Profile />} />
//     //     <Route path="*" element={<p>Page not found</p>} />
//     //   </Routes>
//     // </BrowserRouter>
//   );
// }

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayOut />}>
      <Route index element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="*" element={<p>Not found</p>} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

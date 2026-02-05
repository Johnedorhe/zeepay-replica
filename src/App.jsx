import {createBrowserRouter, RouterProvider, Outlet, useLocation} from "react-router-dom";
import HomePage from "./pages/homepage";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import Pricing from "./pages/pricing";
import Nav from "./pages/nav";
import Footer from "./pages/footer";
import Login from "./pages/login";
import SignUp from "./pages/signup";


const RootLayout = () => {
 const location = useLocation();
const noNavFooterRoutes = ['/pricing', '/contact', '/login', '/signup'];
const showNavFooter = !noNavFooterRoutes.includes(location.pathname);

  return(
  <div className='min-h-screen flex flex-col font-inter'>
    {showNavFooter && <Nav />}

      <main>
        <Outlet />
      </main>
      <footer className="text-center">
      {showNavFooter && <Footer />}  
      </footer>
  </div>
  )
}

const NotFound = () => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
  </div>
);

const ErrorFallback = ({ error }) => (
  <div style={{ padding: '2rem', textAlign: 'center', color: 'red' }}>
    <h1>Something went wrong</h1>
    <p>{error?.message || 'An unexpected error occurred.'}</p>
    <a href="/zeepay-replica/">Go to Home</a>
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, 
    errorElement: <ErrorFallback />, 
    children: [
      { index: true, element: <HomePage /> },
      { path: 'contact', element: <Contact /> },
      { path: 'blog', element: <Blog /> },
      { path: 'pricing', element: <Pricing /> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <SignUp /> },
      { path: '*', element: <NotFound /> },
    ],
  },
], {
  basename: '/zeepay-replica',
});

function App() {
  return(
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
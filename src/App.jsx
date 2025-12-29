import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import HomePage from "./pages/homepage";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import Pricing from "./pages/pricing";
import Nav from "./pages/nav";
import Footer from "./pages/footer";
import Login from "./pages/login";
import SignUp from "./pages/signup";


const RootLayout = () => (
  <div className='min-h-screen flex flex-col font-sans'>
    <nav className=''><Nav /></nav>
    <main className='flex-1'><Outlet /></main>
    <footer className=''> <Footer/> </footer>
  </div>
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {index: true, element: <HomePage />},
      {path: '/contact', element: <Contact />},
      {path: '/profile', element: <Blog />},
      {path: '/pricing', element: <Pricing />},
      {path: '/login', element: <Login />},
      {path: '/signup', element: <SignUp />}
    ]
  }
])

function App() {
  return(
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
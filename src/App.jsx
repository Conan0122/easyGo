import Home from './Pages/Home'
import Categories from './Pages/Categories'
import Contact from './Pages/Contact'
import LoginPage from './Pages/LoginPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Profile from './Pages/Profile'

function App() {

  // Set paths for the components to show on render.
  // Layout has page layout with nav bar and then outlet and at bottom, footer.
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "",
          element: <Home/>
        },
        {
          path: "categories",
          element: <Categories/>
        },
        {
          path: "contact",
          element: <Contact/>
        }
        ,
        {
          path: "loginPage",
          element: <LoginPage/>
        }
        ,
        {
          path: "profile",
          element: <Profile/>
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App

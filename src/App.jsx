import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createContext, useState } from 'react'
export const AppContext = createContext()

import Main from './layouts/Main/Main'
import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import Popular from './pages/Popular/Popular'
import PopularEdit from './pages/PopularEdit/PopularEdit'
import OurServices from './pages/OurServices/OurServices'
import Error from './pages/Error/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: '/o-nas',
        element: <AboutUs />,
        errorElement: <Error />,
      },
      {
        path: '/popularne',
        element: <Popular />,
        errorElement: <Error />,
      },
      {
        path: '/uslugi',
        element: <OurServices />,
        errorElement: <Error />,
      },
      {
        path: 'popularne-edit',
        errorElement: <Error />,
        children: [
          {
            path: ':id',
            element: <PopularEdit />,
            errorElement: <Error />,
          },
        ]
        }
    ],
  },
])
function App() {
  
  return (
    <div className='App'>
      <AppContext.Provider
        value={{}}
      >
        <RouterProvider router={router} />
      </AppContext.Provider>
    </div>
  )
}

export default App

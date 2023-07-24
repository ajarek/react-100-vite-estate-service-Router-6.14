import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createContext, useState } from 'react'
export const AppContext = createContext()

import Main from './layouts/Main/Main'
import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import Popular from './pages/Popular/Popular'
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

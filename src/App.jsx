import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import Authentication from './pages/Authentication/Authentication';
import ErrorPage from './pages/ErrorBoundry/ErrorBoundry';

const router = createBrowserRouter([
  {
    path: '*',
    element: <ErrorPage />,
  },
  {
    path: '/',
    exact: true,
    element: <HomePage />,
  }, 
  {
    path: '/Authentication',
    exact: true,
    element: <Authentication />,
  },
])

function App() {

  return (
    <>
        <main className="App w-full flex flex-col justify-center items-center">
          <RouterProvider router={router} />
        </main>
    </>
  )
}

export default App

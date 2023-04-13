import React from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import Authentication from './pages/Authentication/Authentication';

function App() {

  return (
    <>
        <main className="App w-full flex flex-col justify-center items-center">
          <BrowserRouter>
            <Routes>
              <Route path="/" exact element={<HomePage />} />
              <Route path="Authentication" element={<Authentication />} />
            </Routes>
          </BrowserRouter>
        </main>
    </>
  )
}

export default App

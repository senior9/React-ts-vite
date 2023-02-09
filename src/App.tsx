import React from 'react';
import { createRoot } from "react-dom/client";
import './app.css';
import {   BrowserRouter,
  Routes,
  Route,
  Link, } from 'react-router-dom';
import UserForm from './Components/firstPage/UserForm';
import SecondPage from './Components/SecondPage/SecondPage';

export default function App() {
  return (
    <div className='css'>
      <BrowserRouter>
        {/* Routes Definition */}
        <Routes>
          {/* Parent Navigation Routes */}
          <Route path="/" element={<UserForm />} />
          <Route path="/secondpage" element={<SecondPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


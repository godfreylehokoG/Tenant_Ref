import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FormBuilder from '@components/FormBuilder';
import Preview from '@components/Preview'; 
import SendEmailPage from '@components/SendEmail/SendEmailPage';
import Login from '@components/Login';
import Register from '@components/Register';
import 'react-nestable/dist/styles/index.css';

const App = () => {
  // Define the public URL
  const publicURL = process.env.PUBLIC_URL;

  return (
    <Router basename="/Tenant_Ref"> {/* Ensure this matches your repository name */}
      <Routes>
        <Route path="/" element={<FormBuilder />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/send-email" element={<SendEmailPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      {/* Example of using process.env.PUBLIC_URL in a Link */}
      <Link to={`${publicURL}/about`}>About</Link>
    </Router>
  );
};

export default App;

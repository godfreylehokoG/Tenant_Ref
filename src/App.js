// import { Fragment } from "react";
// import FormBuilder from "@components/FormBuilder";
// import "react-nestable/dist/styles/index.css";
// const App = () => {
//   return (
//     <Fragment>
//         <FormBuilder />
//     </Fragment>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormBuilder from '@components/FormBuilder';
import Preview from '@components/Preview'; // Make sure you've created this component as suggested earlier
import 'react-nestable/dist/styles/index.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormBuilder />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </Router>
  );
};

export default App;


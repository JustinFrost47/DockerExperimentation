// src/components/RouterTable.tsx

import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import NewEntryForm from '../pages/NewEntryForm';

const RouterTable: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/new" element={<NewEntryForm />} />

      </Routes>
    </BrowserRouter>
  );
};

export default RouterTable;

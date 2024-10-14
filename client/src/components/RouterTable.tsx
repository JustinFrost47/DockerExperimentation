// src/components/RouterTable.tsx

import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import { ProductProvider } from '../Contexts/ProductContext';

import Sidebar from './ui/Sidebar';
import NewEntryForm from '../pages/NewEntryForm';
import Home from '../pages/Home';
import ProductPage from '../pages/ProductPage'

const RouterTable: React.FC = () => {
  return (
    <>
    <ProductProvider>
    <BrowserRouter>
    <Sidebar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewEntryForm />} />
      <Route path="/product/:id" element={<ProductPage />} />

      </Routes>
    </BrowserRouter>
    </ProductProvider>
    </>
  );
};

export default RouterTable;

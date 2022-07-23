import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import { App } from './Componentes/App';
import { Layout } from "./Componentes/Layout";
import { OtherPage } from "./Componentes/OtherPage";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />;
        <Route path="/OtherPage" element={<OtherPage />} />;
      </Route>
    </Routes>
  </BrowserRouter>

);


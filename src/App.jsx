import { Suspense, lazy } from "react";
import React from 'react'
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogePage = lazy(() => import("./pages/CatalogePage/CatalogePage"));
const CamperPage = lazy(() => import("./pages/CamperPage/CamperPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage//NotFoundPage"));

const App = () => {
  return (
    <>
      <Toaster />
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cataloge" element={<CatalogePage />} />
          <Route path="/cataloge/:id" element={<CamperPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
import { Suspense, lazy } from "react";
import React from 'react'
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const CamperPage = lazy(() => import("./pages/CamperPage/CamperPage"));
const CamperFeatures = lazy(() => import("./components/CamperFeatures/CamperFeatures"));
const CamperReviews = lazy(() => import("./components/CamperReviews/CamperReviews"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage//NotFoundPage"));

const App = () => {
  return (
    <>
      <Toaster />
      <Header/>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CamperPage />}>
            <Route index element={<Navigate to="features" />} />
            <Route path="features" element={<CamperFeatures />} />
            <Route path="reviews" element={<CamperReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
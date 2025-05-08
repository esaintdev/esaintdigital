import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteScrollToTop from "./elements/RouteScrollToTop";
import ScrollToTop from "react-scroll-to-top";
import HomeFive from "./pages/HomeFive";
import About from "./pages/About";
import Service from "./pages/Service";
import Project from "./pages/Project";
import ProjectDetails from "./pages/ProjectDetails";
import Blog from "./pages/Blog";
import Pricing from "./pages/Pricing";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Products from "./pages/Products";
import ProductForm from "./components/ProductForm";
import EditProductForm from "./components/EditProductForm";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <RouteScrollToTop />
        <ScrollToTop smooth color="#196164" />
        <Routes>
          <Route exact path="/" element={<HomeFive />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/product-form" element={<ProductForm />} />
          <Route exact path="/products/edit/:id" element={<EditProductForm />} />
          <Route exact path="/project-details/:id" element={<ProjectDetails />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/service" element={<Service />} />
          <Route exact path="/project" element={<Project />} />
          <Route exact path="/project-details" element={<ProjectDetails />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

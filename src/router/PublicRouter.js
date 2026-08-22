import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../frontend/Home";
import ProductDetail from "../frontend/ProductDetail";
import AboutPage from "../frontend/About";
import Associations from "../frontend/Associations";
import SisterConcern from "../frontend/SisterConcern";
import ContactPage from "../frontend/Contact";
import BlogPage from "../frontend/Blogs";
import BlogDetail from "../frontend/BlogDetail";
import FaqPage from "../frontend/faqs";
import PrivacyPage from "../frontend/privacy";
import ProductPage from "../frontend/product";
import BlogCategory from "../frontend/BlogCategory";
import Category from "../frontend/category";
import ProductCategoryPage from "../frontend/product_category";
import PreviewPage from "../frontend/PreviewPage";
import BlogPreviewPage from "../frontend/PreviewPage/BlogPreview";
import CareerPreviewPage from "../frontend/PreviewPage/CareerPreview";
import ServiceClaim from "../frontend/ServiceClaim";

const PublicRouter = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />

        {/* about page  */}
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/associations" element={<Associations />} />
        <Route path="/sister-concern" element={<SisterConcern />} />

        {/* contact page */}
        <Route path="contact-us" element={<ContactPage />} />

        {/* blog page */}
        <Route path="blogs" element={<BlogPage />} />
        <Route path="/blogs/:blogId" element={<BlogDetail />} />
        <Route path="/category/:categoryId" element={<BlogCategory />} />

        {/* faq page */}
        <Route path="faqs" element={<FaqPage />} />

        {/* faq page */}
        <Route path="/privacy-policy" element={<PrivacyPage />} />
        <Route path="/terms-and-condition" element={<PrivacyPage />} />

        {/* product page route */}
        <Route path="/products" element={<ProductPage />} />

        <Route
          path="/product-category/:categoryId"
          element={<ProductCategoryPage />}
        />
        <Route
          path="/product-category/:categoryId/products"
          element={<Category />}
        />

        <Route path="/product/:productId" element={<ProductDetail />} />

        {/* Admin Live Preview Routes */}
        <Route path="/preview/:previewId" element={<PreviewPage />} />
        <Route path="/preview/blog/:previewId" element={<BlogPreviewPage />} />
        <Route path="/preview/career/:previewId" element={<CareerPreviewPage />} />

        {/* ─── Product Service Request Form ─── */}
        {/* Link: domain/services or domain/services/:productSlug */}
        <Route path="/services" element={<ServiceClaim />} />
        <Route path="/services/:productSlug" element={<ServiceClaim />} />
      </Routes>
    </>
  );
};

export default PublicRouter;

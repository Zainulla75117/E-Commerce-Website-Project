import React, { Children } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Helmet } from "react-helmet";

const Layout = ({ children, title, description, keywords }) => {
  return (
    <div>

      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="P Zainullabideen" />
        <title>{title}</title>
      </Helmet>

      <Navbar />
      <main style={{ minHeight: "70vh" }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Shopswifty - Online Shoping Site",
  description: "Ecommerce Project using MERN stack",
  keywords: "MERN, mern, mongodb, expressjs, reactjs, nodejs"
}

export default Layout

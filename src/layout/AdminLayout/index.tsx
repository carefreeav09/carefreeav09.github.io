import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div className="page-wrapper">
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </div>
  );
};

export default AdminLayout;

import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout() {
  return (
    <div className="h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
// src/app/page.js
"use client";

import HomePage from "src/components/HomePage";
import NavbarComponent from "src/components/NavbarComponent";
export default function page() {
  return (
    <div>
      <NavbarComponent />
      <HomePage />
      <div className="my-20">{/* Carousel */}</div>
      <div className="my-20">{/* Footer - Group Company */}</div>
      {/* Render other data similarly */}
    </div>
  );
}

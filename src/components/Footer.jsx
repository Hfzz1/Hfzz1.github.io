import React from "react";

const Footer = () => {
  return (
    <div className="bg-zinc-600 grid justify-center p-4 gap-4">
      <h1 className="font-semibold text-2xl flex justify-center mt-4">
        Portfolio Hafidz
      </h1>
      <div className="flex justify-between">
        <a href="https://github.com/hfzhfz6">
          <i className="ri-github-fill ri-2x"></i>
        </a>
        <a href="https://wa.me/08126789883">
          <i className="ri-whatsapp-fill ri-2x"></i>
        </a>
        <a href="https://www.instagram.com/hafizzzv/">
          <i className="ri-instagram-fill ri-2x"></i>
        </a>
      </div>
      <h1 className="flex justify-center">
        © 2025 Hafidz Hussein Vendra | Web Developer
      </h1>
    </div>
  );
};

export default Footer;

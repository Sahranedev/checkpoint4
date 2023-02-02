/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Navbar from "../components/Navbar";

export default function MainPage() {
  return (
    <>
      <Navbar />
      <div>MainPage</div>
      <nav className="flex flex-col items-start">
        <a
          href="#"
          className="py-3 hover:text-white border-b-2 border-transparent hover:border-indigo-500 text-indigo-700 font-medium w-full block"
        >
          Mon profil
        </a>
        <a
          href="#"
          className="py-3 hover:text-white border-b-2 border-transparent hover:border-indigo-500 text-indigo-700 font-medium w-full block"
        >
          Cours
        </a>
        <a
          href="#"
          className="py-3 hover:text-white border-b-2 border-transparent hover:border-indigo-500 text-indigo-700 font-medium w-full block"
        >
          Mes cours
        </a>
      </nav>
    </>
  );
}

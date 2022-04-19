import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";

function Header() {
  const [colorChange, setColorchange] = useState(false);

  const [state, setState] = useState(false);
    let color = true
  useEffect(() => {
    function onScroll(e) {
      if (window.scrollY >= 80) {
        setState(true);
      } else {
        setState(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return function unMount() {
      window.removeEventListener("scroll", onScroll);
    };
  });
  // <header className={"w-full h-54 z-10 top-0 fixed" + colorChange ? "bg-red-200 " : "colorChange bg-red-400"}></header>
  return (
    <header
      className={" w-full h-24 z-10 top-0 bg-white sticky "}
      style={state ? { background: "#BDBDBD" } : null}
    >
      <nav className="container px-8 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link href="/">
            <a className="text-xl font-bold text-gray-900 md:text-2xl">Logo</a>
          </Link>

          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="flex-col mt-2 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 hidden">
          <Link href="/">
            <a className="text-gray-800 transform hover:text-gray-400">
              Нүүр
            </a>
          </Link>
          <Link href="#">
            <a className="text-gray-800 transform hover:text-gray-400">
              Бидний тухай
            </a>
          </Link>
          <Link href="/baigal">
            <a className="text-gray-800 transform hover:text-gray-400">
              Байгал орчин
            </a>
          </Link>
          <Link href="#">
            <a className="text-gray-800 transform hover:text-gray-400">
              Үйлчилгээ
            </a>
          </Link>
          <Link href="/ContactUs">
            <a className="px-4 py-2 text-center text-white border bg-gradient-to-b from-gray-300 to-gray-500 rounded-2xl hover:shadow-xl">
              Холбоо барих
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;

import React from "react";

function Layout({ children }) {
  return (
    <div>
      <div className="bg-lime-300 w-full px-8 py-4 flex items-center justify-between shadow-md">
        <div className="font-extrabold text-2xl text-t-100">EcoWanderlust</div>
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
      {children}
    </div>
  );
}

export default Layout;

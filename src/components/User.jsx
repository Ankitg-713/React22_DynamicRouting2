import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function User() {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <h1 className="text-6xl text-center text-green-300 p-4 border bg-sky-400">User</h1>
      <div className="flex">
        <div className="w-1/4 h-[78vh] bg-zinc-300 flex flex-col border-4">
          <Link className="my-1 px-3 py-2 border bg-red-300 hover:bg-red-500 text-center text-xl font-semibold text-white rounded-md" to="/user/Ajay">Ajay</Link>
          <Link className="my-1 px-3 py-2 border bg-red-300 hover:bg-red-500 text-center text-xl font-semibold text-white rounded-md" to="/user/Raju">Raju</Link>
          <Link className="my-1 px-3 py-2 border bg-red-300 hover:bg-red-500 text-center text-xl font-semibold text-white rounded-md" to="/user/John">John</Link>
        </div>
        <Outlet />
      </div>
      
    </div>
  );
}

export default User;

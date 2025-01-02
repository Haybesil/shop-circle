import React from "react";
import { LogOut } from "lucide-react";

export const LogoutButton = ({ onLogout }) => {
  return (
    <button
      onClick={onLogout}
      className="flex items-center px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 shadow-lg transition duration-200 w-full"
    >
      <LogOut className="mr-2 h-5 w-5" />
      Logout
    </button>
  );
};


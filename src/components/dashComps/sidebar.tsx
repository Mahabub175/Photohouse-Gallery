import { useRouter } from "next/router";
import React from "react";
import { FiBook, FiImage, FiUsers, FiLogOut } from "react-icons/fi";

const Sidebar = ({ setActive }: any) => {
  const router = useRouter();

  const logout = () => {
    localStorage.clear();
    router.push("/login");
  };

  const menuItems = [
    { name: "Add Magazine", icon: <FiBook />, action: () => setActive("M") },
    { name: "Add Gallery", icon: <FiImage />, action: () => setActive("G") },
    { name: "Add Interview", icon: <FiUsers />, action: () => setActive("I") },
    {
      name: "All Interviews",
      icon: <FiUsers />,
      action: () => setActive("AI"),
    },
  ];

  return (
    <div className="flex flex-col min-h-[100vh] p-3 bg-gray-800 shadow w-60">
      <div className="space-y-3">
        <div className="flex items-center">
          <h2 className="text-xl font-bold text-white">Dashboard</h2>
        </div>
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            {menuItems.map((item, index) => (
              <li key={index} className="rounded-sm" onClick={item.action}>
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  {item.icon}
                  <span className="text-gray-100">{item.name}</span>
                </a>
              </li>
            ))}
            <li className="rounded-sm" onClick={logout}>
              <a
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <FiLogOut className="w-6 h-6 text-gray-100" />
                <span className="text-gray-100">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

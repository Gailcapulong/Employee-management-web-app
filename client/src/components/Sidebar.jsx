import React, { useEffect } from "react";
import { useState } from "react";
import { href, Link, useLocation } from "react-router-dom";
import { dummyProfileData } from "../assets/assets";
import {
  CalendarIcon,
  ChevronRightIcon,
  DollarSignIcon,
  FileTextIcon,
  Icon,
  LayoutGridIcon,
  LogOutIcon,
  MenuIcon,
  SettingsIcon,
  UserIcon,
  XIcon,
} from "lucide-react";

const Sidebar = () => {
  const { pathname } = useLocation();
  const [userName, setUserName] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setUserName(dummyProfileData.firstName + " " + dummyProfileData.lastName);
  }, []);

  //close mobile sidebar

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const role = "" || "EMPLOYEE";
  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutGridIcon },
    role === "ADMIN"
      ? { name: "Employees", href: "/employees", icon: UserIcon }
      : { name: "Attendance", href: "/attendance", icon: CalendarIcon },
    { name: "Leave", href: "/leave", icon: FileTextIcon },
    { name: "Payslips", href: "/payslips", icon: DollarSignIcon },
    { name: "Settings", href: "/settings", icon: SettingsIcon },
  ];

  const handleLogout = () => {
    window.location.href = "/login";
  };

  const sidebarContent = (
    <>
      {/* brand header */}

      <div className="px-5 pt-6 pb-6 border-b border-white/6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <UserIcon className="text-white size-7 shrink-0" />
            <div className="flex flex-col justify-center leading-tight">
              <p className="font-semibold text-[13px] text-white tracking-wide leading-none">
                Employee MS
              </p>
              <p className="text-[11px] text-slate-500 font-medium leading-none mt-1">
                Management System
              </p>
            </div>
          </div>
          {/* close menu on mobile*/}

          <button
            onClick={() => setMobileOpen(false)}
            className="lg:hidden text-slate-400 hover:text-white p-1"
          >
            <XIcon size={20} />
          </button>
        </div>
      </div>

      {/* user profile*/}
      {userName && (
        <div className="mx-3 mt-4 p-3 rounded-lg bg-white/3 border border-white/4">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg bg-slate-800 flex items-center
            justify-center ring-1 ring-white/10 shrink-0"
            >
              <span className="text-slate-400 text-xs font-semibold">
                {userName.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="min-w-0">
              <p className="text-[13px] font-medium text-slate-200 truncate">
                {userName}
              </p>
              <p className="text-[11px] text-slate-500 truncate">
                {role === "ADMIN" ? "Administrator" : "Employee"}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* section label*/}
      <div className="px-5 pt-5 pb-2">
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
          Navigation
        </p>
      </div>

      {/* navigation list*/}
      <div className="flex-1 px-3 space-y-0.5 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`group flex items-center gap-3 px-3 py-2.5 rounded-md text-[13px]
            font-medium transition-all duration-150 relative
            ${
              isActive
                ? "bg-indigo-600/12 text-indigo-300"
                : "text-slate-300 hover:text-wite hover:bg-white/4"
            }`}
            >
              {isActive && (
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2
            w-0.75 h-5 rounded-r-full bg-indigo-500"
                />
              )}
              <item.icon
                className={`w-4.25 h-4.25 shrink-0 ${
                  isActive
                    ? "text-indigo-400"
                    : "text-slate-700 group-hover:text-slate-300"
                }`}
              />
              <span className="flex-1">{item.name}</span>
              {isActive && (
                <ChevronRightIcon className="w-3.5 h-3.5 text-indigo-500/50" />
              )}
            </Link>
          );
        })}
      </div>

      {/* logout*/}
      <div className="p-3 border-t border-white/6">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-3 py-2.5 
          not-only-of-type:rounded-md text-[13px] font-medium text-slate-400
         hover:text-rose-400 hover:bg-rose-500/8 
         transition-all duration-150"
        >
          <LogOutIcon className="w-4.25 h-4.25" />
          <span>Log out</span>
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* mobile hamburger button */}

      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-900
      text-white rounded-lg shadow-lg border border-white/10"
      >
        <MenuIcon size={20} />
      </button>

      {/* mobile overlay*/}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 backgdrop-blur-sm z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* sidebar-desktop*/}

      <aside
        className="hidden lg:flex flex-col h-full w-[260px]
        bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 text-white
        shrink-0 border-r border-white/4"
      >
        {sidebarContent}
      </aside>

      {/* sidebar-mobile*/}

      <aside
        className={`lg:hidden fixed inset-y-0 left-0 w-72
              bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 text-white
              z-50 flex flex-col transform transition-transform duration-300 ${mobileOpen ? "translate-x-0" : ""}`}
      >
        {sidebarContent}
      </aside>
    </>
  );
};

export default Sidebar;

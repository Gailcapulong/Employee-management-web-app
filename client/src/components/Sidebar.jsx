import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { dummyProfileData } from "../assets/assets";

const Sidebar = () => {
  const { pathname } = useLocation();
  const [userName, setUserName] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setUserName(dummyProfileData.fistName + " " + dummyProfileData.lastName);
  }, []);

  //close mobile sidebar

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return <div>Sidebar</div>;
};

export default Sidebar;

"use client";

import DashboardGlobal from "@/app/Dashboard";
import Sidebar from "@/app/Sidebar";
import { useRouter } from "next/navigation";

import React, { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/connexion");
    }
  }, []);

  return (
    <div>
      <Sidebar />
      <DashboardGlobal />
    </div>
  );
};

export default Page;

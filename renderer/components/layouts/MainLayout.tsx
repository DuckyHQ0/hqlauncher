import React from "react";
import SideNav from "../ui/SideNav";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="overflow-clip bg-no-repeat bg-clip-border bg-cover bg-[linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0.96),rgba(0,0,0,0.85),rgba(0,0,0,0.65),rgba(0,0,0,0.4)),url('/theme/1.png')] w-screen h-screen text-text-1 p-110 gap-96 flex">
      <SideNav />
      {children}
    </main>
  );
};

export default Layout;

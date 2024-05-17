import React from "react";
import SideNav from "../ui/SideNav";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="font-sans w-screen h-screen text-text-1 p-96 gap-96 flex bg-[linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0.96),rgba(0,0,0,0.85),rgba(0,0,0,0.65),rgba(0,0,0,0.4)),url('/theme/1.png')] overflow-hidden bg-no-repeat bg-clip-border bg-cover">
      <SideNav />
      {children}
    </main>
  );
};

export default Layout;

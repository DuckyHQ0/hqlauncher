import { Outfit } from "next/font/google";
import "./globals.css";
import SideNav from "@/components/ui/SideNav";
import dynamic from 'next/dynamic';

const TitleBar = dynamic(
  () => import('@/components/TitleBar'),
  { ssr: false }
);

const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={outfit.className + "overflow-clip rounded-24 bg-no-repeat bg-clip-border bg-cover bg-[linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0.96),rgba(0,0,0,0.85),rgba(0,0,0,0.65),rgba(0,0,0,0.4)),url('/theme/1.png')]"}>
            <body className="overflow-hidden bg-cover w-screen h-screen text-text-1">
                <TitleBar />
                <div className="p-110 gap-96 h-full flex overflow-hidden">
                    <SideNav />
                    {children}
                </div>
            </body>
        </html>
    );
}

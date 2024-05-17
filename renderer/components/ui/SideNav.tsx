import Link from "next/link";
import {
  HiRectangleStack,
  HiMiniUserGroup,
  HiCog6Tooth,
  HiMiniNewspaper,
  HiMiniQuestionMarkCircle,
} from "react-icons/hi2";
import { useRouter } from "next/router";

export default function SideNav() {
  const router = useRouter();
  const isCurrentPage = (path: string) => router.pathname === path;
  return (
    <div className="w-fit flex flex-col place-content-between align-middle place-items-center">
      <Link
        href={"/home"}
        className="hover:scale-90 active:scale-[.80] duration-150 ease-out"
      >
        <img
          src={"/brand/mark.svg"}
          alt="HQLauncher Logo"
          width={50}
          height={50}
          className="hover-active-effect"
        />
      </Link>

      <div className="flex flex-col gap-32">
        <Link href={"/home"}>
          <HiRectangleStack
            className={`w-[28px] h-[28px] hover-active-effect ${
              isCurrentPage("/home") ? "text-selected" : ""
            }`}
          />
        </Link>
        <Link href={"/accounts"}>
          <HiMiniUserGroup
            className={`w-[28px] h-[28px] hover-active-effect ${
              isCurrentPage("/accounts") ? "text-selected" : ""
            }`}
          />
        </Link>
        <Link href={"/settings"}>
          <HiCog6Tooth
            className={`w-[28px] h-[28px] hover-active-effect ${
              isCurrentPage("/settings") ? "text-selected" : ""
            }`}
          />
        </Link>
        <Link href={"/news"}>
          <HiMiniNewspaper
            className={`w-[28px] h-[28px] hover-active-effect ${
              isCurrentPage("/news") ? "text-selected" : ""
            }`}
          />
        </Link>
        <Link href={"/home"}>
          <HiMiniQuestionMarkCircle className="w-[28px] h-[28px] hover-active-effect" />
        </Link>
      </div>
    </div>
  );
}

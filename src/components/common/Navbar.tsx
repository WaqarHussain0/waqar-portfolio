"use client";

import Row from "./Row";
import { BiMessageDots } from "react-icons/bi";
import { Button } from "../ui/button";
import AnimatedIcon from "./AnimatedIcon";
import { PAGES_ROUTES } from "@/constants/page-route.constant";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface INavbarProps {
  className?: string;
}
const Navbar: React.FC<INavbarProps> = ({ className }) => {
  const pathname = usePathname();

  const menu = [
    { page: "Home", sectionId: "#/", linkTo: PAGES_ROUTES.HOME },
    { page: "Projects", sectionId: "#service", linkTo: PAGES_ROUTES.PROJECTS },
    { page: "Service", sectionId: "#service", linkTo: PAGES_ROUTES.SERVICES },
  ];

  return (
    <Row
      id="/"
      className={`w-full justify-center items-center py-4 md:py-6 bg-[#291c3a] ${className}`}
    >
      <Row className="px-4 md:px-0 w-full justify-between md:justify-center md:gap-28 items-center">
        <Row className="gap-2 md:gap-6">
          {menu.map((item) => (
            <Link
              key={item.page}
              href={item.linkTo}
              className={`text-center poppinsRegular text-[11px] md:text-[14px] rounded-sm cursor-pointer py-1 transition duration-200 ease-in-out ${
                pathname === item.linkTo
                  ? "bg-[#8121d0] text-white bg-opacity-25 px-2 md:px-3"
                  : "text-white"
              }`}
            >
              {item.page}
            </Link>
          ))}
        </Row>

        <Button size={"sm"} className="bg-white hover:bg-white/90 text-[#291c3a]">
          Hire Me
          <AnimatedIcon Icon={BiMessageDots} animateIcon={true} />
        </Button>
      </Row>
    </Row>
  );
};

export default Navbar;

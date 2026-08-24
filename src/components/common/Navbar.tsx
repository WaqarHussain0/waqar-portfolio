'use client';

import Row from './Row';
import { BiMessageDots } from 'react-icons/bi';
import { Button } from '../ui/button';
import AnimatedIcon from './AnimatedIcon';
import { PAGES_ROUTES } from '@/constants/page-route.constant';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface INavbarProps {
  className?: string;
}
const Navbar: React.FC<INavbarProps> = ({ className }) => {
  const pathname = usePathname();

  const menu = [
    { page: 'Home', sectionId: '#/', linkTo: PAGES_ROUTES.HOME },
    { page: 'Projects', sectionId: '#service', linkTo: PAGES_ROUTES.PROJECTS },
  ];

  return (
    <Row
      id="/"
      className={`w-full items-center justify-center py-4 ${className}`}
    >
      <Row className="w-full items-center justify-between px-4 md:justify-center md:gap-28 md:px-0">
        <Row className="gap-2 md:gap-6">
          {menu.map(item => (
            <Link
              key={item.page}
              href={item.linkTo}
              className={`poppinsRegular cursor-pointer rounded-sm py-1 text-center text-[11px] transition duration-200 ease-in-out md:text-[14px] ${
                pathname === item.linkTo
                  ? 'bg-opacity-25 bg-[#8121d0] px-2 text-white md:px-3'
                  : 'text-white'
              }`}
            >
              {item.page}
            </Link>
          ))}
        </Row>

        <Button className="cotoris bg-white font-medium text-[#291c3a] hover:bg-white/90">
          Hire Me
          <AnimatedIcon Icon={BiMessageDots} animateIcon={true} />
        </Button>
      </Row>
    </Row>
  );
};

export default Navbar;

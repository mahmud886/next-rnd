'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";

const Navbar = () => {
  const pathname = usePathname()
  return (
        <nav className="flex justify-between bg-gray-900 text-white">
          <div className="px-5 xl:px-12 py-6 flex w-full items-center">
            <Link className="text-3xl font-bold font-heading" href="/">
              Next RND
            </Link>

            <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
              <li><Link href='/' className={`${pathname === '/' ? 'text-red-500': ''}`}>Home</Link></li>
              <li><Link href={`/contents`} className={`${pathname === '/contents' ? 'text-red-500': ''}`}>Contents</Link></li>
              <li><Link href='/jokes' className={`${pathname === '/jokes' ? 'text-red-500': ''}`}>Jokes</Link></li>
              <li><Link href='/rendering' className={`${pathname === '/rendering' ? 'text-red-500': ''}`}>Next Rendering</Link></li>
            </ul>

            <div className="hidden xl:flex items-center space-x-5">
              <a className="flex items-center hover:text-gray-200" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </a>
            </div>
          </div>
        </nav>
  );
};

export default Navbar;
import { links } from "@/constants/NavLinks";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const path = usePathname();

  return (
    <>
    <nav className="bg-gray-100 border-[1px] border-[#d9ddf5] px-2 sm:px-4 py-2.5  shadow-sm ">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/" className="flex">
          <Image
            width={50}
            height={50}
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
            alt="Workflow"
            className="h-8 w-auto mr-3 ml-2"
          />
          <span className="self-center text-lg font-semibold whitespace-nowrap text-black">
            Maildroppa
          </span>
        </Link>
        <button className="md:hidden" onClick={()=>setIsOpen(!isOpen)}>
        <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className=" hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col   mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium gap-2 ">
            {links.map(({ id, href, label }) => (
              <Link
                key={id}
                href={href}
                className={`
                block py-2 pr-4 pl-3  rounded text-gray-black   md:p-0 
                ${path===href && 'bg-[#3b82f6] md:text-[#3b82f6] md:bg-transparent '}
                `}
              >
                {label}
              </Link>
            ))}
          </ul>
        </div>
        
      </div>
    </nav>
    {isOpen &&(<div className="responsive_nav md:hidden shadow-sm bg-gray-100 ">
        <ul className="flex flex-col    md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium gap-2 ">
            {links.map(({ id, href, label }) => (
              <Link
                key={id}
                href={href}
                className={`
                block py-3 pr-4 pl-3 text-black  text-gray-black   md:p-0 
                ${path===href && 'bg-[#3b82f6] text-white  md:text-[rgb(59,130,246)] md:bg-transparent '}
                `}
              >
                {label}
              </Link>
            ))}
          </ul>
    </div>)}
    </>
  );
};

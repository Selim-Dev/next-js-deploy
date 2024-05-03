// footer component

import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gray-100  w-full bottom-0 z-10">
      <div className=" px-4 py-5 shadow-lg">
        <div className="flex flex-col md:flex-row gap-2 md:gap-0  items-center justify-between ">
          <div className=" ">
            <Link href="/">
              <Image
                width={50}
                height={50}
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
                className=""
              />
            </Link>
          </div>
          <div className="">
            <p className="text-black">
              © 2020 Maildroppa. All rights reserved.
            </p>
          </div>
          <div className="">
            <p className="text-black">Made with ❤️ by Veljko</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

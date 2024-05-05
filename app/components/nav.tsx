import React, { ReactNode } from "react";
import Image from "next/image";

type Props = {
  props: ReactNode;
};

export const Nav = (props: Props) => {
  return (
    <div className="absolute top-0">
      <div className="flex flex-row items-center min-w-full justify-between">
        <div className="flex flex-row gap-4">
          <Image src={"/moon.png"} alt="logo" height={30} width={30} />
          <div className="text-lg font-bold text-gray-500">Medicare</div>
        </div>
        <ul className="flex flex-row gap-2">
          <li>Home</li>
          <li>About Us</li>
          <li>Our Services</li>
          <li>Find Doctor</li>
          <li>Contact</li>
        </ul>
        <div className="flex flex-row gap-4">
          <span>Register</span>
          <button className="rounded-2xl px-4 py-2 bg-blue-600 text-white">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

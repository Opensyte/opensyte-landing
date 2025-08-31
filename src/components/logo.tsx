import React from "react";
import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex items-center">
      <Image
        src="/icon-with-text-white.svg"
        alt="OpenSyte Logo"
        width={120}
        height={32}
      />
    </div>
  );
};

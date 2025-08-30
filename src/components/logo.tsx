import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/icon-with-text-white.svg"
        alt="OpenSyte Logo"
        width={120}
        height={32}
      />
    </Link>
  );
};

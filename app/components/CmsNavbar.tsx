import { Lilita_One } from "next/font/google";
import Link from "next/link";
import React from "react";

const font = Lilita_One({ weight: "400", subsets: ["latin"] });

function CmsNavbar() {
  return (
    <div className="ml-3">
      <Link
        href="/"
        className={`${font.className} text-3xl hover:scale-105 transition duration-300 ease-in-out transform hover:animate-spin `}
      >
        Dev
        <span className="bg-gradient-to-tr from-[#770BFF] via-45% via-[#D8C2FF] to-[#B982EE] bg-clip-text text-transparent">
          Blog
        </span>
      </Link>
    </div>
  );
}

export default CmsNavbar;

import React from "react";

function Footer() {
  return (
    <div
      className={`text-center mt-14 py-5 mx-auto border-t dark:border-t-purple-900 max-w-4xl`}
    >
      <span className="font-extralight text-sm dark:text-zinc-400 tracking-wide">
        {new Date().getFullYear()} &copy; DevBlog | All rights reserved
      </span>
    </div>
  );
}

export default Footer;

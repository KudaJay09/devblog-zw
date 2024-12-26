"use client";

import Link from "next/link";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  title: string;
  tags?: boolean;
}

function Header({ title, tags = false }: Props) {
  return (
    <div className="py-14 px-4 mb-12 text-center border-b dark:border-purple-900">
      <AnimatePresence>
        <motion.h2
          initial={{ scale: 0, y: -20 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="uppercase text-2xl mx-auto max-w-2xl font-bold cursor-default"
        >
          {title}
        </motion.h2>
      </AnimatePresence>

      {tags && (
        <div className="text-sm mt-2 hover:text-purple-500 transition ease-in-out">
          <Link href="/tag">#tags</Link>
        </div>
      )}
    </div>
  );
}

export default Header;

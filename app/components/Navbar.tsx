"use client";

import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { Lilita_One } from "next/font/google";
import { TagsIcon } from "@sanity/icons";
import { AnimatePresence, motion } from "framer-motion";
import Form from "next/form";

const font = Lilita_One({ weight: "400", subsets: ["latin"] });

function Navbar({ tags = false }: { tags?: boolean }) {
  return (
    <div className="mx-auto max-w-6xl p-6 sticky top-0 border-b dark:border-b-purple-950 backdrop-blur-sm">
      <AnimatePresence>
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Link
              href="/"
              className={`${font.className} text-3xl hover:scale-105 transition duration-300 ease-in-out transform hover:animate-spin`}
            >
              Dev
              <span className="bg-gradient-to-tr from-[#770BFF] via-45% via-[#D8C2FF] to-[#B982EE] bg-clip-text text-transparent">
                Blog
              </span>
            </Link>
          </motion.div>

          <div>
            <Form
              action="/search"
              classID="w-full sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0"
            >
              <input
                type="text"
                name="query"
                placeholder="Search Article"
                className="text-sm bg-gray-100 dark:bg-slate-950 text-gray-800 dark:text-gray-200 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-800 focus:ring-opacity-50 border dark:border-purple-950 w-full max-w-4xl"
              />
            </Form>
          </div>

          <div className="flex items-center space-x-4">
            {tags && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ delay: 1, duration: 1 }}
              >
                <Link href="/tag">
                  <TagsIcon
                    fontSize={33}
                    className="border border-zinc-300 rounded-full p-1 hover:bg-purple-500 hover:opacity-70  transition ease-in-out"
                  />
                </Link>
              </motion.div>
            )}

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <ThemeSwitch />
            </motion.div>
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
}

export default Navbar;

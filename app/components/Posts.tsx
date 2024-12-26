"use client";

import Link from "next/link";
import React from "react";
import { Lilita_One, VT323 } from "next/font/google";
import { Post } from "../utils/interface";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  post: Post;
}

export const revalidate = 60;

const font = Lilita_One({ weight: "400", subsets: ["latin"] });
const dateFont = VT323({ weight: "400", subsets: ["latin"] });

function Posts({ post }: Props) {
  return (
    <AnimatePresence>
      <motion.div
        layout
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={cardStyle}
      >
        <Link href={`/posts/${post?.slug?.current}`}>
          {/* Most likely to render image here */}
          <div className="flex flex-col md:flex-row md:justify-between mb-6 md:mb-8 md:items-center">
            <h2
              className={`${font.className} text-2xl  dark:text-slate-300 tracking-wide line-clamp-2`}
            >
              {post?.title}
            </h2>
            <p
              className={`${dateFont.className} text-purple-700 dark:text-purple-300`}
            >
              {new Date(post?.publishedAt).toDateString()}
            </p>
          </div>
          <p className="line-clamp-3 mb-4">{post?.description}</p>
        </Link>

        <div>
          {post?.tag?.map((tag) => (
            <Link
              key={tag?._id}
              href={`/tag/${tag.slug.current}`}
              className="cursor-pointer"
            >
              <span className="mr-2 p-1 rounded-sm text-sm lowercase dark:bg-gray-950 border dark:border-gray-900">
                #{tag.name}
              </span>
            </Link>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Posts;

const cardStyle = `
  mb-8
  p-4
  border
  border-gray-900
  rounded-md
  transition
  duration-300
  ease-in-out
  shadow-sm
  shadow-purple-950
  hover:shadow-md
  hover:bg-purple-500
  hover:text-white
  hover-dark:bg-gray-950
 `;

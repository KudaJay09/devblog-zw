import Header from "@/app/components/Header";
import { Post } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import { VT323 } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { notFound } from "next/navigation";

const dateFont = VT323({ weight: "400", subsets: ["latin"] });

async function getPost(slug: string) {
  const query = `*[_type == 'post' && slug.current == "${slug}"] [0] {
  title,
    slug,
    description,
    publishedAt,
    thumbnail,
    _id,
    content,
    tag[] -> {
      _id,
      slug,
      name
    }
}`;

  const post = await client.fetch(query);
  return post;
}

export const revalidate = 60; // revalidates every minute

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post: Post = await getPost(slug);

  if (!post) {
    return notFound();
  }

  return (
    <div>
      <Header title={post?.title} />
      <div className="text-center">
        <div className="flex justify-center h-[50vh] my-12 ">
          <Image
            src={urlFor(post?.thumbnail).url()}
            alt="thumbnail"
            width={800}
            height={800}
            priority
            className="object-cover rounded-lg max-w-svh md:max-w-[80svh] border dark:border-purple-900"
          />
        </div>

        <span className={`${dateFont.className} text-xl text-purple-500`}>
          {new Date(post?.publishedAt).toDateString()}
        </span>

        <div className="mt-5">
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
      </div>
      <div className={richTextStyles}>
        <PortableText
          value={post?.content}
          components={myPortableTextComponents}
        />
      </div>
    </div>
  );
};

export default page;

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image
        src={urlFor(value).url()}
        alt="image"
        width={700}
        height={700}
        className="border dark:border-purple-900 rounded-md"
      />
    ),
  },
};

const richTextStyles = `
mt-14
text-justify
max-w-2xl
m-auto
prose
prose-heading:my-5
prose-heading:text-2xl
prose-p:mb-5
prose-p:leading-7
prose-li:list-disc
dark:prose-li:marker:text-purple-500
dark:prose-invert
prose-li:leading-7
prose-li:ml-4
`;

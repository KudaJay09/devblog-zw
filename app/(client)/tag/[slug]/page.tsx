import Header from "@/app/components/Header";
import Posts from "@/app/components/Posts";
import { Post } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";
import React from "react";

async function getPostsByTag(tag: string) {
  const query = `
    *[_type == 'post' && references(*[_type == 'tag' && slug.current == '${tag}']._id)] {
  title,
    slug,
    description,
    publishedAt,
    _id,
    content,
    tag[] -> {
      _id,
      slug,
      name
    }
}`;

  const posts = await client.fetch(query);
  return posts;
}

export const revalidate = 60; // revalidates every minute

async function page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const posts: Post[] = await getPostsByTag(slug);
  return (
    <div>
      <Header title={`#${slug}`} tags />

      <div>
        {posts?.length > 0 &&
          posts?.map((post) => <Posts post={post} key={post?._id} />)}
      </div>
    </div>
  );
}

export default page;

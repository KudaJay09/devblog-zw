import Header from "@/app/components/Header";
import { tag } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import React from "react";

async function getAllTags() {
  const query = `
    *[_type == 'tag'] {
  name,
    slug,
    _id,
    "postCount": count(*[_type == 'post' && references('tags', ^._id)])
}`;
  const tags = client.fetch(query);
  return tags;
}

export const revalidate = 60;

const page = async () => {
  const tags: tag[] = await getAllTags();

  return (
    <div>
      <Header title="Tags" />

      <div>
        {tags?.length > 0 &&
          tags?.map((tag) => (
            <Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
              <div className="mb-2 p-2 text-sm lowercase dark:bg-gray-950 border dark:border-gray-900 hover:text-purple-500 transition ease-in-out">
                #{tag?.name} ({tag?.postCount})
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default page;

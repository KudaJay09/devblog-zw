import { client } from "@/sanity/lib/client";
import Header from "../components/Header";
import Posts from "../components/Posts";
import { Post } from "../utils/interface";

async function getData() {
  const query = `
  *[_type == 'post'] | order(priority desc, _updatedAt desc) {
  title,
  slug,
  publishedAt,
  description,
  tag[] -> {
    _id,
    slug,
    name
    }
  }`;
  const data = await client.fetch(query);
  return data;
}

export const dynamic = "force-static";
export const revalidate = 60; // revalidates every minute

export default async function Home() {
  const posts: Post[] = await getData();

  return (
    <div>
      <Header title="Articles" />
      <div>
        {posts?.length > 0 &&
          posts?.map((post) => <Posts key={post?._id} post={post} />)}
      </div>
    </div>
  );
}

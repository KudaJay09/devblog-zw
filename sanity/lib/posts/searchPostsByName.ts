import { sanityFetch } from "../live";

export const searchPostByName = async (searchParam: string) => {
  const query = `[_type == 'post' && name match $searchParam] | order(name asc)    
    `;

  try {
    const posts = await sanityFetch({
      query: query,
      params: {
        searchParam: `${searchParam}*`,
      },
    });

    return posts.data || [];
  } catch (error) {
    console.error("Error fetching products by name:", error);
    return [];
  }
};

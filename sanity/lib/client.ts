import { createClient } from "next-sanity";

import { dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-12-22",
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

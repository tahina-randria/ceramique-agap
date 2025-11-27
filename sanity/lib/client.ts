import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "o34ifnc2",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

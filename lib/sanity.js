import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "n0zxn110",
  dataset: "production",
  apiVersion: "2026-06-22",
  useCdn: true,
});
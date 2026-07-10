import { redirect } from "next/navigation";

// Blog is in "coming soon" mode — send any direct post URLs back to /blog.
export default function BlogDetail() {
  redirect("/blog");
}

import type { Metadata } from "next";
import BlogPage from "../components/BlogPage";

export const metadata: Metadata = {
  title: "Our Blog | Petmart",
  description: "Helpful pet care guides and advice from Petmart.",
};

export default function BlogRoute() {
  return <BlogPage />;
}

import Link from "next/link";

interface BlogPost {
  title: string;
  date: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Premium Nutrition For Happy Growing Puppies",
    date: "May 8, 2026",
    image: "/images/post-1.jpg",
  },
  {
    title: "Healthy Grooming Routine For Happy Fluffy Dogs",
    date: "May 6, 2026",
    image: "/images/post-2.jpg",
  },
  {
    title: "Creating Comfortable Homes For Happy Indoor Pets",
    date: "May 4, 2026",
    image: "/images/post-3.jpg",
  },
  {
    title: "Creating the Ideal Environment for Feline Wellness",
    date: "May 2, 2026",
    image: "/images/post-1.jpg",
  },
  {
    title: "Natural Supplements For Better Pet Health Naturally",
    date: "April 28, 2026",
    image: "/images/post-2.jpg",
  },
  {
    title: "Essential Pet Care Tips For New Owners Successfully",
    date: "April 26, 2026",
    image: "/images/post-3.jpg",
  },
];

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <article
      className="blog-card"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <Link
        className="blog-card-image"
        href="#"
        aria-label={`Read ${post.title}`}
      >
        <img src={post.image} alt="" />
      </Link>
      <div className="blog-card-body">
        <time dateTime={post.date}>{post.date}</time>
        <h2>
          <Link href="#">{post.title}</Link>
        </h2>
        <Link className="blog-card-link" href="#">
          Read More <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </article>
  );
}

export default function BlogPage() {
  return (
    <main className="blog-page">
      <section className="blog-page-header" aria-labelledby="blog-title">
        <div className="blog-page-container">
          <p className="blog-eyebrow">Pet Care Journal</p>
          <h1 id="blog-title">Our Blog</h1>
          <p className="blog-intro">
            Helpful guides, thoughtful advice, and everyday inspiration for
            happier pets.
          </p>
        </div>
      </section>
      <section className="blog-archive" aria-label="Blog posts">
        <div className="blog-page-container">
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.title} post={post} index={index} />
            ))}
          </div>
          <nav className="blog-pagination" aria-label="Blog pagination">
            <Link className="is-current" href="#" aria-current="page">
              1
            </Link>
            <Link href="#">2</Link>
            <Link href="#">3</Link>
            <Link
              className="blog-pagination-next"
              href="#"
              aria-label="Next page"
            >
              &rarr;
            </Link>
          </nav>
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";

async function NewPostsPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 120,
    },
  });

  const posts = await response.json();

  return (
    <div>
      <h1>Posts page</h1>
      <ul>
        {posts.map((post) => (
          <Link href={`/newPosts/${post.id}`} key={post.id}>
            <li >{post.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default NewPostsPage;

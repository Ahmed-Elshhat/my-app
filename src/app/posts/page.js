import Link from "next/link";
import Todo from "../components/todo";

async function PostPage() {
  // By default (SSG)
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  // With (SSG) manual
  const response1 = await fetch(
    "https://jsonplaceholder.typicode.com/todos/1",
    {
      cache: "force-cache",
    }
  );

  // With (SSR) Pure
  const response2 = await fetch(
    "https://jsonplaceholder.typicode.com/todos/1",
    {
      cache: "no-store",
    }
  );

  // With (ISR)
  const response3 = await fetch(
    "https://jsonplaceholder.typicode.com/todos/1",
    {
      next: {
        revalidate: 60,
      },
    }
  );

  const todo = await response.json();
  return (
    <div>
      <h1>Post page</h1>
      <Link href="/articles">
        <button className="bg-blue-800 text-amber-50 px-4 py-2 rounded-sm cursor-pointer hover:bg-sky-700 duration-300 ease-in-out">
          Take me to the articles page
        </button>
      </Link>
      <h2>{todo.title}</h2>
      <div>
        <Todo />
      </div>
    </div>
  );
}

export default PostPage;

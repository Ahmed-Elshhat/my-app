import React from "react";

async function NewPostDetails({ id }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 120,
      },
    }
  );

  const post = await response.json();

  return (
    <div>
      <h1>ID: {post.id}</h1>
      <h1>User ID: {post.userId}</h1>
      <h2>title: {post.title}</h2>
      <h2>Body: {post.body}</h2>
    </div>
  );
}

export default NewPostDetails;

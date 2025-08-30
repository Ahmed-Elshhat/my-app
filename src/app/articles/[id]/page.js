import React from "react";

async function ShowArticlePage({params}) {
  const currentParams = await params
  const { id } = currentParams;
  console.log(currentParams);
  console.log(id);
  return <div>
    <h1>Show article</h1>
    <h2>ID is: {id}</h2>
  </div>;
}

export default ShowArticlePage;

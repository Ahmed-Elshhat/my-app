import React from "react";
import Link from "next/link";

// export const metadata = {
//   title: "Articles Page"
// }

function ArticlesPage() {
  return (
    <div>
      <h1>Articles page</h1>
      <Link href="/posts">
        <button className="bg-blue-800 text-amber-50 px-4 py-2 rounded-sm cursor-pointer hover:bg-sky-700 duration-300 ease-in-out">
          Take me to the posts page
        </button>
      </Link>
    </div>
  );
}

export default ArticlesPage;

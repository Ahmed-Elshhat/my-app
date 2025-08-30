import NewPostDetails from "@/app/components/newPostDetails";
import { Suspense } from "react";

async function PostDetailsPage({ params }) {
  const { id } = await params;

  return (
    <div>
      <h1>POST DETAILS</h1>
      <Suspense fallback={<h1>Loading....</h1>}>
        <NewPostDetails id={id} />
      </Suspense>
    </div>
  );
}

export default PostDetailsPage;

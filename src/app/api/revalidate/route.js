// app/api/revalidate/route.js
// To remove cache with tag feature
import { revalidateTag } from "next/cache";

export async function POST(req) {
  revalidateTag("tag"); // امسح كل الكاش اللي متعلق بـ "tag"
  return Response.json({ revalidated: true });
}
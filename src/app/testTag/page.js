// app/testTag/page.js (Server Component)
export default async function TestTagPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,      // الكاش يتجدد كل 60 ثانية تلقائي
      tags: ["tag"],  // نخزن الكاش تحت tag اسمه "tag"
    },
  });

  const tag = await res.json();

  return (
    <div>
      <h1>Tag</h1>
      <ul>
        {tag.slice(0, 5).map((a) => (
          <li key={a.id}>{a.title}</li>
        ))}
      </ul>
    </div>
  );
}

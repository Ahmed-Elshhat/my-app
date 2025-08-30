export const metadata = {
  title: "Articles Page"
};

export default function ArticlesLayout({children}) {
  return (
    <div>
      <h1>Articles</h1>
      {children}
    </div>
  )
}
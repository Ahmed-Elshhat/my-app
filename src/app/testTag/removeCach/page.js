"use client";

export default function RefreshButton() {
  async function handleClick() {
    await fetch("/api/revalidate", { method: "POST" });
    alert("Cache cleared! الصفحة الجاية هتعمل fetch جديد 🚀");
  }

  return <button onClick={handleClick}>🔄 Refresh testTag</button>;
}

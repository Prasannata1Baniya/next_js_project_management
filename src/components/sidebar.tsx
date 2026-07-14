import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r bg-white p-5">
      <nav>
        <ul className="space-y-3">
          <li>
            <Link href="/dashboard">🏠 Dashboard</Link>
          </li>

          <li>
            <Link href="/projects">📁 Projects</Link>
          </li>

          <li>
            <Link href="/tasks">✅ Tasks</Link>
          </li>

          <li>
            <Link href="/settings">⚙ Settings</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
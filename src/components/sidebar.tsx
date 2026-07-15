import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r bg-white p-5 shadow-sm">
      
      <nav>
        <ul className="space-y-2">
          <li>
            <Link
              href="/dashboard"
              className="flex items-center rounded-lg px-4 py-3 text-gray-700 transition hover:bg-orange-100 hover:text-orange-600"
            >
              🏠 <span className="ml-3">Dashboard</span>
            </Link>
          </li>

          <li>
            <Link
              href="/projects"
              className="flex items-center rounded-lg px-4 py-3 text-gray-700 transition hover:bg-orange-100 hover:text-orange-600"
            >
              📁 <span className="ml-3">Projects</span>
            </Link>
          </li>

          <li>
            <Link
              href="/tasks"
              className="flex items-center rounded-lg px-4 py-3 text-gray-700 transition hover:bg-orange-100 hover:text-orange-600"
            >
              ✅ <span className="ml-3">Tasks</span>
            </Link>
          </li>

          <li>
            <Link
              href="/settings"
              className="flex items-center rounded-lg px-4 py-3 text-gray-700 transition hover:bg-orange-100 hover:text-orange-600"
            >
              ⚙️ <span className="ml-3">Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
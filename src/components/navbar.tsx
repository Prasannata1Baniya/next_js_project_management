export default function Navbar() {
  return (
    <header className="h-16 border-b bg-white px-6 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-orange-500">
        ProjectFlow
      </h1>

      <div className="flex items-center gap-4">
        <button className="text-xl">🔔</button>

        <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
          P
        </div>
      </div>
    </header>
  );
}
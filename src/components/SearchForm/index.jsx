import { Search } from "lucide-react";

export default function SearchForm({
  username,
  setUsername,
  handleSubmit,
  loading,
}) {
  return (
    <div className="w-full bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-slate-700">
      <form className="flex flex-row gap-3">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Nhập username GitHub..."
          disabled={loading}
          className="flex-1 rounded-md border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-2.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-green-500 placeholder-gray-400 dark:placeholder-gray-500"
        />
        <button
          type="submit"
          disabled={loading}
          onClick={handleSubmit}
          className="bg-green-500 hover:bg-green-600 text-white rounded-md px-6 py-2.5 flex flex-row items-center justify-center gap-2 font-medium text-sm transition-colors"
        >
          <Search className="w-4 h-4" />
          {loading ? "Loading..." : "Search"}
        </button>
      </form>
    </div>
  );
}

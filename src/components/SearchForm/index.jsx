import { Search } from "lucide-react";

export default function SearchForm() {
  return (
    <div className="w-full bg-white dark:bg-slate-800 rounded-xl p-2 shadow-sm border border-gray-200 dark:border-slate-700 flex flex-row gap-2">
      <input
        type="text"
        placeholder="Enter GitHub username..."
        className="flex-1 rounded-lg border border-transparent bg-transparent px-4 py-2 text-gray-900 dark:text-white focus:outline-none focus:ring-0 placeholder-gray-400 dark:placeholder-gray-500"
      />
      <button className="bg-green-500 hover:bg-green-600 text-white rounded-lg px-6 py-2 flex flex-row items-center gap-2 font-medium transition-colors">
        <Search className="w-4 h-4" />
        <span>Search</span>
      </button>
    </div>
  );
}

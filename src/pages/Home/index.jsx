import { useState, useEffect } from "react";
import Header from "../../components/Header";
import SearchForm from "../../components/SearchForm";
import UserCard from "../../components/UserCard";
import { searchUser } from "../../services/githubService";

export default function Home() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    //viết hàm thông báo phải nhập vào ô tìm kiếm
    if (!username.trim()) {
      setUser(null);
      return;
    }

    setLoading(true);
    try {
      const data = await searchUser(username.trim());
      setUser(data);
    } catch (err) {
      setError(err.message);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-200 text-gray-900 dark:text-white flex flex-col items-center w-full">
      <Header isDark={isDark} toggleTheme={toggleTheme} />

      <main className="flex-1 w-full max-w-3xl px-4 py-8 flex flex-col gap-6">
        <SearchForm
          username={username}
          setUsername={setUsername}
          handleSubmit={handleSubmit}
          loading={loading}
        />
        {loading ? (
          <div
            id="loadingState"
            className="w-full max-w-2xl mx-auto bg-white dark:bg-[#1D293D] rounded-3xl p-8 border border-slate-100 dark:border-slate-800/60 shadow-[0_20px_50px_rgba(0,0,0,0.02)] font-sans text-center flex flex-col items-center justify-center min-h-[140px]"
          >
            <div className="w-10 h-10 border-4 border-slate-100 border-t-green-500 dark:border-slate-800 dark:border-t-green-400 rounded-full animate-spin mb-4"></div>
            <p className="text-[15px] font-medium text-slate-900 dark:text-slate-200 tracking-tight">
              Searching for user...
            </p>
          </div>
        ) : error ? (
          <div
            id="errorMessage"
            className="w-full max-w-2xl mx-auto bg-red-50/50 dark:bg-red-950/20 border border-red-500/50 dark:border-red-500/30 rounded-[14px] p-4 text-left font-sans"
          >
            <div className="error-content">
              <span
                id="errorText"
                className="text-[14px] font-semibold text-red-500 dark:text-red-400 tracking-tight"
              >
                User not found
              </span>
            </div>
          </div>
        ) : user ? (
          <UserCard user={user} />
        ) : (
          <div className="w-full max-w-2xl mx-auto bg-white dark:bg-[#1D293D] rounded-3xl py-12 px-8 shadow-[0_20px_50px_rgba(0,0,0,0.02)] border border-slate-100 dark:border-slate-800/60 flex flex-col items-center justify-center text-center">
            <svg
              className="w-12 h-12 text-gray-400 dark:text-gray-500 mb-4"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              Welcome to GitHub User Search
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md">
              Enter a GitHub username above to discover detailed profile
              information,
              <br />
              including repositories, followers, and more.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

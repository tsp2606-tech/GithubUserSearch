export default function UserCard({ user }) {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white dark:bg-[#1D293D] rounded-3xl p-6 border border-slate-100 dark:border-slate-800/60 shadow-[0_20px_50px_rgba(0,0,0,0.02)] font-sans">
      <div className="flex flex-col sm:flex-row gap-5 items-start">
        <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0 border border-slate-200/60 dark:border-slate-700">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-[20px] font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
            {user.name}
          </h2>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[14px] font-semibold text-blue-600 dark:text-blue-400 hover:underline mt-0.5"
          >
            @{user.login}
          </a>
          <p className="text-[14px] text-slate-400 dark:text-slate-400 font-medium mt-2">
            {user.bio || "This profile has no bio"}
          </p>
          <div className="flex flex-wrap gap-2.5 mt-4">
            <div className="inline-flex items-center rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700/60 px-3 py-1.5 text-[13px] font-medium text-slate-600 dark:text-slate-300">
              <span className="font-bold text-slate-900 dark:text-white mr-1">
                {user.public_repos}
              </span>{" "}
              Repos
            </div>
            <div className="inline-flex items-center rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700/60 px-3 py-1.5 text-[13px] font-medium text-slate-600 dark:text-slate-300">
              <span className="font-bold text-slate-900 dark:text-white mr-1">
                {user.followers}
              </span>{" "}
              Followers
            </div>
            <div className="inline-flex items-center rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700/60 px-3 py-1.5 text-[13px] font-medium text-slate-600 dark:text-slate-300">
              <span className="font-bold text-slate-900 dark:text-white mr-1">
                {user.following}
              </span>{" "}
              Following
            </div>
          </div>
          <div className="mt-4 pt-3 border-slate-100 dark:border-slate-700/60 flex items-center text-[12px] font-medium text-slate-400 dark:text-slate-400">
            <div>Joined {new Date(user.created_at).toLocaleDateString()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

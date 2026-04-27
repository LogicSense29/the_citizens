import Link from "next/link";

export default function WorkInProgressPage() {
  return (
    <main className="min-h-screen bg-[#0A0D11] flex items-center justify-center text-white px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
          <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
          </svg>
        </div>
        <h1 className="text-4xl font-black mb-4">
          Work in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Progress</span>
        </h1>
        <p className="text-gray-400 mb-8 leading-relaxed">
          This page is currently being built. Check back soon.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-md font-medium transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}

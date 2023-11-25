'use client'
export default function Processing() {
    return (
      <div className="bg-gray-200 flex items-center justify-center h-screen">
      <div className="flex items-center">
        <div className="animate-spin mr-2">
        <svg
            className="animate-spin h-8 w-8 text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <circle
              cx="12"
              cy="12"
              r="8"
              stroke-width="4"
              className="opacity-25"
            />
            <path d="M20.4 12H3.6" stroke-linecap="round" stroke-width="4" />
          </svg>
        </div>
        <p className="text-xl">Processing...</p>
      </div>
    </div>
    )
  }
  
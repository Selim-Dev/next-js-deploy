/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export const PageNotFound = () => {
  return (
    <div className="flex h-full  justify-center px-4 pt-36">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-gray-800">Whoops!</h1>
        <p className="text-gray-600 mt-4">
          The page you are looking for can not be found.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Go back home
          </Link>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-24 w-24 mx-auto mt-8 animate-bounce"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M4 4V20l4-4l4 4V4zM16 14l4-4l-4-4l-4 4l4 4z"></path>
        </svg>
      </div>
    </div>
  );
};

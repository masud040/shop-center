"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-[500px]">
      <h2 className="text-2xl ">Something went wrong!</h2>
      <button
        className="p-2 mt-2 text-white bg-indigo-800 rounded-md"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}

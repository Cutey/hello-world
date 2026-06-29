"use client";

import useSWR from "swr";

type HelloResponse = {
  message: string;
};

const fetcher = async (url: string): Promise<HelloResponse> => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch hello");
  }

  return res.json();
};

export default function Home() {
  const { data, error, isLoading } = useSWR<HelloResponse>(
    "/api/hello",
    fetcher
  );

  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 items-center justify-center">
        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          {isLoading && "Loading..."}
          {error && "Failed to load"}
          {data?.message}
        </h1>
      </main>
    </div>
  );
}

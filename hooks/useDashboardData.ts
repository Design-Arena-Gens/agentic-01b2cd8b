"use client";

import useSWR from "swr";
import type { DashboardSnapshot } from "@/lib/types";

const fetcher = async (url: string): Promise<DashboardSnapshot> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to load dashboard snapshot");
  }
  return response.json();
};

export const useDashboardData = (initial?: DashboardSnapshot) => {
  const { data, error, isLoading, mutate } = useSWR<DashboardSnapshot>(
    "/api/dashboard",
    fetcher,
    {
      fallbackData: initial,
      refreshInterval: 5000,
      revalidateOnFocus: false,
    }
  );

  return {
    snapshot: data,
    isLoading,
    isError: Boolean(error),
    refresh: mutate,
  };
};

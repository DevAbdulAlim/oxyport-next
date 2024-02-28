"use client";
import ReduxProvider from "@/redux/provider";

export default function Template({ children }: { children: React.ReactNode }) {
  return <ReduxProvider>{children}</ReduxProvider>;
}

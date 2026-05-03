import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ThreadVault – Save Important Slack Threads",
  description: "Automatically backs up and organizes critical Slack conversations before they expire. Never lose an important thread again."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="09739b8a-8e09-42c2-9869-9d9026542f81"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}

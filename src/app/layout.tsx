"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import "./globals.css";

const WHITELISTED_URLS = [
  "https://trustedsite.com",
  "https://anothertrustedsite.com",
];

const isWhitelisted = (url: string) => {
  return WHITELISTED_URLS.some((whitelistedUrl) =>
    url.startsWith(whitelistedUrl)
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest("a");
      if (
        link &&
        link.href.startsWith("http") &&
        !link.href.includes(window.location.host)
      ) {
        if (isWhitelisted(link.href)) {
          return;
        }
        e.preventDefault();
        router.push(
          `/external-link-handler?url=${encodeURIComponent(link.href)}`
        );
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [router]);

  return (
    <html lang="en">
      <head />
      <body className="bg-gray-100">{children}</body>
    </html>
  );
}

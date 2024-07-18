// server/fetchMetadata.ts
import fetch from "node-fetch";

export const fetchMetadata = async (url: string) => {
  // Your logic to fetch metadata dynamically
  const response = await fetch(url);
  const metadata = await response.json();
  return metadata;
};

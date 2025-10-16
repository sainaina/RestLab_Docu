import "../styles/global.css";
import type { AppProps } from "next/app";
import "../tailwind.config";

// This default export is required in a new `pages/_app.tsx` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="dark:bg-[#081910]">
      <Component {...pageProps} />
    </div>
  );
}

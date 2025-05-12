import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { AppProvider } from "@contexts";
import { useEffect } from "react";

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // your console.log here
      console.log(
        `%cSandbox Studio - built with Next.js, Tailwind, and a lot of late nights 🌙 `,
        "color: #60a5fa; font-family: monospace; font-size: 12px;"
      );
    }
  }, []);

  return (
    <AppProvider>
      <Component {...pageProps} />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            border: "2px solid #9D87D9",
            padding: "10px",
            color: "#D2D2D2",
            backgroundColor: "#101010",
          },
          iconTheme: {
            primary: "#171717",
            secondary: "#9D87D9",
          },
        }}
      />
    </AppProvider>
  );
};

export default App;

import "@/styles/globals.css";
import AppProvider from "@/contexts/AppProvider";

export default function App({ Component, pageProps }) {
  return (
    <div className="container mx-auto">
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </div>
  );
}

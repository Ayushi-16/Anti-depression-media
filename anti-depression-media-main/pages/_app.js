import "../styles/globals.css";
import { UIProvider } from "../Context/UIContext";

function MyApp({ Component, pageProps }) {
  return (
    <UIProvider>
      <div className="h-full w-full">
        <Component {...pageProps} />
      </div>
    </UIProvider>
  );
}

export default MyApp;

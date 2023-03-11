import "styles/globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { register } from "swiper/element/bundle";
import { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import * as gtag from "utils/gtag";

register();

export default function App({ Component, pageProps }) {

  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', '${gtag.GA_TRACKING_ID}', {
         page_path: window.location.pathname,
       });
     `,
        }}
      />

      <Component {...pageProps} />
    </>
  );
}

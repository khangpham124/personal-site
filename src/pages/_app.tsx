import { NextComponentType, NextPageContext } from "next";
import Router from "next/router";
import NProgress from "nprogress";
import { NextIntlProvider } from "next-intl";
import { ProvideAuth } from "@/context/AuthContext";
import { ProvideCart } from "@/context/cart/CartProvider";
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from "@tanstack/react-query";

import "@/styles/globals.css";
import "animate.css";
import "nprogress/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

type AppCustomProps = {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
  cartState: string;
  wishlistState: string;
};

const MyApp = ({ Component, pageProps }: AppCustomProps) => {
  const queryClient = new QueryClient();

  return (
    <NextIntlProvider messages={pageProps?.messages}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>

        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </NextIntlProvider>
  );
};

export default MyApp;

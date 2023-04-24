import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { Amplify } from "aws-amplify";
import awsExports from "../src/aws-exports";
import { SWRConfig } from "swr";

Amplify.configure({
  ...awsExports,
  ssr: true,
});

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "dark",
        }}
      >
        <SWRConfig value={{ fallback: pageProps?.fallback || {} }}>
          <Component {...pageProps} />
        </SWRConfig>
      </MantineProvider>
    </>
  );
}

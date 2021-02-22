import Head from "next/head";

function MetaHead() {
  return (
    <div>
      <Head>
        <title>x-scale-company</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:url" content="https://x-scale.company" />
        <meta property="og:title" content="x-scale-company" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://x-scale.company/logo.png"
        />
        <meta
          property="og:description"
          content="xit"
        />
      </Head>
    </div>
  );
}

export default MetaHead;

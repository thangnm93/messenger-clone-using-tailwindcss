import Head from "next/head";
import Header from "../components/header";
import MainLeft from "../components/left/main";
import MainRight from "../components/right/main";

export default function Home() {
  return (
    <div className="bg-white dark:bg-bg-main">
      <Head>
        <title>Messenger Clone using TailwindCSS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <div className="flex">
          <MainLeft />
          <MainRight />
        </div>
      </main>
    </div>
  );
}

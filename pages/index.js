import Head from "next/head";
import Header from "../components/header";
import MainLeft from "../components/left/main";

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
          <div className="flex justify-between w-full">
            <div className="bg-bg-main w-3/4">
              <div className="p-3 flex justify-between items-center bg-bg-main shadow-xl">
                <div className="flex items-center">
                  <img
                    className="w-11 h-11 rounded-full border-bg-secondary"
                    src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=90&q=80"
                  />
                  <div className="ml-2">
                    <p className="text-gray-300 text-sm">Thang Nguyen</p>
                    <span className="text-gray-300 text-xs">
                      Hoạt động 57 phút trước
                    </span>
                  </div>
                </div>
                <div className="flex space-x-6">
                  <a href="#">
                    <svg
                      className="w-6 h-6 stroke-current text-fb-main"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      className="w-6 h-6 stroke-current text-fb-main"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </a>
                  <a href="#" className="ring-1 ring-fb-main rounded-full">
                    <svg
                      className="w-6 h-6 stroke-current text-fb-main"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white w-1/4">dddd</div>
          </div>
        </div>
      </main>
    </div>
  );
}

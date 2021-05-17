import Head from 'next/head'
import Header from "../components/header";

export default function Home() {
  return (
    <div className="bg-white">
      <Head>
        <title>Messenger Clone using TailwindCSS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <div>
          <div className="w-96 h-auto border-r">
            <div className="flex flex-col px-4 py-2 pb-5 border-b">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Chat</h1>
                <div className="flex">
                  <a
                    href="#"
                    className="flex justify-center items-center ml-3 rounded-full w-10 h-10 bg-gray-200"
                  >
                    <svg
                      className="w-6 h-6 stroke-current"
                      fill="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="flex justify-center items-center ml-3 rounded-full w-10 h-10 bg-gray-200"
                  >
                    <svg
                      className="w-6 h-6 stroke-current"
                      fill="none"
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
                  <a
                    href="#"
                    className="flex justify-center items-center ml-3 rounded-full w-10 h-10 bg-gray-200"
                  >
                    <svg
                      className="w-6 h-6 stroke-current"
                      fill="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="relative mt-4">
                <div className="absolute text-black flex items-center px-4 h-full cursor-pointer">
                  <svg
                    className="w-6 h-6 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  className="text-gray-600 focus:outline-none focus:border-none bg-gray-100 font-normal w-full h-10 flex items-center pl-12 text-sm rounded-full"
                  placeholder="Tìm kiếm trên Messenger"
                />
              </div>
            </div>
            <div className="p-4">
              <div className="group flex justify-between items-center bg-blue-50 cursor-pointer rounded-lg p-2">
                <div className="flex items-center">
                  <div className="relative">
                    <img
                      className="w-14 h-14 rounded-full"
                      href="#"
                      src="https://images.unsplash.com/photo-1588081997360-677ab9eb6591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=80"
                    />
                    <span className="absolute w-3 h-3 border-2 border-white bg-green-600 rounded-full right-0 top-10"></span>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm">Hoa Nguyen</p>
                    <p className="text-xs text-gray-500">
                      You: OK nhe · 1 ngày
                    </p>
                  </div>
                </div>
                <a
                  href="#"
                  className="invisible group-hover:visible flex justify-center items-center ml-3 border rounded-full w-10 h-10 bg-gray-50"
                >
                  <svg
                    className="w-6 h-6 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    />
                  </svg>
                </a>
              </div>
              <div className="group flex justify-between items-center hover:bg-gray-200 cursor-pointer rounded-lg p-2">
                <div className="flex items-center">
                  <div className="relative">
                    <img
                      className="w-14 h-14 rounded-full"
                      href="#"
                      src="https://images.unsplash.com/photo-1588081997360-677ab9eb6591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=80"
                    />
                    <span className="absolute w-3 h-3 border-2 border-white bg-green-600 rounded-full right-0 top-10"></span>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm">Hoa Nguyen</p>
                    <p className="text-xs text-gray-500">
                      You: OK nhe · 1 ngày
                    </p>
                  </div>
                </div>
                <a
                  href="#"
                  className="invisible group-hover:visible flex justify-center hover:bg-gray-100 items-center ml-3 border rounded-full w-10 h-10 bg-gray-50"
                >
                  <svg
                    className="w-6 h-6 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    />
                  </svg>
                </a>
              </div>
              <div className="group flex justify-between items-center hover:bg-gray-200 cursor-pointer rounded-lg p-2">
                <div className="flex items-center">
                  <div className="relative">
                    <div className="flex">
                      <img
                        className="w-7 h-7 rounded-full"
                        href="#"
                        src="https://images.unsplash.com/photo-1588081997360-677ab9eb6591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=80"
                      />
                      <img
                        className="w-7 h-7 rounded-full"
                        href="#"
                        src="https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80"
                      />
                    </div>
                    <span className="absolute w-3 h-3 border-2 border-white bg-green-600 rounded-full right-0 top-10"></span>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm">Hoa Nguyen</p>
                    <p className="text-xs text-gray-500">
                      You: OK nhe · 1 ngày
                    </p>
                  </div>
                </div>
                <a
                  href="#"
                  className="invisible group-hover:visible flex justify-center hover:bg-gray-100 items-center ml-3 border rounded-full w-10 h-10 bg-gray-50"
                >
                  <svg
                    className="w-6 h-6 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </main>
    </div>
  );
}

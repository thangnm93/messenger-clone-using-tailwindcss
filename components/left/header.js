export default function ChatHeader() {
  return (
    <div className="flex flex-col px-4 py-2 pb-5">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-black dark:text-white">
          Chat
        </h1>
        <div className="flex">
          <a
            href="#"
            className="flex justify-center items-center ml-3 rounded-full w-10 h-10 bg-gray-200 dark:bg-bg-secondary"
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
            className="flex justify-center items-center ml-3 rounded-full w-10 h-10 bg-gray-200 dark:bg-bg-secondary text-black dark:text-white"
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
            className="flex justify-center items-center ml-3 rounded-full w-10 h-10 bg-gray-200 dark:bg-bg-secondary text-black dark:text-white"
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
        <div className="absolute text-black dark:text-gray-200 flex items-center px-4 h-full cursor-pointer">
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
          className="focus:outline-none focus:border-none bg-gray-100 dark:bg-bg-secondary font-normal w-full h-10 flex items-center pl-12 text-sm rounded-full"
          placeholder="Tìm kiếm trên Messenger"
        />
      </div>
    </div>
  );
}

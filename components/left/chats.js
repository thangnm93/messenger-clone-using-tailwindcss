import faker from "faker";

function getRandomImage() {
  return faker.internet.avatar();
}
function getRandomUsername() {
  return faker.internet.userName();
}
function getRandomText() {
  return faker.lorem.sentence();
}
function getRandomInt() {
  return Math.floor(Math.random() * 30);
}

const dataChats = [
  {
    avatar: getRandomImage(),
    title: getRandomUsername(),
    chat: getRandomText(),
    extras: {
      avatar: getRandomImage(),
    },
    seen: "vừa xong",
  },
  {
    avatar: getRandomImage(),
    title: getRandomUsername(),
    chat: getRandomText(),
    extras: {
      avatar: getRandomImage(),
    },
    seen: getRandomInt() + " ngày",
  },
  {
    avatar: [getRandomImage(), getRandomImage()],
    title: getRandomUsername(),
    chat: getRandomText(),
    extras: {
      avatars: [getRandomImage(), getRandomImage(), getRandomImage()],
    },
    seen: getRandomInt() + " ngày",
  },
  {
    avatar: getRandomImage(),
    title: getRandomUsername(),
    chat: getRandomText(),
    extras: {
      svg: `<svg
            className="w-5 h-5 ml-2 stroke-current text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>`,
    },
    seen: getRandomInt() + " tuần",
  },
  {
    avatar: getRandomImage(),
    title: getRandomUsername(),
    chat: getRandomText(),
    extras: {
      avatar: getRandomImage(),
    },
    seen: getRandomInt() + " ngày",
  },
  {
    avatar: getRandomImage(),
    title: getRandomUsername(),
    chat: getRandomText(),
    extras: {
      avatar: getRandomImage(),
    },
    seen: getRandomInt() + " tháng",
  },
  {
    avatar: getRandomImage(),
    title: getRandomUsername(),
    chat: getRandomText(),
    extras: {
      avatar: getRandomImage(),
    },
    seen: getRandomInt() + " năm",
  },
  {
    avatar: getRandomImage(),
    title: getRandomUsername(),
    chat: getRandomText(),
    extras: {
      svg: `<svg
            className="w-5 h-5 ml-2 stroke-current text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>`,
    },
    seen: getRandomInt() + " tuần",
  },
  {
    avatar: getRandomImage(),
    title: getRandomUsername(),
    chat: getRandomText(),
    extras: {
      svg: `<svg
            className="w-5 h-5 ml-2 stroke-current text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>`,
    },
    seen: getRandomInt() + " tuần",
  },
  {
    avatar: getRandomImage(),
    title: getRandomUsername(),
    chat: getRandomText(),
    extras: {
      svg: `<svg
            className="w-5 h-5 ml-2 stroke-current text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>`,
    },
    seen: getRandomInt() + " tuần",
  },
  {
    avatar: getRandomImage(),
    title: getRandomUsername(),
    chat: getRandomText(),
    extras: {
      svg: `<svg
            className="w-5 h-5 ml-2 stroke-current text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>`,
    },
    seen: getRandomInt() + " tuần",
  },
  {
    avatar: getRandomImage(),
    title: getRandomUsername(),
    chat: getRandomText(),
    extras: {
      svg: `<svg
            className="w-5 h-5 ml-2 stroke-current text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>`,
    },
    seen: getRandomInt() + " tuần",
  },
  {
    avatar: getRandomImage(),
    title: getRandomUsername(),
    chat: getRandomText(),
    extras: {
      svg: `<svg
            className="w-5 h-5 ml-2 stroke-current text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>`,
    },
    seen: getRandomInt() + " tuần",
  },
  {
    avatar: getRandomImage(),
    title: getRandomUsername(),
    chat: getRandomText(),
    extras: {
      svg: `<svg
            className="w-5 h-5 ml-2 stroke-current text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>`,
    },
    seen: getRandomInt() + " tuần",
  },
  {
    avatar: getRandomImage(),
    title: getRandomUsername(),
    chat: getRandomText(),
    extras: {
      svg: `<svg
            className="w-5 h-5 ml-2 stroke-current text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>`,
    },
    seen: getRandomInt() + " tuần",
  },
  {
    avatar: getRandomImage(),
    title: getRandomUsername(),
    chat: getRandomText(),
    extras: {
      svg: `<svg
            className="w-5 h-5 ml-2 stroke-current text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>`,
    },
    seen: getRandomInt() + " tuần",
  },
  {
    avatar: [getRandomImage(), getRandomImage()],
    title: getRandomUsername(),
    chat: getRandomText(),
    extras: {
      avatars: [getRandomImage(), getRandomImage()],
    },
    seen: getRandomInt() + " ngày",
  },
  {
    avatar: [getRandomImage(), getRandomImage()],
    title: getRandomUsername(),
    chat: getRandomText(),
    extras: {
      avatars: [getRandomImage()],
    },
    seen: getRandomInt() + " ngày",
  },
  {
    avatar: [getRandomImage(), getRandomImage()],
    title: getRandomUsername(),
    chat: getRandomText(),
    extras: {
      avatars: [getRandomImage(), getRandomImage()],
    },
    seen: getRandomInt() + " ngày",
  },
  {
    avatar: [getRandomImage(), getRandomImage()],
    title: getRandomUsername(),
    chat: getRandomText(),
    extras: {
      avatar: getRandomImage(),
    },
    seen: getRandomInt() + " ngày",
  },
  {
    avatar: [getRandomImage(), getRandomImage()],
    title: getRandomUsername(),
    chat: getRandomText(),
    extras: {
      avatars: [getRandomImage()],
    },
    seen: getRandomInt() + " ngày",
  },
  {
    avatar: [getRandomImage(), getRandomImage()],
    title: getRandomUsername(),
    chat: getRandomText(),
    extras: {
      avatars: [getRandomImage()],
    },
    seen: getRandomInt() + " ngày",
  },
  {
    avatar: [getRandomImage(), getRandomImage()],
    title: getRandomUsername(),
    chat: getRandomText(),
    extras: {
      avatars: [getRandomImage()],
    },
    seen: getRandomInt() + " ngày",
  },
  {
    avatar: [getRandomImage(), getRandomImage()],
    title: getRandomUsername(),
    chat: getRandomText(),
    extras: {
      avatars: [getRandomImage()],
    },
    seen: getRandomInt() + " ngày",
  },
  {
    avatar: [getRandomImage(), getRandomImage()],
    title: getRandomUsername(),
    chat: getRandomText(),
    extras: {
      avatars: [getRandomImage()],
    },
    seen: getRandomInt() + " ngày",
  },
  {
    avatar: [getRandomImage(), getRandomImage()],
    title: getRandomUsername(),
    chat: getRandomText(),
    extras: {
      avatars: [getRandomImage()],
    },
    seen: getRandomInt() + " ngày",
  },
  {
    avatar: [getRandomImage(), getRandomImage()],
    title: getRandomUsername(),
    chat: getRandomText(),
    extras: {
      avatars: [getRandomImage()],
    },
    seen: getRandomInt() + " ngày",
  },
  {
    avatar: [getRandomImage(), getRandomImage()],
    title: getRandomUsername(),
    chat: getRandomText(),
    extras: {
      avatars: [getRandomImage()],
    },
    seen: getRandomInt() + " ngày",
  },
  {
    avatar: [getRandomImage(), getRandomImage()],
    title: getRandomUsername(),
    chat: getRandomText(),
    extras: {
      avatars: [getRandomImage()],
    },
    seen: getRandomInt() + " ngày",
  },
  {
    avatar: [getRandomImage(), getRandomImage()],
    title: getRandomUsername(),
    chat: getRandomText(),
    extras: {
      avatars: [getRandomImage()],
    },
    seen: getRandomInt() + " ngày",
  },
  {
    avatar: [getRandomImage(), getRandomImage()],
    title: getRandomUsername(),
    chat: getRandomText(),
    extras: {
      avatars: [getRandomImage()],
    },
    seen: getRandomInt() + " ngày",
  },
  {
    avatar: [getRandomImage(), getRandomImage()],
    title: getRandomUsername(),
    chat: getRandomText(),
    extras: {
      avatars: [getRandomImage()],
    },
    seen: getRandomInt() + " ngày",
  },
  {
    avatar: [getRandomImage(), getRandomImage()],
    title: getRandomUsername(),
    chat: getRandomText(),
    extras: {
      avatars: [getRandomImage()],
    },
    seen: getRandomInt() + " ngày",
  },
  {
    avatar: [getRandomImage(), getRandomImage()],
    title: getRandomUsername(),
    chat: getRandomText(),
    extras: {
      avatars: [getRandomImage()],
    },
    seen: getRandomInt() + " ngày",
  },
  {
    avatar: [getRandomImage(), getRandomImage()],
    title: getRandomUsername(),
    chat: getRandomText(),
    extras: {
      avatars: [getRandomImage()],
    },
    seen: getRandomInt() + " ngày",
  },
  {
    avatar: [getRandomImage(), getRandomImage()],
    title: getRandomUsername(),
    chat: getRandomText(),
    extras: {
      avatars: [getRandomImage()],
    },
    seen: getRandomInt() + " ngày",
  },
];

export default function ChatList() {
  return (
    <>
      <div className="pl-4 pr-2 pb-2 overflow-y-hidden hover:overflow-y-auto scrollbar max-h-70vh 2xl:max-h-80vh">
        <hr className="border-b-1 dark:border-bg-secondary sticky top-0" />
        {dataChats.map((chat, index) => {
          return (
            <div
              key={index}
              className={`group flex justify-between items-center cursor-pointer rounded-lg p-2 ${
                index === 0
                  ? "bg-light-active dark:bg-dark-active"
                  : "hover:bg-gray-200 dark:hover:bg-bg-secondary"
              }`}
            >
              <div className="flex items-center">
                <div className="relative">
                  {Array.isArray(chat.avatar) ? (
                    <div className="flex w-14 h-14">
                      {chat.avatar.map((img, i) => {
                        return (
                          <img
                            key={i}
                            className={`absolute w-9 h-9 rounded-full ${
                              i === 0 ? "top-0 right-0" : "bottom-0 left-0"
                            }`}
                            href="#"
                            src={img}
                          />
                        );
                      })}
                    </div>
                  ) : (
                    <img
                      className="w-14 h-14 rounded-full ring-1 ring-gray-300"
                      href="#"
                      src={chat.avatar}
                    />
                  )}
                  <span className="absolute w-3 h-3 border border-white bg-green-600 rounded-full right-0 top-10"></span>
                </div>
                <div className="ml-3">
                  <p className="text-sm">{chat.title}</p>
                  <div className="flex mt-1">
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate w-28">
                      {chat.chat}
                    </p>
                    <p className="text-xs text-gray-500 w-16"> · {chat.seen}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="invisible group-hover:visible flex justify-center items-center ml-3 border rounded-full w-10 h-10 bg-gray-300 dark:bg-gray-600 dark:border-bg-secondary z-10"
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
                {chat.extras.svg ? (
                  <svg
                    className="w-5 h-5 ml-2 stroke-current text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ) : chat.extras.avatar ? (
                  <img
                    className="w-4 h-4 rounded-full ring-1 ring-gray-300 ml-2"
                    href="#"
                    src="https://images.unsplash.com/photo-1588081997360-677ab9eb6591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=80"
                  />
                ) : Array.isArray(chat.extras.avatars) ? (
                  <div className="flex w-7 relative">
                    {chat.extras.avatars.slice(0, 3).map((img, i) => {
                      return (
                        <img
                          key={i}
                          className={`absolute w-4 h-4 rounded-full ring-1 ring-gray-300 -top-2 ${
                            i === 0 ? "right-0" : i === 1 ? "left-0" : "right-6"
                          }`}
                          href="#"
                          src={img}
                        />
                      );
                    })}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

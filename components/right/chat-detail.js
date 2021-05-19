import { useState } from "react";
import faker from "faker";

function randomImage() {
  return faker.internet.avatar();
}

const images = [];
for (let i = 0; i < 50; i++) {
  images.push(randomImage());
}

export default function ChatDetail() {
  const [openCustomize, setOpenCustomize] = useState(false);
  const [openPrivacy, setOpenPrivacy] = useState(false);
  const [openFilesShared, setOpenFilesShared] = useState(false);
  const [openShared, setOpenShared] = useState(false);
  return (
    <div className="bg-white dark:bg-bg-main w-1/4">
      <div className="flex flex-col items-center p-4 space-y-2">
        <img
          className="w-24 h-24 rounded-full border-bg-secondary ring-2 ring-gray-900"
          src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
        />
        <a href="#" className="dark:text-gray-300 text-black text-sm">
          <p>Minh Anh Nguyễn</p>
        </a>
        <p className="dark:text-gray-300 text-black text-xs">
          Hoạt động 6 giờ trước
        </p>
      </div>
      <div className="px-2 flex flex-col justify-between">
        <div>
          <div
            className="px-2 py-3 flex justify-between items-center cursor-pointer relative hover:bg-gray-200 dark:hover:bg-bg-secondary rounded-lg text-sm"
            onClick={() => {
              setOpenCustomize(!openCustomize);
              setOpenFilesShared(false);
              setOpenShared(false);
              setOpenPrivacy(false);
            }}
          >
            <a href="#">
              Tùy chỉnh đoạn chat
              {openCustomize ? (
                <svg
                  className="w-6 h-6 stroke-current absolute top-2.5 right-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 stroke-current absolute top-2.5 right-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </a>
          </div>
          {openCustomize ? (
            <div>
              <div className="px-2 py-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-bg-secondary rounded-lg text-sm">
                <a href="#" className="flex items-center">
                  <svg
                    className="w-6 h-6 stroke-current mr-4 text-fb-main"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                  Đổi chủ đề
                </a>
              </div>
              <div className="px-2 py-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-bg-secondary rounded-lg text-sm">
                <a href="#" className="flex items-center">
                  <svg
                    className="w-6 h-6 stroke-current mr-4 text-fb-main"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                  Thay đổi biểu tượng cảm xúc
                </a>
              </div>
              <div className="px-2 py-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-bg-secondary rounded-lg text-sm">
                <a href="#" className="flex items-center">
                  <svg
                    className="w-6 h-6 stroke-current mr-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                  Chỉnh sửa biệt danh
                </a>
              </div>
              <div className="px-2 py-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-bg-secondary rounded-lg text-sm">
                <a href="#" className="flex items-center">
                  <svg
                    className="w-6 h-6 stroke-current mr-4"
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
                  Tìm kiếm trong cuộc trò chuyện
                </a>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          <div
            className="px-2 py-3 flex justify-between items-center cursor-pointer relative hover:bg-gray-200 dark:hover:bg-bg-secondary rounded-lg text-sm"
            onClick={() => {
              setOpenPrivacy(!openPrivacy);
              setOpenFilesShared(false);
              setOpenShared(false);
              setOpenCustomize(false);
            }}
          >
            <a href="#">
              Quyền riêng tư & hỗ trợ
              {openPrivacy ? (
                <svg
                  className="w-6 h-6 stroke-current absolute top-2.5 right-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 stroke-current absolute top-2.5 right-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </a>
          </div>
          {openPrivacy ? (
            <div>
              <div className="px-2 py-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-bg-secondary rounded-lg text-sm">
                <a href="#" className="flex items-center">
                  <svg
                    className="w-6 h-6 stroke-current mr-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  Tắt cuộc trò chuyện
                </a>
              </div>
              <div className="px-2 py-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-bg-secondary rounded-lg text-sm">
                <a href="#" className="flex items-center">
                  <svg
                    className="w-6 h-6 stroke-current mr-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  Bỏ qua tin nhắn
                </a>
              </div>
              <div className="px-2 py-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-bg-secondary rounded-lg text-sm">
                <a href="#" className="flex items-center">
                  <svg
                    className="w-6 h-6 stroke-current mr-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  Chặn
                </a>
              </div>
              <div className="px-2 py-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-bg-secondary rounded-lg text-sm">
                <a href="#" className="flex items-center">
                  <svg
                    className="w-6 h-6 stroke-current mr-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  <div>
                    <p className="text-sm">Có gì đó không ổn</p>
                    <p className="text-xs">
                      Đóng góp ý kiến và báo cáo cuộc trò chuyện
                    </p>
                  </div>
                </a>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          <div
            className="px-2 py-3 flex justify-between items-center cursor-pointer relative hover:bg-gray-200 dark:hover:bg-bg-secondary rounded-lg text-sm"
            onClick={() => {
              setOpenFilesShared(!openFilesShared);
              setOpenPrivacy(false);
              setOpenShared(false);
              setOpenCustomize(false);
            }}
          >
            <a href="#">
              Tệp được chia sẻ
              {openFilesShared ? (
                <svg
                  className="w-6 h-6 stroke-current absolute top-2.5 right-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 stroke-current absolute top-2.5 right-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </a>
          </div>
          {openFilesShared ? (
            <div>
              <div className="px-2 py-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-bg-secondary rounded-lg text-sm">
                <a href="#" className="flex items-center">
                  Lorem ipsum dolor sit amet consectetur.pdf
                </a>
              </div>
              <div className="px-2 py-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-bg-secondary rounded-lg text-xs">
                <a href="#" className="flex items-center">
                  voluptates porro ullam exercitationem unde accusantium.docx
                </a>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col">
          <div
            className="px-2 py-3 flex items-end justify-between cursor-pointer relative hover:bg-gray-200 dark:hover:bg-bg-secondary rounded-lg text-sm"
            onClick={() => {
              setOpenShared(!openShared);
              setOpenPrivacy(false);
              setOpenFilesShared(false);
              setOpenCustomize(false);
            }}
          >
            <a href="#">
              File phương tiện được chia sẻ
              {openShared ? (
                <svg
                  className="w-6 h-6 stroke-current absolute top-2.5 right-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 stroke-current absolute top-2.5 right-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </a>
          </div>
          {openShared ? (
            <div className="grid grid-cols-3 gap-1 overflow-y-auto scrollbar max-h-55vh">
              {images.map((img) => {
                return (
                  <a href="#" className="border-gray-600 hover:opacity-90">
                    <img className="w-auto h-auto rounded-sm" src={img} />
                  </a>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

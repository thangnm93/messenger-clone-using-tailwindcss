export default function Header() {
    return (
      <header className="flex items-center justify-between border shadow-xl p-2 px-4">
        <div className="flex">
          <a href="#" className="text-blue-500">
            <svg
              className="w-10 h-10 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 167.657 167.657"
              fill="currentColor"
            >
              <path d="M83.829,0.349C37.532,0.349,0,37.881,0,84.178c0,41.523,30.222,75.911,69.848,82.57v-65.081H49.626 v-23.42h20.222V60.978c0-20.037,12.238-30.956,30.115-30.956c8.562,0,15.92,0.638,18.056,0.919v20.944l-12.399,0.006 c-9.72,0-11.594,4.618-11.594,11.397v14.947h23.193l-3.025,23.42H94.026v65.653c41.476-5.048,73.631-40.312,73.631-83.154 C167.657,37.881,130.125,0.349,83.829,0.349z" />
            </svg>
          </a>
          <div className="relative ml-3">
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
              className="text-gray-600 focus:outline-none focus:border-none bg-gray-100 font-normal w-80 h-10 flex items-center pl-12 text-sm rounded-full"
              placeholder="Tìm kiếm trên Facebook"
            />
          </div>
        </div>
        <div className="flex items-center">
          <div className="group group px-12 py-3 cursor-pointer hover:bg-gray-100 mr-2 rounded-lg relative">
            <a href="#">
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
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </a>
            <p className="absolute invisible group-hover:visible text-xs bg-gray-100 text-center px-3 py-2 max-w-max top-14 left-4 rounded-md shadow-xl">
              Trang chủ
            </p>
          </div>
          <div className="group px-12 py-3 cursor-pointer hover:bg-gray-100 mr-2 rounded-lg relative">
            <a href="#">
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
                  d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                />
              </svg>
            </a>
            <span className="absolute top-0 right-7 w-auto h-5 text-white bg-red-600 rounded-full px-1 text-xs flex items-center">
              9+
            </span>
            <p className="absolute invisible group-hover:visible text-xs bg-gray-100 text-center px-3 py-2 max-w-max top-14 left-7 rounded-md shadow-xl">
              Trang
            </p>
          </div>
          <div className="group px-12 py-3 cursor-pointer hover:bg-gray-100 mr-2 rounded-lg relative">
            <a href="#">
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
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </a>
            <span className="absolute top-0 right-7 w-auto h-5 text-white bg-red-600 rounded-full px-1 text-xs flex items-center">
              9+
            </span>
            <p className="absolute invisible group-hover:visible text-xs bg-gray-100 text-center px-3 py-2 max-w-max top-14 left-7 rounded-md shadow-xl">
              Watch
            </p>
          </div>
          <div className="group px-12 py-3 cursor-pointer hover:bg-gray-100 mr-2 rounded-lg relative">
            <a href="#">
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
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </a>
            <p className="absolute invisible group-hover:visible text-xs bg-gray-100 text-center px-3 py-2 max-w-max top-14 left-3 rounded-md shadow-xl">
              Marketplace
            </p>
          </div>
          <div className="group px-12 py-3 cursor-pointer hover:bg-gray-100 mr-2 rounded-lg relative">
            <a href="#">
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
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </a>
            <span className="absolute top-0 right-7 w-auto h-5 text-white bg-red-600 rounded-full px-1 text-xs flex items-center">
              9+
            </span>
            <p className="absolute invisible group-hover:visible text-xs bg-gray-100 text-center px-3 py-2 max-w-max top-14 left-7 rounded-md shadow-xl">
              Nhóm
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center p-1 rounded-full hover:bg-gray-100 cursor-pointer">
            <img
              className="w-7 h-7 rounded-full"
              src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=80"
              alt="Thang NM"
            />
            <span className="text-sm mx-1 font-medium">Thang NM</span>
          </div>
          <div className="group bg-gray-200 rounded-full p-2 ml-3 relative">
            <a href="#">
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
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </a>
            <p className="absolute invisible group-hover:visible text-xs bg-gray-100 text-center px-3 py-2 max-w-max top-14 left-0 rounded-md shadow-xl">
              Tạo
            </p>
          </div>
          <div className="group bg-gray-200 rounded-full p-2 ml-3 relative">
            <a href="#">
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
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </a>
            <p className="absolute invisible group-hover:visible text-xs bg-gray-100 text-center px-3 py-2 w-24 top-14 -left-6 rounded-md shadow-xl">
              Thông báo
            </p>
          </div>
          <div className="group bg-gray-200 rounded-full p-2 ml-3 relative">
            <a href="#">
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
            <p className="absolute invisible group-hover:visible text-xs bg-gray-100 text-center px-3 py-2 w-24 top-14 -left-10 rounded-md shadow-xl">
              Tài khoản
            </p>
          </div>
        </div>
      </header>
    );
}
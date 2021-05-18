import Header from "./header";
import Chat from "./chat";
import Typing from "./typing";
import ChatDetail from "./chat-detail";

export default function MainRight() {
  return (
    <div className="flex justify-between w-full">
      <div className="bg-white dark:bg-bg-main border-r dark:border-bg-secondary w-3/4 relative">
        <Header />
        <Chat />
        <Typing />
      </div>
      <ChatDetail />
    </div>
  );
}

import Header from "./header";
import ChatList from "./chats";
export default function MainLeft() {
  return (
    <div className="w-96 h-auto border-r dark:border-bg-secondary">
      <Header />
      <ChatList />
    </div>
  );
}

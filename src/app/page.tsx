'use client'

import { useState } from "react";

//Components
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ChatArea from "@/components/ChatArea";

// types
import { Chat } from "@/types/Chat";

export default function Home() {

  const [sidebarOpened, setSidebarOpened] = useState(false)
  const [chatActive, setChatActive] = useState<Chat>()

  const closeSidebar = () => setSidebarOpened(false)
  const openSidebar = () => setSidebarOpened(true)
  
  const handleClearConversation = () => {

  }

  const handleNewChat = () => {

  }

  return (
    <main className="flex min-h-screen bg-gpt-gray">
      <Sidebar
        open={sidebarOpened}
        onClose={closeSidebar}
        onClear={handleClearConversation}
        onNewChat={handleNewChat}
      >

      </Sidebar>
      
      <section className="flex flex-col w-full">

        <Header
          openSidebarClick={openSidebar}
          title={`bla bla bla`}
          newChatClick={handleNewChat}
        />

        <ChatArea chat={chatActive}/>

      </section>
    </main>
  )
}


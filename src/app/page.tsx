'use client'

import { useState } from "react";

//Components
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ChatArea from "@/components/ChatArea";

// types
import { Chat } from "@/types/Chat";
import ChatFooter from "@/components/ChatFooter";

export default function Home() {

  const [sidebarOpened, setSidebarOpened] = useState(false)
  const [AILoading, setAILoading] = useState(false)
  const [chatActive, setChatActive] = useState<Chat>({
    id: '123',
    title: 'bla bla',
    messages: [
      {
      id: '99',
      author: 'me',
      body: 'bla bla'
      },
      {
        id: '11',
        author: 'ai',
        body: 'blu blu'
        }
  ]
  })

  const closeSidebar = () => setSidebarOpened(false)
  const openSidebar = () => setSidebarOpened(true)
  
  const handleClearConversation = () => {

  }

  const handleNewChat = () => {

  }

  const handleSendMessage = () =>{

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

        <ChatFooter
          onSendMessage={handleSendMessage}
          disabled={AILoading}
        />

      </section>
    </main>
  )
}


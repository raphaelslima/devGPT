'use client'

import { useEffect, useState } from "react";
import {v4 as uuidv4 } from 'uuid'

//Components
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ChatArea from "@/components/ChatArea";

// types
import { Chat } from "@/types/Chat";
import ChatFooter from "@/components/ChatFooter";

export default function Home() {

  const [sidebarOpened, setSidebarOpened] = useState(false);
  const [chatList, setChatList] = useState<Chat[]>([]);
  const [chatActiveId, setChatActiveId] = useState('');
  const [AILoading, setAILoading] = useState(false);
  const [chatActive, setChatActive] = useState<Chat>();

  useEffect(()=> {
    setChatActive(chatList.find((item) => item.id === chatActiveId))
  }, [chatActiveId, chatList])

  const closeSidebar = () => setSidebarOpened(false);
  const openSidebar = () => setSidebarOpened(true);

  const handleClearConversation = () => {
    if(AILoading) return;
    setChatActiveId('');
    setChatList([]);
  };

  const handleNewChat = () => {
    if(AILoading) return;
    setChatActiveId('');
    closeSidebar()
  };

  const handleSendMessage = (msg: string) =>{
    if(!chatActiveId){

      let newChatId = uuidv4();

      setChatList([ {
        id: newChatId,
        title: msg,
        messages: [
          {
            id: uuidv4(),
            author: 'me',
            body: msg
          }
        ]
      } ,...chatList]);

      setChatActiveId(newChatId);
    } else{

      let chatListClone = [...chatList];
      let chatIndex = chatListClone.findIndex((item)=> item.id === chatActiveId)
      chatListClone[chatIndex].messages.push({
        id: uuidv4(),
        author: 'me',
        body: msg
      })

      setChatList(chatListClone)
    }

    setAILoading(true)
  };

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


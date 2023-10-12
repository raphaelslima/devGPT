'use client'

import { useEffect, useState } from "react";
import {v4 as uuidv4 } from 'uuid'

//Components
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ChatArea from "@/components/ChatArea";
import SidebarChatButton from "@/components/SidebarChatButton";

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

  useEffect(()=>{
    if(AILoading) getResponseAI()
  }, [AILoading])

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
      let chatIndex = chatListClone.findIndex((item)=> item.id === chatActiveId);
      chatListClone[chatIndex].messages.push({
        id: uuidv4(),
        author: 'me',
        body: msg
      });

      setChatList(chatListClone);
    }

    setAILoading(true)
  };

  const getResponseAI = () =>{
    setTimeout(()=> {
      let cloneChatList = [...chatList];
      const chatIndex = cloneChatList.findIndex((item) => item.id === chatActiveId);
      cloneChatList[chatIndex].messages.push({
        id: uuidv4(),
        author: 'ai',
        body: 'Resposta ia'
      });
      setChatList(cloneChatList);
      setAILoading(false);
    },2000)
  };

  const handleSelectChat = (id: string) => {
    if( AILoading) return;

    let existChat = chatList.find(item => item.id === id);
    if(existChat) setChatActiveId(id);
  };

  const handleDeleteChat = (id: string) => {
    let chatListClone = [...chatList];
    const indexChat = chatListClone.findIndex((item) => item.id === id);
    chatListClone.splice(indexChat, 1);
    setChatList(chatListClone)
    setChatActiveId('');
  };

  const handleEditChat = (id: string, newTitle: string) => {
    if(newTitle === '') return;

    let chatListClone = [...chatList];
    const indexChat = chatListClone.findIndex((item) => item.id === id);
    chatListClone[indexChat].title = newTitle;
    setChatList(chatListClone);

  };

  return (
    <main className="flex min-h-screen bg-gpt-gray">
      <Sidebar
        open={sidebarOpened}
        onClose={closeSidebar}
        onClear={handleClearConversation}
        onNewChat={handleNewChat}
      >
        {chatList.map((item) => (
          <SidebarChatButton
            key={item.id}
            chatItem={item}
            active={item.id === chatActiveId}
            onClick={handleSelectChat}
            onDelete={handleDeleteChat}
            onEdit={handleEditChat}
          />
        ))}
      </Sidebar>
      
      <section className="flex flex-col w-full">

        <Header
          openSidebarClick={openSidebar}
          title={chatActive ? chatActive.title : 'Nova Conserva'}
          newChatClick={handleNewChat}
        />

        <ChatArea chat={chatActive} loading={AILoading}/>

        <ChatFooter
          onSendMessage={handleSendMessage}
          disabled={AILoading}
        />

      </section>
    </main>
  )
}


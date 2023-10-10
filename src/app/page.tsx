'use client'

import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function Home() {

  const [sidebarOpened, setSidebarOpened] = useState(false)

  const closeSidebar = () => {
    setSidebarOpened(false)
  }

  const handleClearConversation = () => {

  }

  return (
    <main className="flex min-h-screen bg-gpt-gray">
      <Sidebar
        open={sidebarOpened}
        onClose={closeSidebar}
        onClear={handleClearConversation}
      >

      </Sidebar>
      
      <section className="flex flex-col w-full">
        <button onClick={() => setSidebarOpened(true)} >Abrir SideBar</button>
      </section>

    </main>
  )
}


//Types
import { Chat } from "@/types/Chat";

//Components
import ChatPlaceholder from "./ChatPlaceholder";

type Props = {
    chat: Chat | undefined
}

const ChatArea = ({chat}: Props) =>{
    return (
        <section className="flex-auto h-0 overflow-y-scroll">
            {!chat && <ChatPlaceholder/>}
            {chat && chat.messages.map(msg => (
                <div>...</div>
            ))}
        </section>
    )
}   

export default ChatArea;
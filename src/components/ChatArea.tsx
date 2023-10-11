//Types
import { Chat } from "@/types/Chat";

//Components
import ChatPlaceholder from "./ChatPlaceholder";
import ChatMessageItem from "./ChatMessageItem";
import ChatMessageLoading from "./ChatMessageLoading";

type Props = {
    chat: Chat | undefined
    loading: boolean
}

const ChatArea = ({chat, loading}: Props) =>{
    return (
        <section className="flex-auto h-0 overflow-y-scroll">
            {!chat && <ChatPlaceholder/>}
            {chat && chat.messages.map(item => (
                <ChatMessageItem key={item.id} item={item}/>
            ))}

            {loading && <ChatMessageLoading/>}
        </section>
    )
}   

export default ChatArea;
import { chatMessage } from "./ChatMessage";

export type Chat = {
    id: string;
    title: string;
    messages: chatMessage[];
}
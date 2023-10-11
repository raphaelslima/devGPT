//Types
type Props = {
    disabled: boolean
    onSendMessage : (message: string) => void
}

const ChatFooter = ({disabled, onSendMessage}: Props) => {
    return (
        <footer className="w-full border-t border-t-gray-600 p-2">
            <div className="max-w-4xl m-auto">
                <ChatMessageInput
                    disabled={disabled}
                    onSend={onSendMessage}
                />

                <div className="pt-3 text-center text-xs text-gray-300">
                    Feito por Raphael Lima. Copyright 2023 todos os direitos reservados.
                    <a 
                        className="underline"
                        href="https://raphael-lima-portfolio.netlify.app/" 
                        target="_blank">
                            Conheça mais do meu trabalho
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default ChatFooter
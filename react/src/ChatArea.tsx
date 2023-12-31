import Chat, { Bubble, useMessages } from "@chatui/core";
import { useState } from "react";
import Conversation from "./conversation";
import defaultSettings from "./characters";
import { Configuration, OpenAIApi } from "openai";
import Cookies from "js-cookie";
import GrammarChecker from "./grammarChecker";
import './App.css';


const ChatArea = ({ setCurrent }: any) => {
    const storedApiKey = "sk-VnftvYTY7wpwJPz1zcBXT3BlbkFJo6RlK7GAS17X7X8wXWVNs";
    const { messages, appendMsg, setTyping } = useMessages([]);
    const [openai, setOpenai] = useState(new OpenAIApi(new Configuration({ apiKey: storedApiKey })));

    const [grammarChecker, setGrammarChecker] = useState(new GrammarChecker(defaultSettings.LANGUAGE, new Configuration({ apiKey: storedApiKey })));

    // Conversation hook
    const [conversation, setConversation] = useState(new Conversation(defaultSettings));

    function handleSend(type: any, val: string) {
        if (type === 'text' && val.trim()) {
            appendMsg({
                type: 'text',
                content: { text: val },
                position: 'right',
            });

            setTyping(true);
            let correction = new Promise<string>((resolve) => resolve(val))
            console.log("CorrectErrors: ", Cookies.get("correctErrors"))
            if (Cookies.get("correctErrors") === "true") {
                correction = grammarChecker.check(val)
            }

            correction.then((correction) => {

                console.log(correction)
                if (correction.trim() !== val.trim()) {
                    appendMsg({
                        type: 'text',
                        content: { text: "*" + correction },
                        position: 'right',
                    });
                }

                const prompt = conversation.get_prompt(correction).trim()
                console.log("Prompt: ", prompt)
                console.log("Conversation: ", conversation.conversation)

                
                    openai.createCompletion({
                        model: 'text-davinci-003',
                        prompt: prompt,
                        stop: (Cookies.get("userPrefix") || defaultSettings['USER_PREFIX']).trim(),
                        max_tokens: defaultSettings['MAX_TOKENS'],
                        frequency_penalty: 1,
                        presence_penalty: 1,
                    }).then((completion) => {
                        const responseText = completion.data.choices![0].text!;
                        conversation.set_completion(responseText)
                        appendMsg({
                            type: 'text',
                            content: { text: responseText.trim() },
                        });
                    });

                }
            )
        }
    }

    function renderMessageContent(msg: any) {
        const { content } = msg;
        return <Bubble content={content.text} />;
    }


    return (
        <>
            {
                storedApiKey ? (<Chat
                    navbar={{ title: 'Poses moi des questions sur la santé mentale' }}
                    messages={messages}
                    renderMessageContent={renderMessageContent}
                    onSend={handleSend}
                    locale="fr"
                    placeholder='Type a message'
                />) :
                    (<div className="noApiKeyLabel">We couldn't find an OpenAI API key. Please configure the chatbot in the&nbsp;
                        <span className="spanAsLink" onClick={() => { setCurrent('settings') }}>Settings</span>
                        &nbsp;to continue.</div>)
            }
        </>
    )
}

export default ChatArea;

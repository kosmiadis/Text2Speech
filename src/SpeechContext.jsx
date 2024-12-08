import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";

export const SpeechCtx = createContext();

export const useSpeech = () => useContext(SpeechCtx);

export default function SpeechContextProvider ({children}) {

    const [ langList, setLangList ] = useState(speechSynthesis.getVoices());
    const [ isSpeaking, setIsSpeaking ] = useState(false);
    const [ lang, setLang ] = useState('');
    const [ text, setText ] = useState('');
    const [ isPaused ] = useState(false);
    const [ hasStarted, setHasStarted ] = useState(false);

    const {current: speech} = useRef(new SpeechSynthesisUtterance())
    
    useEffect(() => {
        
        setLangList(speechSynthesis.getVoices());
        speech.onend = () => {
            setHasStarted(false);
            setIsSpeaking(false);
        }
        speech.onpause = () => {
            setIsSpeaking(false);
        }
        
        speech.onresume = () => {
            setIsSpeaking(true);
        }

        speech.onstart = () => {
            setHasStarted(true);
            setIsSpeaking(true);
        }
        
    }, [])

    useEffect(() => {
        //when language or text changes cancel
        speechSynthesis.cancel();
        setIsSpeaking(false);
        setHasStarted(false);
        speech.lang = lang
        speech.text = text
    }, [lang, text, speech])


    const speak = () => {
        speechSynthesis.speak(speech);
    }

    const cancel = () => {
        setIsSpeaking(false);
        speechSynthesis.cancel(speech);
    }
    
    const pause = () => {
        speechSynthesis.pause(speech);
    }
    
    const resume = () => {
        speechSynthesis.resume(speech);
    }

    const value = {
        langList,
        setLangList,
        speak,
        pause,
        resume,
        cancel,
        lang,
        setLang,
        text,
        setText,
        isSpeaking,
        isPaused,
        hasStarted
    }

    return <SpeechCtx.Provider value={value}>
        {children}
    </SpeechCtx.Provider>
}
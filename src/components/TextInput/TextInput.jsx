import { useSpeech } from '../../SpeechContext'
import './TextInput.css'

export default function TextInput () {

    const { text, setText } = useSpeech();

    return <textarea value={text} onChange={(e) => setText(e.target.value)}  placeholder='Write something...'></textarea>
}
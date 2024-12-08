import './LangSelect.css'
import { useSpeech } from '../../SpeechContext.jsx';


export default function LangSelect({ langList }) {

  const { setLang } = useSpeech();

  return (
    <select name="lang-list" onChange={(e) => {setLang(e.target.value)}} aria-placeholder='Select Language' id="lang-select">
        {langList.map(lang => {
          return <option onClick={() => handleOptionClick(lang.lang)} key={lang.name} value={lang.lang}>{lang.name}</option>
        })}
    </select>
  )
}

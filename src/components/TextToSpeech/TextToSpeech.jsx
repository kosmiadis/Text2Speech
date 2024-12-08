import Hero from '../Hero/Hero.jsx';
import './TextToSpeech.css';
import TextInput from '../TextInput/TextInput.jsx';
import Container from '../ui/Container/Container.jsx';
import Button from '../Button/Button.jsx';
import Group from '../ui/Group/Group.jsx';
import InnerGroup from '../ui/InnerGroup/InnerGroup.jsx';
import LangSelect from '../LangSelect/LangSelect.jsx';

import { useEffect } from 'react';
import { useSpeech } from '../../SpeechContext.jsx';

export default function TextToSpeech() {

  const { langList, setLangList, speak, isSpeaking, cancel, pause, resume, hasStarted } = useSpeech();

  useEffect(() => {
    setLangList(speechSynthesis.getVoices())
  }, [])

  const handleSpeak = () => {
    if (!isSpeaking) {
      speak();
    }
    if (isSpeaking) {
      cancel();
    }
  }

  const togglePause = () => {
    if (isSpeaking) {
      pause();
    }
    if (!isSpeaking) {
      resume();
    }
  }

  return <Container>
    <Hero />
    <TextInput />
    <Group>
      <LangSelect langList={langList}/>
      <InnerGroup>
        <Button onClick={handleSpeak} text={!isSpeaking ? 'Convert' : 'Cancel'}/>
        <Button disabled={!hasStarted} onClick={togglePause} text={isSpeaking ? 'Pause' : 'Resume'}/>
      </InnerGroup>
    </Group>

    <Group>
      
    </Group>
  </Container>
}

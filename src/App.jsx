import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import TextToSpeech from './components/TextToSpeech/TextToSpeech.jsx';
import SpeechContextProvider from "./SpeechContext.jsx";

const router = createBrowserRouter([
  {path: '/', element: <Navigate to='/t2s' /> },
  {path: '/t2s', element: <TextToSpeech />}
])


function App() {
  return (
    <SpeechContextProvider>
      <RouterProvider router={router}/>
    </SpeechContextProvider>
  )
}

export default App

import { Envelope } from 'phosphor-react'
import { TextInput } from './components/TextInput/TextInput'
import './styles/global.css'

export function App() {
  return (
    <>
      <TextInput.Root>
        <TextInput.Icon>
          <Envelope />
        </TextInput.Icon>
        <TextInput.Input placeholder="email@exemplo.com" />
      </TextInput.Root></>
  )
}
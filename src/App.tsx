import { Envelope } from 'phosphor-react';
import { Select } from './components/Select/Select';
import { TextInput } from './components/TextInput/TextInput';
import './styles/global.css';

export function App() {
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-gray-900'>
      <TextInput.Root>
        <TextInput.Icon>
          <Envelope />
        </TextInput.Icon>
        <TextInput.Input placeholder="email@exemplo.com" />
      </TextInput.Root>
      <div className='w-4'></div>
      <Select.Root onValueChange={(e) => console.log(e)}>
        <Select.Item
          text="Opção 1"
          value="1"
        />
        <Select.Item
          text="Opção 2"
          value="2"
        />
        <Select.Item
          text="Opção 3"
          value="3"
        />
      </Select.Root>
    </div>
  )
}

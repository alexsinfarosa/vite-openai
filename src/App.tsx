import {Configuration, OpenAIApi} from 'openai'
import {useState} from 'react'
import './App.css'

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPEN_AI,
})
const openai = new OpenAIApi(configuration)

const completion = await openai.createChatCompletion({
  model: 'gpt-3.5-turbo',
  messages: [{role: 'user', content: 'Hello world'}],
})

function App() {
  const [message, setMessage] = useState('')
  console.log(completion.data.choices[0].message)
  return (
    <div className="">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam provident
      hic, porro a, aperiam aut autem, reprehenderit esse sit vero corporis
      illo? Eveniet rem, voluptas mollitia perferendis consequatur eligendi
      aliquam!
    </div>
  )
}

export default App

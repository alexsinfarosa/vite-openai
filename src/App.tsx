import {Configuration, OpenAIApi} from 'openai'
import {useState} from 'react'
import './App.css'

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPEN_AI,
})
const openai = new OpenAIApi(configuration)

function App() {
  const [message, setMessage] = useState<string | undefined>('')

  return (
    <>
      <form
        onSubmit={async e => {
          e.preventDefault()
          const data = new FormData(e.target as HTMLFormElement)
          const message: string = (data.get('search') ?? '') as string
          const completion = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [{role: 'user', content: message}],
          })
          setMessage(completion.data.choices[0].message?.content)
        }}
      >
        <label htmlFor="search">Search</label>
        <input id="search" type="text" name="search" />
        <button type="submit">Submit</button>
      </form>

      <pre>{message}</pre>
    </>
  )
}

export default App

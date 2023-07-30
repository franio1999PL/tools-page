import { FormEvent, useState } from 'react'

const ContactPage = () => {
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const SendMessage = (e: FormEvent) => {
    e.preventDefault()
    console.log('email', email, 'message', message)
  }

  return (
    <div className='flex flex-col items-center justify-center w-full h-full font-mono'>
      <h1 className='my-12 text-4xl'>Formularz Kontaktowy</h1>
      <form
        onSubmit={e => SendMessage(e)}
        className='flex flex-col items-center justify-center w-full gap-4'
      >
        {/* <div className='flex items-center justify-center w-full gap-4'> */}
        <label className='text-2xl '>Email:</label>
        <input
          className='p-4 text-black rounded-sm lg:w-1/5 md:w-full'
          placeholder='john.doe@example.com'
          type='email'
          onChange={e => setEmail(e.target.value)}
        />
        {/* </div> */}
        {/* <div className='flex items-center justify-center w-full gap-4'> */}
        <label className='text-2xl'>Wiadomość:</label>
        <textarea
          placeholder='Wiadomość...'
          className='p-4 text-black rounded-sm lg:w-1/5 md:w-full'
          onChange={e => setMessage(e.target.value)}
        />
        {/* </div> */}
        <button
          type='submit'
          className='px-4 py-2 bg-red-400 rounded-full w-fit'
        >
          Wyślij
        </button>
      </form>
    </div>
  )
}

export default ContactPage

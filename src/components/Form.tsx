type Props = {
  setValue: React.Dispatch<React.SetStateAction<string>>
  message: string
  isError: boolean
}

const Form = ({ setValue, message, isError }: Props) => {
  const error = 'border-red-500'
  const good = 'border-green-500'

  
  console.log(error, good)
  console.clear()

  const Submit = (e: any) => {
    e.preventDefault()
  }

  return (
    <form
      onSubmit={e => Submit(e)}
      className='flex flex-col items-center justify-center w-full gap-4'
    >
      <label className='text-xl'>
        Wprowadź URL lub numer telefonu lub adres Email
      </label>
      <input
        onChange={e => setValue(e.target.value)}
        type='text'
        className={`items-center sm:w-full lg:w-1/3 p-4 rounded-lg border-[4px]  
          ${isError ? 'border-red-500' : 'border-green-500'}
        `}
        placeholder='https://example.com'
      />
      {isError ? (
        <label className='font-bold text-red-500'>{message}</label>
      ) : (
        <label className='font-bold text-green-600'>
          Pomyślnie wygenerowano QRCODE!
        </label>
      )}
    </form>
  )
}

export default Form

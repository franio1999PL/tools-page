import { useState } from 'react'

import Form from '../components/Form'
import QRgen from '../components/QRgen'

const QRPage = () => {
  const [qrValue, setQrValue] = useState('')
  const [message, setMessage] = useState('')
  const [isError, setIsError] = useState(true)

  return (
    <div className='flex flex-col items-center justify-around w-full h-full'>
      <h1 className='text-6xl'>QRCODE GENERATOR</h1>
      <div>
        <QRgen
          setMessage={setMessage}
          qrValue={qrValue}
          setIsError={setIsError}
        />
      </div>
      <Form setValue={setQrValue} message={message} isError={isError} />
    </div>
  )
}

export default QRPage

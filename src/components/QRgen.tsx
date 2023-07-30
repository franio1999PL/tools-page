import { useState, useEffect, useRef } from 'react'
import QRCode from 'react-qr-code'
import html2canvas from 'html2canvas'
import { AiOutlineCloudDownload as DownloadIcon } from 'react-icons/ai'

type Props = {
  qrValue: string
  setMessage: React.Dispatch<React.SetStateAction<string>>
  setIsError: React.Dispatch<React.SetStateAction<boolean>>
}

const QRgen = ({ qrValue, setMessage, setIsError }: Props) => {
  const [value, setValue] = useState('')

  const printRef = useRef()

  const handleDownloadImage = async () => {
    const element = printRef.current
    const canvas = await html2canvas(element as any)

    const data = canvas.toDataURL('image/jpg')
    const link = document.createElement('a')

    if (typeof link.download === 'string') {
      link.href = data
      link.download = `qrcode-${value}.jpg`

      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } else {
      window.open(data)
    }
  }

  const ValidateVale = (value: any) => {
    if (/^\d+$/.test(value)) {
      setValue(`tel:${value}`)
      setMessage('')
      setIsError(false)
    } else if (value.includes('@')) {
      setValue(`mailto:${value}`)
      setMessage('')
      setIsError(false)
    } else if (/^(https?:\/\/|.*\.(pl|com))(?!.*@)/.test(value)) {
      setValue(value)
      setMessage('')
      setIsError(false)
    } else {
      setMessage('Błędny format podaj url lub email lub nr telefonu!')
      setIsError(true)
    }
  }

  useEffect(() => {
    ValidateVale(qrValue)
  }, [qrValue])

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='border-4 border-black' ref={printRef as any}>
        <QRCode level='Q' value={value} />
      </div>
      <button
        className='flex items-center justify-between gap-2 p-2 mt-4 font-bold text-blue-900 transition-all duration-75 bg-blue-300 border-2 border-blue-500 rounded-full hover:border-blue-300 hover:bg-blue-500 hover:text-blue-300 selection:bg-none'
        type='button'
        onClick={handleDownloadImage}
      >
        Download Image
        <span className='text-2xl'>
          <DownloadIcon />
        </span>
      </button>
    </div>
  )
}

export default QRgen

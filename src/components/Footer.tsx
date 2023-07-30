import { FaCloudflare } from 'react-icons/fa6'

import Config from '../lib/config'

const Footer = () => {
  const {
    Footer: { name, url, date }
  } = Config
  return (
    <>
      <footer className='flex items-center justify-center gap-2 font-mono text-lg font-bold text-center uppercase'>
        {date} &copy;
        <a className='ml-1 hover:underline' href={url} target='_blank'>
          {name}
        </a>
        <p className='flex items-center justify-center gap-2'>
          <span>Powered By</span>
          <span className='text-3xl text-orange-400'>
            <a href='https://cloudflare.com' target='_blank'>
              <FaCloudflare />
            </a>
          </span>
        </p>
      </footer>
    </>
  )
}
export default Footer

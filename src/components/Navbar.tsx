import { Link } from 'react-router-dom'
import Config from '../lib/config'
import { FaSun as Sun, FaMoon as Moon } from 'react-icons/fa6'

type Props = {
  setIsDarkMode: React.Dispatch<React.SetStateAction<'dark' | 'light'>>
  isDarkMode: 'dark' | 'light'
}

const NavBar = ({ isDarkMode, setIsDarkMode }: Props) => {
  const { NavBarLinks } = Config

  const Dark = 'bg-slate-800 text-white'
  const Light = 'bg-slate-400 text-black'

  return (
    <>
      <nav
        className={`flex items-start justify-around p-4 ${
          isDarkMode === 'light' ? Light : Dark
        }`}
      >
        <ul className='flex items-center justify-around gap-4 text-2xl'>
          {NavBarLinks.map(({ name, path }) => (
            <li key={name} className='hover:underline'>
              <Link to={path}>{name}</Link>
            </li>
          ))}
          {/* <li className='hover:underline'>
            <Link to='/'>Home</Link>
          </li>
          <li className='hover:underline'>
            <Link to='/generator'>QRCode Generator</Link>
          </li> */}
        </ul>
        <div>
          {isDarkMode === 'dark' ? (
            <button
              className='text-4xl text-yellow-700'
              onClick={() => setIsDarkMode('light')}
            >
              <Sun />
            </button>
          ) : (
            <button
              className='text-4xl text-yellow-700'
              onClick={() => setIsDarkMode('dark')}
            >
              <Moon />
            </button>
          )}
        </div>
      </nav>
    </>
  )
}

export default NavBar

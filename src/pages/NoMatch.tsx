import { Link } from 'react-router-dom'

const NoMatch = () => {
  return (
    <main className='flex flex-col items-center justify-center gap-14'>
      <h1 className='text-4xl'>Page Not Found</h1>
      <Link to='/' className='hover:underline'>
        Go back to main page
      </Link>
    </main>
  )
}

export default NoMatch

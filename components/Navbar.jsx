import Link from 'next/link'
import { FaPlus } from 'react-icons/fa'
import Image from 'next/legacy/image'

export default function Navbar () {
  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1 
        }}
      >
        <Image
          src='/image.webp'
          alt='full image'
          quality={100}
          layout='fill'
          objectFit='cover' 
        />
      </div>

      <div
        className='border border-gray-300 p-2 rounded-[50%] inline-block '
        style={{ width: '100px', height: '100px' }}
      >
        <Image src='/profile.jpg' width={100} height={100} alt='profile-pic' />
      </div>

      <div
        style={{ marginTop: '200px' }}
        className='flex justify-between items-center bg-gray-400 px-8 py-3'
      >
        <Link className='text-white font-bold' href={'/'}> Add Task</Link>
        <Link className='bg-gray-200 p-2' href={'/addTopic'}>
          <FaPlus style={{ fontSize: '20px' }} />
        </Link>
      </div>
    </>
  )
}

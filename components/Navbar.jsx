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

      <div className='flex items-center justify-center'>
        <div className='border border-gray-300 p-2 rounded-full overflow-hidden'>
          <Image
            src='/profile.jpg'
            width={100}
            height={100}
            alt='profile-pic'
            className='rounded-full'
          />
        </div>
      </div>

      <div
        style={{ marginTop: '100px' }}
        className='flex justify-between items-center text-center border-red-200 isolate w-100 rounded-xl bg-white shadow-lg ring-1 p-5'
      >
        <Link className='text-black font-bold ' href={'/'}>
          {' '}
          Add New Task
        </Link>
        <Link className='bg-gray-200 p-2' href={'/addTopic'}>
          <FaPlus style={{ fontSize: '20px' }} />
        </Link>
      </div>
    </>
  )
}

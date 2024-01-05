import Link from 'next/link'
import RemoveBtn from './RemoveBtn'
import { HiPencilAlt } from 'react-icons/hi'

const getTopics = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/topics', {
      cache: 'no-store'
    })

    if (!res.ok) {
      throw new Error('Failed to fetch topics')
    }

    const data = await res.json()
    return data
  } catch (error) {
    console.log('Error loading topics: ', error)
  }
}

export default async function TopicsList () {
  const { topics = [] } = await getTopics()

  return (
    <>
      {topics.length === 0 ? (
        <div className='flex items-center justify-center'>
          <p className='text-center border-red-200 isolate w-96 rounded-xl bg-white shadow-lg ring-1 p-5'>
            No tasks today!
          </p>
        </div>
      ) : (
        topics.map(t => (
          <div
            key={t._id}
            className='p-4 border bg-gray-200 border-slate-300 my-3 flex justify-between gap-5 items-start'
          >
            {
              <div>
                <h2 className='font-bold text-2xl'>{t.title}</h2>
                <div>{t.description}</div>
                <p className='text-gray-500 ml-4'>
                  Created at:{' '}
                  {t.createdAt
                    ? new Date(t.createdAt * 1000).toLocaleString()
                    : 'N/A'}
                </p>
              </div>
            }

            <div className='flex gap-2'>
              <RemoveBtn id={t._id} />
              <Link href={`/editTopic/${t._id}`}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
        ))
      )}
    </>
  )
}

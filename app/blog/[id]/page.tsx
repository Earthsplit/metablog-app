import { data } from '@/data'
import Image from 'next/image'
import { FC } from 'react'

interface PageProps {
  params: { id: string }
}

const ArticlePage: FC<PageProps> = ({ params }) => {
  const id = parseInt(params.id, 10)
  const blog = data[id - 1]

  if (!blog) {
    return <div className='px-12'>Article not found</div>
  }

  return (
    <section className='m-auto flex w-4/5 flex-col gap-8 xl:w-8/12'>
      <div className='m-auto flex flex-col items-start gap-5'>
        <div className='rounded-[6px] bg-[#4B6BFB] px-[12px] py-[6px] text-white'>
          {blog.tag}
        </div>
        <div className='text-4xl font-bold text-[#181A2A]'>{blog.title}</div>
        <div className='flex items-center gap-2'>
          <Image
            src='/pfp.png'
            alt='logo'
            width={36}
            height={36}
            className='rounded-full'
          />
          <div className='flex gap-6'>
            <p className='text-[#97989F]'>{blog.author}</p>
            <p className='text-[#97989F]'>{blog.date}</p>
          </div>
        </div>
      </div>
      <div className='relative h-[300px] w-full object-cover lg:h-[460px]'>
        <Image
          src={blog.img}
          alt='post'
          fill
          className='h-full rounded-[12px] object-cover'
          priority
        />
      </div>
      <div className='mb-20 flex flex-col gap-4 whitespace-pre-line text-xl'>
        {blog.content}
      </div>
    </section>
  )
}

export default ArticlePage

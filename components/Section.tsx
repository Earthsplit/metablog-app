import Image from 'next/image'
import { DataProps } from '@/data'
import Link from 'next/link'

interface SectionProps {
  data: DataProps
}

const Section: React.FC<SectionProps> = ({ data }) => {
  return (
    <div className='flex flex-col-reverse md:flex-col'>
      <div className='relative object-cover'>
        <Link href={`/blog/${data.id}`}>
          <Image
            src={data.img}
            alt='post'
            width={1200}
            height={600}
            className='rounded-[12px]'
            priority
          />
        </Link>
      </div>
      <div className='flex w-full flex-col items-start gap-2 rounded-[12px] bg-white pb-4 md:absolute md:bottom-[15%] md:left-[5%] md:w-[40%] md:gap-6 md:border md:p-8 md:shadow-md xl:p-10'>
        <div className='rounded-[6px] bg-[#4B6BFB] px-[10px] py-[4px] text-white'>
          {data.tag}
        </div>
        <div className='cursor-pointer text-xl font-bold text-[#181A2A] hover:underline md:text-2xl xl:text-4xl'>
          <Link href={`/blog/${data.id}`}>{data.title}</Link>
        </div>
        <div className='flex items-center gap-2'>
          <Image
            src='/pfp.png'
            alt='logo'
            width={36}
            height={36}
            className='rounded-full'
          />
          <p className='text-[#97989F]'>{data.author}</p>
          <p className='text-[#97989F]'>{data.date}</p>
        </div>
      </div>
    </div>
  )
}

export default Section

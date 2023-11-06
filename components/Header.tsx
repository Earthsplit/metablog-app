import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='m-auto flex flex-row items-center justify-center p-4 lg:w-full xl:px-12'>
      <Link href='/'>
        <Image src='/logo.png' alt='logo' height={36} width={158} />
      </Link>
    </header>
  )
}

export default Header

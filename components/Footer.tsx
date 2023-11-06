const Footer = () => {
  return (
    <div className='bg-[#F6F6F7]'>
      <div className='m-auto flex justify-between p-[1.6rem] lg:w-[70%]'>
        <div className='flex w-[45%] flex-col gap-4'>
          <h1 className='font-bold'>About</h1>
          <p className='whitespace-pre-line'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <div className='flex flex-col gap-1'>
            <p>Email: test@test.net</p>
            <p>Phone: 808 888 000</p>
          </div>
        </div>
        <div className='flex flex-col'>
          <h1 className='mb-6 font-bold'>Quick Link</h1>
          <div className='flex flex-col gap-2'>
            <p>Home</p>
            <p>About</p>
            <p>Blog</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

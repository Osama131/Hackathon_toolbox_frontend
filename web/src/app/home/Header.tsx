import Image from 'next/image'
import { Card, CardHeader } from '@nextui-org/card'

const Header = () => {
  return (
    <header className='w-full border border-neutral-700'>
      <Card radius="none" className="w-full flex md:px-10 md:py-5 ">
        <CardHeader className='flex gap-5'>
            <Image
                src="/icons/developer_female.svg"
                alt="Female Developer Illustration"
                width={0}
                height={0}
                className='w-1/5 md:w-auto h-auto md:h-full dark:invert'
            />
            <h1 className="text-5xl md:text-8xl lg:grow text-center font-courtside uppercase">Hackathon Edition</h1>
            <Image
                src="/icons/developer_male.svg"
                alt="Male Developer Illustration"
                width={0}
                height={0}
                className='w-1/5 md:w-auto h-auto md:h-full dark:invert'
            />
        </CardHeader>
    </Card>
  </header>
  )
}

export default Header

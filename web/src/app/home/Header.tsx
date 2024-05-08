import Image from 'next/image'
import { Card, CardHeader } from '@nextui-org/card'

const Header = () => {
  return (
    <header className='w-full border border-neutral-700 flex items-center justify-center'>
      <Card radius="none" className="w-full flex sm:px-40 md:px-40 md:py-5 bg-opacity-80 items-center justify-center">
        <CardHeader className='flex gap-5 items-center justify-center'>
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-center font-courtside uppercase">Hackathon Edition</h1>
        </CardHeader>
    </Card>
  </header>
  )
}

export default Header

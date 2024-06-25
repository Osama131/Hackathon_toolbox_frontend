import { Card, CardHeader } from '@nextui-org/card'

const Header = () => {
  return (
    <header className='w-full border-4 border-[#C04C12]'>
      <Card radius="none" className="w-full flex py-5 bg-opacity-80">
        <CardHeader className='justify-center'>
          <h1 className="text-5xl sm:text-8xl lg:text-9xl text-center font-courtside uppercase">Hack Beyond the Code</h1>
        </CardHeader>
      </Card>
    </header>
  )
}

export default Header

import Image from 'next/image'
import { Card, CardHeader, CardBody } from '@nextui-org/card'

const Description = () => {
  return (
    <section className='description w-full gap-3'>
        <Card radius="none" className="border border-neutral-700 grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <CardBody className='col-span-6 md:col-span-4'>

        {/* </Card> */}
        {/* <Card radius="none" className='grow lg:grow-0 border border-neutral-700'> */}
          <Image
            src='/icons/qr-code.svg'
            alt='QR Code'
            width={0}
            height={0}
            className='object-cover p-8 pb-0 md:p-0 w-full'
            />
            </CardBody>
          <CardHeader className='flex flex-col justify-center p-10 pt-0 md:pt-10 col-span-6 md:col-span-8'>
            <h1 className='w-full font-courtside text-3xl md:text-5xl uppercase text-center'>What will we be doing?</h1>
            <p className='font-the-hand text-center text-xl md:text-4xl'>
              We will work in groups to collaborate on a chapter for the DE-TEL Book.
            </p>
          </CardHeader>
        </Card>
      </section>
  )
}

export default Description

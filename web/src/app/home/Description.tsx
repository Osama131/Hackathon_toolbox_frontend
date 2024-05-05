import Image from 'next/image'
import { Card, CardHeader } from '@nextui-org/card'

const Description = () => {
  return (
    <section className='description flex w-full justify-stretch gap-3'>
        <Card radius="none" className="grow border border-neutral-700">
          <CardHeader className='flex flex-col h-full justify-center p-10'>
            <h1 className='w-full font-courtside text-5xl uppercase text-center'>What will we be doing?</h1>
            <p className='font-the-hand text-center text-4xl'>
              We will work in groups to collaborate on a chapter for the DE-TEL Book.
            </p>
          </CardHeader>
        </Card>
        <Card radius="none" className='border border-neutral-700'>
          <Image
            src='/icons/qr-code.svg'
            alt='QR Code'
            width={0}
            height={0}
            className='w-auto h-full'
          />
        </Card>
      </section>
  )
}

export default Description

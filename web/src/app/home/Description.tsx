import Image from 'next/image'
import { Card, CardHeader, CardBody } from '@nextui-org/card'

const Description = () => {
  return (
    <section className='w-full'>
      <Card radius="none" className="border border-[#C04C12] grid gap-6 mt-0 items-center justify-center bg-opacity-40 flex flex-col justify-between">
        <CardHeader className='flex flex-row items-center'>
          <Image
            src={`${process.env.BASE_PATH}/developer_female.svg`}
            alt="Female Developer Illustration"
            width={0}
            height={0}
            className='w-1/5 md:w-auto h-auto md:h-full dark:invert'
          />
          <h1 className='w-full font-courtside text-3xl md:text-5xl uppercase text-center'>
            What will we be doing?
          </h1>
          <Image
            src={`${process.env.BASE_PATH}/developer_male.svg`}
            alt="Male Developer Illustration"
            width={0}
            height={0}
            className='w-1/5 md:w-auto h-auto md:h-full dark:invert'
          />
        </CardHeader>
        <CardBody className='flex items-center justify-center'>

          <p className='font-the-hand text-center text-xl md:text-4xl text-center mx-10'>
            We will work in groups to collaborate on Building a Toolbox of Human-Centred Strategies for AI Literacy
          </p>

        </CardBody>
      </Card>
    </section>
  )
}

export default Description

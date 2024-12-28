import Image from 'next/image'
import hero from './hero.png'
export default function Home() {
  return (
   <div className='flex items-center gap-28'>
    <div className='flex flex-1 flex-col gap-12'>
      <h1 className='text-7xl bg-gradient-to-bl from-green-600 to-white bg-clip-text text-transparent'>Better Desgin for tour digital products.</h1>
      <p className='text-white text-lg'>Turing your idea into reality we bring together the teams from the global tech industry. </p>
      <button className='p-5 cursor-pointer bg-green-500 border-none border-r-4 text-white w-max font-bold'>See Our Works</button>
    </div>
    <div>
    <Image width={600} height={500} src={hero}></Image>
    </div>
   </div>
  )
}

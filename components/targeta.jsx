import Image from 'next/image'
import vegetal from '../public/vegetal.jpg'
export function Targeta () {
  return <div className='p-3'>
    <div className='shadow-lg bg-gradient-to-tl
     p-2 rounded-2xl border-opacity-40 from-primario2
     to-primario'>
      {/* <img className='w-full aspect-video object-top object-cover
       border-primario border-2 rounded-2xl' src='https://avatars.githubusercontent.com/u/73801451?v=4'></img> */}
      <Image style={{borderWidth :2}} className='w-full aspect-video object-top object-cover
       border-primario border-2 rounded-2xl' src={vegetal} alt='tu puta madre'/>
      <div className='px-2'>
        <p className='text-primario3 capitalize font-semibold text-lg pt-2'>hola que</p>

        <div className='flex justify-between pt-2'>
          <p className='text-textcolor capitalize font-medium'>$45</p>
          <p className='text-primario2 bg-primario rounded-full px-2'>dasda</p>
        </div>
      </div>
    </div>
  </div>
}
import Head from 'next/head'
import { Targeta } from '../components/targeta'

export default function Home () {

  return (
    <div className='bg-textcolor w-full p-4 text-textcolor font-mono'>
      <Head>
        <title>mercado mayorista fake </title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='w-full flex justify-center'>
        <h1 className='text-2xl font-extrabold from-primario via-primario2 to-primario2
        bg-gradient-to-r bg-clip-text inline-block
        uppercase my-6 text-transparent'>hola este es el mercado {variable.jeje}</h1>
      </div>
      <div className='jeje cuates de mierda jjo'></div>
      <div className='grid grid-cols-2'>
        <Targeta/>
        <Targeta/>
        <Targeta/>
        <Targeta/>
        <Targeta/>
        <Targeta/>
        <Targeta/>
        <Targeta/>
        <Targeta/>
      </div>

    </div>
  )
}

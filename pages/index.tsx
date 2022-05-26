import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Widgets from '../components/Widgets';

const Home: NextPage = () => {
  return (

<div className='lg:max-w-6xl mx-auto'>
  <main className='grid  grid-cols-9'>
<Sidebar/>

<Feed/>

<Widgets/>
</main>

</div>

  )
}

export default Home

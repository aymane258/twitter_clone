import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'
import { fetchTweets } from '../utils/fetchTweets'
import { Tweet } from '../typings'

interface Props {
  tweets: Tweet[]
}

const Home: NextPage<Props> = ({tweets}:Props) => {
  console.log(tweets)
  return (
    <div className="mx-auto max-h-screen overflow-hidden lg:max-w-6xl">
      <main className="grid  grid-cols-9">
        <Sidebar />

        <Feed />

        <Widgets />
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = await fetchTweets()

  return {
    props: {
      tweets
    }
  }

}
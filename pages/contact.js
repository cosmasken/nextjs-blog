import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
export default function Home({ allPostsData }) {
    return (
        <Head>
        <title>{siteTitle}</title>
      </Head>
    )}
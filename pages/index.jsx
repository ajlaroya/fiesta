import Head from 'next/head'
import { Inter } from "@next/font/google";
import Header from '../components/Header';
import Banner from '@/components/Banner';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={inter.className}>
      <Head>
        <title>Fiesta</title>
      </Head>
      
      <Header />
      <Banner />

      <main>

      </main>
    </div>
  );
}

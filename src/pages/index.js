import Head from 'next/head';
import Nav from 'sections/Nav';
import Hero from 'sections/Hero';
import Challenges from 'sections/Challenges';
import Results from 'sections/Results';
import Advices from 'sections/Advices';
import Gallery from 'sections/Gallery';
import Footer from 'sections/Footer';

import NavData from 'data/NavData';
import HeroData from 'data/HeroData';
import ChallengesData from 'data/ChallengesData';
import ResultsData from 'data/ResultsData';
import AdviceData from 'data/AdviceData';
import GalleryData from 'data/GalleryData';
import FooterData from 'data/FooterData';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Survival App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav nav={NavData} />
      <Hero heros={HeroData} />
      <Challenges challenge={ChallengesData} />
      <Results results={ResultsData} />
      <Advices advice={AdviceData} />
      <Gallery galleries={GalleryData} />
      <Footer footers={FooterData} />
    </div>
  )
}

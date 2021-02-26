import { CompleteChallenges } from '../components/CompleteChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import styles from "../styles/pages/Home.module.css";
import Head from 'next/head'
import { ChallengeBox } from '../components/ChallengeBox';
import { CountdownProvider } from '../contexts/CountDownContext';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it </title>
      </Head>
      <ExperienceBar />
      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompleteChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  )
}

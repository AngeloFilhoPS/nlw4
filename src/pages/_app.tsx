import '../styles/global.css'
import { ChallengeProvider } from '../contexts/ChallengeContext';
import { CountdownProvider } from '../contexts/CountDownContext';

function MyApp({ Component, pageProps }) {

  return (
    <Component {...pageProps} />
  )
}

export default MyApp

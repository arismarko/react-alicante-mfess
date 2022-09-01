import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic';

const RemoteItems = dynamic(
  () => {
    return import('itemcatalogue/home');
  },
  { ssr: false },
);

export default function Home() {

  return (
    <div className={styles.container}>
      home
      <RemoteItems  />
    </div>
  )
}



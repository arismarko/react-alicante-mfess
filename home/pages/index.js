import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic';

const RemoteItems = dynamic(
  () => {
    return import('itemcatalogue/home');
  },
);

export default function Home() {


  return (
    <div className={styles.container}>
      home
      <RemoteItems  />
    </div>
  )
}



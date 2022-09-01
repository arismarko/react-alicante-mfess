import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic';

const RemoteItems = dynamic(
  () => {
    return import('itemcatalogue/home');
  }
);

export default function Home() {

  return (
    <div className={styles.container}>
      home
      <RemoteItems  />
    </div>
  )
}


// import dynamic from "next/dynamic";
// const Page = dynamic(() => import("itemcatalogue/home"));
// Page.getInitialProps = async (ctx) => {
//   const page = import("itemcatalogue/home");
//   const getInitialProps = (await page).default?.getInitialProps;
//   if (getInitialProps) {
//     return getInitialProps(ctx);
//   }
//   return {};
// };
// export default Page;


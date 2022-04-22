import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({props}) {

  console.log("props", props[0].acf.title)
  return (
    <div className={styles.container}>
        <h1>{props[0].acf.title}</h1>
    </div>
  )
}

export async function getServerSideProps() {

  const res = await fetch(`https://jay-resume-test.000webhostapp.com//wp-json/wp/v2/pages`);
  console.log("res", res)
  let props = await res.json()



  return {
    props: {
      props
    },
  };
}


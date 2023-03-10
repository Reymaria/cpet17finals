
import Head from 'next/head'
import styles from '@/styles/5G.module.css'
import Link from 'next/link'

function Home() {
  return (
    <>
      <Head>
        <title>5G Finals Examination</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.navbarcontainer}>
          <div className={styles.navbar}>
            <Link href= "/" className={styles.navbarcontent}>Team 5G</Link>
            <Link href="/signin" className={styles.navbarcontent}>Sign In</Link>
            <Link href= "/signup" className={styles.navbarcontent}>SignUp</Link>
          </div>
        </div>
        <div className={styles.contentbody}>
          <div className= {styles.top} >
            CPET 17 LECTURE and LAB
          </div>
          <div className= {styles.low} >
            <div className= {styles.left} >
              <div className={styles.leftmain} >The Team</div>
              <div className={styles.leftdetails} >Brechy Rosales</div>
              <div className={styles.leftdetails} >Ella Mae Cortes</div>
              <div className={styles.leftdetails} >Ivan Hayz Gonzales</div>
              <div className={styles.leftdetails} >Hannah Merl Torres</div>
              <div className={styles.leftdetails} >Marie Florence Visperas</div>
              <div className={styles.leftdetails} >Rheigne Marrie Sandagan</div>
            </div>
            <div className= {styles.right} >
              <div className= {styles.rightmain} >Finals</div>
              <div className= {styles.rightmain} >Examination</div>
              <div className= {styles.rightmain} >Website</div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
export default Home